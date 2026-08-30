import React from "react";
import Link from "next/link";
import Image from "next/image";
import TypingText from "@/components/ui/TypingText";
import HeroParticles from "@/components/ui/HeroParticles";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      
      {/* Hero Section */}
      <section id="home" className="hero section-padding">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Ram Singh — <span className="text-gradient">Freelance Web Developer</span>
              </h1>
              <p className="subtitle">
                I am Ram Singh, a freelance web developer building fast, responsive, and modern websites and web experiences. I focus on quality web development while exploring <TypingText />.
              </p>
              <div className="hero-actions">
                <Link href="/projects/" className="hero-cta">
                  View Projects
                </Link>
                <Link href="/contact/" className="btn btn-secondary">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <Image
                src="/assets/images/Profile.jpg"
                alt="Ram Singh - Freelance Web Developer"
                width={320}
                height={320}
                priority
              />
              <div className="floating-element">Open to Internships</div>
              <div className="floating-element">Available for Collaboration</div>
              <HeroParticles />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section section-padding reveal">
        <div className="container">
          <div className="quote-card glow-border">
            <p className="quote-text">
              Control can sometimes be an illusion. But sometimes you need illusion to gain control.
            </p>
            <p className="quote-author">— Mr. Robot</p>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="section-padding reveal">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">projects</h2>
            <p className="section-subtitle">A showcase of my recent work and personal projects</p>
          </div>

          <div className="cards-grid">
            {/* AI Multi-Module System Project */}
            <article className="card glow-border">
              <div className="card-header">
                <div className="card-icon">🤖</div>
                <h3 className="card-title">AI Multi-Module System</h3>
              </div>
              <p className="card-description">
                A modular AI system supporting multiple AI-powered functionalities through independent, reusable modules. Demonstrates scalable architecture, clean separation of concerns, and real-world AI integration.
              </p>
              <div className="card-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">AI/LLM APIs</span>
                <span className="tech-tag">Modular Design</span>
                <span className="tech-tag">GitHub</span>
              </div>
              <div className="project-highlights">
                <h4>Key Features:</h4>
                <ul>
                  <li>Modular architecture with independent AI modules</li>
                  <li>Central controller for routing and managing AI tasks</li>
                  <li>Designed for scalability and future AI integrations</li>
                </ul>
              </div>
              <div className="card-actions">
                <a
                  href="https://multi-module-ai-system.vercel.app/"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live App
                </a>
                <a
                  href="https://github.com/Ramsingh4656/MultiModule-AI-System"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View MultiModule AI System source code on GitHub"
                >
                  GitHub
                </a>
              </div>
            </article>

            {/* Modern Calculator Project */}
            <article className="card glow-border">
              <div className="card-header">
                <div className="card-icon">🧮</div>
                <h3 className="card-title">Modern Calculator</h3>
              </div>
              <p className="card-description">
                A responsive calculator application solving the need for accessible mathematical operations with keyboard support and error handling.
              </p>
              <div className="card-tech">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Responsive Design</span>
              </div>
              <div className="project-highlights">
                <h4>Key Features & Learning:</h4>
                <ul>
                  <li>Implemented event handling for both click and keyboard inputs</li>
                  <li>Built responsive UI with CSS Grid and modern design principles</li>
                  <li>Learned error handling and input validation techniques</li>
                </ul>
              </div>
              <div className="card-actions">
                <Link href="/projects/modern-calculator/" className="btn btn-primary">
                  Live Demo
                </Link>
                <a
                  href="https://github.com/Ramsingh4656/Modern-Calculator"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Modern Calculator source code on GitHub"
                >
                  GitHub
                </a>
              </div>
            </article>

            {/* Portfolio Project */}
            <article className="card glow-border">
              <div className="card-header">
                <div className="card-icon">💼</div>
                <h3 className="card-title">Portfolio Website</h3>
              </div>
              <p className="card-description">
                A professional portfolio website designed to showcase skills and projects to potential employers and collaborators.
              </p>
              <div className="card-tech">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">SEO Optimized</span>
              </div>
              <div className="project-highlights">
                <h4>Key Features & Learning:</h4>
                <ul>
                  <li>Designed mobile-first responsive layout with CSS Grid and Flexbox</li>
                  <li>Implemented smooth scroll animations and intersection observers</li>
                  <li>Learned SEO optimization and accessibility best practices</li>
                </ul>
              </div>
              <div className="card-actions">
                <Link href="/" className="btn btn-primary" aria-label="View Portfolio website live demo">
                  Live Demo
                </Link>
                <a
                  href="https://github.com/Ramsingh4656/portfolio"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Portfolio website source code on GitHub"
                >
                  GitHub
                </a>
              </div>
            </article>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/projects/" className="btn btn-primary">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding reveal">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">certifications</h2>
            <p className="section-subtitle">
              Professional certifications validating my skills and commitment to learning
            </p>
          </div>

          <div className="cards-grid">
            <article className="card glow-border">
              <div className="card-header">
                <div className="card-icon">☁️</div>
                <h3 className="card-title">Microsoft Azure Internship</h3>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Microsoft Elevate (AICTE)
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>February 2026</p>
              </div>
              <p className="card-description">
                Completed comprehensive internship program with hands-on Azure cloud services experience.
              </p>
              <div className="card-actions">
                <Link href="/certificates/" className="btn btn-primary">
                  View Certificate
                </Link>
              </div>
            </article>

            <article className="card glow-border">
              <div className="card-header">
                <div className="card-icon">🤖</div>
                <h3 className="card-title">AI & Machine Learning</h3>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Microsoft Elevate (AICTE)
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>January 2026 • 20 Hours</p>
              </div>
              <p className="card-description">
                Comprehensive training in AI/ML concepts, algorithms, and practical applications.
              </p>
              <div className="card-actions">
                <Link href="/certificates/" className="btn btn-primary">
                  View Certificate
                </Link>
              </div>
            </article>

            <article className="card glow-border">
              <div className="card-header">
                <div className="card-icon">⚙️</div>
                <h3 className="card-title">Cloud Administration</h3>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Microsoft Elevate (AICTE)
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>January 2026 • 40 Hours</p>
              </div>
              <p className="card-description">
                Extensive program covering cloud administration and engineering practices.
              </p>
              <div className="card-actions">
                <Link href="/certificates/" className="btn btn-primary">
                  View Certificate
                </Link>
              </div>
            </article>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/certificates/" className="btn btn-primary">
              View All Certificates →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding reveal">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">skills</h2>
            <p className="section-subtitle">
              Technologies and tools I work with, organized by expertise area
            </p>
          </div>

          {/* Frontend Skills */}
          <div className="skill-category">
            <h3 className="skill-category-title">Frontend Development</h3>
            <div className="skills-grid">
              <div className="skill-item glow-border">
                <div className="skill-icon">🌐</div>
                <div className="skill-name">HTML5</div>
                <div className="skill-level">Advanced</div>
              </div>

              <div className="skill-item glow-border">
                <div className="skill-icon">🎨</div>
                <div className="skill-name">CSS3</div>
                <div className="skill-level">Advanced</div>
              </div>

              <div className="skill-item glow-border">
                <div className="skill-icon">⚡</div>
                <div className="skill-name">JavaScript</div>
                <div className="skill-level">Intermediate</div>
              </div>

              <div className="skill-item glow-border">
                <div className="skill-icon">📱</div>
                <div className="skill-name">Responsive Design</div>
                <div className="skill-level">Advanced</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/skills/" className="btn btn-primary">
              View All Skills →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding reveal">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">about-me</h2>
            <p className="section-subtitle">Passionate first-year BSc-IT student ready to make an impact</p>
          </div>

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
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/about/" className="btn btn-primary">
              More About Me →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section id="contact-preview" className="section-padding reveal">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">contacts</h2>
            <p className="section-subtitle">Open to internships, freelance work, and collaborations</p>
          </div>

          <div className="cards-grid">
            <article className="card glow-border">
              <div className="card-header">
                <div className="card-icon">📧</div>
                <h3 className="card-title">Ready to Collaborate</h3>
              </div>
              <p className="card-description">
                I'm actively seeking internship opportunities and excited to contribute to meaningful projects. Let's discuss how I can add value to your team!
              </p>
              <div className="card-actions">
                <Link href="/contact/" className="btn btn-primary">
                  Get in Touch
                </Link>
              </div>
            </article>

            <article className="card glow-border">
              <div className="card-header">
                <div className="card-icon">💼</div>
                <h3 className="card-title">Resume & Portfolio</h3>
              </div>
              <p className="card-description">
                Download my resume to learn more about my experience, skills, and educational background, or explore my complete portfolio.
              </p>
              <div className="card-actions">
                <a href="/Ram-Singh-Resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
