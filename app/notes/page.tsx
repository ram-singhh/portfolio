import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";
import { notesData } from "@/data/notes";

export const metadata: Metadata = {
  title: "Field Notes & Technical Lab Reports",
  description: "First-hand technical build logs, architecture breakdowns, and engineering notes written by freelance web developer Ram Singh.",
  alternates: {
    canonical: "/notes/",
  },
  openGraph: {
    title: "Field Notes & Technical Lab Reports | Ram Singh",
    description: "First-hand technical build logs, architecture breakdowns, and engineering notes written by freelance web developer Ram Singh.",
    url: "/notes/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Notes & Technical Lab Reports | Ram Singh",
    description: "First-hand technical build logs, architecture breakdowns, and engineering notes written by freelance web developer Ram Singh.",
  },
};

export default function NotesIndex() {
  return (
    <main className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "8rem" }}>
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", maxWidth: "800px" }}>
        
        {/* Header Sheet */}
        <section aria-labelledby="notes-h1" style={{ marginBottom: "4rem", textAlign: "center" }}>
          <div style={{ transform: "rotate(-0.5deg)", display: "inline-block", width: "100%" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ margin: "0 auto", textAlign: "left" }}>
              <div style={{ marginBottom: "0.75rem" }}>
                <TypewriterLabel variant="dymo" rotation={1}>
                  LABORATORY // FIELD NOTES
                </TypewriterLabel>
              </div>
              <h1 id="notes-h1" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2.25rem, 5.5vw, 3.25rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                margin: "0 0 1rem 0" 
              }}>
                Field Notes &amp; Lab Reports
              </h1>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "1rem", color: "#333", lineHeight: "1.55", margin: 0 }}>
                A first-hand technical publishing log. Architectural breakdowns, performance tests, and engineering learnings documented directly from real software builds and web development projects.
              </p>
            </Paper>
          </div>
        </section>

        {/* Notes Document Filing List */}
        <section aria-label="Field notes list" style={{ display: "flex", flexDirection: "column", gap: "3.5rem", marginBottom: "5rem" }}>
          {notesData.map((note, idx) => {
            const rotation = idx % 2 === 0 ? -1 : 0.8;
            const paperVariant = idx % 3 === 0 ? "craft" : idx % 3 === 1 ? "light" : "lined";
            const noteIndexStr = `NOTE_0${idx + 1}`;

            return (
              <article key={note.slug} style={{ transform: `rotate(${rotation}deg)` }}>
                <Paper variant={paperVariant} rotation={0} padding="large" style={{ position: "relative" }}>
                  <Tape rotation={idx % 2 === 0 ? 1.8 : -1.5} position="top-right" width="90px" />

                  <header style={{ marginBottom: "1.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <TypewriterLabel variant="dymo" rotation={-1}>{noteIndexStr}</TypewriterLabel>
                      <span style={{ 
                        fontFamily: "var(--font-mono)", 
                        fontSize: "0.75rem", 
                        fontWeight: "bold",
                        color: "var(--color-ink-red)"
                      }}>
                        // {note.category}
                      </span>
                    </div>

                    <h2 style={{ 
                      fontFamily: "var(--font-serif)", 
                      fontSize: "1.75rem", 
                      fontWeight: 700, 
                      fontStyle: "italic", 
                      color: "var(--text-dark)", 
                      margin: "0 0 0.5rem 0",
                      lineHeight: 1.2
                    }}>
                      {note.title}
                    </h2>

                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", display: "flex", gap: "1rem" }}>
                      <span>PUBLISHED: {note.date}</span>
                      <span>&bull;</span>
                      <span>{note.readingTime}</span>
                    </div>
                  </header>

                  <p style={{ 
                    fontFamily: "var(--font-primary)", 
                    fontSize: "0.95rem", 
                    lineHeight: "1.55", 
                    color: paperVariant === "craft" ? "#2c251f" : "#333", 
                    marginBottom: "1.5rem" 
                  }}>
                    {note.description}
                  </p>

                  {/* Tags Badges */}
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                    {note.tags.map((tag) => (
                      <span 
                        key={tag}
                        style={{ 
                          fontFamily: "var(--font-mono)", 
                          fontSize: "0.7rem", 
                          fontWeight: "bold",
                          backgroundColor: "rgba(0,0,0,0.06)",
                          border: "1px solid rgba(0,0,0,0.12)",
                          borderRadius: "2px",
                          padding: "1px 5px",
                          color: "#333"
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link 
                      href={`/notes/${note.slug}/`} 
                      className="tactile-btn tactile-btn-primary"
                      aria-label={`Read full note: ${note.title}`}
                    >
                      [ READ FULL NOTE &rarr; ]
                    </Link>
                  </div>
                </Paper>
              </article>
            );
          })}
        </section>

        {/* CTA Banner */}
        <section aria-labelledby="notes-cta-heading" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(1deg)", width: "100%", maxWidth: "560px" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <h2 id="notes-cta-heading" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.8rem", 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem" 
              }}>
                HAVE A SIMILAR PROJECT IN MIND?
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.45", marginBottom: "1.5rem" }}>
                Let's apply these engineering solutions and design approaches to your website or frontend application.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1.5}>
                  let's build your solution
                </HandwrittenNote>
              </div>

              <div>
                <Link href="/contact/" className="tactile-btn tactile-btn-primary" aria-label="Book a web development project with Ram Singh">
                  [ BOOK A PROJECT ]
                </Link>
              </div>
            </Paper>
          </div>
        </section>

      </div>
    </main>
  );
}
