import React from "react";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Website Redesign & Frontend Modernization | Ram Singh",
  description: "Website redesign and frontend modernization services by Ram Singh. Upgrade your legacy website with responsive layout grids, semantic markup, and performance tuning.",
  alternates: {
    canonical: "https://www.ramsingh.dev/services/website-redesign/",
  },
  openGraph: {
    title: "Website Redesign & Frontend Modernization | Ram Singh",
    description: "Website redesign and frontend modernization services by Ram Singh. Upgrade your legacy website with responsive layout grids, semantic markup, and performance tuning.",
    url: "https://www.ramsingh.dev/services/website-redesign/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Redesign & Frontend Modernization | Ram Singh",
    description: "Website redesign and frontend modernization services by Ram Singh. Upgrade your legacy website with responsive layout grids, semantic markup, and performance tuning.",
  },
};

const whoThisIsFor = [
  "Owners of web spaces that appear broken, cut off, or misaligned on mobile and tablet viewport screens.",
  "Teams wanting to clear out old, convoluted tag structures with modern, accessible, and semantic HTML5 frameworks.",
  "Developers seeking to migrate flat legacy HTML/CSS files into clean, reusable Next.js or React component code structures."
];

const whatICanBuild = {
  intro: "I focus on cleaning and restructuring legacy web code to deliver a faster, cleaner, and more robust frontend experience.",
  items: [
    {
      name: "Mobile Responsiveness Upgrades",
      description: "Rebuilding static layouts into fluid grids and flex containers that scale automatically to fit phone, tablet, and desktop monitors."
    },
    {
      name: "Legacy Code Refactoring",
      description: "Porting outdated HTML elements and styles into structured React component layouts using clean CSS Custom Variables."
    },
    {
      name: "Accessibility Remediations",
      description: "Adding logical section structures, appropriate ARIA attributes, and keyboard focus indicators for WCAG compliance."
    },
    {
      name: "Frontend Performance Tuning",
      description: "Identifying render-blocking dependencies, optimizing dynamic media layouts, and pruning redundant scripting to improve speed metrics."
    }
  ]
};

const howIWork = {
  intro: "My redesign workflow centers on preserving your existing content while modernizing the layout codebase.",
  steps: [
    {
      number: "1",
      title: "Frontend Layout Audit",
      description: "I review your current website's responsive scaling, accessibility tags, layout structures, and loading speeds."
    },
    {
      number: "2",
      title: "Refactoring & Rebuilding",
      description: "I rebuild outdated elements using semantic HTML and mobile-friendly CSS rules within clean component boundaries."
    },
    {
      number: "3",
      title: "Accessibility & Performance Verification",
      description: "I run audits to verify that the upgraded interface loads faster and complies with keyboard navigation guidelines."
    },
    {
      number: "4",
      title: "Delivery & Integration",
      description: "I deploy the modern layout to a staging platform for review and assist in transitioning the updated frontend code to your server."
    }
  ]
};

const technology = [
  "HTML5 Semantic Outlines",
  "CSS3 / CSS Variables Rebuilding",
  "JavaScript Refactoring",
  "React Component Migration",
  "Next.js Integration",
  "Responsive Flexbox & Grid Rebuilds"
];

const qualityChecks = [
  "Responsive layout testing down to 375px wide viewports",
  "Full keyboard-only navigation flow and visual focus check",
  "Before vs. After Lighthouse speed metric comparisons",
  "Valid semantic HTML structure outline checks",
  "Pruning of unused legacy styles and console script warnings"
];

const relevantWork = [
  {
    slug: "portfolio-website",
    title: "Tactile Portfolio Website",
    description: "A complete frontend modernization project, migrating a legacy, flat HTML/CSS/JS portfolio layout into a highly structured Next.js/React codebase featuring custom variables styling."
  }
];

const faq = [
  {
    question: "What do you need to redesign my website?",
    answer: "I need access to the existing codebase or layout files, along with an outline of the specific issues (such as mobile sizing errors, slow load times, or layout mismatches) you want solved."
  },
  {
    question: "Will my website content remain the same?",
    answer: "Yes, the content and structure of your text remain unchanged unless you request updates. The goal is to modernize the code, enhance responsiveness, and improve user interaction."
  },
  {
    question: "Can you modernize sites built on heavy page builders?",
    answer: "I focus on custom-coded interfaces. If you want to move away from heavy page-builder systems, I can rebuild their visual layout into clean, fast, custom HTML/CSS or React components."
  },
  {
    question: "How do we start a redesign project?",
    answer: "Click the 'Book a Project' button below to reach the contact page. Provide a link to your current website and outline the key changes you'd like to make."
  }
];

export default function WebsiteRedesign() {
  return (
    <ServicePageTemplate
      serviceLabel="SERVICE_04 // WEBSITE_REDESIGN"
      h1Title="Website Redesign & Frontend Modernization"
      introduction="I update existing frontends to improve responsive behavior, accessibility compliance, visual layouts, and loading performance, utilizing modern CSS variables and React component structures."
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
