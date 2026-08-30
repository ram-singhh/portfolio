import { NextResponse } from "next/server";
import { sendProjectInquiryEmail, isValidUrl } from "@/lib/email";

// In-memory rate limiting map
const ipCache = new Map<string, number[]>();

/**
 * Sliding window IP rate limiter.
 * Limits submissions to 3 requests per 5 minutes per IP address.
 */
function isRateLimited(ip: string, limit = 3, windowMs = 300000): boolean {
  const now = Date.now();
  const timestamps = ipCache.get(ip) || [];
  
  // Filter out timestamps outside the sliding window
  const activeTimestamps = timestamps.filter((ts) => now - ts < windowMs);
  
  if (activeTimestamps.length >= limit) {
    return true;
  }
  
  activeTimestamps.push(now);
  ipCache.set(ip, activeTimestamps);
  return false;
}

/**
 * Prefixes URLs with https:// if they do not have a protocol scheme.
 */
function normalizeUrl(url: string): string {
  if (!url) return "";
  const trimmed = url.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export async function POST(request: Request) {
  try {
    // 1. Content-Length payload protection (max 15KB)
    const contentLengthHeader = request.headers.get("content-length");
    const contentLength = contentLengthHeader ? parseInt(contentLengthHeader, 10) : 0;
    if (contentLength > 15360) {
      return NextResponse.json(
        { error: "Payload limit exceeded. Brief content is too large." },
        { status: 413 }
      );
    }

    // 2. Parse JSON body safely
    let body;
    try {
      body = await request.json();
    } catch (_) {
      return NextResponse.json(
        { error: "Malformed payload format. Please send proper JSON data." },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      projectType,
      description,
      company,
      existingWebsite,
      referenceUrl,
      budget,
      timeline,
      website_honey, // Honeypot field name
    } = body;

    // 3. Honeypot anti-spam check (must be empty)
    if (website_honey) {
      console.warn("Spam honeypot triggered. Aborting email submission.");
      // Return a fake successful code to drop spam bot attempts silently
      return NextResponse.json({ success: true, message: "Project brief received." });
    }

    // 4. Rate Limiting Check
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "127.0.0.1";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many project inquiries submitted. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    // 5. Clean inputs
    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim() : "";
    const cleanProjectType = typeof projectType === "string" ? projectType.trim() : "";
    const cleanDescription = typeof description === "string" ? description.trim() : "";
    const cleanCompany = typeof company === "string" ? company.trim() : "";
    const cleanExistingWebsite = typeof existingWebsite === "string" ? existingWebsite.trim() : "";
    const cleanReferenceUrl = typeof referenceUrl === "string" ? referenceUrl.trim() : "";
    const cleanBudget = typeof budget === "string" ? budget.trim() : "";
    const cleanTimeline = typeof timeline === "string" ? timeline.trim() : "";

    // 6. Strict server-side validation
    // Required fields: Name
    if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        { error: "Name is required and must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    // Required fields: Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail) || cleanEmail.length > 150) {
      return NextResponse.json(
        { error: "Please enter a valid, active email address." },
        { status: 400 }
      );
    }

    // Required fields: Project Type
    const validProjectTypes = ["New Website", "Website Redesign", "Landing Page", "Frontend Development", "Web Application", "Other"];
    if (!cleanProjectType || !validProjectTypes.includes(cleanProjectType)) {
      return NextResponse.json(
        { error: "Please select a valid project type from the available options." },
        { status: 400 }
      );
    }

    // Required fields: Description
    if (!cleanDescription || cleanDescription.length < 10 || cleanDescription.length > 5000) {
      return NextResponse.json(
        { error: "Project description is required and must be between 10 and 5000 characters." },
        { status: 400 }
      );
    }

    // Optional fields: Company / Brand
    if (cleanCompany && cleanCompany.length > 150) {
      return NextResponse.json(
        { error: "Company name must not exceed 150 characters." },
        { status: 400 }
      );
    }

    // Optional fields: URLs format validation
    if (cleanExistingWebsite && (!isValidUrl(cleanExistingWebsite) || cleanExistingWebsite.length > 300)) {
      return NextResponse.json(
        { error: "The existing website URL format is invalid." },
        { status: 400 }
      );
    }
    if (cleanReferenceUrl && (!isValidUrl(cleanReferenceUrl) || cleanReferenceUrl.length > 300)) {
      return NextResponse.json(
        { error: "The reference website URL format is invalid." },
        { status: 400 }
      );
    }

    // Optional fields: Budget
    const validBudgets = ["Not sure yet", "I'll discuss it", "Other", ""];
    if (cleanBudget && !validBudgets.includes(cleanBudget)) {
      return NextResponse.json(
        { error: "The selected budget option is invalid." },
        { status: 400 }
      );
    }

    // Optional fields: Timeline
    const validTimelines = ["As soon as possible", "Within 2–4 weeks", "Within 1–2 months", "Flexible", "Not sure yet", ""];
    if (cleanTimeline && !validTimelines.includes(cleanTimeline)) {
      return NextResponse.json(
        { error: "The selected timeline option is invalid." },
        { status: 400 }
      );
    }

    // 7. Dispatch sanitized and normalized payload to Email Provider
    const result = await sendProjectInquiryEmail({
      name: cleanName,
      email: cleanEmail,
      projectType: cleanProjectType,
      description: cleanDescription,
      company: cleanCompany || undefined,
      existingWebsite: cleanExistingWebsite ? normalizeUrl(cleanExistingWebsite) : undefined,
      referenceUrl: cleanReferenceUrl ? normalizeUrl(cleanReferenceUrl) : undefined,
      budget: cleanBudget || undefined,
      timeline: cleanTimeline || undefined,
    });

    if (result.success) {
      return NextResponse.json({ success: true, message: "Project brief sent successfully." });
    }

    // Fail gracefully with a client-safe response
    return NextResponse.json(
      { error: result.error || "Failed to process project brief email." },
      { status: 500 }
    );
  } catch (err: any) {
    console.error("Unhandled error in contact API route:", err);
    return NextResponse.json(
      { error: "A server error occurred. Please contact via direct methods if issues persist." },
      { status: 500 }
    );
  }
}
