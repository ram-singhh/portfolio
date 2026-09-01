import React from "react";
import Link from "next/link";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";
import ProjectVisual from "@/components/projects/ProjectVisual";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DeliverableItem {
  name: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface RelevantProjectItem {
  slug: string;
  title: string;
  description: string;
}

export interface ServicePageTemplateProps {
  serviceLabel: string;
  h1Title: string;
  introduction: string;
  whoThisIsFor: string[];
  whatICanBuild: {
    intro: string;
    items: DeliverableItem[];
  };
  howIWork: {
    intro: string;
    steps: StepItem[];
  };
  technology: string[];
  qualityChecks: string[];
  relevantWork: RelevantProjectItem[];
  faq: FAQItem[];
}

export default function ServicePageTemplate({
  serviceLabel,
  h1Title,
  introduction,
  whoThisIsFor,
  whatICanBuild,
  howIWork,
  technology,
  qualityChecks,
  relevantWork,
  faq,
}: ServicePageTemplateProps) {
  return (
    <main className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "8rem" }}>
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
              <Link href="/services/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>SERVICES</Link>
            </li>
            <li aria-hidden="true" style={{ margin: "0 0.2rem" }}>&gt;</li>
            <li style={{ color: "var(--color-ink-red)", fontWeight: "bold" }}>
              {h1Title.replace(" Services", "").toUpperCase()}
            </li>
          </ol>
        </nav>

        {/* Back Link to Hub */}
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/services/" className="tactile-btn" style={{ textDecoration: "none" }} aria-label="Back to services hub">
            [ &larr; BACK TO SERVICES ]
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
                  "name": "Services",
                  "item": "https://www.ramsingh.dev/services/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": h1Title,
                  "item": `https://www.ramsingh.dev/services/${
                    serviceLabel.includes("WEB_DEVELOPMENT") ? "web-development" :
                    serviceLabel.includes("FRONTEND_DEVELOPMENT") ? "frontend-development" :
                    serviceLabel.includes("LANDING_PAGES") ? "landing-pages" :
                    "website-redesign"
                  }/`
                }
              ]
            })
          }}
        />

        {/* 1. Header Sheet (Craft Paper style folder file) */}
        <section aria-labelledby="service-h1" style={{ marginBottom: "3.5rem" }}>
          <Paper variant="craft" rotation={-0.8} padding="large" style={{ position: "relative" }}>
            <Tape rotation={-2} position="top-left" width="105px" />
            
            <header>
              <div style={{ marginBottom: "1rem" }}>
                <TypewriterLabel variant="dymo" rotation={1}>
                  {serviceLabel}
                </TypewriterLabel>
              </div>
              
              <h1 id="service-h1" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2rem, 5.5vw, 3.25rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                lineHeight: "1.1", 
                margin: "0 0 1.25rem 0" 
              }}>
                {h1Title}
              </h1>
              
              <p style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(1.1rem, 3vw, 1.35rem)", 
                lineHeight: "1.5", 
                color: "#2c251f", 
                margin: "0 0 2rem 0",
                fontStyle: "italic"
              }}>
                {introduction}
              </p>
            </header>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
              <Link href="/contact/" className="tactile-btn tactile-btn-primary" aria-label="Book a project with Ram Singh">
                [ BOOK A PROJECT ]
              </Link>
              <a href="#who-this-is-for" className="tactile-btn" aria-label="Learn who this service is for">
                [ LEARN MORE &darr; ]
              </a>
            </div>
          </Paper>
        </section>

        {/* 2. Who This Is For (Lined paper note) */}
        <section id="who-this-is-for" aria-labelledby="section-who-it-is-for" style={{ marginBottom: "3.5rem" }}>
          <Paper variant="lined" rotation={1} padding="large">
            <h2 id="section-who-it-is-for" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--color-ink-red)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              WHO THIS IS FOR
            </h2>
            
            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", marginBottom: "1.5rem" }}>
              This service is tailored for clients looking for reliable execution, focused technical scope, and honest communication. It is ideal for:
            </p>

            <ul style={{ 
              paddingLeft: "1.5rem", 
              margin: 0, 
              display: "flex", 
              flexDirection: "column", 
              gap: "0.75rem",
              fontFamily: "var(--font-primary)",
              fontSize: "0.95rem",
              lineHeight: "1.5",
              color: "#1a1816"
            }}>
              {whoThisIsFor.map((point, idx) => (
                <li key={idx} style={{ paddingLeft: "0.25rem" }}>
                  {point}
                </li>
              ))}
            </ul>
          </Paper>
        </section>

        {/* 3. What I Can Build (Grid paper sheet) */}
        <section aria-labelledby="section-what-i-build" style={{ marginBottom: "3.5rem" }}>
          <Paper variant="grid" rotation={-0.6} padding="large">
            <h2 id="section-what-i-build" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              WHAT I CAN BUILD
            </h2>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", marginBottom: "1.5rem" }}>
              {whatICanBuild.intro}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
              {whatICanBuild.items.map((item, idx) => (
                <div key={idx} style={{ 
                  borderLeft: "2px solid var(--color-ink-blue)", 
                  paddingLeft: "1rem", 
                  fontFamily: "var(--font-primary)" 
                }}>
                  <h3 style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontSize: "0.95rem", 
                    fontWeight: 700, 
                    color: "var(--color-ink-blue)",
                    marginBottom: "0.25rem"
                  }}>
                    {item.name}
                  </h3>
                  <p style={{ 
                    fontSize: "0.9rem", 
                    lineHeight: "1.4", 
                    color: "#2c251f", 
                    margin: 0 
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Paper>
        </section>

        {/* 4. How I Work (Lined paper sheet) */}
        <section aria-labelledby="section-how-i-work" style={{ marginBottom: "3.5rem" }}>
          <Paper variant="lined" rotation={0.8} padding="large" style={{ position: "relative" }}>
            <Tape rotation={2.5} position="top-right" width="85px" />
            
            <h2 id="section-how-i-work" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--color-ink-blue)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              HOW I WORK
            </h2>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#1a1816", marginBottom: "1.75rem" }}>
              {howIWork.intro}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {howIWork.steps.map((step, idx) => (
                <div key={idx} style={{ 
                  display: "flex", 
                  gap: "1rem", 
                  alignItems: "flex-start"
                }}>
                  <span style={{ 
                    fontFamily: "var(--font-handwritten)", 
                    fontSize: "2rem", 
                    lineHeight: "1", 
                    color: "var(--color-ink-red)",
                    minWidth: "35px",
                    transform: "rotate(-10deg) translateY(-2px)",
                    display: "inline-block"
                  }}>
                    {step.number}
                  </span>
                  <div>
                    <h3 style={{ 
                      fontFamily: "var(--font-mono)", 
                      fontSize: "0.95rem", 
                      fontWeight: 700, 
                      color: "var(--text-dark)",
                      marginBottom: "0.25rem"
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ 
                      fontFamily: "var(--font-primary)",
                      fontSize: "0.9rem", 
                      lineHeight: "1.45", 
                      color: "#333", 
                      margin: 0 
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Paper>
        </section>

        {/* 5. Technology & Quality Checks (Light paper sheet) */}
        <section aria-label="Technology and quality assurances" style={{ marginBottom: "3.5rem" }}>
          <Paper variant="light" rotation={-0.5} padding="large">
            <div className="service-tech-grid" style={{ minWidth: 0 }}>
              {/* Technology */}
              <div style={{ minWidth: 0 }}>
                <h2 id="section-technology" style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "1.1rem", 
                  fontWeight: 700, 
                  color: "var(--text-dark)", 
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  paddingBottom: "0.5rem"
                }}>
                  TECHNOLOGY
                </h2>
                <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.85rem", lineHeight: "1.4", color: "#333", marginBottom: "1rem" }}>
                  Used only where genuinely applicable and supported by my verified codebase:
                </p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {technology.map((tech) => (
                    <span 
                      key={tech} 
                      style={{ 
                        fontFamily: "var(--font-mono)", 
                        fontSize: "0.75rem", 
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
              </div>

              {/* Quality Checks */}
              <div style={{ minWidth: 0 }}>
                <h2 id="section-quality" style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: "1.1rem", 
                  fontWeight: 700, 
                  color: "var(--text-dark)", 
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  paddingBottom: "0.5rem"
                }}>
                  QUALITY CHECKS
                </h2>
                <ul style={{ 
                  listStyle: "none", 
                  padding: 0, 
                  margin: 0, 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "0.5rem",
                  fontFamily: "var(--font-primary)",
                  fontSize: "0.85rem",
                  color: "#333"
                }}>
                  {qualityChecks.map((check, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.35rem" }}>
                      <span style={{ color: "var(--color-ink-green)", fontWeight: "bold" }}>✓</span>
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Paper>
        </section>

        {/* 6. Relevant Work (Craft paper with layout card) */}
        <section aria-labelledby="section-relevant-work" style={{ marginBottom: "3.5rem" }}>
          <Paper variant="craft" rotation={-1.2} padding="large">
            <h2 id="section-relevant-work" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              RELEVANT WORK &amp; PROOF
            </h2>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.5", color: "#2c251f", marginBottom: "2rem" }}>
              My capabilities are backed by actual, inspectable implementations in my project archive. I do not invent client results or testimonials. Explore the source files or case studies for evidence:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {relevantWork.map((project, idx) => (
                <div key={project.slug} style={{ 
                  display: "flex", 
                  flexDirection: "column",
                  gap: "1.5rem",
                  alignItems: "center"
                }}>
                  <div style={{ 
                    backgroundColor: "rgba(255,255,255,0.4)", 
                    border: "1px solid rgba(0,0,0,0.1)", 
                    padding: "1.25rem",
                    borderRadius: "4px",
                    width: "100%"
                  }}>
                    <h3 style={{ 
                      fontFamily: "var(--font-serif)", 
                      fontSize: "1.25rem", 
                      fontWeight: 700, 
                      color: "var(--text-dark)",
                      margin: "0 0 0.5rem 0"
                    }}>
                      {project.title}
                    </h3>
                    <p style={{ 
                      fontFamily: "var(--font-primary)",
                      fontSize: "0.9rem", 
                      lineHeight: "1.45", 
                      color: "#2c251f", 
                      marginBottom: "1.25rem" 
                    }}>
                      {project.description}
                    </p>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                      <Link 
                        href={project.slug === "modern-calculator" ? "/projects/modern-calculator/" : `/projects/${project.slug}/`}
                        className="tactile-btn tactile-btn-primary"
                        style={{ textDecoration: "none" }}
                        aria-label={`Open case study for ${project.title}`}
                      >
                        [ VIEW CASE STUDY ]
                      </Link>
                    </div>
                  </div>
                  
                  {/* Miniature Visual Preview Block below card */}
                  <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <div style={{ transform: `rotate(${idx % 2 === 0 ? 0.5 : -0.5}deg)`, width: "100%", maxWidth: "300px" }}>
                      <ProjectVisual slug={project.slug} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Paper>
        </section>

        {/* 7. FAQ (Lined paper with questions) */}
        <section aria-labelledby="section-faq" style={{ marginBottom: "4rem" }}>
          <Paper variant="lined" rotation={0.5} padding="large">
            <h2 id="section-faq" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--color-ink-red)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {faq.map((item, idx) => (
                <div key={idx} style={{ fontFamily: "var(--font-primary)" }}>
                  <h3 style={{ 
                    fontFamily: "var(--font-serif)", 
                    fontSize: "1.05rem", 
                    fontWeight: 700, 
                    color: "var(--text-dark)",
                    marginBottom: "0.5rem",
                    fontStyle: "italic"
                  }}>
                    Q: {item.question}
                  </h3>
                  <p style={{ 
                    fontSize: "0.9rem", 
                    lineHeight: "1.45", 
                    color: "#333", 
                    margin: 0,
                    paddingLeft: "1.25rem",
                    borderLeft: "1px dotted rgba(0,0,0,0.2)"
                  }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </Paper>
        </section>

        {/* 8. Final CTA (Lined or Craft paper with BOOK A PROJECT) */}
        <section aria-labelledby="section-cta" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(1.2deg)", width: "100%", maxWidth: "560px" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <h2 id="section-cta" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.8rem", 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem" 
              }}>
                READY TO START?
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.4", marginBottom: "1.5rem" }}>
                Let's discuss your requirements and build a high-performance web experience tailored to your business goals.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1}>
                  let's book your project
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
