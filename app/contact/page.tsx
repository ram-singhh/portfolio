"use client";

import React, { useState } from "react";
import Link from "next/link";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [existingWebsite, setExistingWebsite] = useState("");
  const [referenceUrl, setReferenceUrl] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [description, setDescription] = useState("");
  const [websiteHoney, setWebsiteHoney] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Client-side validations
  const validateField = (field: string, value: string) => {
    let err = "";
    if (field === "name") {
      if (!value.trim()) err = "Name is required.";
      else if (value.trim().length < 2) err = "Name must be at least 2 characters.";
      else if (value.length > 100) err = "Name must not exceed 100 characters.";
    }
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) err = "Email is required.";
      else if (!emailRegex.test(value.trim())) err = "Please enter a valid email address.";
      else if (value.length > 150) err = "Email must not exceed 150 characters.";
    }
    if (field === "projectType") {
      if (!value) err = "Please select a project type.";
    }
    if (field === "description") {
      if (!value.trim()) err = "Project description is required.";
      else if (value.trim().length < 10) err = "Description must be at least 10 characters.";
      else if (value.length > 5000) err = "Description must not exceed 5000 characters.";
    }
    if (field === "company") {
      if (value.length > 150) err = "Company name must not exceed 150 characters.";
    }
    
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/i;
    if (field === "existingWebsite" && value.trim()) {
      if (!urlRegex.test(value.trim())) err = "Please enter a valid website URL.";
      else if (value.length > 300) err = "URL must not exceed 300 characters.";
    }
    if (field === "referenceUrl" && value.trim()) {
      if (!urlRegex.test(value.trim())) err = "Please enter a valid URL.";
      else if (value.length > 300) err = "URL must not exceed 300 characters.";
    }

    return err;
  };

  const handleBlur = (field: string, value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleChange = (field: string, value: string) => {
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "company") setCompany(value);
    if (field === "projectType") setProjectType(value);
    if (field === "existingWebsite") setExistingWebsite(value);
    if (field === "referenceUrl") setReferenceUrl(value);
    if (field === "budget") setBudget(value);
    if (field === "timeline") setTimeline(value);
    if (field === "description") setDescription(value);
    if (field === "websiteHoney") setWebsiteHoney(value);

    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Touch all required and validated fields
    const allTouched = {
      name: true,
      email: true,
      projectType: true,
      description: true,
      company: true,
      existingWebsite: true,
      referenceUrl: true,
    };
    setTouched(allTouched);

    // Run validation across all fields
    const formErrors: { [key: string]: string } = {};
    const fieldsToValidate = ["name", "email", "projectType", "description", "company", "existingWebsite", "referenceUrl"];
    fieldsToValidate.forEach((field) => {
      const val =
        field === "name" ? name :
        field === "email" ? email :
        field === "projectType" ? projectType :
        field === "description" ? description :
        field === "company" ? company :
        field === "existingWebsite" ? existingWebsite :
        referenceUrl;
      const err = validateField(field, val);
      if (err) {
        formErrors[field] = err;
      }
    });

    setErrors(formErrors);

    const errorKeys = Object.keys(formErrors);
    if (errorKeys.length > 0) {
      // Focus first error field
      const firstErrorField = errorKeys[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          description,
          company,
          existingWebsite,
          referenceUrl,
          budget,
          timeline,
          website_honey: websiteHoney,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setSubmitError(data.error || "An error occurred on the server. Please check your inputs and try again.");
      }
    } catch (err) {
      setSubmitError("Failed to deliver your brief. Please verify your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reusable input styling for papers (dark text ink, border on light sheets)
  const fieldStyle = (field: string) => ({
    width: "100%",
    padding: "0.75rem",
    background: "rgba(255, 255, 255, 0.85)",
    border: `1px solid ${touched[field] && errors[field] ? "#b91c1c" : "rgba(0, 0, 0, 0.15)"}`,
    borderRadius: "4px",
    color: "var(--text-dark)",
    fontFamily: "var(--font-primary)",
    fontSize: "0.95rem",
    outline: "none",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
  });

  const labelStyle = {
    display: "block",
    marginBottom: "0.4rem",
    color: "var(--color-ink-blue)",
    fontFamily: "var(--font-mono)",
    fontSize: "0.85rem",
    fontWeight: 700,
    textTransform: "uppercase" as const,
  };

  const groupStyle = {
    marginBottom: "1.5rem",
  };

  const errorTextStyle = {
    color: "#b91c1c",
    fontSize: "0.8rem",
    marginTop: "0.25rem",
    fontFamily: "var(--font-mono)",
  };

  return (
    <main id="main-content" tabIndex={-1} className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "8rem" }}>
      {/* Wood Desk surface */}
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", maxWidth: "720px" }}>
        
        {/* If successfully submitted project brief, show Success Paper block */}
        {isSubmitted ? (
          <div style={{ transform: "rotate(-0.5deg)", marginTop: "2rem" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <Tape rotation={-2.5} position="top-center" width="110px" />
              
              <div style={{ marginBottom: "1.5rem" }}>
                <TypewriterLabel variant="dymo" rotation={1.5}>
                  REQUEST RECEIVED
                </TypewriterLabel>
              </div>

              <h1 style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "2rem", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "1rem" 
              }}>
                Your project brief is on its way.
              </h1>

              <p style={{ 
                fontFamily: "var(--font-primary)", 
                fontSize: "1rem", 
                lineHeight: "1.6", 
                color: "#333", 
                maxWidth: "480px", 
                margin: "0 auto 2.5rem auto" 
              }}>
                I will review your project parameters, tech stack considerations, and goals, and I'll get back to you at the email address provided.
              </p>

              <div style={{ margin: "2rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1}>
                  talk to you soon
                </HandwrittenNote>
              </div>

              <div style={{ marginTop: "2.5rem" }}>
                <Link href="/" className="tactile-btn tactile-btn-primary" aria-label="Return to home page">
                  [ BACK TO HOME ]
                </Link>
              </div>
            </Paper>
          </div>
        ) : (
          /* Main Project Brief Form */
          <>
            {/* Title / Description Card */}
            <section style={{ marginBottom: "2.5rem", transform: "rotate(-1deg)" }}>
              <Paper variant="craft" rotation={0} padding="large" style={{ position: "relative" }}>
                <Tape rotation={1.5} position="top-left" width="95px" />
                <div style={{ marginBottom: "0.75rem" }}>
                  <TypewriterLabel variant="dymo" rotation={-1}>
                    INQUIRY // PROJECT BRIEF
                  </TypewriterLabel>
                </div>
                <h1 style={{ 
                  fontFamily: "var(--font-serif)", 
                  fontSize: "clamp(2rem, 5vw, 3rem)", 
                  fontWeight: 700, 
                  fontStyle: "italic", 
                  color: "var(--text-dark)", 
                  margin: "0 0 0.75rem 0",
                  lineHeight: 1.15
                }}>
                  Book a Web Development Project
                </h1>
                <p style={{ fontFamily: "var(--font-primary)", fontSize: "1rem", fontWeight: 500, color: "#1a1816", lineHeight: "1.5", marginBottom: "0.75rem" }}>
                  This is where you tell me what you're building.
                </p>
                <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.9rem", color: "#333", lineHeight: "1.5", margin: 0 }}>
                  Sharing information about your project type, primary goals, existing website link, reference designs, and desired timeline helps me review your brief effectively.
                </p>
                <div style={{ marginTop: "1rem" }}>
                  <HandwrittenNote color="pencil" tilt={-1.5} fontSize="1.05rem">
                    or email directly: hello@ramsingh.dev
                  </HandwrittenNote>
                </div>
              </Paper>
            </section>

            {/* Project Request Brief Form Paper */}
            <section style={{ transform: "rotate(0.5deg)" }}>
              <Paper variant="lined" rotation={0} padding="large" style={{ position: "relative" }}>
                <Tape rotation={-2} position="top-right" width="90px" />

                {/* API Submission Error Banner */}
                {submitError && (
                  <div 
                    role="alert" 
                    aria-live="assertive"
                    style={{ 
                      backgroundColor: "#fef2f2", 
                      border: "1px solid #b91c1c", 
                      padding: "1rem", 
                      borderRadius: "4px", 
                      color: "#b91c1c", 
                      fontFamily: "var(--font-mono)", 
                      fontSize: "0.85rem",
                      marginBottom: "2rem"
                    }}
                  >
                    <strong>Submission Error:</strong> {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate aria-label="Project Brief Inquiry Form">
                  
                  {/* Honeypot Spam Protection Field (Hidden to humans, visible to bots) */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label htmlFor="website_honey">Leave this field blank</label>
                    <input
                      type="text"
                      id="website_honey"
                      name="website_honey"
                      tabIndex={-1}
                      autoComplete="off"
                      value={websiteHoney}
                      onChange={(e) => handleChange("websiteHoney", e.target.value)}
                    />
                  </div>

                  {/* 1. Client Details Section */}
                  <fieldset style={{ border: "none", padding: 0, margin: "0 0 2rem 0" }}>
                    <legend style={{ ...labelStyle, fontSize: "1rem", color: "var(--color-ink-red)", borderBottom: "1px dotted rgba(0,0,0,0.15)", width: "100%", paddingBottom: "0.25rem", marginBottom: "1.25rem" }}>
                      01. Client Details
                    </legend>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", flexWrap: "wrap" }} className="form-grid-2col">
                      <div style={groupStyle}>
                        <label htmlFor="name" style={labelStyle}>
                          Full Name <span aria-label="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          aria-required="true"
                          aria-invalid={touched.name && !!errors.name}
                          aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                          style={fieldStyle("name")}
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onBlur={(e) => handleBlur("name", e.target.value)}
                        />
                        {touched.name && errors.name && (
                          <div id="name-error" style={errorTextStyle} role="alert">
                            {errors.name}
                          </div>
                        )}
                      </div>

                      <div style={groupStyle}>
                        <label htmlFor="email" style={labelStyle}>
                          Email Address <span aria-label="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          aria-required="true"
                          aria-invalid={touched.email && !!errors.email}
                          aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                          style={fieldStyle("email")}
                          placeholder="client@example.com"
                          value={email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          onBlur={(e) => handleBlur("email", e.target.value)}
                        />
                        {touched.email && errors.email && (
                          <div id="email-error" style={errorTextStyle} role="alert">
                            {errors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    <div style={groupStyle}>
                      <label htmlFor="company" style={labelStyle}>
                        Company / Brand Name <span style={{ textTransform: "lowercase", fontWeight: "normal", color: "var(--text-muted)" }}>(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        aria-invalid={touched.company && !!errors.company}
                        aria-describedby={touched.company && errors.company ? "company-error" : undefined}
                        style={fieldStyle("company")}
                        placeholder="Company name"
                        value={company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        onBlur={(e) => handleBlur("company", e.target.value)}
                      />
                      {touched.company && errors.company && (
                        <div id="company-error" style={errorTextStyle} role="alert">
                          {errors.company}
                        </div>
                      )}
                    </div>
                  </fieldset>

                  {/* 2. Project Setup Section */}
                  <fieldset style={{ border: "none", padding: 0, margin: "0 0 2rem 0" }}>
                    <legend style={{ ...labelStyle, fontSize: "1rem", color: "var(--color-ink-red)", borderBottom: "1px dotted rgba(0,0,0,0.15)", width: "100%", paddingBottom: "0.25rem", marginBottom: "1.25rem" }}>
                      02. Project Setup
                    </legend>

                    <div style={groupStyle}>
                      <label htmlFor="projectType" style={labelStyle}>
                        Project Type <span aria-label="required">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        aria-required="true"
                        aria-invalid={touched.projectType && !!errors.projectType}
                        aria-describedby={touched.projectType && errors.projectType ? "projectType-error" : undefined}
                        style={{
                          ...fieldStyle("projectType"),
                          appearance: "none",
                          backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%231b3d6d' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 0.75rem center",
                          paddingRight: "2rem"
                        }}
                        value={projectType}
                        onChange={(e) => handleChange("projectType", e.target.value)}
                        onBlur={(e) => handleBlur("projectType", e.target.value)}
                      >
                        <option value="">-- Select type --</option>
                        <option value="New Website">New Website</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Frontend Development">Frontend Development</option>
                        <option value="Web Application">Web Application</option>
                        <option value="Other">Other / Integration</option>
                      </select>
                      {touched.projectType && errors.projectType && (
                        <div id="projectType-error" style={errorTextStyle} role="alert">
                          {errors.projectType}
                        </div>
                      )}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-grid-2col">
                      <div style={groupStyle}>
                        <label htmlFor="existingWebsite" style={labelStyle}>
                          Existing Website <span style={{ textTransform: "lowercase", fontWeight: "normal", color: "var(--text-muted)" }}>(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="existingWebsite"
                          name="existingWebsite"
                          aria-invalid={touched.existingWebsite && !!errors.existingWebsite}
                          aria-describedby={touched.existingWebsite && errors.existingWebsite ? "existingWebsite-error" : undefined}
                          style={fieldStyle("existingWebsite")}
                          placeholder="example.com"
                          value={existingWebsite}
                          onChange={(e) => handleChange("existingWebsite", e.target.value)}
                          onBlur={(e) => handleBlur("existingWebsite", e.target.value)}
                        />
                        {touched.existingWebsite && errors.existingWebsite && (
                          <div id="existingWebsite-error" style={errorTextStyle} role="alert">
                            {errors.existingWebsite}
                          </div>
                        )}
                      </div>

                      <div style={groupStyle}>
                        <label htmlFor="referenceUrl" style={labelStyle}>
                          Reference URL / Design <span style={{ textTransform: "lowercase", fontWeight: "normal", color: "var(--text-muted)" }}>(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="referenceUrl"
                          name="referenceUrl"
                          aria-invalid={touched.referenceUrl && !!errors.referenceUrl}
                          aria-describedby={touched.referenceUrl && errors.referenceUrl ? "referenceUrl-error" : undefined}
                          style={fieldStyle("referenceUrl")}
                          placeholder="pinterest.com/my-board"
                          value={referenceUrl}
                          onChange={(e) => handleChange("referenceUrl", e.target.value)}
                          onBlur={(e) => handleBlur("referenceUrl", e.target.value)}
                        />
                        {touched.referenceUrl && errors.referenceUrl && (
                          <div id="referenceUrl-error" style={errorTextStyle} role="alert">
                            {errors.referenceUrl}
                          </div>
                        )}
                      </div>
                    </div>
                  </fieldset>

                  {/* 3. Scope Details Section */}
                  <fieldset style={{ border: "none", padding: 0, margin: "0 0 2rem 0" }}>
                    <legend style={{ ...labelStyle, fontSize: "1rem", color: "var(--color-ink-red)", borderBottom: "1px dotted rgba(0,0,0,0.15)", width: "100%", paddingBottom: "0.25rem", marginBottom: "1.25rem" }}>
                      03. Project Brief &amp; Scope
                    </legend>

                    <div style={groupStyle}>
                      <label htmlFor="description" style={labelStyle}>
                        Project Description <span aria-label="required">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        aria-required="true"
                        aria-invalid={touched.description && !!errors.description}
                        aria-describedby={
                          touched.description && errors.description
                            ? "description-error"
                            : "description-desc"
                        }
                        rows={6}
                        style={{ ...fieldStyle("description"), resize: "vertical" as const }}
                        placeholder="Please describe what you are building, the key functionality needed, and target tech preferences."
                        value={description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        onBlur={(e) => handleBlur("description", e.target.value)}
                      />
                      <span id="description-desc" style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginTop: "0.25rem", fontFamily: "var(--font-mono)" }}>
                        Max length 5000 characters. Min length 10.
                      </span>
                      {touched.description && errors.description && (
                        <div id="description-error" style={errorTextStyle} role="alert">
                          {errors.description}
                        </div>
                      )}
                    </div>
                  </fieldset>

                  {/* 4. Preferences Section */}
                  <fieldset style={{ border: "none", padding: 0, margin: "0 0 2.5rem 0" }}>
                    <legend style={{ ...labelStyle, fontSize: "1rem", color: "var(--color-ink-red)", borderBottom: "1px dotted rgba(0,0,0,0.15)", width: "100%", paddingBottom: "0.25rem", marginBottom: "1.25rem" }}>
                      04. Budget &amp; Timeline
                    </legend>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-grid-2col">
                      <div style={groupStyle}>
                        <label htmlFor="budget" style={labelStyle}>
                          Budget Range <span style={{ textTransform: "lowercase", fontWeight: "normal", color: "var(--text-muted)" }}>(optional)</span>
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          style={{
                            ...fieldStyle("budget"),
                            appearance: "none",
                            backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%231b3d6d' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 0.75rem center",
                            paddingRight: "2rem"
                          }}
                          value={budget}
                          onChange={(e) => handleChange("budget", e.target.value)}
                        >
                          <option value="">-- Choose budget --</option>
                          <option value="Not sure yet">Not sure yet</option>
                          <option value="I'll discuss it">I'll discuss it</option>
                          <option value="Other">Other / Custom</option>
                        </select>
                      </div>

                      <div style={groupStyle}>
                        <label htmlFor="timeline" style={labelStyle}>
                          Target Timeline <span style={{ textTransform: "lowercase", fontWeight: "normal", color: "var(--text-muted)" }}>(optional)</span>
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          style={{
                            ...fieldStyle("timeline"),
                            appearance: "none",
                            backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%231b3d6d' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 0.75rem center",
                            paddingRight: "2rem"
                          }}
                          value={timeline}
                          onChange={(e) => handleChange("timeline", e.target.value)}
                        >
                          <option value="">-- Choose timeline --</option>
                          <option value="As soon as possible">As soon as possible</option>
                          <option value="Within 2–4 weeks">Within 2–4 weeks</option>
                          <option value="Within 1–2 months">Within 1–2 months</option>
                          <option value="Flexible">Flexible</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>

                  {/* Submission Row */}
                  <div className="card-btn-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <div aria-live="polite" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      {isSubmitting ? "Submitting inquiry..." : ""}
                    </div>
                    <button
                      type="submit"
                      className="tactile-btn tactile-btn-primary"
                      disabled={isSubmitting}
                      style={{
                        padding: "0.75rem 2rem",
                        fontSize: "1rem",
                        cursor: isSubmitting ? "not-allowed" : "pointer"
                      }}
                      aria-busy={isSubmitting ? "true" : undefined}
                    >
                      {isSubmitting ? "[ SENDING... ]" : "[ SEND PROJECT BRIEF ]"}
                    </button>
                  </div>

                </form>
              </Paper>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
