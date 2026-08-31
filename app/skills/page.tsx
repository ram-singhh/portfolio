import React from "react";
import Link from "next/link";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";

export const metadata = {
  title: "Web Development Skills & Technical Proof",
  description: "Explore the verified web development technologies, programming languages, and tools used by Ram Singh, paired with direct project code proof.",
  alternates: {
    canonical: "/skills/",
  },
};

interface SkillProof {
  name: string;
  what: string;
  proofText: string;
  proofUrl: string;
  isExternal?: boolean;
}

interface SkillCategory {
  categoryTitle: string;
  categoryLabel: string;
  rotation: number;
  variant: "light" | "craft" | "lined" | "grid";
  skills: SkillProof[];
}

const skillCategories: SkillCategory[] = [
  {
    categoryTitle: "Frontend Engineering",
    categoryLabel: "CATEGORY 01 // FRONTEND",
    rotation: -0.8,
    variant: "craft",
    skills: [
      {
        name: "React & Next.js",
        what: "Used for component-driven UI architecture, static page compilation, custom layout wrappers, and server-side route handlers.",
        proofText: "Tactile Portfolio Website Case Study",
        proofUrl: "/projects/portfolio-website/",
      },
      {
        name: "JavaScript (ES6+)",
        what: "Used for interactive web app logic, DOM event binding, state pointers, keyboard navigation, and arithmetic operations.",
        proofText: "Modern Calculator Interactive App",
        proofUrl: "/projects/modern-calculator/",
      },
      {
        name: "CSS3 & CSS Custom Variables",
        what: "Used for responsive layout grids, dark paper textures, tactile UI elevation styles, and mobile breakpoint scaling.",
        proofText: "Tactile Portfolio Visual System",
        proofUrl: "/projects/portfolio-website/",
      },
      {
        name: "Semantic HTML5",
        what: "Used for accessible document landmarks (<header>, <nav>, <main>, <section>, <article>) and search engine indexable outlines.",
        proofText: "Inspected across all website routes",
        proofUrl: "/services/web-development/",
      },
    ],
  },
  {
    categoryTitle: "Web & Layout Systems",
    categoryLabel: "CATEGORY 02 // WEB_SYSTEMS",
    rotation: 1,
    variant: "lined",
    skills: [
      {
        name: "Responsive Flexbox & Grid",
        what: "Used for fluid column adjustments, mobile phone down to desktop monitor layout adaptation, and card grids.",
        proofText: "Modern Calculator Responsive Grid",
        proofUrl: "/projects/modern-calculator/",
      },
      {
        name: "TypeScript",
        what: "Used for strict component interface definitions, typed prop contracts, and reliable state data handling.",
        proofText: "Tactile Portfolio Codebase Structure",
        proofUrl: "/projects/portfolio-website/",
      },
    ],
  },
  {
    categoryTitle: "Programming & Scripting",
    categoryLabel: "CATEGORY 03 // SCRIPTING",
    rotation: -1.2,
    variant: "light",
    skills: [
      {
        name: "Python",
        what: "Used for modular script architecture, API integration, prompt design patterns, and multi-module task coordination.",
        proofText: "AI Multi-Module System Case Study",
        proofUrl: "/projects/ai-multi-module-system/",
      },
      {
        name: "API Integration & Serverless Routes",
        what: "Used for requesting external API data, handling OAuth token refresh flows, and serverless response caching.",
        proofText: "Spotify Currently Playing Route Handler",
        proofUrl: "/projects/portfolio-website/",
      },
    ],
  },
  {
    categoryTitle: "Development Tools",
    categoryLabel: "CATEGORY 04 // TOOLS",
    rotation: 0.7,
    variant: "grid",
    skills: [
      {
        name: "Git & GitHub",
        what: "Used for version control, repository branching workflows, commit tracking, and public source code hosting.",
        proofText: "Verified GitHub Repositories",
        proofUrl: "https://github.com/Ram-singhh",
        isExternal: true,
      },
      {
        name: "VS Code & Development Tools",
        what: "Used as primary local environment for code editing, debugging, component testing, and build command verification.",
        proofText: "Local Development & Build Pipeline",
        proofUrl: "/about/",
      },
    ],
  },
  {
    categoryTitle: "Cloud & Infrastructure",
    categoryLabel: "CATEGORY 05 // INFRASTRUCTURE",
    rotation: -0.5,
    variant: "craft",
    skills: [
      {
        name: "Microsoft Azure Fundamentals",
        what: "Used for cloud service configuration concepts, virtual machine deployment exercises, and cloud lab execution.",
        proofText: "Microsoft Azure Internship Certificate",
        proofUrl: "/certificates/",
      },
      {
        name: "Vercel Static Deployment",
        what: "Used for deploying static Next.js application builds, automatic preview deploys, and domain configuration.",
        proofText: "Live Portfolio Production Site",
        proofUrl: "/",
      },
    ],
  },
];

