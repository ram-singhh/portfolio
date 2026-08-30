import React from "react";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Freelance Web Development Services | Ram Singh",
  description: "Freelance web development services by Ram Singh. I build responsive, semantic, and high-performance websites for businesses, creators, and individuals.",
  alternates: {
    canonical: "https://www.ramsingh.dev/services/web-development/",
  },
  openGraph: {
    title: "Freelance Web Development Services | Ram Singh",
    description: "Freelance web development services by Ram Singh. I build responsive, semantic, and high-performance websites for businesses, creators, and individuals.",
    url: "https://www.ramsingh.dev/services/web-development/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Development Services | Ram Singh",
    description: "Freelance web development services by Ram Singh. I build responsive, semantic, and high-performance websites for businesses, creators, and individuals.",
  },
};

const whoThisIsFor = [
  "Creators, business owners, and individuals needing a solid, high-performing web presence.",
  "Projects requiring clean structural layouts, standard JavaScript interactions, and modern rendering setups.",
  "Clients looking for an honest, single-point developer partner based in India who works online."
];

const whatICanBuild = {
  intro: "I focus on core web technologies to construct lightweight, stable, and highly performant website structures.",
  items: [
    {
      name: "Responsive Website Structures",
      description: "Layouts that shift fluidly to fit mobile phones, tablets, and desktop monitors, ensuring a seamless user experience on all screen sizes."
    },
    {
      name: "Interactive Web Applications",
      description: "Client-side utilities and interactive page systems built with vanilla JavaScript or component structures like React."
    },
    {
      name: "SEO & Speed Foundations",
      description: "Clean, semantic HTML markup combined with lightweight assets to achieve fast loading speeds and search-friendly structures."
    },
    {
      name: "Accessible Interface Implementations",
      description: "Web spaces built in line with accessibility guidelines, including proper ARIA landmark tags, keyboard focus styles, and screen-reader compatibility."
    }
  ]
};

const howIWork = {
  intro: "My process is straightforward, structured, and collaborative.",
  steps: [
    {
      number: "1",
      title: "Requirement Scoping",
      description: "We detail your target objectives, required page layouts, design files or ideas, and technical constraints."
    },
    {
      number: "2",
      title: "Static File Development",
      description: "I write semantic HTML, clean CSS files, and responsive scripts using component-oriented file structures."
    },
    {
      number: "3",
      title: "Quality & Accessibility Checks",
      description: "The layout is verified across various screen widths, checked for keyboard accessibility, and tested for performance speed."
    },
    {
      number: "4",
      title: "Deployment",
      description: "I configure your website on modern hosting platforms (such as Vercel or GitHub Pages) and hand over the complete codebase."
    }
  ]
};

const technology = [
  "HTML5",
  "CSS3 / CSS Variables",
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "TypeScript",
  "Responsive Grid Layouts"
];

const qualityChecks = [
  "Responsive testing down to 375px wide viewports",
  "Accessibility check for keyboard navigation and focus outline visibility",
  "Page speed diagnostic and performance check",
  "W3C-compliant semantic markup validation",
  "Cross-browser layout compatibility checks"
];

const relevantWork = [
  {
    slug: "modern-calculator",
    title: "Modern Calculator",
    description: "An interactive, responsive utility application built in React and Next.js, showcasing DOM event management, keyboard shortcuts, and clean component states."
  },
  {
    slug: "portfolio-website",
    title: "Tactile Portfolio Website",
    description: "The very portfolio you are browsing, featuring Next.js, server-side caching API routes, and a fully custom responsive tactile paper-desk theme."
  }
];

const faq = [
  {
    question: "What kind of website can you build?",
    answer: "I focus on responsive informational websites, personal portfolios, utility web applications, and landing pages. I use semantic HTML, modern CSS, and React/Next.js to construct high-quality web spaces."
  },
  {
    question: "Do you offer website hosting?",
    answer: "I do not host sites directly, but I configure and set up your project on modern deployment platforms like Vercel or GitHub Pages, making hosting easy for you to manage."
  },
  {
    question: "Can you build complex backend databases?",
    answer: "My primary focus is on frontend engineering and client-side logic. For backend operations, I build focused integrations (like API endpoints or serverless handlers) as shown in my Spotify integration."
  },
  {
    question: "How do I start a project?",
    answer: "You can click the 'Book a Project' button to send a message via my contact page. We will discuss your goals, requirements, and scope to start development."
  }
];

export default function WebDevelopment() {
  return (
    <ServicePageTemplate
      serviceLabel="SERVICE_01 // WEB_DEVELOPMENT"
      h1Title="Freelance Web Development Services"
      introduction="I build clean, accessible, and responsive website structures optimized for visitors and speed, backed by inspected codebase architectures."
      whoThisIsFor={whoThisIsFor}
      whatICanBuild={whatICanBuild}
      howIWork={howIWork}
      technology={technology}
      qualityChecks={qualityChecks}
      relevantWork={relevantWork}
      faq={faq}
    />
  );
}
