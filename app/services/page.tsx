import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";

export const metadata: Metadata = {
  title: "Freelance Web Development Services",
  description: "Explore professional freelance web development services by Ram Singh, including frontend development, landing pages, and legacy website redesigns.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Freelance Web Development Services | Ram Singh",
    description: "Explore professional freelance web development services by Ram Singh, including frontend development, landing pages, and legacy website redesigns.",
    url: "/services/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Development Services | Ram Singh",
    description: "Explore professional freelance web development services by Ram Singh, including frontend development, landing pages, and legacy website redesigns.",
  },
};

const services = [
  {
    number: "SERVICE 01",
    title: "Web Development",
    href: "/services/web-development/",
    description: "Complete responsive websites, client-side utility applications, and static web platforms built with semantic HTML and modern frameworks.",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Next.js"],
    rotation: -1,
    variant: "light" as const
  },
  {
    number: "SERVICE 02",
    title: "Frontend Development",
    href: "/services/frontend-development/",
    description: "Translating static designs into interactive web code, prioritizing CSS custom properties, performance, and accessibility standards.",
    tech: ["React", "Next.js", "CSS Variables", "Accessibility", "Flexbox & Grid"],
    rotation: 1.2,
    variant: "lined" as const
  },
  {
    number: "SERVICE 03",
    title: "Landing Pages",
    href: "/services/landing-pages/",
    description: "Single-page web structures focused on clear message presentation, mobile-first forms, fast loading speeds, and direct user actions.",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Forms Integration"],
    rotation: -0.8,
    variant: "grid" as const
  },
  {
    number: "SERVICE 04",
    title: "Website Redesign & Modernization",
    href: "/services/website-redesign/",
    description: "Restructuring existing frontends to improve mobile viewport layout scaling, page loading speed indices, and accessibility tags.",
    tech: ["Layout Refactoring", "CSS Variables Upgrade", "React Migration"],
    rotation: 0.5,
    variant: "craft" as const
  }
];

export default function ServicesHub() {
  return (
    <main className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "8rem" }}>
      {/* Desk Background */}
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", maxWidth: "800px" }}>
        
        {/* Hub Introduction Document */}
        <section aria-labelledby="hub-h1" style={{ marginBottom: "4rem", textAlign: "center" }}>
          <div style={{ transform: "rotate(-0.5deg)", display: "inline-block", width: "100%" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ margin: "0 auto", textAlign: "left" }}>
              <div style={{ marginBottom: "0.75rem" }}>
                <TypewriterLabel variant="dymo" rotation={1}>
                  SERVICES INDEX
                </TypewriterLabel>
              </div>
              <h1 id="hub-h1" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2.25rem, 5.5vw, 3.25rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                margin: "0 0 1rem 0" 
              }}>
                Freelance Web Development Services
              </h1>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "1rem", color: "#333", lineHeight: "1.5", margin: 0 }}>
                I design and build fast, responsive, and accessible website layouts. My services are focused, direct, and backed by actual project code evidence. I am a freelance developer based in India, working online with clients globally.
              </p>
            </Paper>
          </div>
        </section>

        {/* Services Document Grid */}
        <section aria-label="Available services" style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "3rem", 
          marginBottom: "5rem" 
        }}>
          {services.map((service) => (
            <article key={service.href} style={{ transform: `rotate(${service.rotation}deg)` }}>
              <Paper variant={service.variant} rotation={0} padding="large" style={{ position: "relative" }}>
                <Tape rotation={service.rotation * -2} position="top-right" width="90px" />
                
                <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ 
                    fontFamily: "var(--font-mono)", 
                    fontSize: "0.75rem", 
                    fontWeight: "bold",
                    color: "var(--color-ink-red)"
                  }}>
                    {service.number}
                  </span>
                </header>

                <h2 style={{ 
                  fontFamily: "var(--font-serif)", 
                  fontSize: "1.75rem", 
                  fontWeight: 700, 
                  fontStyle: "italic",
                  color: "var(--text-dark)", 
                  margin: "0 0 1rem 0" 
                }}>
                  {service.title}
                </h2>
                
                <p style={{ 
                  fontFamily: "var(--font-primary)", 
                  fontSize: "0.95rem", 
                  lineHeight: "1.55", 
                  color: "#333", 
                  marginBottom: "1.5rem" 
                }}>
                  {service.description}
                </p>

                {/* Tech Badges */}
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  {service.tech.map((tech) => (
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
                        color: "#222"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <Link 
                    href={service.href} 
                    className="tactile-btn tactile-btn-primary"
                    style={{ textDecoration: "none" }}
                    aria-label={`View details for ${service.title}`}
                  >
                    [ EXPLORE SERVICE &rarr; ]
                  </Link>
                </div>
              </Paper>
            </article>
          ))}
        </section>

        {/* Final CTA Folder */}
        <section aria-labelledby="services-cta-heading" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(1.5deg)", width: "100%", maxWidth: "560px" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <h2 id="services-cta-heading" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.8rem", 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem" 
              }}>
                HAVE A PROJECT IN MIND?
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.45", marginBottom: "1.5rem" }}>
                Let's connect to discuss your website parameters, code requirements, and timeline goals.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1.5}>
                  let's work together
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
