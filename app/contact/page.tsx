"use client";

import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [showToast, setShowToast] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Email validation regex
  const isValidEmail = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(val);
  };

  // Validate form fields
  const validateField = (field: string, value: string) => {
    let err = "";
    if (!value.trim()) {
      err = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    } else if (field === "email" && !isValidEmail(value)) {
      err = "Please enter a valid email address";
    }
    return err;
  };

  // Handle blur validation
  const handleBlur = (field: string, value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  // Handle change validation
  const handleChange = (field: string, value: string) => {
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "subject") setSubject(value);
    if (field === "message") setMessage(value);

    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Touch and validate all fields
    const fields = { name, email, subject, message };
    const newErrors: { [key: string]: string } = {};
    const newTouched: { [key: string]: boolean } = {};

    Object.entries(fields).forEach(([key, val]) => {
      newTouched[key] = true;
      const err = validateField(key, val);
      if (err) {
        newErrors[key] = err;
      }
    });

    setTouched(newTouched);
    setErrors(newErrors);

    // If there are errors, focus first invalid input and return
    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      const firstInvalidInput = document.getElementById(errorKeys[0]);
      if (firstInvalidInput) {
        firstInvalidInput.focus();
      }
      return;
    }

    // Set submitting states
    setIsSubmitting(true);
    setFormStatus("Sending your message...");

    // Submit form via HTML form submission targetting the hidden iframe
    if (formRef.current) {
      formRef.current.submit();
    }

    // 8 second timeout fallback
    timeoutRef.current = setTimeout(() => {
      if (isSubmitting) {
        setIsSubmitting(false);
        setFormStatus("Something went wrong. Please try emailing directly.");
      }
    }, 8000);
  };

  // Handles load of hidden iframe (signaling Google Form received the POST)
  const handleIframeLoad = () => {
    if (isSubmitting) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormStatus("Message sent successfully! I'll get back to you soon.");
      
      // Reset inputs
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTouched({});
      setErrors({});
      
      // Trigger Toast notification
      setShowToast(true);
    }
  };

  // Hide toast after 5s
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "0.75rem",
    background: "var(--bg-secondary)",
    border: `1px solid ${touched[field] && errors[field] ? "#ef4444" : "var(--border-primary)"}`,
    borderRadius: "6px",
    color: "var(--text-primary)",
    fontFamily: "inherit",
  });

  return (
    <>
      <ScrollReveal />

      {/* Contact Header */}
      <section className="section-padding" style={{ paddingTop: "8rem" }}>
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">contacts</h1>
            <p className="section-subtitle">Open to internships, freelance work, and collaborations</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div className="cards-grid">
            {/* Contact Form Card */}
            <article className="card glow-border reveal contact-form-card">
              <div className="card-header">
                <div className="card-icon">📧</div>
                <h3 className="card-title">Send me a message</h3>
              </div>
              <p className="card-description">
                Have an internship opportunity? Want to collaborate on a project? Or just want to connect? I'd love to hear from you and discuss how I can contribute to your team!
              </p>

              {/* Hidden Iframe for Google Form submission response interception */}
              <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: "none" }}
                onLoad={handleIframeLoad}
              />

              <form
                ref={formRef}
                id="contact-form"
                action="https://docs.google.com/forms/d/e/1FAIpQLSe_s3xZ4xdEq8VCuzdoRP5WJDPh4QQ8qdKD1BZRv9vGLsgazw/formResponse"
                method="POST"
                target="hidden_iframe"
                style={{ marginTop: "2rem" }}
                onSubmit={handleSubmit}
                noValidate
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                      Name <span aria-label="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="entry.1399493821"
                      required
                      aria-describedby="name-error"
                      style={inputStyle("name")}
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={(e) => handleBlur("name", e.target.value)}
                      aria-invalid={touched.name && !!errors.name}
                    />
                    <div id="name-error" className="error-message" role="alert" aria-live="polite">
                      {touched.name && errors.name}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                      Email <span aria-label="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="entry.1771241316"
                      required
                      aria-describedby="email-error"
                      style={inputStyle("email")}
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={(e) => handleBlur("email", e.target.value)}
                      aria-invalid={touched.email && !!errors.email}
                    />
                    <div id="email-error" className="error-message" role="alert" aria-live="polite">
                      {touched.email && errors.email}
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="subject" style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                    Subject <span aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="entry.1623577951"
                    required
                    aria-describedby="subject-error"
                    style={inputStyle("subject")}
                    placeholder="What's this about?"
                    value={subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    onBlur={(e) => handleBlur("subject", e.target.value)}
                    aria-invalid={touched.subject && !!errors.subject}
                  />
                  <div id="subject-error" className="error-message" role="alert" aria-live="polite">
                    {touched.subject && errors.subject}
                  </div>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                    Message <span aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="entry.1903909675"
                    rows={6}
                    required
                    style={{ ...inputStyle("message"), resize: "vertical" } as React.CSSProperties}
                    placeholder="Tell me about your project or just say hello!"
                    value={message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={(e) => handleBlur("message", e.target.value)}
                    aria-invalid={touched.message && !!errors.message}
                  />
                  <div id="message-error" className="error-message" role="alert" aria-live="polite">
                    {touched.message && errors.message}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting ? "true" : undefined}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {formStatus && (
                  <div
                    id="form-status"
                    className={isSubmitted ? "success-message" : "error-message"}
                    style={isSubmitted ? undefined : { display: "block", marginTop: "1rem", color: "#ef4444" }}
                  >
                    {formStatus}
                  </div>
                )}
              </form>
            </article>

            {/* Contact Info Card */}
            <article className="card glow-border reveal">
              <div className="card-header">
                <div className="card-icon">📍</div>
                <h3 className="card-title">Get in Touch</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <h4 style={{ color: "var(--accent-primary)", marginBottom: "0.5rem", fontWeight: 600 }}>Email</h4>
                  <a
                    href="mailto:ram01singh4656@gmail.com"
                    style={{ color: "var(--text-secondary)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
                  >
                    <span>📧</span>
                    ram01singh4656@gmail.com
                  </a>
                </div>

                <div>
                  <h4 style={{ color: "var(--accent-primary)", marginBottom: "0.5rem", fontWeight: 600 }}>Location</h4>
                  <p style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span>📍</span>
                    India
                  </p>
                </div>

                <div>
                  <h4 style={{ color: "var(--accent-primary)", marginBottom: "0.5rem", fontWeight: 600 }}>Response Time</h4>
                  <p style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span>⏰</span>
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "var(--accent-primary)", fontFamily: "var(--font-mono)", textAlign: "center" }}>
            Frequently Asked Questions
          </h2>
          
          <div className="cards-grid">
            <article className="card glow-border reveal">
              <h3 style={{ color: "var(--accent-primary)", marginBottom: "1rem" }}>What services do you offer?</h3>
              <p style={{ color: "var(--text-secondary)" }}>
                I specialize in frontend development, including responsive web design, JavaScript applications, and modern UI/UX implementation. I also have experience with cloud computing (Microsoft Azure) and am available for internships and collaborative projects.
              </p>
            </article>

            <article className="card glow-border reveal">
              <h3 style={{ color: "var(--accent-primary)", marginBottom: "1rem" }}>What's your typical response time?</h3>
              <p style={{ color: "var(--text-secondary)" }}>
                I usually respond to emails within 24 hours. For urgent matters, feel free to mention it in your subject line, and I'll prioritize your message.
              </p>
            </article>

            <article className="card glow-border reveal">
              <h3 style={{ color: "var(--accent-primary)", marginBottom: "1rem" }}>What opportunities are you seeking?</h3>
              <p style={{ color: "var(--text-secondary)" }}>
                I'm actively seeking internship opportunities in frontend development, full-stack development, or cloud engineering. I'm also open to freelance projects and collaborative work that can help me grow as a developer.
              </p>
            </article>

            <article className="card glow-border reveal">
              <h3 style={{ color: "var(--accent-primary)", marginBottom: "1rem" }}>Do you work on collaborative projects?</h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Absolutely! I love collaborating with other developers and designers. Whether it's an open-source project or a team assignment, I'm always excited to contribute.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div
          role="alert"
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "var(--bg-card)",
            color: "var(--text-primary)",
            padding: "1rem 1.5rem",
            borderRadius: "8px",
            border: "1px solid var(--accent-primary)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            zIndex: 10000,
            fontSize: "0.875rem",
            maxWidth: "300px",
            transform: "translateX(0)",
            transition: "transform 0.3s ease-out",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "var(--accent-primary)", fontSize: "1.2rem" }}>✓</span>
            <span>Message sent successfully!</span>
          </div>
        </div>
      )}
    </>
  );
}
