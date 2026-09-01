import React from "react";
import Link from "next/link";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";

export const metadata = {
  title: "Experience & Journey",
  description: "Review the experience, academic background, and Microsoft Azure cloud internship details of freelance web developer Ram Singh.",
  alternates: {
    canonical: "/experience/",
  },
};

export default function Experience() {
  return (
    <main className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "8rem" }}>
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", maxWidth: "800px" }}>
        
        {/* Page Header Document */}
        <section aria-labelledby="experience-h1" style={{ marginBottom: "3.5rem", textAlign: "center" }}>
          <div style={{ transform: "rotate(-0.5deg)", display: "inline-block", width: "100%" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ margin: "0 auto", textAlign: "left" }}>
              <div style={{ marginBottom: "0.75rem" }}>
                <TypewriterLabel variant="dymo" rotation={1}>
                  EXPERIENCE &amp; TIMELINE
                </TypewriterLabel>
              </div>
              <h1 id="experience-h1" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2.25rem, 5.5vw, 3.25rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                margin: "0 0 1rem 0" 
              }}>
                Experience &amp; Background
              </h1>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "1rem", color: "#333", lineHeight: "1.5", margin: 0 }}>
                An accurate timeline of my freelance web development work, Microsoft Azure cloud internship program, and BSc-IT academic foundation.
              </p>
            </Paper>
          </div>
        </section>

        {/* Experience Timeline Documents */}
        <section aria-label="Experience timeline" style={{ display: "flex", flexDirection: "column", gap: "3rem", marginBottom: "4rem" }}>
          
          {/* Item 1: Freelance Web Developer */}
          <article style={{ transform: "rotate(-1deg)" }}>
            <Paper variant="craft" rotation={0} padding="large" style={{ position: "relative" }}>
              <Tape rotation={-2} position="top-right" width="90px" />

              <header style={{ marginBottom: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
                  <TypewriterLabel variant="dymo" rotation={-1}>FREELANCE</TypewriterLabel>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 700, color: "var(--color-ink-red)" }}>
                    2025 – PRESENT
                  </span>
                </div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700, fontStyle: "italic", color: "var(--text-dark)", margin: "0.5rem 0 0.25rem 0" }}>
                  Freelance Web Developer
                </h2>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#333", display: "block" }}>
                  Independent / Online Client Services — Mumbai, India
                </span>
              </header>

              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", marginBottom: "1.25rem" }}>
                Designing and building custom responsive websites, React and Next.js frontend user interfaces, speed-optimized landing pages, and legacy site modernizations for clients.
              </p>

              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  Key Execution Areas:
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem", fontFamily: "var(--font-primary)", fontSize: "0.9rem", color: "#222" }}>
                  <li>&bull; Hand-crafting responsive layout grids and CSS custom properties styling.</li>
                  <li>&bull; Building stateful React component applications and Next.js static builds.</li>
                  <li>&bull; Refactoring non-responsive legacy HTML into fluid, mobile-friendly containers.</li>
                </ul>
              </div>

              <div>
                <Link href="/services/" className="tactile-btn tactile-btn-primary" aria-label="Explore freelance web development services">
                  [ VIEW FREELANCE SERVICES &rarr; ]
                </Link>
              </div>
            </Paper>
          </article>

          {/* Item 2: Microsoft Azure Cloud Intern */}
          <article style={{ transform: "rotate(0.8deg)" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ position: "relative" }}>
              <Tape rotation={1.5} position="top-right" width="85px" />

              <header style={{ marginBottom: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
                  <TypewriterLabel variant="plain">INTERNSHIP PROGRAM</TypewriterLabel>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 700, color: "var(--color-ink-blue)" }}>
                    JAN 2026 – FEB 2026
                  </span>
                </div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700, fontStyle: "italic", color: "var(--text-dark)", margin: "0.5rem 0 0.25rem 0" }}>
                  Microsoft Azure Cloud Intern
                </h2>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-muted)", display: "block" }}>
                  Microsoft Elevate / AICTE Internship Program
                </span>
              </header>

              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", marginBottom: "1.25rem" }}>
                Participated in a structured Microsoft Azure cloud internship program supported by AICTE, completing hands-on lab modules, cloud administration exercises, and service configuration workflows.
              </p>

              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  Completed Modules &amp; Coverage:
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem", fontFamily: "var(--font-primary)", fontSize: "0.9rem", color: "#222" }}>
                  <li>&bull; 25-Hour &amp; 40-Hour Azure fundamentals and cloud administration training.</li>
                  <li>&bull; Hands-on lab exercises with cloud deployment concepts and resource groups.</li>
                  <li>&bull; AI &amp; Machine Learning fundamentals overview workshops.</li>
                </ul>
              </div>

              <div>
                <Link href="/certificates/" className="tactile-btn" aria-label="View verified Azure internship certificates">
                  [ VIEW INTERNSHIP CERTIFICATE &rarr; ]
                </Link>
              </div>
            </Paper>
          </article>

          {/* Item 3: BSc-IT Academic Studies */}
          <article style={{ transform: "rotate(-0.5deg)" }}>
            <Paper variant="light" rotation={0} padding="large" style={{ position: "relative" }}>
              <Tape rotation={-1.5} position="top-right" width="80px" />

              <header style={{ marginBottom: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
                  <TypewriterLabel variant="plain">ACADEMIC</TypewriterLabel>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-dark)" }}>
                    2026 – PRESENT
                  </span>
                </div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700, fontStyle: "italic", color: "var(--text-dark)", margin: "0.5rem 0 0.25rem 0" }}>
                  BSc-IT Undergraduate Student
                </h2>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-muted)", display: "block" }}>
                  Bachelor of Science in Information Technology
                </span>
              </header>

              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#222", marginBottom: "1.25rem" }}>
                Currently in my first year of BSc-IT studies, building strong academic foundations in core computer science, object-oriented programming, network fundamentals, and database systems.
              </p>

              <div>
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  Core Curriculum Focus:
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem", fontFamily: "var(--font-primary)", fontSize: "0.9rem", color: "#333" }}>
                  <li>&bull; Web engineering principles and client-side scripting.</li>
                  <li>&bull; Programming fundamentals in Python, Java, and C/C++.</li>
                  <li>&bull; Database design with MySQL and SQL queries.</li>
                </ul>
              </div>
            </Paper>
          </article>

        </section>

        {/* Final Call to Action */}
        <section aria-labelledby="exp-cta-heading" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(1deg)", width: "100%", maxWidth: "560px" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <h2 id="exp-cta-heading" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.8rem", 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem" 
              }}>
                READY TO COLLABORATE?
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.45", marginBottom: "1.5rem" }}>
                Have a web project that needs clean execution, responsive styling, and fast performance? Send me your brief.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1.5}>
                  let me know what you're building
                </HandwrittenNote>
              </div>

              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
                <Link href="/contact/" className="tactile-btn tactile-btn-primary" aria-label="Book a web development project">
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
