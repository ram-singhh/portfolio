import React from "react";
import Link from "next/link";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Resume | Ram Singh — Freelance Web Developer",
  description: "View the official resume and technical background of Ram Singh, a freelance web developer based in Mumbai, India, specializing in responsive websites and React/Next.js frontend development.",
  alternates: {
    canonical: "/resume/",
  },
  openGraph: {
    title: "Resume | Ram Singh — Freelance Web Developer",
    description: "Official resume of Ram Singh: Experience, skills, verified projects, and academic background in web development and cloud technologies.",
    url: "/resume/",
    siteName: siteConfig.siteName,
    images: [
      {
        url: "/assets/images/Profile.jpg",
        width: 800,
        height: 800,
        alt: "Ram Singh - Freelance Web Developer Resume",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Ram Singh — Freelance Web Developer",
    description: "Official resume of Ram Singh: Experience, skills, verified projects, and academic background.",
    images: ["/assets/images/Profile.jpg"],
  },
};

export default function ResumePage() {
  const resumeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Resume | Ram Singh — Freelance Web Developer",
    "url": `${siteConfig.url}/resume/`,
    "description": "Official resume and technical background of Ram Singh, freelance web developer based in Mumbai, India.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${siteConfig.url}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resume",
          "item": `${siteConfig.url}/resume/`
        }
      ]
    },
    "mainEntity": {
      "@type": "Person",
      "name": "Ram Singh",
      "jobTitle": "Freelance Web Developer",
      "url": `${siteConfig.url}/`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressCountry": "India"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Chandrabhan Sharma College, Mumbai University"
      },
      "sameAs": [
        siteConfig.links.github,
        siteConfig.links.linkedin
      ]
    }
  };

  return (
    <main id="main-content" tabIndex={-1} className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "8rem" }}>
      <DeskBackground />
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", maxWidth: "840px" }}>
        
        {/* Page Hero Header Document */}
        <section aria-labelledby="resume-h1" style={{ marginBottom: "3rem", textAlign: "center" }}>
          <div style={{ transform: "rotate(-0.5deg)", display: "inline-block", width: "100%" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ margin: "0 auto", textAlign: "left", position: "relative" }}>
              <Tape rotation={-1.5} position="top-right" width="95px" />
              
              <div style={{ marginBottom: "0.75rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                <TypewriterLabel variant="dymo" rotation={1}>
                  OFFICIAL RESUME // 2026
                </TypewriterLabel>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-ink-red)", fontWeight: 700 }}>
                  MUMBAI, INDIA
                </span>
              </div>

              <h1 id="resume-h1" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2.25rem, 5.5vw, 3.25rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                margin: "0 0 0.35rem 0" 
              }}>
                Ram Singh
              </h1>
              
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", color: "var(--color-ink-blue)", fontWeight: 700, margin: "0 0 0.85rem 0" }}>
                Freelance Web Developer · BSc Information Technology
              </p>

              <p style={{ fontFamily: "var(--font-primary)", fontSize: "1rem", color: "#2c251f", lineHeight: "1.55", margin: "0 0 1.5rem 0", maxWidth: "680px" }}>
                Web developer focused on building responsive websites, frontend interfaces, and practical web applications.
              </p>

              {/* Primary Actions: Open in new tab & Download PDF */}
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", alignItems: "center", paddingTop: "0.5rem", borderTop: "1px dashed rgba(0,0,0,0.15)" }}>
                <a
                  href="/Ram-Singh-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn tactile-btn-primary"
                  aria-label="Open Ram Singh Resume PDF in a new tab"
                >
                  [ VIEW / OPEN RESUME (PDF) ]
                </a>
                <a
                  href="/Ram-Singh-Resume.pdf"
                  download="Ram-Singh-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn"
                  aria-label="Download Ram Singh Resume PDF"
                >
                  [ DOWNLOAD PDF ]
                </a>
                <a
                  href="#contact-info"
                  className="tactile-btn"
                  aria-label="Jump to contact information"
                >
                  [ CONTACT INFO ]
                </a>
              </div>
            </Paper>
          </div>
        </section>

        {/* Physical Resume Document on Desk */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "4rem" }}>
          
          {/* SECTION 1: Professional Summary */}
          <section aria-labelledby="summary-heading" style={{ transform: "rotate(-0.4deg)" }}>
            <Paper variant="light" rotation={0} padding="large" style={{ position: "relative" }}>
              <Tape rotation={1} position="top-left" width="80px" />
              
              <header style={{ marginBottom: "1rem", borderBottom: "1px solid rgba(0,0,0,0.12)", paddingBottom: "0.5rem" }}>
                <h2 id="summary-heading" style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "1.05rem", 
                  fontWeight: 700, 
                  color: "var(--color-ink-red)", 
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  margin: 0
                }}>
                  01. Professional Summary
                </h2>
              </header>

              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.65", color: "#1a1816", margin: 0 }}>
                BSc IT student with hands-on experience in data management, Microsoft Azure cloud services, web development, and Linux server administration. Completed Microsoft Elevate (AICTE) internship covering Azure infrastructure, cloud administration, and AI/ML fundamentals. Proficient in MS Office, data entry, HTML, CSS, JavaScript, Python, and Git. Fast learner with strong attention to detail and data accuracy — seeking data entry, back-office, or web development roles in banking and IT sectors.
              </p>
            </Paper>
          </section>

          {/* SECTION 2: Work & Internship Experience */}
          <section aria-labelledby="experience-heading" style={{ transform: "rotate(0.5deg)" }}>
            <Paper variant="craft" rotation={0} padding="large" style={{ position: "relative" }}>
              <Tape rotation={-2} position="top-right" width="85px" />
              
              <header style={{ marginBottom: "1.25rem", borderBottom: "1px solid rgba(0,0,0,0.14)", paddingBottom: "0.5rem" }}>
                <h2 id="experience-heading" style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "1.05rem", 
                  fontWeight: 700, 
                  color: "var(--color-ink-red)", 
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  margin: 0
                }}>
                  02. Experience
                </h2>
              </header>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                
                {/* Role 1: Freelance Web Developer */}
                <article>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 700, fontStyle: "italic", color: "var(--text-dark)", margin: 0 }}>
                      Freelance Web Developer
                    </h3>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 700, color: "var(--color-ink-red)" }}>
                      2025 – PRESENT
                    </span>
                  </div>
                  
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#332c25", marginBottom: "0.75rem" }}>
                    Independent · Mumbai, India
                  </div>

                  <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.92rem", lineHeight: "1.55", color: "#221e1a", marginBottom: "0.75rem" }}>
                    Designing and building responsive websites, React/Next.js frontend user interfaces, and fast landing pages. Refactoring legacy HTML into responsive layouts, integrating REST APIs, and implementing accessible web standards.
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 0.85rem 0", display: "flex", flexDirection: "column", gap: "0.35rem", fontFamily: "var(--font-primary)", fontSize: "0.9rem", color: "#2c251f" }}>
                    <li>&bull; Developed bespoke responsive layouts with CSS custom properties and CSS Grid.</li>
                    <li>&bull; Engineered Next.js static pages with TypeScript interface definitions and SEO metadata.</li>
                    <li>&bull; Integrated third-party APIs and server-side cached route handlers.</li>
                  </ul>

                  <Link href="/services/" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}>
                    [ View Freelance Services &rarr; ]
                  </Link>
                </article>

                <div style={{ borderTop: "1px dashed rgba(0,0,0,0.18)" }} />

                {/* Role 2: Microsoft Azure Intern */}
                <article>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 700, fontStyle: "italic", color: "var(--text-dark)", margin: 0 }}>
                      Microsoft Azure Intern
                    </h3>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 700, color: "var(--color-ink-blue)" }}>
                      JAN 2026 – FEB 2026
                    </span>
                  </div>
                  
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#332c25", marginBottom: "0.75rem" }}>
                    Microsoft Elevate – AICTE Program
                  </div>

                  <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.92rem", lineHeight: "1.55", color: "#221e1a", marginBottom: "0.75rem" }}>
                    Completed 85+ hours of structured training across Azure infrastructure, cloud administration &amp; engineering, and AI/ML modules via Microsoft Elevate. Configured and deployed Azure services through hands-on labs; maintained accurate records of resource configurations and system documentation.
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 0.85rem 0", display: "flex", flexDirection: "column", gap: "0.35rem", fontFamily: "var(--font-primary)", fontSize: "0.9rem", color: "#2c251f" }}>
                    <li>&bull; Executed cloud administration and virtual machine configuration workflows.</li>
                    <li>&bull; Documented cloud architecture parameters and maintained lab configuration logs.</li>
                    <li>&bull; Gained foundational understanding of AI/ML services and cloud workloads.</li>
                  </ul>

                  <Link href="/certificates/" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}>
                    [ View Internship Certificate &rarr; ]
                  </Link>
                </article>

              </div>
            </Paper>
          </section>

          {/* SECTION 3: Projects */}
          <section aria-labelledby="projects-heading" style={{ transform: "rotate(-0.6deg)" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ position: "relative" }}>
              <Tape rotation={1.5} position="top-left" width="90px" />
              
              <header style={{ marginBottom: "1.25rem", borderBottom: "1px solid rgba(0,0,0,0.12)", paddingBottom: "0.5rem" }}>
                <h2 id="projects-heading" style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "1.05rem", 
                  fontWeight: 700, 
                  color: "var(--color-ink-red)", 
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  margin: 0
                }}>
                  03. Selected Projects
                </h2>
              </header>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                
                {/* Project 1: MultiModule AI System */}
                <article style={{ backgroundColor: "rgba(0,0,0,0.03)", padding: "1rem", borderRadius: "2px", borderLeft: "3px solid var(--color-ink-red)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-dark)", margin: 0 }}>
                      MultiModule AI System
                    </h3>
                    <div style={{ display: "flex", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
                      <Link href="/projects/ai-multi-module-system/" style={{ color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}>
                        Case Study &rarr;
                      </Link>
                      <a href="https://multi-module-ai-system.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-ink-blue)", textDecoration: "underline" }}>
                        Live App ↗
                      </a>
                    </div>
                  </div>
                  
                  <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.9rem", lineHeight: "1.5", color: "#333", margin: "0 0 0.6rem 0" }}>
                    Designed and deployed a full-stack AI web application with a Python FastAPI REST backend and React + Vite frontend. Backend hosted on Render; frontend deployed on Vercel. Integrated multiple AI modules (text summarization, sentiment analysis, translation). Handled complete deployment including environment variables, CORS configuration, and API integration.
                  </p>
                  
                  <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                    {["Python", "FastAPI", "React", "Vite", "Render", "Vercel", "REST API"].map((tech) => (
                      <span key={tech} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", backgroundColor: "rgba(0,0,0,0.06)", padding: "1px 5px", borderRadius: "2px", color: "#111" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>

                {/* Project 2: Modern Calculator */}
                <article style={{ backgroundColor: "rgba(0,0,0,0.03)", padding: "1rem", borderRadius: "2px", borderLeft: "3px solid var(--color-ink-blue)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-dark)", margin: 0 }}>
                      Modern Calculator
                    </h3>
                    <div style={{ display: "flex", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
                      <Link href="/projects/modern-calculator/" style={{ color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}>
                        Case Study &rarr;
                      </Link>
                      <Link href="/projects/modern-calculator/" style={{ color: "var(--color-ink-blue)", textDecoration: "underline" }}>
                        Live Demo ↗
                      </Link>
                    </div>
                  </div>
                  
                  <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.9rem", lineHeight: "1.5", color: "#333", margin: "0 0 0.6rem 0" }}>
                    An interactive, responsive utility application supporting complete keyboard event listeners, modulo calculations, decimal precision logic, and division-by-zero protection. Built with React and CSS Grid.
                  </p>
                  
                  <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                    {["React", "Next.js", "TypeScript", "JavaScript", "CSS Grid", "Keyboard API"].map((tech) => (
                      <span key={tech} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", backgroundColor: "rgba(0,0,0,0.06)", padding: "1px 5px", borderRadius: "2px", color: "#111" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>

                {/* Project 3: Wrapped Wishes */}
                <article style={{ backgroundColor: "rgba(0,0,0,0.03)", padding: "1rem", borderRadius: "2px", borderLeft: "3px solid var(--color-ink-green)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-dark)", margin: 0 }}>
                      Wrapped Wishes
                    </h3>
                    <div style={{ display: "flex", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
                      <Link href="/projects/wrapped-wishes/" style={{ color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}>
                        Case Study &rarr;
                      </Link>
                      <a href="https://wrappedwishes.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-ink-blue)", textDecoration: "underline" }}>
                        Live Demo ↗
                      </a>
                    </div>
                  </div>
                  
                  <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.9rem", lineHeight: "1.5", color: "#333", margin: "0 0 0.6rem 0" }}>
                    An expressive gifting storefront built for product discovery, curated collections, occasion-based browsing, and WhatsApp ordering with Supabase database integration.
                  </p>
                  
                  <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                    {["HTML5", "CSS3", "JavaScript", "Supabase", "Vercel"].map((tech) => (
                      <span key={tech} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", backgroundColor: "rgba(0,0,0,0.06)", padding: "1px 5px", borderRadius: "2px", color: "#111" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>

                {/* Project 4: Personal Portfolio Website */}
                <article style={{ backgroundColor: "rgba(0,0,0,0.03)", padding: "1rem", borderRadius: "2px", borderLeft: "3px solid var(--color-pencil)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-dark)", margin: 0 }}>
                      Personal Portfolio Website
                    </h3>
                    <div style={{ display: "flex", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
                      <Link href="/projects/portfolio-website/" style={{ color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}>
                        Case Study &rarr;
                      </Link>
                      <Link href="/" style={{ color: "var(--color-ink-blue)", textDecoration: "underline" }}>
                        ramsingh.dev ↗
                      </Link>
                    </div>
                  </div>
                  
                  <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.9rem", lineHeight: "1.5", color: "#333", margin: "0 0 0.6rem 0" }}>
                    Built and deployed a responsive portfolio website with SEO metadata, JSON-LD structured data, and Spotify API integration, served via Vercel and Cloudflare CDN.
                  </p>
                  
                  <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                    {["HTML/CSS", "JavaScript", "Next.js", "Vercel", "Cloudflare", "SEO"].map((tech) => (
                      <span key={tech} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", backgroundColor: "rgba(0,0,0,0.06)", padding: "1px 5px", borderRadius: "2px", color: "#111" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>

                {/* Project 5: Oracle Cloud VPS Administration */}
                <article style={{ backgroundColor: "rgba(0,0,0,0.03)", padding: "1rem", borderRadius: "2px", borderLeft: "3px solid var(--color-ink-red)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-dark)", margin: 0 }}>
                      Oracle Cloud VPS Administration
                    </h3>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      Infrastructure
                    </span>
                  </div>
                  
                  <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.9rem", lineHeight: "1.5", color: "#333", margin: "0 0 0.6rem 0" }}>
                    Provisioned and maintained a 24/7 Oracle Cloud Free Tier Linux VPS with VNC virtual display, demonstrating practical cloud administration and Linux CLI skills.
                  </p>
                  
                  <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                    {["Linux", "Oracle Cloud", "VNC", "Cloud Admin", "Linux CLI"].map((tech) => (
                      <span key={tech} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", backgroundColor: "rgba(0,0,0,0.06)", padding: "1px 5px", borderRadius: "2px", color: "#111" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>

              </div>
            </Paper>
          </section>

          {/* SECTION 4: Technical Skills */}
          <section aria-labelledby="skills-heading" style={{ transform: "rotate(0.4deg)" }}>
            <Paper variant="light" rotation={0} padding="large" style={{ position: "relative" }}>
              <Tape rotation={-1} position="top-right" width="85px" />
              
              <header style={{ marginBottom: "1.25rem", borderBottom: "1px solid rgba(0,0,0,0.12)", paddingBottom: "0.5rem" }}>
                <h2 id="skills-heading" style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "1.05rem", 
                  fontWeight: 700, 
                  color: "var(--color-ink-red)", 
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  margin: 0
                }}>
                  04. Technical &amp; Professional Skills
                </h2>
              </header>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
                
                {/* Data & Office */}
                <div style={{ borderLeft: "2px solid var(--color-ink-red)", paddingLeft: "0.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                    Data &amp; Office
                  </h3>
                  <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                    {["MS Excel", "MS Word", "Data Entry", "Google Sheets"].map((s) => (
                      <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", backgroundColor: "rgba(0,0,0,0.05)", padding: "2px 6px", borderRadius: "2px", color: "#222" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div style={{ borderLeft: "2px solid var(--color-ink-blue)", paddingLeft: "0.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                    Frontend
                  </h3>
                  <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                    {["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript", "Responsive Design"].map((s) => (
                      <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", backgroundColor: "rgba(0,0,0,0.05)", padding: "2px 6px", borderRadius: "2px", color: "#222" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div style={{ borderLeft: "2px solid var(--color-ink-green)", paddingLeft: "0.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                    Backend
                  </h3>
                  <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                    {["Python", "FastAPI", "REST API"].map((s) => (
                      <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", backgroundColor: "rgba(0,0,0,0.05)", padding: "2px 6px", borderRadius: "2px", color: "#222" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cloud & Infra */}
                <div style={{ borderLeft: "2px solid var(--color-pencil)", paddingLeft: "0.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                    Cloud &amp; Infra
                  </h3>
                  <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                    {["Microsoft Azure", "Oracle Cloud", "Linux CLI", "Vercel", "Cloudflare"].map((s) => (
                      <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", backgroundColor: "rgba(0,0,0,0.05)", padding: "2px 6px", borderRadius: "2px", color: "#222" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div style={{ borderLeft: "2px solid var(--color-ink-red)", paddingLeft: "0.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                    Tools
                  </h3>
                  <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                    {["Git", "GitHub", "VS Code", "Figma", "MS Office"].map((s) => (
                      <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", backgroundColor: "rgba(0,0,0,0.05)", padding: "2px 6px", borderRadius: "2px", color: "#222" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div style={{ borderLeft: "2px solid var(--color-ink-blue)", paddingLeft: "0.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                    Soft Skills
                  </h3>
                  <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                    {["Attention to Detail", "Data Accuracy", "Problem Solving", "Team Collaboration", "Quick Learner", "Time Management"].map((s) => (
                      <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", backgroundColor: "rgba(0,0,0,0.05)", padding: "2px 6px", borderRadius: "2px", color: "#222" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div style={{ marginTop: "1.25rem", paddingTop: "0.75rem", borderTop: "1px dashed rgba(0,0,0,0.12)" }}>
                <Link href="/skills/" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}>
                  [ Explore Detailed Skills Proof &rarr; ]
                </Link>
              </div>
            </Paper>
          </section>

          {/* SECTION 5: Education & Certifications (2-column layout on desktop) */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            
            {/* Education */}
            <section aria-labelledby="education-heading" style={{ transform: "rotate(-0.8deg)" }}>
              <Paper variant="craft" rotation={0} padding="large" style={{ height: "100%", position: "relative" }}>
                <Tape rotation={-1.5} position="top-left" width="80px" />
                
                <header style={{ marginBottom: "1rem", borderBottom: "1px solid rgba(0,0,0,0.14)", paddingBottom: "0.5rem" }}>
                  <h2 id="education-heading" style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontSize: "1rem", 
                    fontWeight: 700, 
                    color: "var(--color-ink-red)", 
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    margin: 0
                  }}>
                    05. Education
                  </h2>
                </header>

                <article>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, fontStyle: "italic", color: "var(--text-dark)", margin: "0 0 0.25rem 0" }}>
                    BSc Information Technology
                  </h3>
                  <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.9rem", color: "#2c251f", margin: "0 0 0.25rem 0" }}>
                    Chandrabhan Sharma College, Mumbai University
                  </p>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-ink-red)", fontWeight: 700, display: "block", marginBottom: "0.75rem" }}>
                    2025 – 2028 · Mumbai, India
                  </span>
                  <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.85rem", lineHeight: "1.5", color: "#332c25", margin: 0 }}>
                    Foundational study across computer science, object-oriented programming, data structures, network fundamentals, and database management systems.
                  </p>
                </article>
              </Paper>
            </section>

            {/* Certifications */}
            <section aria-labelledby="certs-heading" style={{ transform: "rotate(0.8deg)" }}>
              <Paper variant="lined" rotation={0} padding="large" style={{ height: "100%", position: "relative" }}>
                <Tape rotation={2} position="top-right" width="80px" />
                
                <header style={{ marginBottom: "1rem", borderBottom: "1px solid rgba(0,0,0,0.12)", paddingBottom: "0.5rem" }}>
                  <h2 id="certs-heading" style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontSize: "1rem", 
                    fontWeight: 700, 
                    color: "var(--color-ink-red)", 
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    margin: 0
                  }}>
                    06. Certifications
                  </h2>
                </header>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem", fontFamily: "var(--font-primary)", fontSize: "0.88rem" }}>
                  <li>
                    <strong style={{ color: "var(--text-dark)", display: "block" }}>Azure Internship Completion</strong>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>Microsoft Elevate · AICTE · 2026</span>
                  </li>
                  <li>
                    <strong style={{ color: "var(--text-dark)", display: "block" }}>Cloud Administration &amp; Engineering (40 hrs)</strong>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>Microsoft Elevate · AICTE · 2026</span>
                  </li>
                  <li>
                    <strong style={{ color: "var(--text-dark)", display: "block" }}>Microsoft Azure (25 hrs)</strong>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>Microsoft Elevate · AICTE · 2026</span>
                  </li>
                  <li>
                    <strong style={{ color: "var(--text-dark)", display: "block" }}>AI &amp; Machine Learning (20 hrs)</strong>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>Microsoft Elevate · AICTE · 2026</span>
                  </li>
                </ul>

                <div style={{ marginTop: "1rem" }}>
                  <Link href="/certificates/" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}>
                    [ Verify All Certificates &rarr; ]
                  </Link>
                </div>
              </Paper>
            </section>

          </div>

          {/* SECTION 6: Contact Information */}
          <section id="contact-info" aria-labelledby="contact-heading" style={{ transform: "rotate(-0.4deg)" }}>
            <Paper variant="light" rotation={0} padding="large" style={{ position: "relative" }}>
              <header style={{ marginBottom: "1.25rem", borderBottom: "1px solid rgba(0,0,0,0.12)", paddingBottom: "0.5rem" }}>
                <h2 id="contact-heading" style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "1.05rem", 
                  fontWeight: 700, 
                  color: "var(--color-ink-red)", 
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  margin: 0
                }}>
                  07. Contact &amp; Verified Profiles
                </h2>
              </header>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", display: "block", textTransform: "uppercase" }}>
                    Direct Email
                  </span>
                  <a 
                    href="mailto:ram01siingh4656@gmail.com" 
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}
                  >
                    ram01siingh4656@gmail.com
                  </a>
                </div>

                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", display: "block", textTransform: "uppercase" }}>
                    Secondary Email
                  </span>
                  <a 
                    href="mailto:ram01singh4656@gmail.com" 
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}
                  >
                    ram01singh4656@gmail.com
                  </a>
                </div>

                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", display: "block", textTransform: "uppercase" }}>
                    GitHub Profile
                  </span>
                  <a 
                    href={siteConfig.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}
                  >
                    github.com/Ram-singhh
                  </a>
                </div>

                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", display: "block", textTransform: "uppercase" }}>
                    LinkedIn Profile
                  </span>
                  <a 
                    href={siteConfig.links.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}
                  >
                    linkedin.com/in/ram-singhh
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center", paddingTop: "1rem", borderTop: "1px dashed rgba(0,0,0,0.15)" }}>
                <a
                  href="/Ram-Singh-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn tactile-btn-primary"
                  aria-label="Open Ram Singh Resume PDF in a new tab"
                >
                  [ VIEW / OPEN RESUME (PDF) ]
                </a>
                <a
                  href="/Ram-Singh-Resume.pdf"
                  download="Ram-Singh-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn"
                  aria-label="Download Ram Singh Resume PDF"
                >
                  [ DOWNLOAD PDF ]
                </a>
                <Link
                  href="/contact/"
                  className="tactile-btn"
                  aria-label="Book a project with Ram Singh"
                >
                  [ BOOK A PROJECT ]
                </Link>
              </div>
            </Paper>
          </section>

        </div>

        {/* Final Tactile CTA Note */}
        <section aria-labelledby="resume-cta-heading" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(0.8deg)", width: "100%", maxWidth: "580px" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <h2 id="resume-cta-heading" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.8rem", 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem" 
              }}>
                HAVE A ROLE OR PROJECT?
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.45", marginBottom: "1.5rem" }}>
                Whether you need a custom website, frontend component engineering, or structured IT data support, let&apos;s connect.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1.5}>
                  let&apos;s build together
                </HandwrittenNote>
              </div>

              <div className="card-btn-container" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
                <Link href="/contact/" className="tactile-btn tactile-btn-primary" aria-label="Book a project with Ram Singh">
                  [ BOOK A PROJECT ]
                </Link>
                <Link href="/projects/" className="tactile-btn" aria-label="Explore verified project work">
                  [ VIEW PROJECTS ]
                </Link>
              </div>
            </Paper>
          </div>
        </section>

      </div>
    </main>
  );
}
