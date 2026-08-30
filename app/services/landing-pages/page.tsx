import React from "react";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Landing Page Development | Ram Singh",
  description: "High-performance landing page development services by Ram Singh. Optimized for speed, responsive design, accessibility, and clear call-to-action hierarchies.",
  alternates: {
    canonical: "https://www.ramsingh.dev/services/landing-pages/",
  },
  openGraph: {
    title: "Landing Page Development | Ram Singh",
    description: "High-performance landing page development services by Ram Singh. Optimized for speed, responsive design, accessibility, and clear call-to-action hierarchies.",
    url: "https://www.ramsingh.dev/services/landing-pages/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page Development | Ram Singh",
    description: "High-performance landing page development services by Ram Singh. Optimized for speed, responsive design, accessibility, and clear call-to-action hierarchies.",
  },
};

const whoThisIsFor = [
  "Creators, SaaS builders, and independent developers launching a new product, service, or online campaign.",
  "Businesses looking to replace slow page-builder templates with clean, fast, custom-coded web structures.",
  "Clients needing a concise single-page layout optimized for mobile visitors and direct interactions."
];

const whatICanBuild = {
  intro: "I design and build single-page layouts focused on user clarity, performance, and clear conversion paths.",
  items: [
    {
      name: "Call-to-Action Centered Layouts",
      description: "Layout structures organized to direct visitor attention toward a single primary action, such as contact forms or messaging links."
    },
    {
      name: "Mobile-First Input Structures",
      description: "Interactive forms and input fields optimized for touch targets, numeric keypads, and clear validation feedback."
    },
    {
      name: "Semantic Information Hierarchy",
      description: "Logical heading orders and division elements that guide readers naturally and assist web indexing crawlers."
    },
    {
      name: "Speed-Optimized Implementations",
      description: "Single-page structures built without heavy backend frameworks, ensuring fast initial page loads and higher visitor retention."
    }
  ]
};

const howIWork = {
  intro: "I focus on speed, clarity, and rapid setup for landing page development.",
  steps: [
    {
      number: "1",
      title: "Content & Action Scoping",
      description: "We define the main goal of the page, the key information sections, and the primary conversion action."
    },
    {
      number: "2",
      title: "Layout Development",
      description: "I write the landing page structure using custom responsive CSS and semantic HTML5 section landmarks."
    },
    {
      number: "3",
      title: "Performance & Access Review",
      description: "I evaluate loading times and verify that the page works correctly for keyboard-only and mobile visitors."
    },
    {
      number: "4",
      title: "Deployment & Setup",
      description: "I configure the page on a fast static hosting provider (like Vercel) and verify form submission integrations."
    }
  ]
};

const technology = [
  "HTML5",
  "CSS3 / CSS Variables",
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "Form Submissions Integration"
];

const qualityChecks = [
  "Responsive formatting checked on standard mobile viewport widths",
  "Page speed diagnostic audits (targeting high Lighthouse metrics)",
  "Form input error validation and user warning checks",
  "Keyboard path testing and visual focus outline audits",
  "Proper search-engine meta tags and page outline validation"
];

const relevantWork = [
  {
    slug: "portfolio-website",
    title: "Tactile Portfolio Website",
    description: "A conversion-oriented single-page structure designed to guide visitors through projects, skills, and contact pathways."
  }
];

const faq = [
  {
    question: "Do you design the landing page graphics?",
    answer: "I focus on coding responsive layouts. I can implement your layout design assets, or construct a clean, typography-focused minimal layout following the tactile theme of this website."
  },
  {
    question: "Do you guarantee conversion rates?",
    answer: "No, conversion rates depend heavily on copywriting, product-market fit, and traffic quality. I guarantee a technically fast, highly responsive, and accessible layout that presents your message without friction."
  },
  {
    question: "Can you connect forms to email tools?",
    answer: "Yes, I can set up standard client-side forms to forward inputs to form handlers, email integrations, or API routes as needed."
  },
  {
    question: "How do I start?",
    answer: "Click the 'Book a Project' button below to reach my contact form. Share your target landing page goal and content structure to start scoping."
  }
];

export default function LandingPages() {
  return (
    <ServicePageTemplate
      serviceLabel="SERVICE_03 // LANDING_PAGES"
      h1Title="Landing Page Development"
      introduction="I build conversion-oriented, fast-loading landing pages focused on clear information hierarchy, accessible interaction, and clean technical foundations."
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
