import React from "react";
import Link from "next/link";
import DeskBackground from "@/components/ui/DeskBackground";
import Paper from "@/components/ui/Paper";
import Polaroid from "@/components/ui/Polaroid";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import CurrentlyPlaying from "@/components/spotify/CurrentlyPlaying";

export const metadata = {
  title: "Ram Singh | Freelance Web Developer",
  description: "I design and build fast, responsive websites and web experiences for people with things to build, sell, or share. Freelance web development, frontend engineering, and landing pages.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="home-workspace">
      {/* Workspace physical desk background */}
      <DeskBackground />

      <div className="home-layout-grid" style={{ zIndex: 1 }}>
        
        {/* Section 1: Hero Desk Sheet */}
        <section className="grid-hero-card" aria-label="Introduction">
          <Paper variant="lined" rotation={-1} padding="large">
            <header style={{ marginBottom: "1.5rem" }}>
              {/* Visually styled, semantically correct H1 */}
              <h1 style={{ fontSize: "1.1rem", fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.05em", color: "var(--color-ink-red)", textTransform: "uppercase", margin: 0 }}>
                Ram Singh — Freelance Web Developer
              </h1>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginTop: "0.25rem" }}>
                Freelance Web Developer based in India
              </span>
            </header>

            <div style={{ margin: "2rem 0" }}>
              <div 
                style={{ 
                  fontFamily: "var(--font-serif)", 
                  fontSize: "clamp(2rem, 5.5vw, 3.25rem)", 
                  fontWeight: 700, 
                  fontStyle: "italic", 
                  lineHeight: 1.1, 
                  color: "var(--text-dark)", 
                  marginBottom: "1.25rem" 
                }}
              >
                THIS IS NOT A PORTFOLIO.
              </div>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.1rem, 3.2vw, 1.4rem)", lineHeight: "1.45", color: "#2c251f", maxWidth: "540px", margin: "0 0 1.5rem 0" }}>
                I design and build websites and web experiences for people with something to build, sell, or share.
              </p>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.5", color: "#333", maxWidth: "520px", margin: 0 }}>
                Specialized in custom responsive websites, clean React/Next.js frontend interfaces, fast landing pages, and legacy site modernizations. Verified through real source code and technical case studies.
              </p>
            </div>

            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginTop: "2.5rem" }}>
              <Link href="/contact/" className="tactile-btn tactile-btn-primary" aria-label="Book a web development project with Ram Singh">
                [ BOOK A PROJECT ]
              </Link>
              <Link href="/projects/" className="tactile-btn" aria-label="Explore Ram Singh's verified web projects">
                [ EXPLORE MY WORK ]
              </Link>
            </div>
          </Paper>
        </section>

        {/* Profile Polaroid */}
        <section className="grid-profile-card" aria-label="Visual identity">
          <Polaroid
            src="/assets/images/Profile.jpg"
            alt="Freelance developer Ram Singh photographed at desk"
            caption="Ram Singh — Freelance Web Developer"
            rotation={-2.5}
            hasTape={true}
            tapeRotation={1}
            width={260}
            height={260}
          />
        </section>

        {/* Currently Playing Spotify Player - Compact player in hero empty space */}
        <section className="grid-spotify-card" aria-label="Currently playing on Spotify">
          <Paper variant="dark" rotation={1.2} padding="small">
            <div style={{ marginBottom: "0.35rem" }}>
              <TypewriterLabel variant="dymo" rotation={-1.5}>
                CURRENTLY PLAYING
              </TypewriterLabel>
            </div>
            <CurrentlyPlaying />
          </Paper>
        </section>

        {/* Projects Archive Teaser Card */}
        <section className="grid-projects-card" aria-label="Selected projects teaser">
          <Link href="/projects/" style={{ textDecoration: "none", width: "100%", maxWidth: "320px", display: "block" }}>
            <Paper variant="grid" rotation={1.5} padding="medium" style={{ cursor: "pointer", textAlign: "center" }}>
              <div className="ascii-box-graphic" aria-hidden="true">
{`┌───────────────┐
│   PROJECTS    │
│               │
│   verified    │
│   proof       │
└───────────────┘`}
              </div>
              <div>
                <TypewriterLabel variant="plain" rotation={-1}>
                  EXPLORE PROJECT ARCHIVE &rarr;
                </TypewriterLabel>
              </div>
            </Paper>
          </Link>
        </section>

        {/* Section 2: Projects List */}
        <section id="projects" style={{ gridColumn: "span 12", marginTop: "2rem" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>
            <TypewriterLabel variant="paper" rotation={-1}>Verified Projects &amp; Technical Proof</TypewriterLabel>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {/* Real Project 1: Modern Calculator */}
            <article>
              <Paper variant="light" rotation={1} padding="medium" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <header style={{ marginBottom: "0.75rem" }}>
                  <TypewriterLabel variant="plain">01. UTILITY APP</TypewriterLabel>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--text-dark)", marginTop: "0.25rem" }}>
                    Modern Calculator
                  </h3>
                </header>

                <p style={{ color: "#333", fontSize: "0.92rem", lineHeight: "1.5", marginBottom: "1rem" }}>
                  <strong>Purpose:</strong> An interactive, responsive browser calculator supporting full keyboard hotkeys, modulo calculations, and division-by-zero protection.
                </p>

                <div style={{ fontSize: "0.85rem", color: "#444", marginBottom: "1.25rem", flexGrow: 1, borderLeft: "2px solid var(--color-ink-blue)", paddingLeft: "0.75rem" }}>
                  <strong>Tech Challenge:</strong> Managing keyboard state listeners without stale closures while handling decimal accuracy and arithmetic edge cases.
                </div>

                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                  {["React", "Next.js", "TypeScript", "CSS Grid", "Keyboard API"].map((tech) => (
                    <span 
                      key={tech} 
                      style={{ 
                        fontFamily: "var(--font-mono)", 
                        fontSize: "0.7rem", 
                        fontWeight: "bold",
                        backgroundColor: "rgba(0,0,0,0.05)",
                        border: "1px solid rgba(0,0,0,0.12)",
                        borderRadius: "2px",
                        padding: "1px 5px",
                        color: "#222"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: "auto", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <Link href="/projects/modern-calculator/" className="tactile-btn tactile-btn-primary" aria-label="Explore Modern Calculator case study and demo">
                    [ CASE STUDY &amp; DEMO ]
                  </Link>
                  <a href="https://github.com/Ramsingh4656/Modern-Calculator" target="_blank" rel="noopener noreferrer" className="tactile-btn" aria-label="View Modern Calculator source code on GitHub">
                    [ GITHUB SOURCE ]
                  </a>
                </div>
              </Paper>
            </article>

            {/* Real Project 2: AI Multi-Module System */}
            <article>
              <Paper variant="lined" rotation={-1.5} padding="medium" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <header style={{ marginBottom: "0.75rem" }}>
                  <TypewriterLabel variant="plain">02. PYTHON SCRIPTING</TypewriterLabel>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--text-dark)", marginTop: "0.25rem" }}>
                    AI Multi-Module System
                  </h3>
                </header>

                <p style={{ color: "#333", fontSize: "0.92rem", lineHeight: "1.5", marginBottom: "1rem" }}>
                  <strong>Purpose:</strong> A modular Python framework demonstrating scalable LLM API orchestration, structured prompts, and independent action modules.
                </p>

                <div style={{ fontSize: "0.85rem", color: "#444", marginBottom: "1.25rem", flexGrow: 1, borderLeft: "2px solid var(--color-ink-red)", paddingLeft: "0.75rem" }}>
                  <strong>Tech Challenge:</strong> Decoupling script boundaries so new AI capabilities can be registered without modifying the core orchestrator.
                </div>

                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                  {["Python", "AI/LLM APIs", "Modular Architecture", "API Integration"].map((tech) => (
                    <span 
                      key={tech} 
                      style={{ 
                        fontFamily: "var(--font-mono)", 
                        fontSize: "0.7rem", 
                        fontWeight: "bold",
                        backgroundColor: "rgba(0,0,0,0.05)",
                        border: "1px solid rgba(0,0,0,0.12)",
                        borderRadius: "2px",
                        padding: "1px 5px",
                        color: "#222"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: "auto", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <Link href="/projects/ai-multi-module-system/" className="tactile-btn tactile-btn-primary" aria-label="Explore AI Multi-Module system case study">
                    [ OPEN CASE STUDY ]
                  </Link>
                  <a href="https://github.com/Ramsingh4656/MultiModule-AI-System" target="_blank" rel="noopener noreferrer" className="tactile-btn" aria-label="View AI Multi-Module source code on GitHub">
                    [ GITHUB SOURCE ]
                  </a>
                </div>
              </Paper>
            </article>

            {/* Real Project 3: Portfolio Website */}
            <article>
              <Paper variant="craft" rotation={0.8} padding="medium" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <header style={{ marginBottom: "0.75rem" }}>
                  <TypewriterLabel variant="plain">03. WEB ENGINEERING</TypewriterLabel>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--text-dark)", marginTop: "0.25rem" }}>
                    Tactile Portfolio Website
                  </h3>
                </header>

                <p style={{ color: "#221e1a", fontSize: "0.92rem", lineHeight: "1.5", marginBottom: "1rem" }}>
                  <strong>Purpose:</strong> A Next.js portfolio presenting developer proof, services, and live Spotify integration inside a dark tactile desk environment.
                </p>

                <div style={{ fontSize: "0.85rem", color: "#332c25", marginBottom: "1.25rem", flexGrow: 1, borderLeft: "2px solid #221e1a", paddingLeft: "0.75rem" }}>
                  <strong>Tech Challenge:</strong> Building cached OAuth Spotify handlers and accessible paper/polaroid/tape CSS components without runtime layout shifts.
                </div>

                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                  {["Next.js 14", "React", "TypeScript", "Spotify API", "SEO / ARIA"].map((tech) => (
                    <span 
                      key={tech} 
                      style={{ 
                        fontFamily: "var(--font-mono)", 
                        fontSize: "0.7rem", 
                        fontWeight: "bold",
                        backgroundColor: "rgba(0,0,0,0.07)",
                        border: "1px solid rgba(0,0,0,0.15)",
                        borderRadius: "2px",
                        padding: "1px 5px",
                        color: "#111"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: "auto", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <Link href="/projects/portfolio-website/" className="tactile-btn tactile-btn-primary" aria-label="Explore Portfolio Website case study">
                    [ OPEN CASE STUDY ]
                  </Link>
                  <a href="https://github.com/Ramsingh4656/portfolio" target="_blank" rel="noopener noreferrer" className="tactile-btn" aria-label="View Portfolio Website source code on GitHub">
                    [ GITHUB SOURCE ]
                  </a>
                </div>
              </Paper>
            </article>
          </div>
        </section>

        {/* Section 3: Services */}
        <section id="services" className="grid-services-card" style={{ marginTop: "2rem" }}>
          <Paper variant="craft" rotation={-1} padding="medium">
            <h2 style={{ marginBottom: "1.25rem" }}>
              <TypewriterLabel variant="paper" rotation={1.5}>Freelance Web Services</TypewriterLabel>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#221e1a", marginBottom: "1.5rem", lineHeight: "1.5" }}>
              I design and build fast, responsive, and accessible websites tailored to your specific requirements.
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span>{" "}
                <Link href="/services/web-development/" style={{ color: "#1a1816", textDecoration: "underline", fontWeight: 700 }}>
                  Web Development Services
                </Link>
              </li>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span>{" "}
                <Link href="/services/frontend-development/" style={{ color: "#1a1816", textDecoration: "underline", fontWeight: 700 }}>
                  Frontend Development (React / Next.js)
                </Link>
              </li>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span>{" "}
                <Link href="/services/landing-pages/" style={{ color: "#1a1816", textDecoration: "underline", fontWeight: 700 }}>
                  Landing Page Development
                </Link>
              </li>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span>{" "}
                <Link href="/services/website-redesign/" style={{ color: "#1a1816", textDecoration: "underline", fontWeight: 700 }}>
                  Website Redesign &amp; Modernization
                </Link>
              </li>
            </ul>
            <div style={{ marginTop: "1.75rem" }}>
              <Link href="/services/" className="tactile-btn" aria-label="Explore all web development services">
                [ EXPLORE ALL SERVICES &rarr; ]
              </Link>
            </div>
          </Paper>
        </section>

        {/* Section 5: About Section Teaser */}
        <section className="grid-navigation-card" style={{ marginTop: "2rem" }} aria-label="Biography and Notes shortcuts">
          <Paper variant="light" rotation={-1.5} padding="medium">
            <h2 style={{ marginBottom: "1rem" }}>
              <TypewriterLabel variant="plain">About Ram Singh</TypewriterLabel>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#333", lineHeight: "1.5", marginBottom: "1.5rem" }}>
              Freelance web developer and first-year BSc-IT student focusing on frontend architecture, responsive layout structures, and practical web solutions.
            </p>
            <Link href="/about/" className="tactile-btn" aria-label="Read full biography and developer background">
              [ ABOUT RAM SINGH &rarr; ]
            </Link>
          </Paper>

          {/* Section 6: Notes Teaser */}
          <Paper variant="light" rotation={1.5} padding="medium" id="notes-lab">
            <h2 style={{ marginBottom: "1rem" }}>
              <TypewriterLabel variant="plain">Field Notes &amp; Lab</TypewriterLabel>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#333", lineHeight: "1.5", marginBottom: "1.5rem" }}>
              First-hand technical build logs, architecture breakdowns, and engineering decisions from real development work.
            </p>
            <Link href="/notes/" className="tactile-btn" aria-label="Explore field notes and technical lab reports">
              [ READ FIELD NOTES &rarr; ]
            </Link>
          </Paper>
        </section>

        {/* Section 7: Final Conversion CTA Note */}
        <section className="grid-cta-card" aria-label="Booking call to action">
          <Paper variant="lined" rotation={-0.5} padding="large">
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontStyle: "italic", color: "var(--text-dark)", marginBottom: "1rem" }}>
              HAVE SOMETHING IN MIND?
            </h2>
            <p style={{ color: "#333", fontSize: "1.05rem", lineHeight: "1.5", marginBottom: "1.5rem", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
              Send me the brief. Tell me about your website, landing page, or frontend layout requirements.
            </p>
            
            <div style={{ margin: "1.5rem 0" }}>
              <HandwrittenNote color="blue" tilt={-1.5}>
                let's build your project
              </HandwrittenNote>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <Link href="/contact/" className="tactile-btn tactile-btn-primary" aria-label="Book a project with Ram Singh">
                [ BOOK A PROJECT ]
              </Link>
            </div>
          </Paper>
        </section>

      </div>
    </main>
  );
}
