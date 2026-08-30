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
    <main className="home-workspace">
      {/* Workspace physical desk background */}
      <DeskBackground />

      <div className="home-layout-grid" style={{ zIndex: 1 }}>
        
        {/* Section 1: Hero Desk Sheet */}
        <section className="grid-hero-card" aria-label="Introduction">
          <Paper variant="lined" rotation={-1} padding="large">
            <header style={{ marginBottom: "2rem" }}>
              {/* Visually styled, semantically correct H1 */}
              <h1 style={{ fontSize: "1.1rem", fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "0.05em", color: "var(--color-ink-red)", textTransform: "uppercase", margin: 0 }}>
                Ram Singh — Freelance Web Developer
              </h1>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginTop: "0.25rem" }}>
                Mumbai, India
              </span>
            </header>

            <div style={{ margin: "2.5rem 0" }}>
              <div 
                style={{ 
                  fontFamily: "var(--font-serif)", 
                  fontSize: "clamp(2rem, 5.5vw, 3.25rem)", 
                  fontWeight: 700, 
                  fontStyle: "italic", 
                  lineHeight: 1.1, 
                  color: "var(--text-dark)", 
                  marginBottom: "1.5rem" 
                }}
              >
                THIS IS NOT A PORTFOLIO.
              </div>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.15rem, 3.5vw, 1.5rem)", lineHeight: "1.45", color: "#2c251f", maxWidth: "520px", margin: 0 }}>
                I design and build fast, responsive websites and web experiences for people with things to build, sell, or share.
              </p>
            </div>

            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginTop: "3rem" }}>
              <Link href="/contact/" className="tactile-btn tactile-btn-primary" aria-label="Book a project with Ram Singh">
                [ BOOK A PROJECT ]
              </Link>
              <Link href="/projects/" className="tactile-btn" aria-label="Explore Ram Singh's work">
                [ EXPLORE MY WORK ]
              </Link>
            </div>
          </Paper>
        </section>

        {/* Right Side: Identity Polaroid & Projects Card */}
        <section className="grid-projects-card" aria-label="Visual identity and selected projects teaser">
          <Polaroid
            src="/assets/images/Profile.jpg"
            alt="Freelance developer Ram Singh photographed at desk"
            caption="me @ desk, building things"
            rotation={-2.5}
            hasTape={true}
            tapeRotation={1}
            width={260}
            height={260}
          />
          
          <Link href="/projects/" style={{ textDecoration: "none", width: "100%", maxWidth: "320px" }}>
            <Paper variant="grid" rotation={1.5} padding="medium" style={{ cursor: "pointer", textAlign: "center" }}>
              <div className="ascii-box-graphic" aria-hidden="true">
{`┌───────────────┐
│   PROJECTS    │
│               │
│   selected    │
│   work        │
└───────────────┘`}
              </div>
              <div>
                <TypewriterLabel variant="plain" rotation={-1}>
                  OPEN PROJECT FILING CABINET &rarr;
                </TypewriterLabel>
              </div>
            </Paper>
          </Link>
        </section>

        {/* Section 2: Projects List */}
        <section id="projects" style={{ gridColumn: "span 12", marginTop: "2rem" }}>
          <h2 style={{ marginBottom: "2rem" }}>
            <TypewriterLabel variant="paper" rotation={-1}>Projects & Selected Work</TypewriterLabel>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {/* Real Project 1: Modern Calculator */}
            <article>
              <Paper variant="light" rotation={1} padding="medium" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <header style={{ marginBottom: "1rem" }}>
                  <TypewriterLabel variant="plain">01. TOOL</TypewriterLabel>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--text-dark)", marginTop: "0.25rem" }}>
                    Modern Calculator
                  </h3>
                </header>
                <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.5", flexGrow: 1 }}>
                  A fully functional calculator solving the need for accessible mathematical calculations with keyboard support and responsive grid design.
                </p>
                <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                  <Link href="/projects/modern-calculator/" className="tactile-btn tactile-btn-primary" aria-label="Open Modern Calculator demo">
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
                <header style={{ marginBottom: "1rem" }}>
                  <TypewriterLabel variant="plain">02. SYSTEM</TypewriterLabel>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--text-dark)", marginTop: "0.25rem" }}>
                    AI Multi-Module System
                  </h3>
                </header>
                <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.5", flexGrow: 1 }}>
                  A modular AI implementation supporting multiple functionalities through independent modules. Showcases scalable Python scripting and AI integration.
                </p>
                <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                  <a href="https://multi-module-ai-system.vercel.app/" target="_blank" rel="noopener noreferrer" className="tactile-btn tactile-btn-primary" aria-label="Open AI Multi-Module system app">
                    [ LIVE APP ]
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
                <header style={{ marginBottom: "1rem" }}>
                  <TypewriterLabel variant="plain">03. EXPERIMENT</TypewriterLabel>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--text-dark)", marginTop: "0.25rem" }}>
                    Portfolio Website
                  </h3>
                </header>
                <p style={{ color: "#221e1a", fontSize: "0.95rem", lineHeight: "1.5", flexGrow: 1 }}>
                  The very codebase you are navigating. Built using Next.js with a highly optimized custom visual design system modeled after physical dark desks.
                </p>
                <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                  <Link href="/" className="tactile-btn tactile-btn-primary" aria-label="Open homepage demo">
                    [ LIVE DEMO ]
                  </Link>
                  <a href="https://github.com/Ramsingh4656/portfolio" target="_blank" rel="noopener noreferrer" className="tactile-btn" aria-label="View Portfolio source code on GitHub">
                    [ SOURCE ]
                  </a>
                </div>
              </Paper>
            </article>
          </div>
        </section>

        {/* Section 3: Services */}
        <section id="services" className="grid-services-card" style={{ marginTop: "2rem" }}>
          <Paper variant="craft" rotation={-1} padding="medium">
            <h2 style={{ marginBottom: "1.5rem" }}>
              <TypewriterLabel variant="paper" rotation={1.5}>Web Development Services</TypewriterLabel>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#221e1a", marginBottom: "1.5rem", lineHeight: "1.5" }}>
              I construct fast, optimized web spaces configured directly for conversions. Simple setups, complex modules.
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#2c251f", fontWeight: 700 }}>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span> WEB DEVELOPMENT
              </li>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span> FRONTEND DEVELOPMENT
              </li>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span> RESPONSIVE WEBSITES
              </li>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span> LANDING PAGES
              </li>
              <li>
                <span style={{ color: "var(--color-ink-red)" }}>&bull;</span> WEBSITE REDESIGNS
              </li>
            </ul>
          </Paper>
        </section>

        {/* Section 4: Currently Playing */}
        <section className="grid-spotify-card" style={{ marginTop: "2rem" }} aria-label="Spotify integration placeholder">
          <Paper variant="dark" rotation={1.2} padding="medium">
            <div style={{ marginBottom: "1.5rem" }}>
              <TypewriterLabel variant="dymo" rotation={-1.5}>
                CURRENTLY PLAYING
              </TypewriterLabel>
            </div>
            <CurrentlyPlaying />
          </Paper>
        </section>

        {/* Section 5: About Section Teaser */}
        <section className="grid-navigation-card" style={{ marginTop: "2rem" }} aria-label="Biography and Notes shortcuts">
          <Paper variant="light" rotation={-1.5} padding="medium">
            <h2 style={{ marginBottom: "1rem" }}>
              <TypewriterLabel variant="plain">About Ram Singh</TypewriterLabel>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#333", lineHeight: "1.5", marginBottom: "1.5rem" }}>
              First-year BSc-IT student focusing on web engineering, responsive layout structures, and cloud deployments.
            </p>
            <Link href="/about/" className="tactile-btn" aria-label="Read more about Ram Singh">
              [ READ MY STORY &rarr; ]
            </Link>
          </Paper>

          {/* Section 6: Notes Teaser */}
          <Paper variant="light" rotation={1.5} padding="medium" id="notes-lab">
            <h2 style={{ marginBottom: "1rem" }}>
              <TypewriterLabel variant="plain">Notes / Lab</TypewriterLabel>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#333", lineHeight: "1.5", marginBottom: "1.5rem" }}>
              Thoughts, experiments, and code design rules I discover during study.
            </p>
            <Link href="/design-system/" className="tactile-btn" aria-label="Explore the design system laboratory">
              [ OPEN LAB &rarr; ]
            </Link>
          </Paper>
        </section>

        {/* Section 7: Final Conversion CTA Note */}
        <section className="grid-cta-card" aria-label="Booking call to action">
          <Paper variant="lined" rotation={-0.5} padding="large">
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontStyle: "italic", color: "var(--text-dark)", marginBottom: "1rem" }}>
              READY TO BUILD SOMETHING?
            </h2>
            <p style={{ color: "#333", fontSize: "1.05rem", lineHeight: "1.5", marginBottom: "2rem", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
              Let's talk about your business website, landing page, or custom frontend experience.
            </p>
            
            <div style={{ margin: "2rem 0" }}>
              <HandwrittenNote color="blue" tilt={-1.5}>
                let's build your project together
              </HandwrittenNote>
            </div>

            <div style={{ marginTop: "2.5rem" }}>
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
