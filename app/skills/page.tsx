import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Skills",
  description: "Ram Singh's Skills - Frontend development, Cloud computing, AI/ML, and programming languages including HTML, CSS, JavaScript, React, Azure, Python, and more.",
};

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      items: [
        { name: "HTML5", icon: "🌐", level: "Advanced" },
        { name: "CSS3", icon: "🎨", level: "Advanced" },
        { name: "JavaScript", icon: "⚡", level: "Intermediate" },
        { name: "Responsive Design", icon: "📱", level: "Advanced" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "React", icon: "⚛️", level: "Learning" },
        { name: "Tailwind CSS", icon: "💨", level: "Intermediate" },
        { name: "Bootstrap", icon: "🎯", level: "Advanced" },
      ],
    },
    {
      title: "Cloud & AI/ML",
      items: [
        { name: "Microsoft Azure", icon: "☁️", level: "Fundamentals" },
        { name: "AI/ML Basics", icon: "🤖", level: "Learning" },
      ],
    },
    {
      title: "Programming Languages",
      items: [
        { name: "Python", icon: "🐍", level: "Intermediate" },
        { name: "Java", icon: "☕", level: "Intermediate" },
        { name: "C/C++", icon: "🔧", level: "Intermediate" },
      ],
    },
    {
      title: "Tools & Database",
      items: [
        { name: "Git & GitHub", icon: "📦", level: "Advanced" },
        { name: "MySQL", icon: "🗄️", level: "Intermediate" },
        { name: "VS Code", icon: "💻", level: "Expert" },
        { name: "Linux", icon: "🐧", level: "Basic" },
      ],
    },
  ];

  return (
    <>
      <ScrollReveal />
      
      {/* Skills Header */}
      <section className="section-padding" style={{ paddingTop: "8rem" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">skills</h2>
            <p className="section-subtitle">Technologies and tools I work with, organized by expertise area</p>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section-padding reveal">
        <div className="container">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category" style={{ marginBottom: "3rem" }}>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.items.map((item) => (
                  <div key={item.name} className="skill-item glow-border">
                    <div className="skill-icon">{item.icon}</div>
                    <div className="skill-name">{item.name}</div>
                    <div className="skill-level">{item.level}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <div className="card glow-border reveal" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ marginBottom: "1rem" }}>See These Skills in Action</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              Check out my projects to see how I apply these skills to build real-world applications.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/projects/" className="btn btn-primary">
                View Projects
              </Link>
              <Link href="/contact/" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
