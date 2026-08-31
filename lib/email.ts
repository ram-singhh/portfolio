import { siteConfig } from "./config";

export interface ProjectInquiryData {
  name: string;
  email: string;
  projectType: string;
  description: string;
  company?: string;
  existingWebsite?: string;
  referenceUrl?: string;
  budget?: string;
  timeline?: string;
}

/**
 * Escapes special HTML characters to prevent HTML/XSS injection.
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Validates a string to ensure it is a proper URL format.
 */
export function isValidUrl(str: string): boolean {
  if (!str || str.trim() === "") return true;
  try {
    const url = new URL(str.startsWith("http://") || str.startsWith("https://") ? str : `https://${str}`);
    // Check for standard hostname patterns
    return (
      (url.protocol === "http:" || url.protocol === "https:") &&
      url.hostname.includes(".") &&
      url.hostname.length > 3
    );
  } catch (_) {
    return false;
  }
}

/**
 * Formats process.env.CONTACT_SENDER into a valid Resend "from" address format:
 * "Name <email@example.com>" or "email@example.com".
 * Prevents invalid double angle-bracket nesting like "Ram Singh Briefs <Ram Singh <email>>".
 */
export function formatSenderAddress(rawSender: string): string {
  const trimmed = (rawSender || "").trim();
  if (!trimmed) {
    return "Ram Singh <onboarding@resend.dev>";
  }

  // 1. Check if rawSender is already in "Name <email@domain.com>" or "<email@domain.com>" format
  const angleMatch = trimmed.match(/^(?:["']?([^<"']+)["']?\s*)?<([^>]+)>$/);
  if (angleMatch) {
    const [, extractedName, extractedEmail] = angleMatch;
    const cleanEmail = extractedEmail.trim();
    const cleanName = extractedName ? extractedName.trim() : "";
    if (cleanName) {
      return `${cleanName} <${cleanEmail}>`;
    }
    return `Ram Singh <${cleanEmail}>`;
  }

  // 2. Check if rawSender is a plain email address without angle brackets
  if (trimmed.includes("@") && !trimmed.includes("<") && !trimmed.includes(">")) {
    const cleanEmail = trimmed.replace(/["']/g, "").trim();
    return `Ram Singh <${cleanEmail}>`;
  }

  // 3. Fallback to rawSender if unrecognized
  return trimmed;
}

/**
 * Sends a project inquiry email notification via the Resend API.
 */
export async function sendProjectInquiryEmail(
  data: ProjectInquiryData
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const destinationEmail = process.env.CONTACT_EMAIL || "hello@ramsingh.dev";
  // Resend default onboarding sender
  const senderEmail = process.env.CONTACT_SENDER || "onboarding@resend.dev";
  const fromAddress = formatSenderAddress(senderEmail);

  if (!apiKey) {
    console.error("Email service error: RESEND_API_KEY environment variable is not configured.");
    return {
      success: false,
      error: "Email service is currently unconfigured. Please check environment configuration.",
    };
  }

  // Safe diagnostic logging (reveals ONLY configuration status and sanitized sender format/domain - NO secrets or credentials)
  console.log("[Email Service] Configuration status:", {
    apiKeyConfigured: true,
    destinationConfigured: Boolean(process.env.CONTACT_EMAIL),
    senderFormat: fromAddress.replace(/<[^@]+@/, "<***@"),
  });

  // Construct structured, readable HTML content
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
      <h2 style="color: #9e1f1f; border-bottom: 2px solid #9e1f1f; padding-bottom: 8px; margin-top: 0;">New Project Brief Inquiry</h2>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 6px 0; font-weight: bold; width: 150px; border-bottom: 1px solid #eee;">Client Name:</td>
          <td style="padding: 6px 0; border-bottom: 1px solid #eee;">${escapeHtml(data.name)}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; border-bottom: 1px solid #eee;">Email Address:</td>
          <td style="padding: 6px 0; border-bottom: 1px solid #eee;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; border-bottom: 1px solid #eee;">Company / Brand:</td>
          <td style="padding: 6px 0; border-bottom: 1px solid #eee;">${data.company ? escapeHtml(data.company) : "<em>N/A</em>"}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; border-bottom: 1px solid #eee;">Project Type:</td>
          <td style="padding: 6px 0; border-bottom: 1px solid #eee;">${escapeHtml(data.projectType)}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; border-bottom: 1px solid #eee;">Existing Website:</td>
          <td style="padding: 6px 0; border-bottom: 1px solid #eee;">
            ${
              data.existingWebsite
                ? `<a href="${escapeHtml(data.existingWebsite)}" target="_blank" rel="noopener noreferrer">${escapeHtml(data.existingWebsite)}</a>`
                : "<em>N/A</em>"
            }
          </td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; border-bottom: 1px solid #eee;">Reference URL:</td>
          <td style="padding: 6px 0; border-bottom: 1px solid #eee;">
            ${
              data.referenceUrl
                ? `<a href="${escapeHtml(data.referenceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(data.referenceUrl)}</a>`
                : "<em>N/A</em>"
            }
          </td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; border-bottom: 1px solid #eee;">Budget Range:</td>
          <td style="padding: 6px 0; border-bottom: 1px solid #eee;">${data.budget ? escapeHtml(data.budget) : "<em>N/A</em>"}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; border-bottom: 1px solid #eee;">Timeline Preference:</td>
          <td style="padding: 6px 0; border-bottom: 1px solid #eee;">${data.timeline ? escapeHtml(data.timeline) : "<em>N/A</em>"}</td>
        </tr>
      </table>

      <h3 style="color: #333; margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 4px;">Project Description &amp; Scope:</h3>
      <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 12px; border-left: 4px solid #1b3d6d; border-radius: 4px; margin: 10px 0;">${escapeHtml(
        data.description
      )}</p>
      
      <p style="font-size: 0.8rem; color: #888; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 10px;">
        Sent automatically from the portfolio inquiry system at ${siteConfig.url}.
      </p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: destinationEmail,
        subject: `New Project Inquiry from ${data.name}`,
        reply_to: data.email,
        replyTo: data.email,
        html: emailHtml,
      }),
    });

    if (response.ok) {
      return { success: true };
    }

    const errorDetails = await response.json().catch(() => ({}));
    console.error("Resend API rejected the request:", errorDetails);
    return {
      success: false,
      error: errorDetails.message || "Failed to deliver inquiry email via Resend.",
    };
  } catch (err: any) {
    console.error("Network or execution error sending email:", err);
    return {
      success: false,
      error: "A connection error occurred while contacting the email delivery provider.",
    };
  }
}
