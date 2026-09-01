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
  description: "Ram Singh is a freelance web developer based in Mumbai, India, building fast, responsive websites, React/Next.js frontend interfaces, and landing pages.",
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
                Freelance Web Developer based in Mumbai, India
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
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.1rem, 3.2vw, 1.4rem)", lineHeight: "1.45", color: "#2c251f", maxWidth: "540px", margin: "0 0 1.25rem 0" }}>
                I design and build custom websites and web applications for founders, creators, and businesses with something to build, sell, or share.
              </p>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.55", color: "#333", maxWidth: "540px", margin: "0 0 1.5rem 0" }}>
                Specialized in custom responsive websites, clean React/Next.js and TypeScript frontend interfaces, fast landing pages, and REST API integrations. Verified through real open-source code and technical case studies.
              </p>

              {/* Technologies Badges Bar in Hero */}
              <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", margin: "1.25rem 0" }}>
                {["Next.js", "React", "TypeScript", "JavaScript", "HTML5 & CSS3", "REST APIs", "Vercel"].map((tech) => (
                  <span 
                    key={tech} 
                    style={{ 
                      fontFamily: "var(--font-mono)", 
                      fontSize: "0.72rem", 
                      fontWeight: "bold",
                      backgroundColor: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.14)",
                      borderRadius: "2px",
                      padding: "2px 6px",
                      color: "var(--color-ink-blue)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginTop: "2rem" }}>
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

        {/* Section 2: Technical Proof & Value Proposition Card */}
        <section style={{ gridColumn: "span 12", marginTop: "2rem" }} aria-label="Technical proof and engineering capabilities">
          <Paper variant="lined" rotation={-0.6} padding="large">
            <header style={{ marginBottom: "1.25rem" }}>
              <TypewriterLabel variant="dymo" rotation={1}>WHY WORK WITH ME // TECHNICAL PROOF</TypewriterLabel>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontStyle: "italic", color: "var(--text-dark)", marginTop: "0.5rem" }}>
                Engineering Standards &amp; Verified Capabilities
              </h2>
            </header>
            
            <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.55", marginBottom: "1.5rem" }}>
              Every feature on this website reflects real engineering practices built directly into the codebase:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
              <div style={{ borderLeft: "3px solid var(--color-ink-red)", paddingLeft: "0.85rem" }}>
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem", fontWeight: 700, color: "var(--color-ink-red)", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                  1. Clean Frontend Architecture
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#333", lineHeight: "1.45" }}>
                  Modular Next.js 14 App Router layout components, React state controls, and strict TypeScript schema definitions for type safety.
                </p>
              </div>

              <div style={{ borderLeft: "3px solid var(--color-ink-blue)", paddingLeft: "0.85rem" }}>
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem", fontWeight: 700, color: "var(--color-ink-blue)", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                  2. Server API Route Caching
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#333", lineHeight: "1.45" }}>
                  Server-side Spotify OAuth token refresh flow with dual in-memory caching to isolate credentials and protect against rate limits.
                </p>
              </div>

              <div style={{ borderLeft: "3px solid var(--color-ink-green)", paddingLeft: "0.85rem" }}>
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem", fontWeight: 700, color: "var(--color-ink-green)", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                  3. Brief Validation &amp; Security
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#333", lineHeight: "1.45" }}>
                  Multi-field contact brief validation with Resend email delivery, honeypot anti-spam traps, and server IP rate limiting.
                </p>
              </div>

              <div style={{ borderLeft: "3px solid var(--color-pencil)", paddingLeft: "0.85rem" }}>
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem", fontWeight: 700, color: "var(--color-pencil)", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                  4. Responsive &amp; Accessible CSS
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#333", lineHeight: "1.45" }}>
                  Custom CSS variables, mobile transform rotation fallbacks down to 375px viewports, focus indicators, and reduced-motion support.
                </p>
              </div>
            </div>
          </Paper>
        </section>

        {/* Section 3: Projects List (Card Hierarchy: NAME -> CATEGORY -> PURPOSE -> TECH -> CHALLENGE -> BUTTONS) */}
        <section id="projects" style={{ gridColumn: "span 12", marginTop: "2rem" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>
            <TypewriterLabel variant="paper" rotation={-1}>Verified Projects &amp; Technical Proof</TypewriterLabel>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {/* Real Project 1: Modern Calculator */}
            <article>
              <Paper variant="light" rotation={1} padding="medium" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <header style={{ marginBottom: "0.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--text-dark)", margin: "0 0 0.25rem 0" }}>
                    Modern Calculator
                  </h3>
                  <TypewriterLabel variant="plain">UTILITY APP</TypewriterLabel>
                </header>

                <p style={{ color: "#333", fontSize: "0.92rem", lineHeight: "1.5", marginBottom: "1rem" }}>
                  An interactive, responsive browser calculator supporting full keyboard hotkey navigation, modulo calculations, and division-by-zero error handling.
                </p>

                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                  {["React", "Next.js", "TypeScript", "JavaScript", "CSS Grid", "Keyboard Event API"].map((tech) => (
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

                <div style={{ fontSize: "0.85rem", color: "#444", marginBottom: "1.5rem", flexGrow: 1, borderLeft: "2px solid var(--color-ink-blue)", paddingLeft: "0.75rem" }}>
                  <strong>Technical Challenge:</strong> Managing global keyboard event listeners without stale closures in React while implementing decimal precision and error recovery.
                </div>

                <div style={{ marginTop: "auto", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <Link href="/projects/modern-calculator/" className="tactile-btn tactile-btn-primary" aria-label="Read case study for Modern Calculator">
                    [ CASE STUDY ]
                  </Link>
                  <Link href="/projects/modern-calculator/" className="tactile-btn" aria-label="Open live demo for Modern Calculator">
                    [ LIVE DEMO ]
                  </Link>
                  <a href="https://github.com/Ramsingh4656/Modern-Calculator" target="_blank" rel="noopener noreferrer" className="tactile-btn" aria-label="View Modern Calculator source code on GitHub">
                    [ SOURCE ]
                  </a>
                </div>
              </Paper>
            </article>

            {/* Real Project 2: AI Multi-Module System */}
            <article>
              <Paper variant="lined" rotation={-1.5} padding="medium" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <header style={{ marginBottom: "0.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--text-dark)", margin: "0 0 0.25rem 0" }}>
                    AI Multi-Module System
                  </h3>
                  <TypewriterLabel variant="plain">PYTHON SCRIPTING / AI</TypewriterLabel>
                </header>

                <p style={{ color: "#333", fontSize: "0.92rem", lineHeight: "1.5", marginBottom: "1rem" }}>
                  A modular Python AI framework supporting multiple AI-powered functionalities through independent, reusable script modules.
                </p>

                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                  {["Python", "AI/LLM APIs", "Modular Architecture", "REST APIs"].map((tech) => (
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

                <div style={{ fontSize: "0.85rem", color: "#444", marginBottom: "1.5rem", flexGrow: 1, borderLeft: "2px solid var(--color-ink-red)", paddingLeft: "0.75rem" }}>
                  <strong>Technical Challenge:</strong> Decoupling script boundaries so new AI capabilities can be registered without modifying the core orchestrator script.
                </div>

                <div style={{ marginTop: "auto", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <Link href="/projects/ai-multi-module-system/" className="tactile-btn tactile-btn-primary" aria-label="Read case study for AI Multi-Module System">
                    [ CASE STUDY ]
                  </Link>
                  <a href="https://multi-module-ai-system.vercel.app/" target="_blank" rel="noopener noreferrer" className="tactile-btn" aria-label="Open live demo for AI Multi-Module System">
                    [ LIVE DEMO ]
                  </a>
                  <a href="https://github.com/Ramsingh4656/MultiModule-AI-System" target="_blank" rel="noopener noreferrer" className="tactile-btn" aria-label="View AI Multi-Module source code on GitHub">
                    [ SOURCE ]
                  </a>
                </div>
              </Paper>
            </article>

            {/* Real Project 3: Portfolio Website */}
            <article>
              <Paper variant="craft" rotation={0.8} padding="medium" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <header style={{ marginBottom: "0.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--text-dark)", margin: "0 0 0.25rem 0" }}>
                    Tactile Portfolio Website
                  </h3>
                  <TypewriterLabel variant="plain">WEB ENGINEERING</TypewriterLabel>
                </header>

                <p style={{ color: "#221e1a", fontSize: "0.92rem", lineHeight: "1.5", marginBottom: "1rem" }}>
                  A Next.js developer portfolio with a custom dark tactile desk design system, TypeScript schemas, and server-cached Spotify OAuth integration.
                </p>

                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                  {["Next.js 14", "React", "TypeScript", "CSS Custom Variables", "Spotify Web API", "OAuth 2.0", "Vercel"].map((tech) => (
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

                <div style={{ fontSize: "0.85rem", color: "#332c25", marginBottom: "1.5rem", flexGrow: 1, borderLeft: "2px solid #221e1a", paddingLeft: "0.75rem" }}>
                  <strong>Technical Challenge:</strong> Developing server-side OAuth token refresh flows, in-memory caching to prevent HTTP 429 rate limits, and mobile breakpoint rotation clamping.
                </div>

                <div style={{ marginTop: "auto", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <Link href="/projects/portfolio-website/" className="tactile-btn tactile-btn-primary" aria-label="Read case study for Portfolio Website">
                    [ CASE STUDY ]
                  </Link>
                  <Link href="/" className="tactile-btn" aria-label="View live demo of portfolio website">
                    [ LIVE DEMO ]
                  </Link>
                  <a href="https://github.com/Ramsingh4656/portfolio" target="_blank" rel="noopener noreferrer" className="tactile-btn" aria-label="View Portfolio Website source code on GitHub">
                    [ SOURCE ]
                  </a>
                </div>
              </Paper>
            </article>
          </div>
        </section>

        {/* Section 4: Services mapped to real proof */}
        <section id="services" className="grid-services-card" style={{ marginTop: "2rem" }}>
          <Paper variant="craft" rotation={-1} padding="medium">
            <h2 style={{ marginBottom: "1.25rem" }}>
              <TypewriterLabel variant="paper" rotation={1.5}>Freelance Web Services</TypewriterLabel>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#221e1a", marginBottom: "1.5rem", lineHeight: "1.5" }}>
              I design and build fast, responsive, accessible web layouts backed by inspected project code:
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span>{" "}
                <Link href="/services/web-development/" style={{ color: "#1a1816", textDecoration: "underline", fontWeight: 700 }}>
                  Web Development Services
                </Link>
                <span style={{ fontSize: "0.78rem", color: "#444", display: "block", marginTop: "0.15rem", fontFamily: "var(--font-primary)" }}>
                  &rarr; Proof: Modern Calculator &amp; Portfolio Website
                </span>
              </li>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span>{" "}
                <Link href="/services/frontend-development/" style={{ color: "#1a1816", textDecoration: "underline", fontWeight: 700 }}>
                  Frontend Development (React / Next.js)
                </Link>
                <span style={{ fontSize: "0.78rem", color: "#444", display: "block", marginTop: "0.15rem", fontFamily: "var(--font-primary)" }}>
                  &rarr; Proof: Next.js App Router &amp; TypeScript interfaces
                </span>
              </li>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span>{" "}
                <Link href="/services/landing-pages/" style={{ color: "#1a1816", textDecoration: "underline", fontWeight: 700 }}>
                  Landing Page Development
                </Link>
                <span style={{ fontSize: "0.78rem", color: "#444", display: "block", marginTop: "0.15rem", fontFamily: "var(--font-primary)" }}>
                  &rarr; Proof: AI Multi-Module system page
                </span>
              </li>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span>{" "}
                <Link href="/services/website-redesign/" style={{ color: "#1a1816", textDecoration: "underline", fontWeight: 700 }}>
                  Website Redesign &amp; Modernization
                </Link>
                <span style={{ fontSize: "0.78rem", color: "#444", display: "block", marginTop: "0.15rem", fontFamily: "var(--font-primary)" }}>
                  &rarr; Proof: HTML-to-Next.js refactor case study
                </span>
              </li>
            </ul>
            <div style={{ marginTop: "1.75rem" }}>
              <Link href="/services/" className="tactile-btn" aria-label="Explore all web development services">
                [ EXPLORE ALL SERVICES &rarr; ]
              </Link>
            </div>
          </Paper>
        </section>

        {/* Section 5: About Section Teaser with Recruiter Signals */}
        <section className="grid-navigation-card" style={{ marginTop: "2rem" }} aria-label="Biography and Notes shortcuts">
          <Paper variant="light" rotation={-1.5} padding="medium">
            <h2 style={{ marginBottom: "1rem" }}>
              <TypewriterLabel variant="plain">About Ram Singh</TypewriterLabel>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#333", lineHeight: "1.5", marginBottom: "1.25rem" }}>
              Freelance web developer based in Mumbai, India. Specialized in Next.js, React, TypeScript, Frontend Development, Web Development, REST API Integration, Responsive Design, Git/GitHub, and Vercel deployments.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/about/" className="tactile-btn" aria-label="Read full biography and developer background">
                [ ABOUT RAM SINGH &rarr; ]
              </Link>
              <Link href="/skills/" className="tactile-btn" aria-label="View verified skills and technical evidence">
                [ SEE SKILLS &amp; PROOF &rarr; ]
              </Link>
            </div>
          </Paper>

          {/* Section 6: Notes Teaser */}
          <Paper variant="light" rotation={1.5} padding="medium" id="notes-lab">
            <h2 style={{ marginBottom: "1rem" }}>
              <TypewriterLabel variant="plain">Field Notes &amp; Lab</TypewriterLabel>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#333", lineHeight: "1.5", marginBottom: "1.25rem" }}>
              First-hand technical build logs covering Spotify OAuth caching, tactile CSS paper architecture, dynamic case study schemas, and freelance platform engineering.
            </p>
            <Link href="/notes/" className="tactile-btn" aria-label="Explore field notes and technical lab reports">
              [ READ FIELD NOTES &rarr; ]
            </Link>
          </Paper>
        </section>

        {/* Section 7: Final Conversion CTA Note */}
        <section className="grid-cta-card" aria-label="Booking call to action">
          <Paper variant="lined" rotation={-0.5} padding="large">
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontStyle: "italic", color: "var(--text-dark)", marginBottom: "0.75rem" }}>
              HAVE SOMETHING IN MIND?
            </h2>
            <p style={{ color: "#333", fontSize: "1.05rem", lineHeight: "1.5", marginBottom: "1.25rem", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
              Send me your project brief. We can discuss your website parameters, frontend requirements, reference designs, and desired timeline.
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-ink-blue)", marginBottom: "1.5rem" }}>
              Email directly: <a href="mailto:hello@ramsingh.dev" style={{ color: "var(--color-ink-blue)", textDecoration: "underline", fontWeight: 700 }}>hello@ramsingh.dev</a>
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
