export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  image: string | null;
  featured: boolean;
  whyItExists: string;
  problem: string | null;
  approach: string;
  implementation: string;
  result: string;
  lessons: string | null;
}

export const projectsData: Project[] = [
  {
    slug: "modern-calculator",
    title: "Modern Calculator",
    category: "Utility Web App",
    shortDescription: "A fully functional calculator with keyboard support, clean gradient UI, and all basic mathematical operations.",
    description: "An interactive, responsive calculator that provides keyboard shortcut support, basic arithmetic operations, modulo calculations, and robust error handling (such as division-by-zero protection). Originally built in vanilla JavaScript, it was ported into Next.js/React to showcase clean component-state integration.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Responsive Grid"],
    liveUrl: "/projects/modern-calculator/",
    githubUrl: "https://github.com/Ramsingh4656/Modern-Calculator",
    image: null,
    featured: true,
    whyItExists: "Built as an educational project to master DOM manipulation, keyboard event listener management, and responsive CSS Grid structures in a real-world utility application.",
    problem: "Many web-based calculators lack accessibility features like proper keyboard control support, causing friction for desktop users who prefer numeric keypads and hotkeys.",
    approach: "Developed a responsive layout that maps visual keys to standard browser keypresses. Added decimal checks, negative number sign logic, deletion history buffers (DEL), clear operations (AC), and safety checks that intercept division-by-zero to display a clean, temporary error message.",
    implementation: "Utilized a React `useRef` to store state variables (operand, operation, error) to avoid stale closures in event listeners. Registered global window keydown/keyup events that map directly to calculator operations, complete with visual active states on the physical-looking keyboard buttons.",
    result: "A highly accessible, zero-dependency browser calculator that scales flawlessly from mobile devices to desktop displays and functions fully via keyboard or click inputs.",
    lessons: "Learned how to properly bind and clean up global event listeners in React, manage state updates with ref pointers to ensure consistent asynchronous access, and construct tactile CSS button-press animations."
  },
  {
    slug: "ai-multi-module-system",
    title: "AI Multi-Module System",
    category: "Python Scripting / AI",
    shortDescription: "A modular AI system supporting multiple AI-powered functionalities through independent, reusable Python modules.",
    description: "A Python-based AI framework showcasing clean modular programming, API integration, and structured AI scripts. The project demonstrates how to orchestrate multi-module tasks using Large Language Model APIs in independent script boundaries.",
    technologies: ["Python", "AI/LLM APIs", "Modular Architecture", "API Integration"],
    liveUrl: "https://multi-module-ai-system.vercel.app/",
    githubUrl: "https://github.com/Ramsingh4656/MultiModule-AI-System",
    image: null,
    featured: true,
    whyItExists: "Created to explore scalable module design and API coordination in Python, demonstrating how complex AI features can be cleanly separated into reusable scripts.",
    problem: "Monolithic AI scripts quickly become hard to debug and extend as developers mix API polling, prompt template parsing, and data output formatting together.",
    approach: "Designed a plug-and-play architecture where separate sub-modules handle distinct AI actions, interacting through a shared system core. This isolation ensures each module can be modified independently without affecting others.",
    implementation: "Engineered independent Python sub-modules that interface with LLM API endpoints. Implemented robust API error checking, configuration loading, and modular data passing routines to guarantee fault-tolerant runtime operations.",
    result: "A modular, scalable code framework that allows developers to easily register new AI capabilities by dropping in standard python script modules.",
    lessons: "Gained hands-on expertise in structuring scalable Python applications, using prompt-structuring design patterns, managing environment variables securely in scripting environments, and communicating with external model endpoints."
  },
  {
    slug: "portfolio-website",
    title: "Tactile Portfolio Website",
    category: "Web Engineering",
    shortDescription: "A Next.js developer portfolio with a custom dark tactile desk-themed visual design system and real Spotify integration.",
    description: "A custom portfolio codebase modeled after a dark physical workdesk. Originally written in vanilla HTML/CSS/JS, it was completely refactored to Next.js, React, and TypeScript. Includes tactile paper, polaroid photo frame, and embossed tape components, plus a server-side cached Spotify Currently Playing widget.",
    technologies: ["Next.js", "React", "TypeScript", "CSS Variables", "Spotify API", "SEO Optimization"],
    liveUrl: "/",
    githubUrl: "https://github.com/Ramsingh4656/portfolio",
    image: null,
    featured: true,
    whyItExists: "Designed to host and present Ram Singh's work, certifications, and skills to freelance clients and employers, functioning as a high-conversion sales page rather than a boilerplate resume.",
    problem: "Standard web portfolios look like uniform templates, failing to create a memorable, tactile brand impression or demonstrate advanced web engineering capabilities.",
    approach: "Migrated the codebase to Next.js 14 to leverage React components for repetitive layouts. Designed custom CSS-only layout wrappers representing physical desk objects like notebook sheets, Polaroid pictures, tape segments, and Dymo labels.",
    implementation: "Developed a server-side route handler that requests Spotify tokens via OAuth refresh flows, caching the token and the API response in server memory to respect rate limits. Built responsive grid systems and media query hooks to shrink and adjust document skew rotations on smaller screens.",
    result: "A fast, SEO-optimized, highly accessible Next.js portfolio website that compiles statically, loads remote assets efficiently, and presents a distinct, vintage-desk visual layout.",
    lessons: "Mastered server-side routing and caching in Next.js, next/image optimization techniques, TypeScript interface definitions, ARIA landmark accessibility controls, and CSS transform skews."
  }
];
