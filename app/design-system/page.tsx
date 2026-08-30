import React from "react";
import DeskBackground from "@/components/ui/DeskBackground";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import Polaroid from "@/components/ui/Polaroid";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import Link from "next/link";

export const metadata = {
  title: "Design System Laboratory — Development Preview",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemPage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", padding: "8rem 2rem 4rem 2rem", overflow: "hidden" }}>
      {/* Visual background for the entire design system workspace */}
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <header style={{ marginBottom: "4rem", borderBottom: "1px dashed var(--border-secondary)", paddingBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem" }}>
            <TypewriterLabel variant="dymo" rotation={-1}>DEV ONLY</TypewriterLabel>
            <TypewriterLabel variant="plain">LABORATORY</TypewriterLabel>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, fontStyle: "italic", margin: "1rem 0" }}>
            Visual Design System
          </h1>
          <p style={{ maxWidth: "600px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
            A tactile, low-light workspace concept representing objects arranged on a dark desk. Text is readable HTML/CSS, responsive, and accessible.
          </p>
        </header>

        {/* Section 1: Typography */}
        <section style={{ marginBottom: "5rem" }}>
          <TypewriterLabel variant="paper" rotation={1} style={{ marginBottom: "2rem" }}>01. Typography System</TypewriterLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            <Paper variant="light" rotation={-1} padding="medium">
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontStyle: "italic", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                Editorial Serif
              </h3>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "#222" }}>
                Used for display typography, section headers, and quotes. Resembles printed book pages.
              </p>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.25rem", color: "#444", marginTop: "1rem" }}>
                "Control can sometimes be an illusion."
              </p>
            </Paper>

            <Paper variant="dark" rotation={1} padding="medium">
              <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.2rem", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                Body Sans-serif (Inter)
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                High readability font used for general paragraphs, list items, and main interface descriptions. Completely legible contrast.
              </p>
            </Paper>

            <Paper variant="craft" rotation={-0.5} padding="medium">
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", fontWeight: 700, borderBottom: "1px solid rgba(0,0,0,0.15)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                Typewriter / Monospace
              </h3>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-dark)" }}>
                USED FOR LABELS, SUBTEXTS, FILE DETAILS, AND CODE blocks. EMULATES EMBOSSED LABEL TAPES OR SHEET TYPEWRITER STRIPS.
              </p>
            </Paper>
          </div>
        </section>

        {/* Section 2: Reusable Paper Sheets */}
        <section style={{ marginBottom: "5rem" }}>
          <TypewriterLabel variant="paper" rotation={-0.5} style={{ marginBottom: "2rem" }}>02. Paper Variants</TypewriterLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem" }}>
            
            <Paper variant="light" rotation={1}>
              <h4 style={{ marginBottom: "1rem" }}>Classic Cream Paper</h4>
              <p>Standard off-white sheet representation with physical shadows. Used for high contrast content blocks.</p>
            </Paper>

            <Paper variant="lined" rotation={-1.5}>
              <h4 style={{ marginBottom: "0.5rem", fontFamily: "var(--font-serif)", fontStyle: "italic" }}>Notebook Sheet</h4>
              <p>Lined paper overlay with red margin rules simulating a creative notebook page.</p>
              <p style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.5rem", color: "var(--color-ink-blue)", marginTop: "1rem" }}>
                Remember to commit no changes to git.
              </p>
            </Paper>

            <Paper variant="grid" rotation={0.8}>
              <h4 style={{ marginBottom: "1rem" }}>Grid Paper</h4>
              <p>Blueprint / technical look overlay. Ideal for displaying project blueprints or metrics.</p>
            </Paper>

            <Paper variant="craft" rotation={-1}>
              <h4 style={{ marginBottom: "1rem" }}>Craft Cardboard</h4>
              <p>Tough cardboard texture styling, great for sub-notes, footers, or accent banners.</p>
            </Paper>
          </div>
        </section>

        {/* Section 3: Tape & Polaroid components */}
        <section style={{ marginBottom: "5rem" }}>
          <TypewriterLabel variant="paper" rotation={1.2} style={{ marginBottom: "2rem" }}>03. Polaroid & Tape System</TypewriterLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem", justifyContent: "center", alignItems: "flex-start" }}>
            
            <div style={{ position: "relative", padding: "1.5rem" }}>
              <Polaroid 
                src="/assets/images/Profile.jpg" 
                alt="Profile view of Ram Singh" 
                caption="Ram Singh - Workspace 2026"
                rotation={-3}
                hasTape={true}
                tapeRotation={2}
              />
            </div>

            <div style={{ position: "relative", padding: "1.5rem" }}>
              <Polaroid 
                src="/assets/images/Profile.jpg" 
                alt="Profile view of Ram Singh" 
                caption="no tape, right tilt"
                rotation={2}
              />
            </div>

            <div style={{ maxWidth: "320px", display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}>
              <Paper variant="dark" rotation={0.5} padding="medium">
                <h4 style={{ marginBottom: "0.5rem" }}>Masking Tape component</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Pure CSS-based semi-transparent masking tape with custom jagged torn edges and backdrop blur to blend with objects beneath it.
                </p>
              </Paper>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <div style={{ position: "relative", width: "100px", height: "40px", background: "rgba(255,255,255,0.05)" }}>
                  <Tape rotation={5} position="top-center" width="80px" />
                </div>
                <div style={{ position: "relative", width: "100px", height: "40px", background: "rgba(255,255,255,0.05)" }}>
                  <Tape rotation={-15} position="top-left" width="80px" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Handwritten & Typewriter Labels */}
        <section style={{ marginBottom: "5rem" }}>
          <TypewriterLabel variant="paper" rotation={-1} style={{ marginBottom: "2rem" }}>04. Details & Annotations</TypewriterLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            <Paper variant="lined" rotation={-0.5} padding="medium">
              <h4 style={{ marginBottom: "1rem", fontSize: "0.9rem", textTransform: "uppercase" }}>Handwritten Accents</h4>
              <p style={{ fontSize: "0.95rem" }}>
                Used exclusively for labels and personality:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
                <div>Blue Ink: <HandwrittenNote color="blue">let's build something</HandwrittenNote></div>
                <div>Red Ink: <HandwrittenNote color="red">important reminder</HandwrittenNote></div>
                <div>Green Ink: <HandwrittenNote color="green">calculator works</HandwrittenNote></div>
                <div>Pencil Lead: <HandwrittenNote color="pencil">pencil sketch notes</HandwrittenNote></div>
              </div>
            </Paper>

            <Paper variant="dark" rotation={1} padding="medium">
              <h4 style={{ marginBottom: "1rem", fontSize: "0.9rem", textTransform: "uppercase" }}>Typewriter / Labels</h4>
              <p style={{ fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                Tactile label styling for categories and navigation indicators:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
                <div>Paper Label: <TypewriterLabel variant="paper" rotation={1.5}>PROJECTS</TypewriterLabel></div>
                <div>Dymo Embossed: <TypewriterLabel variant="dymo" rotation={-2}>CURRENTLY PLAYING</TypewriterLabel></div>
                <div>Plain Monospace: <TypewriterLabel variant="plain">ABOUT</TypewriterLabel></div>
              </div>
            </Paper>
          </div>
        </section>

        {/* System Settings & Verification */}
        <section style={{ borderTop: "1px dashed var(--border-secondary)", paddingTop: "3rem" }}>
          <Paper variant="craft" rotation={0.2} padding="medium">
            <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", marginBottom: "1rem" }}>System Verification Checklist</h3>
            <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <li><strong>Responsive:</strong> Content shifts, rotations scale down (multiplied by 0.25) on viewport sizes &lt; 768px.</li>
              <li><strong>Accessibility:</strong> High readable body text, focus rings styled, reduced-motion cancels rotations.</li>
              <li><strong>Sitemap Isolation:</strong> Excluded from sitemap via metadata robots headers.</li>
              <li><strong>No content invented:</strong> Uses dummy structural descriptors strictly for demonstration.</li>
            </ul>
            <div style={{ marginTop: "2rem" }}>
              <Link href="/" className="btn btn-secondary" style={{ backgroundColor: "#1e1b18" }}>
                Back to Home Page
              </Link>
            </div>
          </Paper>
        </section>
      </div>
    </main>
  );
}
