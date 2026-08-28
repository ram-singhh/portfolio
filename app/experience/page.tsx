import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Experience",
  description: "Ram Singh's Experience - Microsoft Azure Internship via AICTE, BSc-IT studies, and frontend development projects. Actively seeking internships in web development and cloud computing.",
};

export default function Experience() {
  return (
    <>
      <ScrollReveal />
      
      {/* Experience Header */}
      <section className="section-padding" style={{ paddingTop: "8rem" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">experience</h2>
            <p className="section-subtitle">My professional journey, internships, and career development in technology</p>
          </div>
        </div>
      </section>

      {/* Professional Experience Timeline */}
      <section className="section-padding">
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "var(--accent-primary)", fontFamily: "var(--font-mono)" }}>
            Professional Experience
          </h2>
          
          <div className="timeline">
            {/* Microsoft Azure Internship */}
            <div className="timeline-item reveal">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="card glow-border">
                  <div className="card-header">
                    <div className="card-icon">☁️</div>
                    <div>
                      <h3 className="card-title">Microsoft Azure Intern</h3>
                      <p className="timeline-company">Microsoft Elevate (AICTE)</p>
                      <p className="timeline-date">Jan 2026 – Feb 2026</p>
                    </div>
                  </div>
                  <p className="card-description">
                    Worked with Microsoft Azure services and cloud deployment concepts. Completed guided hands-on labs and service configuration exercises. Developed understanding of cloud infrastructure and enterprise use cases.
                  </p>
                  <div className="card-tech">
                    <span className="tech-tag">Microsoft Azure</span>
                    <span className="tech-tag">Cloud Computing</span>
                    <span className="tech-tag">Cloud Deployment</span>
                    <span className="tech-tag">Service Configuration</span>
                  </div>
                  <div className="experience-highlights">
                    <h4>Key Achievements:</h4>
                    <ul>
                      <li>Completed hands-on labs with Azure services</li>
                      <li>Learned cloud deployment and configuration</li>
                      <li>Gained understanding of enterprise cloud solutions</li>
                      <li>Developed practical cloud infrastructure skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="timeline-item reveal">
              <div className="timeline-marker current">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="card glow-border">
                  <div className="card-header">
                    <div className="card-icon">🎓</div>
                    <div>
                      <h3 className="card-title">BSc-IT Student</h3>
                      <p className="timeline-company">Currently Pursuing</p>
                      <p className="timeline-date">2026 - Present</p>
                    </div>
                  </div>
                  <p className="card-description">
                    Currently in my first year of Bachelor of Science in Information Technology, focusing on web development, programming fundamentals, and modern software engineering practices.
                  </p>
                  <div className="card-tech">
                    <span className="tech-tag">Web Development</span>
                    <span className="tech-tag">Programming</span>
                    <span className="tech-tag">Software Engineering</span>
                    <span className="tech-tag">Database Management</span>
                  </div>
                  <div className="experience-highlights">
                    <h4>Key Learning Areas:</h4>
                    <ul>
                      <li>Frontend development with HTML, CSS, JavaScript</li>
                      <li>Programming languages: Python, Java, C/C++</li>
                      <li>Database design and management with MySQL</li>
                      <li>Software development lifecycle and best practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Seeking Opportunities */}
            <div className="timeline-item reveal">
              <div className="timeline-marker seeking">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="card glow-border">
                  <div className="card-header">
                    <div className="card-icon">🔍</div>
                    <div>
                      <h3 className="card-title">Seeking Internship Opportunities</h3>
                      <p className="timeline-company">Open to Opportunities</p>
                      <p className="timeline-date">Available Now</p>
                    </div>
                  </div>
                  <p className="card-description">
                    Actively seeking opportunities in frontend development, cloud computing, or software engineering to leverage my Microsoft Azure internship experience and contribute to meaningful projects.
                  </p>
                  <div className="card-tech">
                    <span className="tech-tag">Frontend Development</span>
                    <span className="tech-tag">Cloud Computing</span>
                    <span className="tech-tag">Microsoft Azure</span>
                    <span className="tech-tag">AI/ML</span>
                  </div>
                  <div className="experience-highlights">
                    <h4>What I'm Looking For:</h4>
                    <ul>
                      <li>Frontend development roles</li>
                      <li>Cloud computing positions</li>
                      <li>Software engineering opportunities</li>
                      <li>AI/ML related projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Contributions */}
      <section className="section-padding">
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "var(--accent-primary)", fontFamily: "var(--font-mono)" }}>
            Projects & Contributions
          </h2>
          
          <div className="cards-grid">
            <article className="card glow-border reveal">
              <div className="card-header">
                <div className="card-icon">💼</div>
                <h3 className="card-title">Personal Portfolio Website</h3>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Personal Project
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>December 2024</p>
              </div>
              <p className="card-description">
                Designed and developed a modern, responsive portfolio website showcasing my skills and projects. Features dark theme, smooth animations, and clean architecture.
              </p>
              <div className="card-tech">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Responsive Design</span>
              </div>
              <div className="experience-highlights">
                <h4>Key Achievements:</h4>
                <ul>
                  <li>Built from scratch using vanilla technologies</li>
                  <li>Implemented modern dark theme with purple accents</li>
                  <li>Created responsive design for all devices</li>
                  <li>Optimized for SEO and accessibility</li>
                </ul>
              </div>
            </article>

            <article className="card glow-border reveal">
              <div className="card-header">
                <div className="card-icon">🧮</div>
                <h3 className="card-title">Modern Calculator Application</h3>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Personal Project
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>November 2024</p>
              </div>
              <p className="card-description">
                Developed a fully functional calculator with keyboard support, error handling, and modern UI design. Features all basic mathematical operations.
              </p>
              <div className="card-tech">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">Event Handling</span>
              </div>
              <div className="experience-highlights">
                <h4>Key Features:</h4>
                <ul>
                  <li>Full keyboard support for accessibility</li>
                  <li>Error handling and input validation</li>
                  <li>Responsive design with modern UI</li>
                  <li>Clean, maintainable code structure</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Skills Development Journey */}
      <section className="section-padding">
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "var(--accent-primary)", fontFamily: "var(--font-mono)" }}>
            Skills Development Journey
          </h2>
          
          <div className="skills-timeline">
            <div className="skill-progress-item reveal">
              <div className="skill-period">
                <h3>2026</h3>
                <p>Cloud Computing</p>
              </div>
              <div className="skill-content">
                <h4>Microsoft Azure Internship</h4>
                <p>Gained hands-on experience with cloud services and enterprise solutions</p>
                <div className="skill-tags">
                  <span className="tech-tag">Microsoft Azure</span>
                  <span className="tech-tag">Cloud Computing</span>
                  <span className="tech-tag">AI/ML</span>
                  <span className="tech-tag">Cloud Administration</span>
                </div>
              </div>
            </div>

            <div className="skill-progress-item reveal">
              <div className="skill-period">
                <h3>2025 - Present</h3>
                <p>Current Focus</p>
              </div>
              <div className="skill-content">
                <h4>Frontend Development Mastery</h4>
                <p>Deepening expertise in modern web technologies and frameworks</p>
                <div className="skill-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Advanced CSS</span>
                  <span className="tech-tag">JavaScript ES6+</span>
                  <span className="tech-tag">Responsive Design</span>
                </div>
              </div>
            </div>

            <div className="skill-progress-item reveal">
              <div className="skill-period">
                <h3>2026</h3>
                <p>Foundation Building</p>
              </div>
              <div className="skill-content">
                <h4>Web Development Fundamentals</h4>
                <p>Built strong foundation in core web technologies and programming</p>
                <div className="skill-tags">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Python</span>
                </div>
              </div>
            </div>

            <div className="skill-progress-item reveal">
              <div className="skill-period">
                <h3>2025-2026</h3>
                <p>Programming Start</p>
              </div>
              <div className="skill-content">
                <h4>Programming Fundamentals</h4>
                <p>Started programming journey with basic languages and concepts</p>
                <div className="skill-tags">
                  <span className="tech-tag">C/C++</span>
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Goals & Aspirations */}
      <section className="section-padding">
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "var(--accent-primary)", fontFamily: "var(--font-mono)" }}>
            Career Goals & Aspirations
          </h2>
          
          <div className="cards-grid">
            <article className="card glow-border reveal">
              <div className="card-header">
                <div className="card-icon">🎯</div>
                <h3 className="card-title">Short-term Goals (6-12 months)</h3>
              </div>
              <ul className="goals-list" style={{ paddingLeft: "1.25rem", color: "var(--text-secondary)", lineHeight: "2" }}>
                <li>Secure a frontend or cloud development role</li>
                <li>Master React and modern JavaScript frameworks</li>
                <li>Deepen Microsoft Azure cloud expertise</li>
                <li>Build 5+ professional-quality projects</li>
                <li>Complete advanced web development certifications</li>
                <li>Contribute to open-source projects</li>
              </ul>
            </article>

            <article className="card glow-border reveal">
              <div className="card-header">
                <div className="card-icon">🚀</div>
                <h3 className="card-title">Long-term Vision (2-3 years)</h3>
              </div>
              <ul className="goals-list" style={{ paddingLeft: "1.25rem", color: "var(--text-secondary)", lineHeight: "2" }}>
                <li>Become a full-stack cloud developer</li>
                <li>Lead development and cloud projects</li>
                <li>Mentor other aspiring developers</li>
                <li>Specialize in cloud architecture and AI/ML</li>
                <li>Start my own tech venture</li>
              </ul>
            </article>

            <article className="card glow-border reveal">
              <div className="card-header">
                <div className="card-icon">💡</div>
                <h3 className="card-title">Areas of Interest</h3>
              </div>
              <ul className="goals-list" style={{ paddingLeft: "1.25rem", color: "var(--text-secondary)", lineHeight: "2" }}>
                <li>Frontend Development & UI/UX</li>
                <li>Cloud Computing & Microsoft Azure</li>
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Web Performance Optimization</li>
                <li>Progressive Web Applications</li>
                <li>Cloud Architecture & DevOps</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <div className="card glow-border reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ marginBottom: "1rem" }}>Let's Work Together!</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              I'm actively seeking internship opportunities and would love to contribute to your team. Let's discuss how I can add value to your projects!
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" className="btn btn-primary">
                Get in Touch
              </Link>
              <a href="/Ram-Singh-Resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