export default function Skills() {
  return (
    <main className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "8rem" }}>
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", maxWidth: "800px" }}>
        
        {/* Header Document */}
        <section aria-labelledby="skills-h1" style={{ marginBottom: "3.5rem", textAlign: "center" }}>
          <div style={{ transform: "rotate(-0.5deg)", display: "inline-block", width: "100%" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ margin: "0 auto", textAlign: "left" }}>
              <div style={{ marginBottom: "0.75rem" }}>
                <TypewriterLabel variant="dymo" rotation={1}>
                  TECHNICAL STACK &amp; EVIDENCE
                </TypewriterLabel>
              </div>
              <h1 id="skills-h1" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2.25rem, 5.5vw, 3.25rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                margin: "0 0 1rem 0" 
              }}>
                Web Development Skills &amp; Proof
              </h1>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "1rem", color: "#333", lineHeight: "1.5", margin: 0 }}>
                A structured overview of technologies I work with. Every technology is paired with what it is used for and direct proof from verified project code or certificates.
              </p>
            </Paper>
          </div>
        </section>

        {/* Skill Categories */}
        <section aria-label="Skills by category" style={{ display: "flex", flexDirection: "column", gap: "3rem", marginBottom: "4rem" }}>
          {skillCategories.map((cat) => (
            <article key={cat.categoryTitle} style={{ transform: `rotate(${cat.rotation}deg)` }}>
              <Paper variant={cat.variant} rotation={0} padding="large" style={{ position: "relative" }}>
                <Tape rotation={cat.rotation * -2} position="top-right" width="85px" />

                <header style={{ marginBottom: "1.5rem" }}>
                  <TypewriterLabel variant="plain">{cat.categoryLabel}</TypewriterLabel>
                  <h2 style={{ 
                    fontFamily: "var(--font-serif)", 
                    fontSize: "1.75rem", 
                    fontWeight: 700, 
                    fontStyle: "italic", 
                    color: "var(--text-dark)", 
                    margin: "0.5rem 0 0 0" 
                  }}>
                    {cat.categoryTitle}
                  </h2>
                </header>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      style={{ 
                        backgroundColor: "rgba(0,0,0,0.03)", 
                        borderLeft: "3px solid var(--color-ink-red)", 
                        padding: "1rem 1.25rem",
                        borderRadius: "2px"
                      }}
                    >
                      <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-dark)", margin: "0 0 0.4rem 0" }}>
                        {skill.name}
                      </h3>
                      
                      <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.9rem", lineHeight: "1.5", color: "#333", margin: "0 0 0.75rem 0" }}>
                        <strong style={{ color: "#111" }}>WHAT:</strong> {skill.what}
                      </p>

                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-ink-blue)" }}>
                        <strong style={{ color: "var(--text-dark)" }}>PROOF:</strong>{" "}
                        {skill.isExternal ? (
                          <a 
                            href={skill.proofUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: "var(--color-ink-blue)", textDecoration: "underline" }}
                          >
                            {skill.proofText} &rarr;
                          </a>
                        ) : (
                          <Link href={skill.proofUrl} style={{ color: "var(--color-ink-blue)", textDecoration: "underline" }}>
                            {skill.proofText} &rarr;
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Paper>
            </article>
          ))}
        </section>

        {/* CTA Card */}
        <section aria-labelledby="skills-cta-heading" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(1deg)", width: "100%", maxWidth: "560px" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <h2 id="skills-cta-heading" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.8rem", 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem" 
              }}>
                SEE THESE SKILLS IN REAL PROJECTS
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.45", marginBottom: "1.5rem" }}>
                Inspect the full codebases and interactive case studies to evaluate how these technologies are applied.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1.5}>
                  verified code proof
                </HandwrittenNote>
              </div>

              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
                <Link href="/projects/" className="tactile-btn tactile-btn-primary" aria-label="View verified web projects">
                  [ VIEW PROJECTS ]
                </Link>
                <Link href="/contact/" className="tactile-btn" aria-label="Book a web development project with Ram Singh">
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
