import React from "react";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Web Development Services",
  description: "Custom web development services by Ram Singh, freelance web developer based in Mumbai, India. Responsive, fast, and accessible web solutions.",
  alternates: {
    canonical: "/services/web-development/",
  },
  openGraph: {
    title: "Web Development Services | Ram Singh",
    description: "Custom web development services by Ram Singh, freelance web developer based in Mumbai, India. Responsive, fast, and accessible web solutions.",
    url: "/services/web-development/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | Ram Singh",
    description: "Custom web development services by Ram Singh, freelance web developer based in Mumbai, India. Responsive, fast, and accessible web solutions.",
  },
};

const whoThisIsFor = [
  "Businesses, creators, and individuals needing a solid, custom web presence without bloated page builders.",
  "Projects requiring clear structural layouts, standard JavaScript client-side interactions, and modern static site setups.",
  "Clients looking for an honest freelance web developer based in Mumbai, India working online globally."
];

const whatICanBuild = {
  intro: "I focus on core web standards to construct lightweight, stable, and search-friendly website structures.",
  items: [
    {
      name: "Custom Responsive Websites",
      description: "Fluid website layouts built to adapt naturally across mobile phones, tablets, and desktop displays without horizontal scroll breaks."
    },
    {
      name: "Interactive Web Applications",
      description: "Client-side utility apps and interactive page components constructed with vanilla JavaScript or React state structures."
    },
    {
      name: "SEO & Speed Foundations",
      description: "Semantic HTML5 outlines, clean meta structures, and lightweight assets optimized for fast initial render times."
    },
    {
      name: "Accessible Web Interfaces",
      description: "Web layouts configured with appropriate document landmarks, keyboard focus outlines, and screen-reader navigable tags."
    }
  ]
};

const howIWork = {
  intro: "A transparent 5-stage project workflow focused on clear deliverables.",
  steps: [
    {
      number: "1",
      title: "Brief",
      description: "You share your website goals, target audience, preferred design references, and required functionality via the contact brief."
    },
    {
      number: "2",
      title: "Scope",
      description: "We define the page structure, screen viewports, content assets, technical stack, and project boundaries before coding begins."
    },
    {
      number: "3",
      title: "Build",
      description: "I write clean semantic HTML5, modern CSS custom properties, and modular React/Next.js components to construct your site."
    },
    {
      number: "4",
      title: "Review",
      description: "We review the built website across mobile viewports, verify keyboard accessibility, and audit page loading speeds."
    },
    {
      number: "5",
      title: "Launch",
      description: "I configure your website on production static hosting (Vercel or GitHub Pages), connect custom domains, and transfer complete source code."
    }
  ]
};

const technology = [
  "HTML5 Semantic Landmarks",
  "CSS3 / CSS Variables",
  "JavaScript (ES6+)",
  "React",
  "Next.js App Router",
  "TypeScript",
  "Responsive CSS Grid & Flexbox"
];

const qualityChecks = [
  "Responsive layout testing down to 375px wide mobile viewports",
  "Full keyboard navigation accessibility path and focus outline audit",
  "Lighthouse page speed and performance diagnostic check",
  "W3C-compliant semantic HTML markup verification",
  "Cross-browser layout compatibility checks"
];

const relevantWork = [
  {
    slug: "modern-calculator",
    title: "Modern Calculator Case Study",
    description: "An interactive utility application built in React and Next.js demonstrating DOM event handling, keyboard control mapping, and responsive grid layouts."
  },
  {
    slug: "portfolio-website",
    title: "Tactile Portfolio Website Case Study",
    description: "A custom web engineering project featuring Next.js, server-side cached API routes, and a fully custom responsive paper-desk design system."
  }
];

const faq = [
  {
    question: "What kind of websites can you build?",
    answer: "I build responsive business websites, personal portfolios, utility web applications, landing pages, and legacy site modernizations using semantic HTML, modern CSS, React, and Next.js."
  },
  {
    question: "Do you offer website hosting?",
    answer: "I do not host sites directly on my own servers, but I configure and set up your site on static deployment platforms like Vercel or GitHub Pages, making hosting easy for you to maintain."
  },
  {
    question: "Do you build complex backend databases?",
    answer: "My focus is on frontend development and client-side web application logic. For backend features, I integrate focused serverless handlers or API endpoints (such as contact form processing or external token handlers)."
  },
  {
    question: "How do I start a project?",
    answer: "Click 'Book a Project' to send your project details through the contact page. We will review your goals, scope the requirements, and agree on deliverables before starting."
  }
];

export default function WebDevelopment() {
  return (
    <ServicePageTemplate
      serviceLabel="SERVICE_01 // WEB_DEVELOPMENT"
      h1Title="Freelance Web Development Services"
      introduction="I build clean, accessible, and responsive website structures optimized for speed and search engines, backed by inspected codebase architectures."
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
