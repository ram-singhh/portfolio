import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Certificates",
  description: "Ram Singh's Certificates - Microsoft Azure, AI/ML, Cloud Administration, Power BI, Cybersecurity, and more from AICTE, Microsoft Elevate, and Udemy.",
};

export default function Certificates() {
  const certificates = [
    {
      title: "Microsoft Azure Internship Completion",
      issuer: "Microsoft Elevate (AICTE)",
      date: "February 2026",
      description: "Successfully completed Microsoft Azure internship program with hands-on experience in cloud services and deployment concepts.",
      tech: ["Microsoft Azure", "Cloud Computing", "Internship", "Hands-on Labs"],
      url: "https://drive.google.com/file/d/1-wA5HD_6ghKBzXUp-uJe_eCZW6SKw5dk/view?usp=drive_link",
      isEnabled: true,
    },
    {
      title: "Microsoft Azure – Course Completion (25 Hours)",
      issuer: "Microsoft Elevate (AICTE)",
      date: "January 2026",
      description: "Comprehensive 25-hour course covering Microsoft Azure fundamentals, services, and cloud deployment strategies.",
      tech: ["Microsoft Azure", "Cloud Services", "25 Hours", "Fundamentals"],
      url: "https://drive.google.com/file/d/1_8-TxeHxiz1Rv_0WltT0DV2_j7tb5UNX/view?usp=drive_link",
      isEnabled: true,
    },
    {
      title: "Artificial Intelligence & Machine Learning (20 Hours)",
      issuer: "Microsoft Elevate (AICTE)",
      date: "January 2026",
      description: "Comprehensive training in artificial intelligence and machine learning concepts, algorithms, and practical applications.",
      tech: ["Artificial Intelligence", "Machine Learning", "20 Hours", "Algorithms"],
      url: "https://drive.google.com/file/d/19KEqrLzh8Cje7k1VTukETJUZMHH7qcME/view?usp=drive_link",
      isEnabled: true,
    },
    {
      title: "Microsoft Copilot",
      issuer: "Microsoft Elevate (AICTE)",
      date: "January 2026",
      description: "Explored Microsoft Copilot's AI-powered capabilities to boost productivity, automate workflows, and integrate intelligent assistance across Microsoft 365 applications.",
      tech: ["Microsoft Copilot", "AI Productivity", "Microsoft 365", "Automation"],
      url: "https://drive.google.com/file/d/12mR2zKaHs-0sJ51eZ8-Jj1CLxwtEEelw/view?usp=sharing",
      isEnabled: true,
    },
    {
      title: "Cyber Security Workshop",
      issuer: "Thetechnique Academy",
      date: "February 2026",
      description: "Learned the fundamentals of cybersecurity, common cyber threats, basic security practices, and methods to protect systems and data.",
      tech: ["Cybersecurity", "Information Security", "Online Safety", "IT Fundamentals"],
      url: "https://drive.google.com/file/d/1RX-MUTAeG6HqqGs9OyvM2VwTbWZPvwgG/view?usp=drive_link",
      isEnabled: true,
    },
    {
      title: "AI-Powered SEO Masterclass",
      issuer: "Pankaj Kumar SEO – Digital Marketing Institute & Agency",
      date: "December 2025",
      description: "Gained practical knowledge of SEO fundamentals including keyword research, on-page and off-page SEO, and the use of AI tools for improving website ranking and digital visibility.",
      tech: ["Search Engine Optimization (SEO)", "Digital Marketing", "AI in Marketing"],
      url: "https://drive.google.com/file/d/1E2am8PTXRGRlftCjBMFt1FbFBbxypunb/view?usp=drive_link",
      isEnabled: true,
    },
    {
      title: "AI Tools Workshop",
      issuer: "be10x",
      date: "February 2026",
      description: "Gained insights into how artificial intelligence can improve productivity, automate tasks, and support real-world problem-solving.",
      tech: ["Artificial Intelligence (AI)", "AI Tools", "Automation", "Technology Awareness"],
      url: "https://drive.google.com/file/d/1KJ6mzTZqKnqmAp3fzZmhPdkjP5KGpD6U/view?usp=drive_link",
      isEnabled: true,
    },
    {
      title: "Power BI – For Business Applications",
      issuer: "Microsoft Elevate (AICTE)",
      date: "January 2026",
      description: "Learned to create interactive dashboards, data visualizations, and business intelligence reports using Microsoft Power BI for data-driven decision making.",
      tech: ["Power BI", "Data Visualization", "Business Intelligence", "Dashboards"],
      url: "https://drive.google.com/file/d/1ufFLcqrMuZacKSlwwRl42RQN6f7fNpC-/view?usp=sharing",
      isEnabled: true,
    },
    {
      title: "Cloud Administration & Engineering (40 Hours)",
      issuer: "Microsoft Elevate (AICTE)",
      date: "January 2026",
      description: "Extensive 40-hour program covering cloud administration, engineering practices, and enterprise cloud infrastructure management.",
      tech: ["Cloud Administration", "Cloud Engineering", "40 Hours", "Infrastructure"],
      url: "https://drive.google.com/file/d/1BYAZmjvBYjhXJX5FWJfMutAaTxHX-tMA/view?usp=drive_link",
      isEnabled: true,
    },
    {
      title: "Git & GitHub Mastery",
      issuer: "Udemy",
      date: "September 2025",
      description: "Version control mastery including Git workflows, branching strategies, collaboration, and GitHub best practices.",
      tech: ["Git", "GitHub", "Version Control", "Collaboration"],
      url: "",
      isEnabled: false,
    },
  ];

  return (
    <>
      <ScrollReveal />
      
      {/* Certificates Header */}
      <section className="section-padding" style={{ paddingTop: "8rem" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">certificates</h2>
            <p className="section-subtitle">
              Professional certifications and achievements that validate my skills and knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="cards-grid">
            {certificates.map((cert) => (
              <article key={cert.title} className="card glow-border reveal">
                <div className="card-header">
                  <div className="card-icon">
                    {cert.tech.includes("Microsoft Azure") || cert.tech.includes("Cloud Administration") ? "☁️" : cert.tech.includes("Power BI") ? "📊" : cert.tech.includes("Artificial Intelligence") || cert.tech.includes("AI Tools") || cert.tech.includes("Microsoft Copilot") ? "🤖" : "🌐"}
                  </div>
                  <h3 className="card-title">{cert.title}</h3>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: "0.5rem" }}>
                    {cert.issuer}
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Completed: {cert.date}</p>
                </div>
                <p className="card-description">{cert.description}</p>
                <div className="card-tech">
                  {cert.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="card-actions">
                  {cert.isEnabled ? (
                    <a href={cert.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  ) : (
                    <span className="btn btn-primary" style={{ opacity: 0.6, cursor: "not-allowed" }}>
                      View Certificate
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Certifications */}
      <section className="section-padding">
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "var(--accent-primary)", fontFamily: "var(--font-mono)" }}>
            Currently Pursuing
          </h2>
          
          <div className="cards-grid">
            <article className="card glow-border reveal" style={{ opacity: 0.8 }}>
              <div className="card-header">
                <div className="card-icon">⚛️</div>
                <h3 className="card-title">React Development</h3>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: "0.5rem" }}>Meta (Facebook)</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Expected: March 2026</p>
              </div>
              <p className="card-description">
                Comprehensive React development course covering components, hooks, state management, and modern React patterns.
              </p>
              <div className="card-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Hooks</span>
                <span className="tech-tag">State Management</span>
                <span className="tech-tag">JSX</span>
              </div>
              <div className="card-actions">
                <span className="btn btn-secondary" style={{ opacity: 0.6, cursor: "not-allowed" }}>
                  In Progress
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container">
          <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <div className="card glow-border reveal" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "2.5rem", color: "var(--accent-primary)", marginBottom: "0.5rem" }}>8+</h3>
              <p style={{ color: "var(--text-secondary)" }}>Certificates Earned</p>
            </div>
            <div className="card glow-border reveal" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "2.5rem", color: "var(--accent-primary)", marginBottom: "0.5rem" }}>200+</h3>
              <p style={{ color: "var(--text-secondary)" }}>Hours of Learning</p>
            </div>
            <div className="card glow-border reveal" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "2.5rem", color: "var(--accent-primary)", marginBottom: "0.5rem" }}>4+</h3>
              <p style={{ color: "var(--text-secondary)" }}>Platforms Used</p>
            </div>
            <div className="card glow-border reveal" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "2.5rem", color: "var(--accent-primary)", marginBottom: "0.5rem" }}>2+</h3>
              <p style={{ color: "var(--text-secondary)" }}>In Progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Learning Philosophy */}
      <section className="section-padding">
        <div className="container">
          <div className="card glow-border reveal" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div className="card-header" style={{ justifyContent: "center" }}>
              <div className="card-icon">🎓</div>
              <h2 className="card-title">Continuous Learning</h2>
            </div>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.125rem", lineHeight: "1.6" }}>
              I believe in continuous learning and staying updated with the latest technologies. These certificates represent my commitment to professional growth and my dedication to mastering the skills needed to build exceptional web experiences.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" className="btn btn-primary">
                Discuss Opportunities
              </Link>
              <Link href="/projects/" className="btn btn-secondary">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
