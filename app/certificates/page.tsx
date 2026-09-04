import React from "react";
import Link from "next/link";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";

export const metadata = {
  title: "Certifications & Achievements",
  description: "View verified training certificates earned by Ram Singh in Microsoft Azure cloud computing, AI concepts, and web fundamentals.",
  alternates: {
    canonical: "/certificates/",
  },
};

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  tech: string[];
  url?: string;
}

const certificates: Certificate[] = [
  {
    title: "Microsoft Azure Internship Completion",
    issuer: "Microsoft Elevate (AICTE Program)",
    date: "February 2026",
    description: "Completed Microsoft Azure internship training program covering cloud deployment concepts, service configuration exercises, and cloud infrastructure lab modules.",
    tech: ["Microsoft Azure", "Cloud Services", "Hands-on Labs"],
    url: "https://drive.google.com/file/d/1-wA5HD_6ghKBzXUp-uJe_eCZW6SKw5dk/view?usp=drive_link",
  },
  {
    title: "Cloud Administration & Engineering (40 Hours)",
    issuer: "Microsoft Elevate (AICTE Program)",
    date: "January 2026",
    description: "40-hour guided course covering cloud administration basics, virtual machine configuration, and cloud engineering fundamentals.",
    tech: ["Cloud Administration", "Cloud Engineering", "40 Hours Training"],
    url: "https://drive.google.com/file/d/1BYAZmjvBYjhXJX5FWJfMutAaTxHX-tMA/view?usp=drive_link",
  },
  {
    title: "Microsoft Azure – Course Completion (25 Hours)",
    issuer: "Microsoft Elevate (AICTE Program)",
    date: "January 2026",
    description: "25-hour training course covering Microsoft Azure cloud platform fundamentals, core services, and deployment models.",
    tech: ["Microsoft Azure", "Cloud Platform", "25 Hours Training"],
    url: "https://drive.google.com/file/d/1_8-TxeHxiz1Rv_0WltT0DV2_j7tb5UNX/view?usp=drive_link",
  },
  {
    title: "Artificial Intelligence & Machine Learning (20 Hours)",
    issuer: "Microsoft Elevate (AICTE Program)",
    date: "January 2026",
    description: "20-hour introductory course on foundational artificial intelligence algorithms, machine learning principles, and practical application concepts.",
    tech: ["Artificial Intelligence", "Machine Learning", "20 Hours Training"],
    url: "https://drive.google.com/file/d/19KEqrLzh8Cje7k1VTukETJUZMHH7qcME/view?usp=drive_link",
  },
  {
    title: "Microsoft Copilot Workshop",
    issuer: "Microsoft Elevate (AICTE Program)",
    date: "January 2026",
    description: "Explored Microsoft Copilot assistance tools for workflow efficiency and AI prompt interaction across Microsoft application ecosystems.",
    tech: ["Microsoft Copilot", "AI Productivity", "Prompt Interaction"],
    url: "https://drive.google.com/file/d/12mR2zKaHs-0sJ51eZ8-Jj1CLxwtEEelw/view?usp=sharing",
  },
  {
    title: "Power BI – Business Applications",
    issuer: "Microsoft Elevate (AICTE Program)",
    date: "January 2026",
    description: "Learned foundational data visualization techniques, dashboard creation, and reporting structures using Microsoft Power BI.",
    tech: ["Power BI", "Data Visualization", "Dashboard Reporting"],
    url: "https://drive.google.com/file/d/1ufFLcqrMuZacKSlwwRl42RQN6f7fNpC-/view?usp=sharing",
  },
  {
    title: "Cyber Security Workshop",
    issuer: "Thetechnique Academy",
    date: "February 2026",
    description: "Workshop covering basic information security concepts, network safety practices, and threat awareness baselines.",
    tech: ["Cybersecurity Fundamentals", "Information Security", "IT Safety"],
    url: "https://drive.google.com/file/d/1RX-MUTAeG6HqqGs9OyvM2VwTbWZPvwgG/view?usp=drive_link",
  },
  {
    title: "AI-Powered SEO Masterclass",
    issuer: "Pankaj Kumar SEO",
    date: "December 2025",
    description: "Practical overview of search engine optimization principles, keyword intent mapping, and digital content structure optimization.",
    tech: ["SEO Fundamentals", "Keyword Mapping", "On-Page Structure"],
    url: "https://drive.google.com/file/d/1E2am8PTXRGRlftCjBMFt1FbFBbxypunb/view?usp=drive_link",
  },
  {
    title: "AI Tools Workshop",
    issuer: "be10x",
    date: "February 2026",
    description: "Introductory session exploring how AI tools support task efficiency, prompt execution, and workflow optimization.",
    tech: ["AI Tools", "Workflow Automation", "Technology Awareness"],
    url: "https://drive.google.com/file/d/1KJ6mzTZqKnqmAp3fzZmhPdkjP5KGpD6U/view?usp=drive_link",
  },
];

