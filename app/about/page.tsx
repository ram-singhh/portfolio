import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "About",
  description: "About Ram Singh - Frontend Developer and BSc-IT Student with expertise in HTML, CSS, JavaScript, and Microsoft Azure. Seeking internships in web development.",
};

export default function About() {
  return (
    <>
      <ScrollReveal />
      
      {/* About Header */}
      <section className="section-padding" style={{ paddingTop: "8rem" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">about-me</h2>
            <p className="section-subtitle">Passionate first-year BSc-IT student ready to make an impact</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding reveal">
        <div className="container">
          <div className="cards-grid">
            <article className="card glow-border">
              <div className="card-header">
                <div className="card-icon">🎓</div>
                <h3 className="card-title">Education & Focus</h3>
              </div>
              <p className="card-description">
                First-year BSc-IT student with strong interest in frontend development, cloud computing, and AI/ML fundamentals. Actively building practical skills through hands-on projects and industry-recognized certifications.
              </p>
              <div className="card-tech" style={{ marginTop: "1rem" }}>
                <span className="tech-tag">BSc-IT Student</span>
                <span className="tech-tag">2025-2028</span>
              </div>
            </article>

            <article className="card glow-border">
              <div className="card-header">
                <div className="card-icon">💡</div>
                <h3 className="card-title">What I Build</h3>
              </div>
              <p className="card-description">
                I create responsive web applications with clean, modern interfaces. Currently learning React and exploring cloud deployment with Microsoft Azure. Passionate about writing efficient code and solving real-world problems through technology.
              </p>
            </article>

            <article className="card glow-border">
              <div className="card-header">
                <div className="card-icon">☁️</div>
                <h3 className="card-title">Recent Achievement</h3>
              </div>
              <p className="card-description">
                Completed Microsoft Azure Internship through AICTE program, gaining hands-on experience with cloud services and enterprise solutions. Ready to apply this knowledge in real-world projects.
              </p>
              <div className="card-tech" style={{ marginTop: "1rem" }}>
                <span className="tech-tag">Microsoft Azure</span>
                <span className="tech-tag">Cloud Computing</span>
                <span className="tech-tag">AICTE Certified</span>
              </div>
            </article>

            <article className="card glow-border">
              <div className="card-header">
                <div className="card-icon">🚀</div>
                <h3 className="card-title">Seeking Opportunities</h3>
              </div>
              <p className="card-description">
                Actively seeking internships and entry-level opportunities in frontend development, full-stack development, or cloud engineering. Eager to contribute to meaningful projects and grow alongside experienced teams.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <div className="card glow-border reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ marginBottom: "1rem" }}>Let's Connect!</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              Interested in working together or just want to say hello? I'd love to hear from you!
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" className="btn btn-primary">
                Get in Touch
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
