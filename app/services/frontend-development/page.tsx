import React from "react";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Frontend Development Services",
  description: "Professional frontend development services by Ram Singh. Specialized in translating designs into responsive, accessible, and clean React and Next.js applications.",
  alternates: {
    canonical: "/services/frontend-development/",
  },
  openGraph: {
    title: "Frontend Development Services | Ram Singh",
    description: "Professional frontend development services by Ram Singh. Specialized in translating designs into responsive, accessible, and clean React and Next.js applications.",
    url: "/services/frontend-development/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Development Services | Ram Singh",
    description: "Professional frontend development services by Ram Singh. Specialized in translating designs into responsive, accessible, and clean React and Next.js applications.",
  },
};

const whoThisIsFor = [
  "Designers or agencies needing visual mockups converted into clean, maintainable HTML, CSS, and React component code.",
  "Businesses wanting to convert static desktop layouts into mobile-first responsive web apps.",
  "Development teams seeking structured component layouts and accessible UI implementations."
];

const whatICanBuild = {
  intro: "I engineer custom frontend interfaces focused on component modularity, state management, and lightweight styling.",
  items: [
    {
      name: "React & Next.js Component Interfaces",
      description: "Modular, reusable component libraries built with TypeScript and clean state management patterns."
    },
    {
      name: "Mobile-First Responsive Layouts",
      description: "Fluid CSS Flexbox and Grid layout systems that scale seamlessly across smartphone, tablet, and desktop viewports."
    },
    {
      name: "Accessible UI Controls",
      description: "Interactive UI modules featuring explicit focus states, ARIA roles, and complete keyboard-only navigational paths."
    },
    {
      name: "CSS Variables Design Systems",
      description: "Maintainable style architecture using CSS Custom Properties for theme controls and lightweight stylesheets."
    }
  ]
};

const howIWork = {
  intro: "A practical 5-step engineering process for frontend layout builds.",
  steps: [
    {
      number: "1",
      title: "Brief",
      description: "You provide your design files, style guidelines, wireframes, or interface requirements."
    },
    {
      number: "2",
      title: "Scope",
      description: "We map out component boundaries, interactive UI states, data props, and target viewport breakpoints."
    },
    {
      number: "3",
      title: "Build",
      description: "I translate the design specs into clean React and Next.js code using semantic HTML and custom CSS variables."
    },
    {
      number: "4",
      title: "Review",
      description: "We test component interactions, inspect visual alignment on physical devices, and verify accessibility compliance."
    },
    {
      number: "5",
      title: "Launch",
      description: "I integrate the frontend components directly into your codebase or deploy the standalone frontend system."
    }
  ]
};

const technology = [
  "React (Hooks & Component State)",
  "Next.js App Router",
  "TypeScript",
  "CSS Custom Variables",
  "CSS Flexbox & Grid",
  "HTML5 Landmarks & ARIA",
  "Git & GitHub"
];

const qualityChecks = [
  "Responsive interface testing down to 375px mobile displays",
  "Color contrast ratio checks against WCAG guidelines",
  "Full keyboard accessibility path and active state verification",
  "Lighthouse frontend performance and layout stability diagnostics",
  "TypeScript compilation and clean console log checks"
];

const relevantWork = [
  {
    slug: "modern-calculator",
    title: "Modern Calculator Case Study",
    description: "A dynamic React application featuring stateful key arrays, custom CSS layouts, and keyboard shortcut event listeners."
  },
  {
    slug: "portfolio-website",
    title: "Tactile Portfolio Website Case Study",
    description: "A custom Next.js frontend project showcasing tactile paper components, polaroid frames, and responsive CSS skew transformations."
  }
];

const faq = [
  {
    question: "What frontend stack do you specialize in?",
    answer: "I specialize in React, Next.js App Router, TypeScript, vanilla JavaScript (ES6+), and CSS Custom Variables for responsive layout styling."
  },
  {
    question: "Do you supply complete UI designs?",
    answer: "My core expertise is frontend engineering—coding the layouts and components. I work directly from your mockups, or create clean, typography-led minimal interfaces like this website."
  },
  {
    question: "Can you turn an existing desktop design into a mobile site?",
    answer: "Yes, I refactor fixed-width or desktop-only stylesheets into fluid, mobile-first responsive grids that look natural on all screen sizes."
  },
  {
    question: "How do we get started?",
    answer: "Click 'Book a Project' to send your design brief or interface requirements. We will review the scope and start the build once aligned."
  }
];

export default function FrontendDevelopment() {
  return (
    <ServicePageTemplate
      serviceLabel="SERVICE_02 // FRONTEND_DEVELOPMENT"
      h1Title="Frontend Development Services"
      introduction="I translate visual designs and product mockups into clean, interactive, and responsive web code using React, Next.js, and modern CSS standards."
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