export default function Certificates() {
  return (
    <main className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "8rem" }}>
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", maxWidth: "800px" }}>
        
        {/* Header Document */}
        <section aria-labelledby="certs-h1" style={{ marginBottom: "3.5rem", textAlign: "center" }}>
          <div style={{ transform: "rotate(-0.5deg)", display: "inline-block", width: "100%" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ margin: "0 auto", textAlign: "left" }}>
              <div style={{ marginBottom: "0.75rem" }}>
                <TypewriterLabel variant="dymo" rotation={1}>
                  CERTIFICATIONS &amp; TRAINING
                </TypewriterLabel>
              </div>
              <h1 id="certs-h1" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2.25rem, 5.5vw, 3.25rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                margin: "0 0 1rem 0" 
              }}>
                Certifications &amp; Training
              </h1>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "1rem", color: "#333", lineHeight: "1.5", margin: 0 }}>
                Verified course completions, guided lab certificates, and technical workshops that support my software engineering capabilities.
              </p>
            </Paper>
          </div>
        </section>

        {/* Certificate Cards List */}
        <section aria-label="List of certificates" style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "4rem" }}>
          {certificates.map((cert, idx) => {
            const rotation = idx % 2 === 0 ? -0.8 : 0.8;
            const paperVariant = idx % 3 === 0 ? "light" : idx % 3 === 1 ? "lined" : "craft";

            return (
              <article key={cert.title} style={{ transform: `rotate(${rotation}deg)` }}>
                <Paper variant={paperVariant} rotation={0} padding="large" style={{ position: "relative" }}>
                  <Tape rotation={idx % 2 === 0 ? 1.5 : -1.5} position="top-right" width="85px" />

                  <header style={{ marginBottom: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
                      <TypewriterLabel variant="plain">{cert.issuer.toUpperCase()}</TypewriterLabel>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "var(--color-ink-red)" }}>
                        {cert.date.toUpperCase()}
                      </span>
                    </div>

                    <h2 style={{ 
                      fontFamily: "var(--font-serif)", 
                      fontSize: "1.5rem", 
                      fontWeight: 700, 
                      fontStyle: "italic", 
                      color: "var(--text-dark)", 
                      margin: "0.5rem 0 0 0" 
                    }}>
                      {cert.title}
                    </h2>
                  </header>

                  <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.55", color: paperVariant === "craft" ? "#2c251f" : "#333", marginBottom: "1.25rem" }}>
                    {cert.description}
                  </p>

                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                    {cert.tech.map((t) => (
                      <span 
                        key={t}
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
                        {t}
                      </span>
                    ))}
                  </div>

                  {cert.url && (
                    <div>
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="tactile-btn"
                        aria-label={`View certificate verification document for ${cert.title}`}
                      >
                        [ VERIFY CERTIFICATE &rarr; ]
                      </a>
                    </div>
                  )}
                </Paper>
              </article>
            );
          })}
        </section>

        {/* Call to Action */}
        <section aria-labelledby="certs-cta-heading" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(1deg)", width: "100%", maxWidth: "560px" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <h2 id="certs-cta-heading" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.8rem", 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem" 
              }}>
                WANT TO SEE PRACTICAL APPLICATION?
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.45", marginBottom: "1.5rem" }}>
                Certificates validate foundational study. Inspect my verified project case studies to see how technical skills are applied in code.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1.5}>
                  practical web implementation
                </HandwrittenNote>
              </div>

              <div className="card-btn-container" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
                <Link href="/projects/" className="tactile-btn tactile-btn-primary" aria-label="View verified web projects">
                  [ EXPLORE CASE STUDIES ]
                </Link>
                <Link href="/contact/" className="tactile-btn" aria-label="Book a project with Ram Singh">
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
