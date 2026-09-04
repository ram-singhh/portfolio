import React from "react";
import Link from "next/link";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";
import ProjectVisual from "@/components/projects/ProjectVisual";
import { projectsData } from "@/data/projects";

export const metadata = {
  title: "Web Development Projects & Case Studies",
  description: "Explore verified web development projects and technical case studies built by freelance web developer Ram Singh in Mumbai, India.",
  alternates: {
    canonical: "/projects/",
  },
};

export default function Projects() {
  return (
    <main className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "8rem" }}>
      {/* Desk Background */}
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem" }}>
        
        {/* Page Header */}
        <section aria-label="Archive introduction" style={{ marginBottom: "4rem", textAlign: "center" }}>
          <div style={{ transform: "rotate(-0.5deg)", display: "inline-block" }}>
            <Paper variant="lined" rotation={0} padding="medium" style={{ maxWidth: "600px", margin: "0 auto" }}>
              <div style={{ marginBottom: "0.75rem" }}>
                <TypewriterLabel variant="dymo" rotation={1}>
                  PROJECT ARCHIVE
                </TypewriterLabel>
              </div>
              <h1 style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2.25rem, 5vw, 3rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                margin: "0 0 0.5rem 0" 
              }}>
                #project-filing-cabinet
              </h1>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", color: "#333", lineHeight: "1.4", margin: 0 }}>
                A collection of verified software implementations. Each document serves as proof of capabilities, engineering practices, and lessons learned.
              </p>
            </Paper>
          </div>
        </section>

        {/* Project Files (Tactile Scattered Documents) */}
        <section aria-label="List of projects" style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "4rem", 
          maxWidth: "720px", 
          margin: "0 auto" 
        }}>
          {projectsData.map((project, idx) => {
            // Alternating rotations and variants for visual interest
            const rotation = idx % 2 === 0 ? -1.2 : 0.8;
            const paperVariant = idx % 3 === 0 ? "craft" : idx % 3 === 1 ? "lined" : "light";
            const fileIndexStr = `FILE_0${idx + 1}`;

            return (
              <article key={project.slug} style={{ transform: `rotate(${rotation}deg)` }}>
                <Paper variant={paperVariant} rotation={0} padding="large" style={{ position: "relative" }}>
                  <Tape rotation={idx % 2 === 0 ? 2 : -1.5} position="top-right" width="90px" />
                  
                  {/* Category & Folder Tab */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                    <TypewriterLabel variant="dymo" rotation={-1}>
                      {fileIndexStr}
                    </TypewriterLabel>
                    <span style={{ 
                      fontFamily: "var(--font-mono)", 
                      fontSize: "0.75rem", 
                      fontWeight: "bold",
                      color: paperVariant === "craft" ? "#2c251f" : "var(--text-muted)"
                    }}>
                      // {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h2 style={{ 
                    fontFamily: "var(--font-serif)", 
                    fontSize: "1.75rem", 
                    fontWeight: 700, 
                    fontStyle: "italic",
                    color: "var(--text-dark)", 
                    margin: "0 0 1rem 0" 
                  }}>
                    {project.title}
                  </h2>
                  
                  <p style={{ 
                    fontFamily: "var(--font-primary)", 
                    fontSize: "0.95rem", 
                    lineHeight: "1.5", 
                    color: paperVariant === "craft" ? "#2c251f" : "#333", 
                    marginBottom: "1.5rem" 
                  }}>
                    {project.shortDescription}
                  </p>

                  {/* Visual Preview Box */}
                  <div style={{ margin: "1.5rem 0", display: "flex", justifyContent: "center" }}>
                    <div style={{ transform: `rotate(${idx % 2 === 0 ? 0.5 : -0.5}deg)`, width: "100%" }}>
                      <ProjectVisual slug={project.slug} />
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
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
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Implementation Highlight / Challenge */}
                  <div style={{ fontSize: "0.85rem", color: "#444", marginBottom: "1.5rem", borderLeft: "2px solid var(--color-ink-red)", paddingLeft: "0.75rem" }}>
                    <strong>Technical Challenge:</strong> {
                      project.slug === "wrapped-wishes" ? "Combining dynamic product discovery, category filtering, Supabase database operations, image storage, and WhatsApp ordering within a lightweight HTML/CSS/JS storefront architecture." :
                      project.slug === "modern-calculator" ? "Managing keyboard state listeners without stale closures in React while handling decimal precision and error recovery." :
                      project.slug === "ai-multi-module-system" ? "Decoupling script boundaries so new AI capabilities can be registered without modifying the core orchestrator script." :
                      "Developing server-side OAuth token refresh flows, in-memory caching to prevent HTTP 429 rate limits, and mobile breakpoint rotation clamping."
                    }
                  </div>

                  {/* Action Buttons */}
                  <div className="card-btn-container" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
                    <Link 
                      href={project.slug === "modern-calculator" ? "/projects/modern-calculator/" : `/projects/${project.slug}/`} 
                      className="tactile-btn tactile-btn-primary"
                      style={{ textDecoration: "none" }}
                      aria-label={`Read case study for ${project.title}`}
                    >
                      [ CASE STUDY ]
                    </Link>
                    
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                        rel={project.liveUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="tactile-btn"
                        style={{ textDecoration: "none" }}
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        [ LIVE DEMO ]
                      </a>
                    )}

                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="tactile-btn"
                        style={{ textDecoration: "none" }}
                        aria-label={`View source code for ${project.title} on GitHub`}
                      >
                        [ SOURCE ]
                      </a>
                    )}
                  </div>
                </Paper>
              </article>
            );
          })}
        </section>

        {/* CTA Banner at the bottom of the page */}
        <section aria-labelledby="cta-heading" style={{ marginTop: "6rem", display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(1deg)", width: "100%", maxWidth: "520px" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <h2 id="cta-heading" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.75rem", 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem" 
              }}>
                READY TO BUILD YOUR PROJECT?
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.9rem", lineHeight: "1.4", marginBottom: "1.5rem" }}>
                Let's discuss your requirements and design a fast, custom web experience that fits your goals.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1.5} fontSize="1.2rem">
                  let's build your solution
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
