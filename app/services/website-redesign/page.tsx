import React from "react";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Website Redesign & Modernization Services",
  description: "Website redesign and frontend modernization services by Ram Singh. Upgrade your existing website with responsive layout grids, semantic markup, and performance tuning.",
  alternates: {
    canonical: "/services/website-redesign/",
  },
  openGraph: {
    title: "Website Redesign & Modernization Services | Ram Singh",
    description: "Website redesign and frontend modernization services by Ram Singh. Upgrade your existing website with responsive layout grids, semantic markup, and performance tuning.",
    url: "/services/website-redesign/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Redesign & Modernization Services | Ram Singh",
    description: "Website redesign and frontend modernization services by Ram Singh. Upgrade your existing website with responsive layout grids, semantic markup, and performance tuning.",
  },
};

const whoThisIsFor = [
  "Owners of websites that look cut off, misaligned, or difficult to use on mobile devices and tablets.",
  "Teams wanting to refactor legacy markup into clean, accessible, and semantic HTML5 section landmarks.",
  "Developers or site owners wanting to migrate static HTML/CSS files into a modern Next.js or React component structure."
];

const whatICanBuild = {
  intro: "I focus on restructuring legacy frontends to create faster, mobile-friendly, and maintainable web spaces.",
  items: [
    {
      name: "Mobile Responsiveness Upgrades",
      description: "Rebuilding static layouts into fluid CSS Grid and Flexbox containers that adjust automatically to fit phone, tablet, and desktop screens."
    },
    {
      name: "Legacy Code Refactoring",
      description: "Porting outdated HTML tables or inline styling into clean React components using CSS Custom Variables."
    },
    {
      name: "Accessibility Remediations",
      description: "Adding structured heading levels, ARIA landmark tags, and visible keyboard focus outlines for improved accessibility."
    },
    {
      name: "Frontend Performance Tuning",
      description: "Optimizing render-blocking scripts, clean component loading, and pruning unnecessary dependencies to improve page load speed."
    }
  ]
};

const howIWork = {
  intro: "A systematic 5-step modernization workflow that preserves your content while rebuilding your frontend.",
  steps: [
    {
      number: "1",
      title: "Brief",
      description: "You share your current website URL, layout pain points (such as mobile sizing bugs or slow loading), and redesign goals."
    },
    {
      number: "2",
      title: "Scope",
      description: "I audit your existing frontend code, mapping out layout refactoring requirements, mobile breakpoints, and structural improvements."
    },
    {
      number: "3",
      title: "Build",
      description: "I rebuild your site's frontend using semantic HTML5, modern CSS custom properties, and React/Next.js component boundaries."
    },
    {
      number: "4",
      title: "Review",
      description: "We compare mobile responsiveness, verify keyboard accessibility flows, and audit before-vs-after page loading speeds."
    },
    {
      number: "5",
      title: "Launch",
      description: "I deploy the updated frontend to your hosting environment or staging platform and assist in transitioning the modern code live."
    }
  ]
};

const technology = [
  "HTML5 Semantic Refactoring",
  "CSS Custom Variables Rebuilding",
  "JavaScript Modernization",
  "React Component Migration",
  "Next.js Integration",
  "Responsive Flexbox & Grid Rebuilds"
];

const qualityChecks = [
  "Responsive layout testing down to 375px mobile viewports",
  "Keyboard navigation path and focus outline verification",
  "Before vs. After Lighthouse speed metric comparisons",
  "W3C valid semantic HTML structure outline checks",
  "Pruning of unused legacy styles and console warnings"
];

const relevantWork = [
  {
    slug: "portfolio-website",
    title: "Tactile Portfolio Website Case Study",
    description: "A complete frontend modernization project, refactoring a legacy HTML/CSS codebase into a structured Next.js/React layout with custom CSS variables."
  }
];

const faq = [
  {
    question: "What do you need from me to start a website redesign?",
    answer: "I need access to your existing website files or repository, along with an outline of the specific problems (such as mobile layout breaks or slow loading speeds) you want resolved."
  },
  {
    question: "Will my website content remain the same?",
    answer: "Yes. Your text content, images, and brand messages remain intact unless you request changes. The primary focus is modernizing the code structure, mobile responsiveness, and speed."
  },
  {
    question: "Can you modernize sites built on heavy page builders?",
    answer: "I specialize in custom-coded web setups. If you want to move away from slow page builders, I can rebuild the layout visually in clean, fast, custom HTML/CSS or React components."
  },
  {
    question: "How do we start a redesign project?",
    answer: "Click 'Book a Project' below to reach the contact brief. Share your existing site link and key modernization goals to begin scoping."
  }
];

export default function WebsiteRedesign() {
  return (
    <ServicePageTemplate
      serviceLabel="SERVICE_04 // WEBSITE_REDESIGN"
      h1Title="Website Redesign & Modernization Services"
      introduction="I update existing website frontends to improve mobile responsiveness, accessibility compliance, visual layout alignment, and loading speed."
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
