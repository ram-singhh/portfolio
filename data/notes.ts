export interface CodeSnippet {
  language: string;
  code: string;
  explanation: string;
}

export interface NoteSection {
  heading: string;
  text: string;
  codeSnippet?: CodeSnippet;
}

export interface Note {
  slug: string;
  title: string;
  description: string;
  category: "DESIGN" | "TECHNICAL" | "BUILD LOG" | "WEB ENGINEERING";
  date: string;
  readingTime: string;
  tags: string[];
  relatedProjects: string[]; // project slugs
  relatedServices: { title: string; href: string }[];
  context: string;
  approach: string;
  implementation: {
    intro: string;
    sections: NoteSection[];
  };
  whatChanged: string[];
  whatILearned: string[];
}

export const notesData: Note[] = [
  {
    slug: "physical-desk-portfolio",
    title: "Why I Built My Portfolio Like a Physical Desk",
    description: "A technical design breakdown of creating a custom tactile dark paper-desk visual system using Next.js, React, CSS Custom Variables, and responsive transform rotations.",
    category: "DESIGN",
    date: "2026-02-15",
    readingTime: "6 min read",
    tags: ["Tactile UI", "CSS Custom Variables", "React Components", "Design System"],
    relatedProjects: ["portfolio-website"],
    relatedServices: [
      { title: "Frontend Development Services", href: "/services/frontend-development/" },
      { title: "Website Redesign & Modernization", href: "/services/website-redesign/" }
    ],
    context: "Standard web developer portfolios look like uniform digital templates—flat cards, generic gradients, and boilerplate hero sections. They fail to leave a memorable impression or demonstrate advanced CSS and visual layout capabilities.",
    approach: "I modeled the user interface after a physical dark office workdesk. The layout presents content as tactile desk items: notebook sheets (lined, grid, craft, light variants), polaroids taped to the desk surface, embossed Dymo typewriter labels, and handwritten ink notes. All visual skews, shadows, and textures were built using CSS custom variables and light SVG overlays to preserve pure DOM accessibility and performance.",
    implementation: {
      intro: "The core element of the tactile design system is the reusable Paper component and utility wrappers that leverage CSS custom properties for dynamic rotation angles.",
      sections: [
        {
          heading: "Dynamic Paper Component & Rotation Variables",
          text: "The Paper component accepts variant props ('light', 'craft', 'lined', 'grid', 'dark') and an inline rotation angle passed into a CSS custom variable `--paper-rotation`. This allows every sheet on the desk to tilt naturally without duplicate utility classes.",
          codeSnippet: {
            language: "tsx",
            code: `export default function Paper({ variant = "light", rotation = 0, padding = "medium", children }: PaperProps) {
  const combinedStyle = { "--paper-rotation": \`\${rotation}deg\` } as React.CSSProperties;

  return (
    <div className={\`paper-component paper-variant-\${variant} paper-padding-\${padding}\`} style={combinedStyle}>
      {(variant === "lined" || variant === "grid") && <div className="paper-pattern-overlay" aria-hidden="true" />}
      <div className="paper-content">{children}</div>
    </div>
  );
}`,
            explanation: "The component assigns `--paper-rotation` dynamically, allowing clean CSS transform skews in stylesheets while preserving semantic markup."
          }
        },
        {
          heading: "Responsive Breakpoints & Reduced Motion Rules",
          text: "On smaller mobile screens (down to 375px viewports), heavy rotation angles cause horizontal overflow or cut off text. The CSS stylesheet automatically clamps skew angles to 0deg on mobile screens and respects `prefers-reduced-motion: reduce` settings.",
          codeSnippet: {
            language: "css",
            code: `.paper-component {
  transform: rotate(var(--paper-rotation, 0deg));
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

@media (max-width: 640px) {
  .paper-component {
    transform: rotate(0deg) !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .paper-component {
    transform: none !important;
    transition: none !important;
  }
}`,
            explanation: "Ensures mobile viewports do not experience horizontal scroll bars and respects accessibility user preferences."
          }
        }
      ]
    },
    whatChanged: [
      "Migrated flat HTML layout cards into a physical-desk paper design system.",
      "Built modular React components: Paper, Tape, Polaroid, TypewriterLabel, and HandwrittenNote.",
      "Enforced responsive mobile fallback rules that collapse skews to zero on small displays."
    ],
    whatILearned: [
      "CSS Custom Variables paired with React component props provide custom visual branding without sacrificing DOM structure.",
      "Tactile paper interfaces can maintain 100% accessibility when semantic landmarks (<main>, <section>, <article>) are strictly preserved beneath the visual styling."
    ]
  },
  {
    slug: "spotify-currently-playing",
    title: "How the Spotify Currently Playing Widget Works",
    description: "An architectural walkthrough of building a server-side cached Spotify OAuth route handler in Next.js to display live listening activity securely.",
    category: "TECHNICAL",
    date: "2026-02-20",
    readingTime: "7 min read",
    tags: ["Next.js App Router", "Spotify API", "OAuth 2.0", "In-Memory Caching"],
    relatedProjects: ["portfolio-website"],
    relatedServices: [
      { title: "Web Development Services", href: "/services/web-development/" }
    ],
    context: "I wanted to display my currently playing Spotify track on the website's desk header. However, making direct client-side requests to Spotify's Web API exposes secret credentials and quickly hits rate limits (HTTP 429) when multiple visitors view the site.",
    approach: "I engineered an isolated server-side API route (`/api/spotify/currently-playing/route.ts`) powered by a backend helper in `lib/spotify.ts`. The server requests access tokens via Spotify OAuth 2.0 refresh tokens, caches both the access token and currently playing response in server memory, and returns a sanitized JSON payload to the client widget.",
    implementation: {
      intro: "The helper uses dual in-memory cache pointers: one for the OAuth access token (valid for ~1 hour) and one for currently playing track data (valid for 15 seconds).",
      sections: [
        {
          heading: "OAuth Refresh Flow & Token Caching",
          text: "The `getAccessToken()` function checks if the cached access token is still valid. If expired, it sends a Base64-encoded Client Credentials request to `https://accounts.spotify.com/api/token` using environment variables.",
          codeSnippet: {
            language: "typescript",
            code: `let cachedAccessToken: string | null = null;
let tokenExpiresAt = 0;

async function getAccessToken(): Promise<string> {
  if (cachedAccessToken && Date.now() < tokenExpiresAt - 60000) {
    return cachedAccessToken;
  }

  const basic = Buffer.from(\`\${clientId}:\${clientSecret}\`).toString("base64");
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: \`Basic \${basic}\`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  const data = await response.json();
  cachedAccessToken = data.access_token;
  tokenExpiresAt = Date.now() + data.expires_in * 1000;
  return data.access_token;
}`,
            explanation: "Credentials remain isolated on the server. The token is reused across client requests until expiry."
          }
        },
        {
          heading: "Response Normalization & Rate-Limit Protection",
          text: "The endpoint intercepts HTTP 204 (idle player), HTTP 401 (token refresh retry), HTTP 429 (rate-limit backoff), and HTTP 500 error codes, returning a uniform `SpotifyResponse` contract to prevent client UI crashes.",
          codeSnippet: {
            language: "typescript",
            code: `export async function getCurrentlyPlaying(): Promise<SpotifyResponse> {
  if (cachedPlayingData && Date.now() < playingDataExpiresAt) {
    return cachedPlayingData;
  }

  try {
    const accessToken = await getAccessToken();
    const response = await fetch("https://api.spotify.com/v1/me/player", {
      headers: { Authorization: \`Bearer \${accessToken}\` },
      cache: "no-store",
    });

    if (response.status === 204 || response.status === 404) {
      const result = { isConfigured: true, isPlaying: false, track: null, timestamp: Date.now() };
      cachedPlayingData = result;
      playingDataExpiresAt = Date.now() + 15000;
      return result;
    }
    // Parse track payload & cache for 15s
  } catch (error) {
    return { isConfigured: true, isPlaying: false, track: null, timestamp: Date.now(), error: "connection-error" };
  }
}`,
            explanation: "In-memory caching guarantees that client polling (every 15s) never exceeds Spotify API quota thresholds."
          }
        }
      ]
    },
    whatChanged: [
      "Created backend utility `lib/spotify.ts` with OAuth token refresh and in-memory response caching.",
      "Created server route `/api/spotify/currently-playing/route.ts` delivering lightweight normalized JSON.",
      "Built client component `CurrentlyPlaying.tsx` with polling interval and clean offline fallbacks."
    ],
    whatILearned: [
      "Server-side proxy routes with memory caching protect API keys while insulating application UI from third-party rate limits.",
      "Handling empty HTTP 204 responses gracefully is essential for audio player status endpoints."
    ]
  },
  {
    slug: "project-case-study-system",
    title: "Building a Case Study System Instead of a Project Gallery",
    description: "How I designed a schema-backed project case study architecture in Next.js to provide verified technical proof for freelance clients.",
    category: "BUILD LOG",
    date: "2026-02-25",
    readingTime: "6 min read",
    tags: ["Next.js App Router", "Dynamic Routes", "TypeScript", "Case Studies"],
    relatedProjects: ["portfolio-website", "modern-calculator", "ai-multi-module-system"],
    relatedServices: [
      { title: "Web Development Services", href: "/services/web-development/" },
      { title: "Frontend Development Services", href: "/services/frontend-development/" }
    ],
    context: "Standard web galleries show thumbnail images and bullet points. They fail to explain why a project was built, what problems were solved, what architectural decisions were made, or what source code supports the claims.",
    approach: "I replaced generic gallery cards with a structured, schema-backed case study system. Project data is defined in `data/projects.ts` using a strict TypeScript `Project` interface. Dynamic App Router routes (`app/projects/[slug]/page.tsx`) render comprehensive case study documents detailing Problem, Approach, Technical Execution, and The Resulting System.",
    implementation: {
      intro: "The case study architecture separates project data definitions from layout rendering components.",
      sections: [
        {
          heading: "Centralized TypeScript Project Schema",
          text: "Every project in `data/projects.ts` includes structured technical attributes: slug, title, category, shortDescription, description, technologies, whyItExists, problem, approach, implementation, result, and lessons.",
          codeSnippet: {
            language: "typescript",
            code: `export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  whyItExists: string;
  problem: string | null;
  approach: string;
  implementation: string;
  result: string;
  lessons: string | null;
}`,
            explanation: "Strict interface definitions enforce consistent engineering documentation across all portfolio case studies."
          }
        },
        {
          heading: "Static Route Generation & Layout Decoupling",
          text: "Static params generation statically compiles every case study at build time, while delegating visual layout rendering to the shared `CaseStudyBody` component.",
          codeSnippet: {
            language: "tsx",
            code: `export async function generateStaticParams() {
  return projectsData
    .filter((project) => project.slug !== "modern-calculator")
    .map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return <CaseStudyBody project={project} />;
}`,
            explanation: "Static page generation delivers fast page loads while maintaining zero duplicate code across case study routes."
          }
        }
      ]
    },
    whatChanged: [
      "Replaced simple image grid galleries with a centralized TypeScript project data model.",
      "Created dynamic case study routes with static page generation (`generateStaticParams`).",
      "Added visible breadcrumbs and structured `BreadcrumbList` JSON-LD schemas to all project pages."
    ],
    whatILearned: [
      "Presenting real technical problems, trade-offs, and source code links establishes far higher credibility with potential freelance clients than simple image galleries.",
      "Decoupling project data from rendering components makes adding future case studies fast and error-free."
    ]
  },
  {
    slug: "portfolio-to-freelance-site",
    title: "Turning a Static Portfolio Into a Freelance Web Developer Site",
    description: "An architectural breakdown of transforming a student project showcase into a commercial freelance platform with technical SEO, search intent mapping, and project brief forms.",
    category: "WEB ENGINEERING",
    date: "2026-02-28",
    readingTime: "8 min read",
    tags: ["Technical SEO", "Freelance Services", "Conversion Architecture", "Next.js"],
    relatedProjects: ["portfolio-website"],
    relatedServices: [
      { title: "Web Development Services", href: "/services/web-development/" },
      { title: "Frontend Development Services", href: "/services/frontend-development/" },
      { title: "Landing Page Development", href: "/services/landing-pages/" },
      { title: "Website Redesign & Modernization", href: "/services/website-redesign/" }
    ],
    context: "A portfolio website that only functions as an online resume misses commercial search queries (like 'freelance web developer' or 'website redesign services') and fails to guide visitors toward booking a project.",
    approach: "I refactored the site architecture to serve two audiences simultaneously: search engines and potential freelance clients. I built dedicated service pages (`/services/*`), a project inquiry brief form (`/contact/`), technical SEO infrastructure (`SEO.md`, `sitemap.ts`, `robots.ts`), Person & WebSite JSON-LD schemas, and bidirectional project-to-service links.",
    implementation: {
      intro: "The transformation required setting up structured service pages, clean validation on contact briefs, and technical search engine configuration.",
      sections: [
        {
          heading: "Structured Service Page Architecture",
          text: "Four focused service landing pages were created under `/services/` (Web Development, Frontend Development, Landing Pages, Website Redesign). Each answers 8 core client questions: service definition, target audience, specific deliverables, 5-stage process (Brief -> Scope -> Build -> Review -> Launch), tech stack, quality checks, project proof, and FAQ.",
          codeSnippet: {
            language: "tsx",
            code: `<ServicePageTemplate
  serviceLabel="SERVICE_01 // WEB_DEVELOPMENT"
  h1Title="Freelance Web Development Services"
  introduction="I build clean, accessible, and responsive website structures..."
  whoThisIsFor={whoThisIsFor}
  whatICanBuild={whatICanBuild}
  howIWork={howIWork}
  technology={technology}
  qualityChecks={qualityChecks}
  relevantWork={relevantWork}
  faq={faq}
/>`,
            explanation: "Service templates enforce uniform depth and structured metadata while maintaining distinct copy across services."
          }
        },
        {
          heading: "Inquiry Brief Validation & Contact Handler",
          text: "The contact page was upgraded into a project brief submission system (`/contact/` & `/api/contact/route.ts`). Client-side validation checks name, email, project type, existing website URL, and brief requirements before submitting.",
          codeSnippet: {
            language: "typescript",
            code: `// Validation rules for project brief form
if (!name.trim()) err = "Name is required.";
if (!emailRegex.test(email.trim())) err = "Please enter a valid email address.";
if (!projectType) err = "Please select a project type.";
if (!description.trim() || description.length < 10) err = "Description must be at least 10 characters.";`,
            explanation: "Helps prospective clients provide necessary project parameters while preventing invalid submissions."
          }
        }
      ]
    },
    whatChanged: [
      "Created 4 dedicated service landing pages and a centralized services hub (`/services/`).",
      "Upgraded contact form into a detailed project brief submission workflow with server validation.",
      "Configured technical SEO foundation: dynamic `sitemap.ts`, `robots.ts`, Person/WebSite JSON-LD, and canonical URLs."
    ],
    whatILearned: [
      "A commercial web site needs clear page topics, semantic headings, and direct CTA pathways to convert visitors into inquiries.",
      "Connecting real project proof to specific service offerings builds organic search relevance naturally without keyword stuffing."
    ]
  }
];
