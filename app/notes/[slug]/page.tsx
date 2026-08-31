import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";
import { notesData } from "@/data/notes";
import { projectsData } from "@/data/projects";

interface NotePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return notesData.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const note = notesData.find((n) => n.slug === params.slug);
  if (!note) {
    return {};
  }

  const title = `${note.title} | Ram Singh`;
  return {
    title,
    description: note.description,
    alternates: {
      canonical: `/notes/${note.slug}/`,
    },
    openGraph: {
      title,
      description: note.description,
      url: `/notes/${note.slug}/`,
      type: "article",
      publishedTime: note.date,
      authors: ["Ram Singh"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: note.description,
    },
  };
}

export default function NotePage({ params }: NotePageProps) {
  const note = notesData.find((n) => n.slug === params.slug);

  if (!note) {
    notFound();
  }

  // Find related project details from projectsData
  const relatedProjectObjects = note.relatedProjects
    .map((slug) => projectsData.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <main className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "8rem" }}>
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", maxWidth: "800px" }}>
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
          <ol style={{ 
            display: "flex", 
            gap: "0.5rem", 
            listStyle: "none", 
            padding: 0, 
            margin: 0, 
            fontFamily: "var(--font-mono)", 
            fontSize: "0.8rem", 
            color: "var(--text-muted)", 
            alignItems: "center", 
            flexWrap: "wrap" 
          }}>
            <li>
              <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>HOME</Link>
            </li>
            <li aria-hidden="true" style={{ margin: "0 0.2rem" }}>&gt;</li>
            <li>
              <Link href="/notes/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>NOTES</Link>
            </li>
            <li aria-hidden="true" style={{ margin: "0 0.2rem" }}>&gt;</li>
            <li style={{ color: "var(--color-ink-red)", fontWeight: "bold" }}>
              {note.category}
            </li>
          </ol>
        </nav>

        {/* Back Link to Notes Index */}
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/notes/" className="tactile-btn" style={{ textDecoration: "none" }} aria-label="Back to field notes index">
            [ &larr; BACK TO NOTES INDEX ]
          </Link>
        </div>

        {/* Breadcrumb JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.ramsingh.dev/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Notes",
                  "item": "https://www.ramsingh.dev/notes/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": note.title,
                  "item": `https://www.ramsingh.dev/notes/${note.slug}/`
                }
              ]
            })
          }}
        />

        {/* Article JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": note.title,
              "description": note.description,
              "datePublished": note.date,
              "dateModified": note.date,
              "author": {
                "@type": "Person",
                "name": "Ram Singh",
                "url": "https://www.ramsingh.dev/"
              },
              "publisher": {
                "@type": "Person",
                "name": "Ram Singh",
                "url": "https://www.ramsingh.dev/"
              },
              "mainEntityOfPage": `https://www.ramsingh.dev/notes/${note.slug}/`
            })
          }}
        />

        {/* 1. Header Sheet */}
        <section aria-labelledby="note-title" style={{ marginBottom: "3.5rem" }}>
          <Paper variant="craft" rotation={-0.8} padding="large" style={{ position: "relative" }}>
            <Tape rotation={-2} position="top-left" width="105px" />
            
            <header>
              <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                <TypewriterLabel variant="dymo" rotation={1}>
                  FIELD NOTE // {note.category}
                </TypewriterLabel>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#2c251f", fontWeight: 700 }}>
                  {note.date} &bull; {note.readingTime}
                </div>
              </div>

              <h1 id="note-title" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2rem, 5.5vw, 3.25rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                lineHeight: "1.15", 
                margin: "0 0 1.25rem 0" 
              }}>
                {note.title}
              </h1>

              <p style={{ 
                fontFamily: "var(--font-primary)", 
                fontSize: "1.1rem", 
                lineHeight: "1.5", 
                color: "#2c251f", 
                fontWeight: 500, 
                margin: "0 0 1.75rem 0" 
              }}>
                {note.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {note.tags.map((tag) => (
                  <span 
                    key={tag}
                    style={{ 
                      fontFamily: "var(--font-mono)", 
                      fontSize: "0.75rem", 
                      fontWeight: "bold",
                      backgroundColor: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.15)",
                      borderRadius: "2px",
                      padding: "2px 6px",
                      color: "#222"
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>
          </Paper>
        </section>

        {/* 2. The Context Sheet */}
        <section aria-labelledby="section-context" style={{ marginBottom: "3.5rem" }}>
          <Paper variant="lined" rotation={1.2} padding="large">
            <h2 id="section-context" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--color-ink-red)", 
              textTransform: "uppercase",
              marginBottom: "1.25rem"
            }}>
              01. THE CONTEXT
            </h2>
            <p style={{ fontFamily: "var(--font-primary)", fontSize: "1rem", lineHeight: "1.65", color: "#1a1816", margin: 0 }}>
              {note.context}
            </p>
          </Paper>
        </section>

        {/* 3. The Approach Sheet */}
        <section aria-labelledby="section-approach" style={{ marginBottom: "3.5rem" }}>
          <Paper variant="light" rotation={-1.2} padding="large" style={{ position: "relative" }}>
            <Tape rotation={2.5} position="top-right" width="85px" />

            <h2 id="section-approach" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--color-ink-blue)", 
              textTransform: "uppercase",
              marginBottom: "1.25rem"
            }}>
              02. THE APPROACH
            </h2>
            <p style={{ fontFamily: "var(--font-primary)", fontSize: "1rem", lineHeight: "1.65", color: "#222", margin: 0 }}>
              {note.approach}
            </p>
          </Paper>
        </section>

        {/* 4. The Implementation Sheet */}
        <section aria-labelledby="section-implementation" style={{ marginBottom: "3.5rem" }}>
          <Paper variant="grid" rotation={0.6} padding="large">
            <h2 id="section-implementation" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "1.25rem"
            }}>
              03. THE IMPLEMENTATION
            </h2>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", marginBottom: "2rem" }}>
              {note.implementation.intro}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {note.implementation.sections.map((sec, idx) => (
                <div key={idx}>
                  <h3 style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontSize: "1.05rem", 
                    fontWeight: 700, 
                    color: "var(--color-ink-blue)", 
                    marginBottom: "0.75rem" 
                  }}>
                    {sec.heading}
                  </h3>

                  <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#222", marginBottom: "1rem" }}>
                    {sec.text}
                  </p>

                  {sec.codeSnippet && (
                    <div style={{ margin: "1rem 0" }}>
                      <pre style={{ 
                        backgroundColor: "#161514", 
                        color: "#f0f0f0", 
                        padding: "1.25rem", 
                        borderRadius: "4px", 
                        overflowX: "auto", 
                        fontSize: "0.85rem", 
                        fontFamily: "var(--font-mono)",
                        lineHeight: 1.45,
                        border: "1px solid rgba(255,255,255,0.15)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                        margin: "0 0 0.5rem 0"
                      }}>
                        <code>{sec.codeSnippet.code}</code>
                      </pre>
                      <p style={{ 
                        fontFamily: "var(--font-mono)", 
                        fontSize: "0.8rem", 
                        color: "var(--text-muted)", 
                        fontStyle: "italic", 
                        margin: 0 
                      }}>
                        // {sec.codeSnippet.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Paper>
        </section>

        {/* 5. What Changed & What I Learned Sheet */}
        <section aria-label="Changes and learnings" style={{ marginBottom: "3.5rem" }}>
          <Paper variant="lined" rotation={-0.6} padding="large">
            <h2 id="section-what-changed" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.2rem", 
              fontWeight: 700, 
              color: "var(--color-ink-green)", 
              textTransform: "uppercase",
              marginBottom: "1rem"
            }}>
              04. WHAT CHANGED (VERIFIED)
            </h2>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "var(--font-primary)", fontSize: "0.95rem", color: "#1a1816" }}>
              {note.whatChanged.map((item, idx) => (
                <li key={idx} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--color-ink-green)", fontWeight: "bold" }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 id="section-learned" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.2rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "1rem"
            }}>
              05. WHAT I LEARNED
            </h2>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "var(--font-primary)", fontSize: "0.95rem", color: "#1a1816" }}>
              {note.whatILearned.map((item, idx) => (
                <li key={idx} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--color-ink-red)", fontWeight: "bold" }}>&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Paper>
        </section>

        {/* 6. Related Work & Services Sheet */}
        <section aria-labelledby="section-related" style={{ marginBottom: "4rem" }}>
          <Paper variant="craft" rotation={0.8} padding="large">
            <h2 id="section-related" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.2rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              06. RELATED WORK &amp; SERVICES
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
              {/* Related Projects */}
              {relatedProjectObjects.length > 0 && (
                <div>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--color-ink-red)", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                    Related Case Studies:
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {relatedProjectObjects.map((p) => p && (
                      <div key={p.slug} style={{ backgroundColor: "rgba(255,255,255,0.4)", border: "1px solid rgba(0,0,0,0.1)", padding: "1rem", borderRadius: "4px" }}>
                        <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontStyle: "italic", margin: "0 0 0.25rem 0", color: "var(--text-dark)" }}>
                          {p.title}
                        </h4>
                        <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.85rem", color: "#333", margin: "0 0 0.75rem 0" }}>
                          {p.shortDescription}
                        </p>
                        <Link 
                          href={p.slug === "modern-calculator" ? "/projects/modern-calculator/" : `/projects/${p.slug}/`} 
                          className="tactile-btn tactile-btn-primary" 
                          style={{ fontSize: "0.75rem", textDecoration: "none" }}
                          aria-label={`Explore case study for ${p.title}`}
                        >
                          [ READ CASE STUDY &rarr; ]
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              {note.relatedServices.length > 0 && (
                <div>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--color-ink-blue)", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                    Related Freelance Services:
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
                    {note.relatedServices.map((svc) => (
                      <li key={svc.href}>
                        <span style={{ color: "var(--color-ink-blue)" }}>&bull;</span>{" "}
                        <Link href={svc.href} style={{ color: "var(--text-dark)", textDecoration: "underline", fontWeight: 700 }}>
                          {svc.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Paper>
        </section>

        {/* 7. Final Call to Action Card */}
        <section aria-labelledby="cta-heading" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(-1deg)", width: "100%", maxWidth: "560px" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <h2 id="cta-heading" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.8rem", 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem" 
              }}>
                HAVE A SIMILAR PROJECT IN MIND?
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.45", marginBottom: "1.5rem" }}>
                Send me your brief. Let's discuss how to apply clean engineering solutions to your website or web application.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1.5}>
                  let me know what you're building
                </HandwrittenNote>
              </div>

              <div>
                <Link href="/contact/" className="tactile-btn tactile-btn-primary" aria-label="Book a project with Ram Singh">
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
