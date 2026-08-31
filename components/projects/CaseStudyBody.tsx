import React from "react";
import Link from "next/link";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";
import ProjectVisual from "./ProjectVisual";
import { Project, projectsData } from "@/data/projects";

interface CaseStudyBodyProps {
  project: Project;
}

export default function CaseStudyBody({ project }: CaseStudyBodyProps) {
  // Find next project index
  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <main className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "6rem" }}>
      {/* Desk Background */}
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", maxWidth: "800px" }}>
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
          <ol style={{ display: "flex", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", alignItems: "center", flexWrap: "wrap" }}>
            <li>
              <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>HOME</Link>
            </li>
            <li aria-hidden="true" style={{ margin: "0 0.2rem" }}>&gt;</li>
            <li>
              <Link href="/projects/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>PROJECTS</Link>
            </li>
            <li aria-hidden="true" style={{ margin: "0 0.2rem" }}>&gt;</li>
            <li style={{ color: "var(--color-ink-red)", fontWeight: "bold" }}>
              {project.title.toUpperCase()}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/projects/" className="tactile-btn" style={{ textDecoration: "none" }} aria-label="Back to project archive">
            [ &larr; BACK TO ARCHIVE ]
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
                  "name": "Projects",
                  "item": "https://www.ramsingh.dev/projects/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": project.title,
                  "item": `https://www.ramsingh.dev/projects/${project.slug}/`
                }
              ]
            })
          }}
        />

        {/* 1. Main Folder / Header Sheet */}
        <section aria-labelledby="project-title" style={{ marginBottom: "3rem" }}>
          <Paper variant="craft" rotation={-0.8} padding="large" style={{ position: "relative" }}>
            <Tape rotation={-2} position="top-left" width="100px" />
            
            <header>
              <div style={{ marginBottom: "1rem" }}>
                <TypewriterLabel variant="dymo" rotation={1.5}>
                  {project.category.toUpperCase()}
                </TypewriterLabel>
              </div>
              
              <h1 id="project-title" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2rem, 6vw, 3.5rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                lineHeight: "1.1", 
                margin: "0 0 1rem 0" 
              }}>
                {project.title}
              </h1>
              
              <p style={{ 
                fontFamily: "var(--font-primary)", 
                fontSize: "1.1rem", 
                lineHeight: "1.5", 
                color: "#2c251f", 
                fontWeight: 500, 
                margin: "0 0 2rem 0" 
              }}>
                {project.shortDescription}
              </p>
            </header>

            {/* Visual Graphic */}
            <div style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", transform: "rotate(1deg)", width: "100%" }}>
                <ProjectVisual slug={project.slug} />
              </div>
            </div>

            {/* Project Quick Links */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "2rem" }}>
              {project.liveUrl && (
                <a href={project.liveUrl} className="tactile-btn tactile-btn-primary" aria-label={`Open live app for ${project.title}`}>
                  [ VIEW LIVE APP ]
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="tactile-btn" aria-label={`View source code for ${project.title} on GitHub`}>
                  [ VIEW SOURCE CODE ]
                </a>
              )}
            </div>
          </Paper>
        </section>

        {/* 2. About & Scope Sheet */}
        <section aria-labelledby="section-about" style={{ marginBottom: "3rem" }}>
          <Paper variant="lined" rotation={1.2} padding="large">
            <h2 id="section-about" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--color-ink-red)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              01. ABOUT THE PROJECT
            </h2>
            
            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", marginBottom: "1.5rem" }}>
              {project.description}
            </p>

            <h3 style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "0.95rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "0.5rem"
            }}>
              Why It Exists
            </h3>
            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", margin: 0 }}>
              {project.whyItExists}
            </p>
          </Paper>
        </section>

        {/* 3. Problem & Approach Sheet */}
        {(project.problem || project.approach) && (
          <section aria-labelledby="section-engineering" style={{ marginBottom: "3rem" }}>
            <Paper variant="light" rotation={-1.5} padding="large">
              <Tape rotation={3} position="top-right" width="80px" />
              
              <h2 id="section-engineering" style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "1.25rem", 
                fontWeight: 700, 
                color: "var(--text-dark)", 
                textTransform: "uppercase",
                marginBottom: "1.5rem"
              }}>
                02. PROBLEM &amp; APPROACH
              </h2>

              {project.problem && (
                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontSize: "0.95rem", 
                    fontWeight: 700, 
                    color: "var(--color-ink-red)", 
                    textTransform: "uppercase",
                    marginBottom: "0.5rem"
                  }}>
                    The Problem
                  </h3>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", lineHeight: "1.6", color: "#222", margin: 0 }}>
                    {project.problem}
                  </p>
                </div>
              )}

              {project.approach && (
                <div>
                  <h3 style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontSize: "0.95rem", 
                    fontWeight: 700, 
                    color: "var(--color-ink-blue)", 
                    textTransform: "uppercase",
                    marginBottom: "0.5rem"
                  }}>
                    The Approach
                  </h3>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", lineHeight: "1.6", color: "#222", margin: 0 }}>
                    {project.approach}
                  </p>
                </div>
              )}
            </Paper>
          </section>
        )}

        {/* 4. Technical Architecture Sheet */}
        <section aria-labelledby="section-architecture" style={{ marginBottom: "3rem" }}>
          <Paper variant="grid" rotation={0.5} padding="large">
            <h2 id="section-architecture" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              03. ARCHITECTURE &amp; IMPLEMENTATION
            </h2>

            {/* Tech Tags */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "0.9rem", 
                fontWeight: 700, 
                color: "var(--text-dark)", 
                marginBottom: "0.75rem"
              }}>
                Technologies Utilized
              </h3>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    style={{ 
                      fontFamily: "var(--font-mono)", 
                      fontSize: "0.75rem", 
                      fontWeight: "bold",
                      backgroundColor: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.15)",
                      borderRadius: "2px",
                      padding: "2px 6px",
                      color: "#333"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Implementation details */}
            <div>
              <h3 style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "0.9rem", 
                fontWeight: 700, 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem"
              }}>
                Technical Execution
              </h3>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#222", margin: 0 }}>
                {project.implementation}
              </p>
            </div>
          </Paper>
        </section>

        {/* 5. Results & Lessons Sheet */}
        <section aria-labelledby="section-results" style={{ marginBottom: "4rem" }}>
          <Paper variant="lined" rotation={-0.6} padding="large">
            <h2 id="section-results" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--color-ink-green)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              04. THE RESULTING SYSTEM &amp; LESSONS
            </h2>

            {/* Result */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ 
                fontFamily: "var(--font-mono)", 
                fontSize: "0.9rem", 
                fontWeight: 700, 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem"
              }}>
                What I Built
              </h3>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", margin: 0 }}>
                {project.result}
              </p>
            </div>

            {/* Lessons */}
            {project.lessons && (
              <div>
                <h3 style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "0.9rem", 
                  fontWeight: 700, 
                  color: "var(--text-dark)", 
                  marginBottom: "0.5rem"
                }}>
                  Key Takeaways
                </h3>
                <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", margin: 0 }}>
                  {project.lessons}
                </p>
              </div>
            )}
          </Paper>
        </section>

        {/* Next Project Note */}
        <section style={{ marginBottom: "4rem", display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(1.5deg)", width: "100%", maxWidth: "400px" }}>
            <Paper variant="light" rotation={0} padding="medium" style={{ textAlign: "center", border: "1px dashed var(--border-secondary)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>
                UP NEXT IN ARCHIVE
              </span>
              <Link 
                href={nextProject.slug === "modern-calculator" ? "/projects/modern-calculator/" : `/projects/${nextProject.slug}/`}
                style={{ 
                  fontFamily: "var(--font-serif)", 
                  fontSize: "1.2rem", 
                  fontWeight: 700, 
                  fontStyle: "italic",
                  color: "var(--text-dark)", 
                  textDecoration: "underline" 
                }}
              >
                {nextProject.title} &rarr;
              </Link>
            </Paper>
          </div>
        </section>

        {/* 6. Freelance CTA */}
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
                LIKE WHAT YOU SEE?
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.4", marginBottom: "1.5rem" }}>
                Have something similar in mind? Let's build your next web application or interactive layout together.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1.5} fontSize="1.25rem">
                  let's collaborate on your goals
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
