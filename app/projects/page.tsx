import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Projects",
  description: "Ram Singh's Projects - Web development projects including AI Multi-Module System, Modern Calculator, and Portfolio Website built with HTML, CSS, JavaScript, and Python.",
};

export default function Projects() {
  const featuredProjects = [
    {
      title: "AI Multi-Module System",
      icon: "🤖",
      description: "A modular AI system supporting multiple AI-powered functionalities through independent, reusable modules. Demonstrates scalable architecture, clean separation of concerns, and real-world AI integration.",
      tech: ["Python", "AI/LLM APIs", "Modular Design", "GitHub"],
      liveUrl: "https://multi-module-ai-system.vercel.app/",
      githubUrl: "https://github.com/Ramsingh4656/MultiModule-AI-System",
      isInternalLink: false,
    },
    {
      title: "Modern Calculator",
      icon: "🧮",
      description: "A fully functional calculator with keyboard support, clean gradient UI, and all basic mathematical operations. Features error handling, responsive design, and smooth animations.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      liveUrl: "/projects/modern-calculator/",
      githubUrl: "https://github.com/Ramsingh4656/Modern-Calculator",
      isInternalLink: true,
    },
    {
      title: "Portfolio Website",
      icon: "💼",
      description: "A modern, dark-themed developer portfolio with smooth animations, responsive design, and clean architecture. Built with vanilla JavaScript and optimized for performance.",
      tech: ["HTML5", "CSS3", "JavaScript", "SEO", "PWA"],
      liveUrl: "/",
      githubUrl: "https://github.com/Ramsingh4656/portfolio",
      isInternalLink: true,
    },
  ];

  const upcomingProjects = [
    {
      title: "CryptoTrack",
      icon: "₿",
      description: "Real-time cryptocurrency price tracker with interactive charts, portfolio management, and market analysis. Features live data updates and responsive design.",
      tech: ["React", "API Integration", "Charts.js", "CSS3"],
    },
    {
      title: "TaskFlow",
      icon: "✅",
      description: "A modern task management application with drag-and-drop functionality, categories, deadlines, and progress tracking. Built with vanilla JavaScript.",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    },
    {
      title: "WeatherNow",
      icon: "🌤️",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather information. Features smooth animations and intuitive UI.",
      tech: ["JavaScript", "Weather API", "Geolocation", "CSS3"],
    },
    {
      title: "ShopLanding",
      icon: "🛒",
      description: "Modern e-commerce landing page with product showcase, shopping cart functionality, and payment integration. Fully responsive and optimized for conversions.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    },
    {
      title: "DevBlog",
      icon: "📝",
      description: "A clean, minimalist blog platform for developers with markdown support, syntax highlighting, and responsive design. Features dark mode and reading time estimates.",
      tech: ["React", "Markdown", "Syntax Highlighting", "CSS3"],
    },
    {
      title: "MemoryGame",
      icon: "🎮",
      description: "Interactive memory card game with multiple difficulty levels, scoring system, and smooth animations. Built with vanilla JavaScript and CSS animations.",
      tech: ["HTML5", "CSS3", "JavaScript", "Animations"],
    },
  ];

  return (
    <>
      <ScrollReveal />
      
      {/* Projects Header */}
      <section className="section-padding" style={{ paddingTop: "8rem" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">projects</h2>
            <p className="section-subtitle">
              A comprehensive showcase of my development work, from simple utilities to complex applications
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "var(--accent-primary)", fontFamily: "var(--font-mono)" }}>
            Featured Projects
          </h2>
          
          <div className="cards-grid">
            {featuredProjects.map((project) => (
              <article key={project.title} className="card glow-border reveal">
                <div className="card-header">
                  <div className="card-icon">{project.icon}</div>
                  <h3 className="card-title">{project.title}</h3>
                </div>
                <p className="card-description">{project.description}</p>
                <div className="card-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="card-actions">
                  {project.isInternalLink ? (
                    <Link href={project.liveUrl} className="btn btn-primary">
                      Live Demo
                    </Link>
                  ) : (
                    <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Live App
                    </a>
                  )}
                  <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="section-padding">
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "var(--accent-primary)", fontFamily: "var(--font-mono)" }}>
            Upcoming Projects
          </h2>
          
          <div className="cards-grid">
            {upcomingProjects.map((project) => (
              <article key={project.title} className="card glow-border reveal">
                <div className="card-header">
                  <div className="card-icon">{project.icon}</div>
                  <h3 className="card-title">{project.title}</h3>
                </div>
                <p className="card-description">{project.description}</p>
                <div className="card-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="card-actions">
                  <span className="btn btn-primary" style={{ opacity: 0.6, cursor: "not-allowed" }}>
                    Coming Soon
                  </span>
                  <span className="btn btn-secondary" style={{ opacity: 0.6, cursor: "not-allowed" }}>
                    Source Code
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding">
        <div className="container">
          <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <div className="card glow-border reveal" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "2.5rem", color: "var(--accent-primary)", marginBottom: "0.5rem" }}>2+</h3>
              <p style={{ color: "var(--text-secondary)" }}>Completed Projects</p>
            </div>
            <div className="card glow-border reveal" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "2.5rem", color: "var(--accent-primary)", marginBottom: "0.5rem" }}>3+</h3>
              <p style={{ color: "var(--text-secondary)" }}>Projects in Development</p>
            </div>
            <div className="card glow-border reveal" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "2.5rem", color: "var(--accent-primary)", marginBottom: "0.5rem" }}>10+</h3>
              <p style={{ color: "var(--text-secondary)" }}>Technologies Used</p>
            </div>
            <div className="card glow-border reveal" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "2.5rem", color: "var(--accent-primary)", marginBottom: "0.5rem" }}>100%</h3>
              <p style={{ color: "var(--text-secondary)" }}>Open Source</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <div className="card glow-border reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ marginBottom: "1rem" }}>Have a Project Idea?</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              I'm always interested in collaborating on exciting projects. Let's discuss how we can bring your ideas to life!
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact/" className="btn btn-primary">
                Get in Touch
              </Link>
              <a href="https://github.com/Ramsingh4656" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
