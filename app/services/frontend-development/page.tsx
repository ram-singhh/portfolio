import React from "react";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Frontend Development Services | Ram Singh",
  description: "Professional frontend development services by Ram Singh. Specialized in translating UI designs into responsive, accessible, and high-performance React and Next.js applications.",
  alternates: {
    canonical: "https://www.ramsingh.dev/services/frontend-development/",
  },
  openGraph: {
    title: "Frontend Development Services | Ram Singh",
    description: "Professional frontend development services by Ram Singh. Specialized in translating UI designs into responsive, accessible, and high-performance React and Next.js applications.",
    url: "https://www.ramsingh.dev/services/frontend-development/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Development Services | Ram Singh",
    description: "Professional frontend development services by Ram Singh. Specialized in translating UI designs into responsive, accessible, and high-performance React and Next.js applications.",
  },
};

const whoThisIsFor = [
  "Designers who need their static design files converted into pixel-perfect, clean CSS/React code.",
  "Businesses wanting to optimize their existing web interfaces for modern mobile and tablet devices.",
  "Teams requiring clean, accessible, and component-oriented React structures and stylesheets."
];

const whatICanBuild = {
  intro: "I build fast, responsive, and interactive frontend interfaces using lightweight methods and clean layouts.",
  items: [
    {
      name: "Responsive Interfaces",
      description: "Fluid page layouts using modern CSS Flexbox and Grid models, verified to adapt perfectly from small phone screens up to large monitors."
    },
    {
      name: "Interactive Component Modules",
      description: "Stateful user interface modules, forms, and custom tools utilizing React Hooks or pure vanilla JavaScript."
    },
    {
      name: "Semantic HTML Structures",
      description: "Clean HTML code configured with appropriate document landmarks to ensure ease of navigation for assistive systems."
    },
    {
      name: "Performance-Conscious Styling",
      description: "Fast loading styles utilizing CSS Variables and structural layouts that minimize layout shifts and browser paint delays."
    }
  ]
};

const howIWork = {
  intro: "I follow a modular, review-friendly workflow for frontend engineering.",
  steps: [
    {
      number: "1",
      title: "Interface Review",
      description: "We analyze your mockups, style parameters, or dynamic requirements to plan components, layouts, and states."
    },
    {
      number: "2",
      title: "Modular Component Coding",
      description: "I build the UI components and pages using React, Next.js, and clean CSS variables configurations."
    },
    {
      number: "3",
      title: "Accessibility & Performance Audit",
      description: "I verify focus states, contrast parameters, semantic tags, and check rendering speed outputs."
    },
    {
      number: "4",
      title: "Integration & Delivery",
      description: "I deliver clean, modular code or integrate the completed frontend system directly into your repository."
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
  "CSS Flexbox & Grid"
];

const qualityChecks = [
  "Responsive layout testing down to 375px wide displays",
  "Color contrast verification against accessibility baselines",
  "Full keyboard accessibility path and focus state reviews",
  "Lighthouse frontend performance diagnostics",
  "Component build compilation and runtime integrity checks"
];

const relevantWork = [
  {
    slug: "modern-calculator",
    title: "Modern Calculator",
    description: "A dynamic React application featuring modular button arrays, custom CSS layouts, and full keyboard-accessible triggers."
  },
  {
    slug: "portfolio-website",
    title: "Tactile Portfolio Website",
    description: "A custom portfolio engineering project showcasing modular React components (tapes, paper sheets, polaroids) with responsive layouts."
  }
];

const faq = [
  {
    question: "What frontend technologies do you work with?",
    answer: "I build interfaces using semantic HTML5, CSS3 with custom variables, vanilla JavaScript (ES6+), React, Next.js, and TypeScript, backed by verified code structures."
  },
  {
    question: "Do you design the user interfaces yourself?",
    answer: "My primary strength is in frontend engineering and coding layouts. I can work with your design files or build clean, minimal layouts matching the design system of this website."
  },
  {
    question: "Can you build responsive CSS for existing systems?",
    answer: "Yes, I can analyze existing stylesheets and rebuild them into fluid, responsive setups using CSS Variables, Flexbox, and CSS Grid."
  },
  {
    question: "How do I start a project?",
    answer: "Click the 'Book a Project' button below to reach my contact page. Send a description of your design layouts or interface goals, and we'll take it from there."
  }
];

export default function FrontendDevelopment() {
  return (
    <ServicePageTemplate
      serviceLabel="SERVICE_02 // FRONTEND_DEVELOPMENT"
      h1Title="Frontend Development Services"
      introduction="I translate layouts and user interfaces into clean, interactive, and responsive web code, prioritizing semantic HTML structure and performance-conscious implementation."
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
