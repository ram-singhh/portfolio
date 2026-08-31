import React from "react";
import Link from "next/link";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";

export const metadata = {
  title: {
    absolute: "About Ram Singh | Freelance Web Developer",
  },
  description: "Learn about Ram Singh, an independent freelance web developer based in India building fast, responsive, accessible websites and React/Next.js frontend interfaces.",
  alternates: {
    canonical: "/about/",
  },
};

export default function About() {
  return (
    <main id="main-content" tabIndex={-1} className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "8rem" }}>
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", maxWidth: "800px" }}>
        
        {/* Header Folder */}
        <section aria-labelledby="about-h1" style={{ marginBottom: "3.5rem", textAlign: "center" }}>
          <div style={{ transform: "rotate(-0.5deg)", display: "inline-block", width: "100%" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ margin: "0 auto", textAlign: "left" }}>
              <div style={{ marginBottom: "0.75rem" }}>
                <TypewriterLabel variant="dymo" rotation={1}>
                  BIOGRAPHY &amp; PROFILE
                </TypewriterLabel>
              </div>
              <h1 id="about-h1" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2.25rem, 5.5vw, 3.25rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                margin: "0 0 1rem 0" 
              }}>
                About Ram Singh
              </h1>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "1.05rem", color: "#2c251f", lineHeight: "1.5", margin: 0, fontWeight: 500 }}>
                Freelance web developer based in India, combining hands-on technical execution with academic IT study to build fast, responsive, accessible web interfaces.
              </p>
            </Paper>
          </div>
        </section>

        {/* Section 1: Who is Ram Singh & What He Builds */}
        <section aria-labelledby="who-heading" style={{ marginBottom: "3rem" }}>
          <Paper variant="craft" rotation={-0.8} padding="large" style={{ position: "relative" }}>
            <Tape rotation={-2} position="top-left" width="95px" />
            
            <h2 id="who-heading" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.2rem", 
              fontWeight: 700, 
              color: "var(--color-ink-red)", 
              textTransform: "uppercase",
              marginBottom: "1.25rem"
            }}>
              01. WHO I AM &amp; WHAT I BUILD
            </h2>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", marginBottom: "1.25rem" }}>
              I am Ram Singh, an independent web developer and first-year BSc-IT student based in India. I specialize in designing and building custom websites, interactive React/Next.js frontend interfaces, speed-focused landing pages, and legacy site modernizations.
            </p>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", margin: 0 }}>
              Rather than using bloated templates or generic page builders, I write clean, custom code that loads fast, renders fluidly across mobile and desktop devices, and respects search engine indexing standards.
            </p>
          </Paper>
        </section>

        {/* Section 2: Technologies & Focus */}
        <section aria-labelledby="tech-heading" style={{ marginBottom: "3rem" }}>
          <Paper variant="light" rotation={1} padding="large" style={{ position: "relative" }}>
            <Tape rotation={2.5} position="top-right" width="85px" />

            <h2 id="tech-heading" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.2rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "1.25rem"
            }}>
              02. TECHNOLOGIES &amp; TECHNICAL FOUNDATION
            </h2>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#222", marginBottom: "1.25rem" }}>
              My web engineering toolkit is grounded in modern standards:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "0.75rem", fontFamily: "var(--font-primary)", fontSize: "0.95rem", color: "#222" }}>
              <li>
                <strong style={{ fontFamily: "var(--font-mono)", color: "var(--color-ink-blue)" }}>Core Web Stack:</strong> Semantic HTML5, CSS3 (Flexbox, CSS Grid, Custom Variables), and JavaScript (ES6+).
              </li>
              <li>
                <strong style={{ fontFamily: "var(--font-mono)", color: "var(--color-ink-blue)" }}>Frontend Engineering:</strong> React, Next.js App Router, and TypeScript for modular, component-driven layouts.
              </li>
              <li>
                <strong style={{ fontFamily: "var(--font-mono)", color: "var(--color-ink-blue)" }}>Scripting &amp; AI:</strong> Python for custom modular scripting and LLM API integrations.
              </li>
              <li>
                <strong style={{ fontFamily: "var(--font-mono)", color: "var(--color-ink-blue)" }}>Cloud &amp; Infrastructure:</strong> Microsoft Azure fundamentals (completed Azure Cloud Internship via AICTE program) and static hosting deployments (Vercel, GitHub Pages).
              </li>
            </ul>

            <div style={{ marginTop: "1rem" }}>
              <Link href="/skills/" className="tactile-btn" aria-label="Explore verified web development skills and evidence">
                [ SEE SKILLS &amp; PROOF &rarr; ]
              </Link>
            </div>
          </Paper>
        </section>

        {/* Section 3: Work Interests & Development Approach */}
        <section aria-labelledby="approach-heading" style={{ marginBottom: "3.5rem" }}>
          <Paper variant="lined" rotation={-1.2} padding="large">
            <h2 id="approach-heading" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.2rem", 
              fontWeight: 700, 
              color: "var(--color-ink-green)", 
              textTransform: "uppercase",
              marginBottom: "1.25rem"
            }}>
              03. WORK INTERESTS &amp; BUILDING APPROACH
            </h2>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", marginBottom: "1.25rem" }}>
              I am interested in projects where clean execution, clear layout structure, and performance matter. Whether building a single-page product showcase or refactoring a desktop-only layout into a mobile-first responsive app, my approach centers on:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "0.75rem", fontFamily: "var(--font-primary)", fontSize: "0.95rem", color: "#1a1816" }}>
              <li>
                <strong style={{ fontFamily: "var(--font-mono)", color: "#111" }}>Direct Scoping:</strong> Defining clear deliverables, required screens, and technical constraints before writing code.
              </li>
              <li>
                <strong style={{ fontFamily: "var(--font-mono)", color: "#111" }}>Accessibility First:</strong> Ensuring proper heading hierarchies, visible keyboard focus indicators, and ARIA landmarks.
              </li>
              <li>
                <strong style={{ fontFamily: "var(--font-mono)", color: "#111" }}>Transparent Code Proof:</strong> Providing inspectable repositories and live interactive builds as evidence of quality.
              </li>
            </ul>

            <div style={{ marginTop: "1rem" }}>
              <Link href="/projects/" className="tactile-btn" aria-label="View verified web development projects and case studies">
                [ EXPLORE VERIFIED PROJECTS &rarr; ]
              </Link>
            </div>
          </Paper>
        </section>

        {/* Section 4: How to Work With Ram */}
        <section aria-labelledby="work-heading" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(1deg)", width: "100%", maxWidth: "560px" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <h2 id="work-heading" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.8rem", 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem" 
              }}>
                HOW TO WORK WITH ME
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.5", marginBottom: "1.5rem" }}>
                Need a new website, frontend interface, or landing page? Review my freelance service offerings or submit a project brief to get started.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1.5}>
                  let's start your project
                </HandwrittenNote>
              </div>

              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
                <Link href="/contact/" className="tactile-btn tactile-btn-primary" aria-label="Book a project with Ram Singh">
                  [ BOOK A PROJECT ]
                </Link>
                <Link href="/services/" className="tactile-btn" aria-label="Explore freelance web development services">
                  [ VIEW SERVICES ]
                </Link>
              </div>
            </Paper>
          </div>
        </section>

      </div>
    </main>
  );
}
