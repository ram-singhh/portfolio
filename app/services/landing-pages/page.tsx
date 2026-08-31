import React from "react";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Landing Page Development Services",
  description: "Landing page development services by Ram Singh. Optimized for fast loading speeds, responsive layouts, accessibility, and clear call-to-action paths.",
  alternates: {
    canonical: "/services/landing-pages/",
  },
  openGraph: {
    title: "Landing Page Development Services | Ram Singh",
    description: "Landing page development services by Ram Singh. Optimized for fast loading speeds, responsive layouts, accessibility, and clear call-to-action paths.",
    url: "/services/landing-pages/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page Development Services | Ram Singh",
    description: "Landing page development services by Ram Singh. Optimized for fast loading speeds, responsive layouts, accessibility, and clear call-to-action paths.",
  },
};

const whoThisIsFor = [
  "Creators, SaaS builders, and independent developers launching a product, service, or campaign needing a focused online page.",
  "Businesses wanting to replace slow page-builder landing pages with fast, custom-coded web structures.",
  "Clients needing a concise single-page layout optimized for mobile visitors and direct lead capture interactions."
];

const whatICanBuild = {
  intro: "I build fast, single-page web layouts structured around user clarity and direct action paths.",
  items: [
    {
      name: "Action-Focused Single-Page Layouts",
      description: "Page structures organized to present your key message clearly and guide visitors toward a single primary call to action."
    },
    {
      name: "Mobile-First Input & Form Structures",
      description: "Contact forms and inquiry inputs configured for touch targets, numeric keypads, and instant validation feedback."
    },
    {
      name: "Semantic Content Hierarchy",
      description: "Structured heading levels (H1, H2, H3) and section landmarks that allow visitors and search engine crawlers to read your content easily."
    },
    {
      name: "Speed-Optimized Static Assets",
      description: "Lightweight single-page builds free of bloated third-party plugins, ensuring rapid initial page renders."
    }
  ]
};

const howIWork = {
  intro: "A focused 5-step workflow for landing page projects.",
  steps: [
    {
      number: "1",
      title: "Brief",
      description: "You share your landing page objective, offer details, key copy sections, and primary action goal."
    },
    {
      number: "2",
      title: "Scope",
      description: "We define the page content hierarchy, required form fields, visual section order, and mobile layout targets."
    },
    {
      number: "3",
      title: "Build",
      description: "I construct the landing page using clean HTML5, custom CSS variables styling, and lightweight React/Next.js code."
    },
    {
      number: "4",
      title: "Review",
      description: "We audit form input behaviors, verify mobile layout scaling down to 375px, and test page load speed performance."
    },
    {
      number: "5",
      title: "Launch",
      description: "I deploy the landing page to modern static hosting (such as Vercel), connect your domain, and verify form submission routing."
    }
  ]
};

const technology = [
  "HTML5 Section Landmarks",
  "CSS Custom Variables",
  "JavaScript (ES6+)",
  "React & Next.js",
  "Form Submission Handlers",
  "Responsive Flexbox & Grid"
];

const qualityChecks = [
  "Responsive formatting checked across standard mobile and tablet viewport widths",
  "Lighthouse speed performance audit targeting fast rendering metrics",
  "Form input error validation and user feedback state checks",
  "Keyboard path testing and visible focus indicator audits",
  "Proper search-engine meta tags and canonical URL validation"
];

const relevantWork = [
  {
    slug: "portfolio-website",
    title: "Tactile Portfolio Website Case Study",
    description: "A single-page focused web structure designed to present projects, skills, and direct contact pathways to visitors."
  }
];

const faq = [
  {
    question: "Do you supply landing page graphic designs?",
    answer: "I focus on coding fast, responsive layouts. I can implement your provided graphics and mockups, or construct a clean, typography-focused minimal design in line with this website."
  },
  {
    question: "Do you guarantee conversion rates?",
    answer: "No. Conversion rates depend heavily on copywriting, product-market fit, pricing, and traffic quality. I guarantee a technically fast, highly responsive, accessible layout that eliminates code friction for your visitors."
  },
  {
    question: "Can you connect forms to email handlers or external tools?",
    answer: "Yes. I configure standard client-side forms to forward submission data securely to email integration services or serverless API endpoints."
  },
  {
    question: "How do I start a landing page project?",
    answer: "Click 'Book a Project' below to reach the contact brief form. Share your target landing page goal and content sections to get started."
  }
];

export default function LandingPages() {
  return (
    <ServicePageTemplate
      serviceLabel="SERVICE_03 // LANDING_PAGES"
      h1Title="Landing Page Development Services"
      introduction="I build fast-loading landing pages focused on clear information hierarchy, accessible interactions, and clean technical foundations."
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
