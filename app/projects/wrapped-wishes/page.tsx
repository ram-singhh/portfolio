import React from "react";
import Link from "next/link";
import Image from "next/image";
import Paper from "@/components/ui/Paper";
import Tape from "@/components/ui/Tape";
import TypewriterLabel from "@/components/ui/TypewriterLabel";
import HandwrittenNote from "@/components/ui/HandwrittenNote";
import DeskBackground from "@/components/ui/DeskBackground";
import { projectsData } from "@/data/projects";

export const metadata = {
  title: "Wrapped Wishes Case Study | Ram Singh",
  description: "Wrapped Wishes is a responsive gifting storefront built with HTML, CSS, JavaScript and Supabase, featuring product discovery, category filtering and WhatsApp ordering.",
  alternates: {
    canonical: "/projects/wrapped-wishes/",
  },
  openGraph: {
    title: "Wrapped Wishes Case Study | Ram Singh",
    description: "Wrapped Wishes is a responsive gifting storefront built with HTML, CSS, JavaScript and Supabase, featuring product discovery, category filtering and WhatsApp ordering.",
    url: "/projects/wrapped-wishes/",
    type: "article",
  },
};

export default function WrappedWishesCaseStudy() {
  const project = projectsData.find((p) => p.slug === "wrapped-wishes") || {
    title: "Wrapped Wishes",
    category: "E-Commerce / Gift Store Website",
    shortDescription: "An expressive gifting storefront built for product discovery, curated collections, occasion-based browsing, and WhatsApp ordering.",
    liveUrl: "https://wrappedwishes.vercel.app/",
  };

  const currentIndex = projectsData.findIndex((p) => p.slug === "wrapped-wishes");
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <main className="home-workspace" style={{ minHeight: "100vh", position: "relative", paddingBottom: "6rem" }}>
      {/* Desk Background */}
      <DeskBackground />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", maxWidth: "840px" }}>
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
          <ol style={{ display: "flex", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", alignItems: "center", flexWrap: "wrap" }}>
            <li>
              <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>HOME</Link>
            </li>
            <li aria-hidden="true" style={{ margin: "0 0.2rem" }}>&gt;</li>
            <li>
              <Link href="/projects/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>PROJECTS</Link>
            </li>
            <li aria-hidden="true" style={{ margin: "0 0.2rem" }}>&gt;</li>
            <li style={{ color: "var(--color-ink-red)", fontWeight: "bold" }}>
              WRAPPED WISHES
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/projects/" className="tactile-btn" style={{ textDecoration: "none" }} aria-label="Back to project archive">
            [ &larr; BACK TO ARCHIVE ]
          </Link>
        </div>

        {/* Breadcrumb JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.ramsingh.dev/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Projects",
                  "item": "https://www.ramsingh.dev/projects/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Wrapped Wishes",
                  "item": "https://www.ramsingh.dev/projects/wrapped-wishes/"
                }
              ]
            })
          }}
        />

        {/* 1. Hero Section */}
        <section aria-labelledby="hero-heading" style={{ marginBottom: "3rem" }}>
          <Paper variant="craft" rotation={-0.8} padding="large" style={{ position: "relative" }}>
            <Tape rotation={-2} position="top-left" width="100px" />
            
            <header>
              <div style={{ marginBottom: "1rem" }}>
                <TypewriterLabel variant="dymo" rotation={1.5}>
                  E-COMMERCE / GIFT STORE WEBSITE
                </TypewriterLabel>
              </div>
              
              <h1 id="hero-heading" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "clamp(2.2rem, 6vw, 3.75rem)", 
                fontWeight: 700, 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                lineHeight: "1.1", 
                margin: "0 0 1rem 0" 
              }}>
                Wrapped Wishes
              </h1>
              
              <p style={{ 
                fontFamily: "var(--font-primary)", 
                fontSize: "1.15rem", 
                lineHeight: "1.5", 
                color: "#2c251f", 
                fontWeight: 500, 
                margin: "0 0 2rem 0" 
              }}>
                An expressive gifting storefront designed around curated collections, product discovery, occasion-based browsing, and WhatsApp ordering.
              </p>
            </header>

            {/* Featured Desktop Screenshot */}
            <div style={{ margin: "2rem 0", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid rgba(0,0,0,0.15)", boxShadow: "0 6px 16px rgba(0,0,0,0.3)" }}>
              <Image
                src="/assets/images/wrapped-wishes-home-desktop.webp"
                alt="Wrapped Wishes gifting storefront homepage"
                width={1440}
                height={900}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "2rem" }}>
              <a 
                href="https://wrappedwishes.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="tactile-btn tactile-btn-primary" 
                aria-label="Open live website for Wrapped Wishes"
              >
                [ VIEW LIVE WEBSITE ]
              </a>
              <Link 
                href="/projects/" 
                className="tactile-btn" 
                aria-label="Back to project archive"
              >
                [ BACK TO PROJECTS ]
              </Link>
            </div>
          </Paper>
        </section>

        {/* 2. Project Overview & Purpose */}
        <section aria-labelledby="section-purpose" style={{ marginBottom: "3rem" }}>
          <Paper variant="lined" rotation={1.2} padding="large">
            <h2 id="section-purpose" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--color-ink-red)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              01. PURPOSE &amp; OVERVIEW
            </h2>
            
            <p style={{ fontFamily: "var(--font-primary)", fontSize: "1rem", lineHeight: "1.65", color: "#1a1816", marginBottom: "1.25rem" }}>
              <strong>Wrapped Wishes</strong> was designed as an online gifting storefront where customers can explore curated products and collections, browse by occasion or category, and place orders directly through WhatsApp.
            </p>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.6", color: "#2c251f", marginBottom: "1.5rem" }}>
              Positioned around personalized gifting and local delivery in Mumbai, the storefront presents products under warm, expressive branding ("Gifts That Feel Like a Hug 🎀"). It serves as a direct bridge between artisanal gift presentation and immediate customer contact.
            </p>

            <div style={{ borderLeft: "3px solid var(--color-ink-blue)", paddingLeft: "1rem", marginTop: "1.5rem", backgroundColor: "rgba(0,0,0,0.02)", paddingTop: "0.75rem", paddingBottom: "0.75rem" }}>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-ink-blue)", textTransform: "uppercase", margin: "0 0 0.35rem 0" }}>
                Core Positioning
              </h3>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontStyle: "italic", color: "#222", margin: 0 }}>
                A responsive gifting storefront with dynamic product discovery, category filtering, Supabase-backed content management, and WhatsApp-based ordering.
              </p>
            </div>
          </Paper>
        </section>

        {/* 3. Visual Showcase Gallery */}
        <section aria-labelledby="section-gallery" style={{ marginBottom: "3rem" }}>
          <Paper variant="light" rotation={-1.1} padding="large">
            <Tape rotation={2.5} position="top-right" width="90px" />

            <h2 id="section-gallery" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              02. VISUAL SHOWCASE
            </h2>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.92rem", color: "#444", marginBottom: "2rem" }}>
              Real screenshots captured directly from the deployed storefront showcasing responsive layouts across desktop and mobile devices.
            </p>

            {/* Gallery Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              
              {/* Row 1: Mobile + Shop Desktop */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-ink-red)", marginBottom: "0.5rem", fontWeight: 700 }}>
                    // MOBILE STOREFRONT (390 × 844)
                  </h3>
                  <div style={{ borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid rgba(0,0,0,0.15)", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
                    <Image
                      src="/assets/images/wrapped-wishes-home-mobile.webp"
                      alt="Wrapped Wishes mobile storefront"
                      width={780}
                      height={1688}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>

                <div>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-ink-blue)", marginBottom: "0.5rem", fontWeight: 700 }}>
                    // SHOP COLLECTION GRID (/shop/)
                  </h3>
                  <div style={{ borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid rgba(0,0,0,0.15)", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
                    <Image
                      src="/assets/images/wrapped-wishes-shop-desktop.webp"
                      alt="Wrapped Wishes shop page collection grid"
                      width={1440}
                      height={900}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Filter UI + Mobile Shop */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-ink-green)", marginBottom: "0.5rem", fontWeight: 700 }}>
                    // SEARCH &amp; CATEGORY FILTERING UI
                  </h3>
                  <div style={{ borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid rgba(0,0,0,0.15)", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
                    <Image
                      src="/assets/images/wrapped-wishes-filter.webp"
                      alt="Wrapped Wishes category search and filter interface"
                      width={1440}
                      height={900}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>

                <div>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-dark)", marginBottom: "0.5rem", fontWeight: 700 }}>
                    // MOBILE SHOP GRID (390 × 844)
                  </h3>
                  <div style={{ borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid rgba(0,0,0,0.15)", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
                    <Image
                      src="/assets/images/wrapped-wishes-shop-mobile.webp"
                      alt="Wrapped Wishes mobile shop product listing"
                      width={780}
                      height={1688}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: About & Contact Pages */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", alignItems: "start" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem", fontWeight: 700 }}>
                    // ABOUT PAGE &amp; BRAND STORY (/about/)
                  </h3>
                  <div style={{ borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid rgba(0,0,0,0.15)", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
                    <Image
                      src="/assets/images/wrapped-wishes-about.webp"
                      alt="Wrapped Wishes about page brand story and delivery details"
                      width={1440}
                      height={900}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>

                <div>
                  <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem", fontWeight: 700 }}>
                    // CONTACT PAGE &amp; ENQUIRY FORM (/contact/)
                  </h3>
                  <div style={{ borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid rgba(0,0,0,0.15)", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
                    <Image
                      src="/assets/images/wrapped-wishes-contact.webp"
                      alt="Wrapped Wishes contact page and enquiry form"
                      width={1440}
                      height={900}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              </div>

            </div>
          </Paper>
        </section>

        {/* 4. Key Features */}
        <section aria-labelledby="section-features" style={{ marginBottom: "3rem" }}>
          <Paper variant="grid" rotation={0.6} padding="large">
            <h2 id="section-features" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              03. KEY STOREFRONT FEATURES
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              
              <div style={{ backgroundColor: "rgba(255,255,255,0.7)", padding: "1rem", borderRadius: "4px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-ink-red)", margin: "0 0 0.5rem 0", fontWeight: 700 }}>
                  Curated Gift Collections
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#333", lineHeight: "1.45", margin: 0 }}>
                  Organized browsing across collections including For Her, For Him, Bouquets, Frames, Greeting Cards, Festive Specials, Baby Gifts, Corporate Gifts, Keychains, and Chocolate Hampers.
                </p>
              </div>

              <div style={{ backgroundColor: "rgba(255,255,255,0.7)", padding: "1rem", borderRadius: "4px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-ink-blue)", margin: "0 0 0.5rem 0", fontWeight: 700 }}>
                  Occasion-Based Navigation
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#333", lineHeight: "1.45", margin: 0 }}>
                  Quick links for high-intent event shopping, covering Birthdays, Anniversaries, Weddings, Diwali / Festive Specials, Christmas, Corporate events, and Baby celebrations.
                </p>
              </div>

              <div style={{ backgroundColor: "rgba(255,255,255,0.7)", padding: "1rem", borderRadius: "4px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-ink-green)", margin: "0 0 0.5rem 0", fontWeight: 700 }}>
                  Dynamic Product Search &amp; Filter
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#333", lineHeight: "1.45", margin: 0 }}>
                  Client-side JavaScript filtering in <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>shop.js</code> supporting real-time product search, category filtering, and URL query parameter state sync.
                </p>
              </div>

              <div style={{ backgroundColor: "rgba(255,255,255,0.7)", padding: "1rem", borderRadius: "4px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--text-dark)", margin: "0 0 0.5rem 0", fontWeight: 700 }}>
                  WhatsApp-Based Ordering
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#333", lineHeight: "1.45", margin: 0 }}>
                  Direct conversion pipeline replacing traditional checkout complexity. Product CTAs generate pre-formatted WhatsApp messages containing product names, categories, and prices.
                </p>
              </div>

              <div style={{ backgroundColor: "rgba(255,255,255,0.7)", padding: "1rem", borderRadius: "4px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-ink-red)", margin: "0 0 0.5rem 0", fontWeight: 700 }}>
                  Supabase Content Layer
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#333", lineHeight: "1.45", margin: 0 }}>
                  Cloud database integration in <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>storage.js</code> managing product catalog items, featured products, categories, hero settings, and customer testimonials.
                </p>
              </div>

              <div style={{ backgroundColor: "rgba(255,255,255,0.7)", padding: "1rem", borderRadius: "4px", border: "1px solid rgba(0,0,0,0.08)" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-ink-blue)", margin: "0 0 0.5rem 0", fontWeight: 700 }}>
                  Supabase Storage &amp; Admin
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#333", lineHeight: "1.45", margin: 0 }}>
                  Supabase Storage buckets for product imagery, paired with a custom administrative dashboard (<code style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>/admin/dashboard.html</code>) for product CRUD and hero configuration.
                </p>
              </div>

            </div>
          </Paper>
        </section>

        {/* 5. Technical Implementation */}
        <section aria-labelledby="section-implementation" style={{ marginBottom: "3rem" }}>
          <Paper variant="lined" rotation={-0.7} padding="large">
            <h2 id="section-implementation" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              04. TECHNICAL IMPLEMENTATION &amp; ARCHITECTURE
            </h2>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.98rem", lineHeight: "1.65", color: "#1a1816", marginBottom: "1.5rem" }}>
              Wrapped Wishes uses a lightweight frontend architecture built with semantic HTML5, custom CSS3, and vanilla JavaScript modules. JavaScript modules handle storefront rendering, product discovery, search and category filter interactions, WhatsApp ordering, and administrative functionality. Supabase provides the backing data layer and image storage, while the project is deployed on Vercel.
            </p>

            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-ink-red)", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                Frontend Module Boundaries
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#222" }}>
                <li><span style={{ color: "var(--color-ink-red)" }}>&bull;</span> <strong>main.js:</strong> Homepage interactions, featured product grid rendering, floating WhatsApp CTA button, and testimonials.</li>
                <li><span style={{ color: "var(--color-ink-red)" }}>&bull;</span> <strong>shop.js:</strong> Product grid lifecycle, live keyword search, category filters, and URL parameter parser (<code style={{ fontSize: "0.8rem" }}>?category=...</code>).</li>
                <li><span style={{ color: "var(--color-ink-red)" }}>&bull;</span> <strong>storage.js:</strong> Supabase database queries, product CRUD operations, image upload interfaces, and site settings.</li>
                <li><span style={{ color: "var(--color-ink-red)" }}>&bull;</span> <strong>config.js:</strong> Environment configuration and Supabase REST client initialization.</li>
                <li><span style={{ color: "var(--color-ink-red)" }}>&bull;</span> <strong>admin.js:</strong> Authentication flow, dashboard state, product inventory management, and live hero preview.</li>
              </ul>
            </div>

            <div style={{ borderLeft: "3px solid var(--color-ink-green)", paddingLeft: "1rem", backgroundColor: "rgba(0,0,0,0.02)", paddingTop: "0.75rem", paddingBottom: "0.75rem" }}>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-ink-green)", textTransform: "uppercase", margin: "0 0 0.35rem 0" }}>
                Zero-Friction Conversion Pipeline
              </h3>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.92rem", color: "#333", lineHeight: "1.5", margin: 0 }}>
                Instead of requiring users to register accounts or navigate payment gateways, every product card and hero banner incorporates direct WhatsApp integration. Clicking "Order on WhatsApp" encodes the product title, category, and unit price into a pre-filled WhatsApp chat link, establishing instant direct communication with the merchant.
              </p>
            </div>
          </Paper>
        </section>

        {/* 6. Technical Challenge */}
        <section aria-labelledby="section-challenge" style={{ marginBottom: "3rem" }}>
          <Paper variant="light" rotation={1.4} padding="large">
            <Tape rotation={-1.8} position="top-left" width="85px" />

            <h2 id="section-challenge" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--color-ink-red)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              05. TECHNICAL CHALLENGE
            </h2>

            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontStyle: "italic", color: "var(--text-dark)", marginBottom: "1rem" }}>
              Building a Dynamic Storefront Without a Heavy Frontend Framework
            </h3>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.65", color: "#222", marginBottom: "1.25rem" }}>
              Modern storefront projects are frequently built with heavy JavaScript frameworks like React or Next.js. The engineering challenge in Wrapped Wishes was delivering dynamic product discovery, search indexing, URL-driven category filtering, Supabase database synchronization, image bucket uploads, admin inventory management, and WhatsApp message formatting while keeping the application codebase purely inside traditional HTML, CSS, and vanilla JavaScript.
            </p>

            <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.65", color: "#222", margin: 0 }}>
              By maintaining strict module separation and leveraging modern ES6 features alongside Supabase REST APIs, the storefront achieves instant page loads, zero framework bundle overhead, and complete administrative flexibility.
            </p>
          </Paper>
        </section>

        {/* 7. Visual Design & Tech Stack */}
        <section aria-labelledby="section-stack" style={{ marginBottom: "4rem" }}>
          <Paper variant="craft" rotation={-0.6} padding="large">
            <h2 id="section-stack" style={{ 
              fontFamily: "var(--font-mono)", 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "var(--text-dark)", 
              textTransform: "uppercase",
              marginBottom: "1.5rem"
            }}>
              06. VISUAL DESIGN &amp; TECHNOLOGY STACK
            </h2>

            <div style={{ marginBottom: "1.75rem" }}>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 700, color: "#2c251f", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Brand Visual Identity
              </h3>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "0.95rem", lineHeight: "1.55", color: "#2c251f", margin: 0 }}>
                The design utilizes <strong>Playfair Display</strong> for elegant, luxury serif titles paired with <strong>Poppins</strong> for highly legible body copy. A soft pink and gold accent palette creates a welcoming, gift-focused aesthetic across desktop and mobile screens.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 700, color: "#2c251f", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                Technologies Utilized
              </h3>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {["HTML5", "CSS3", "JavaScript (Vanilla)", "Supabase (Database & Storage)", "Vercel"].map((tech) => (
                  <span 
                    key={tech} 
                    style={{ 
                      fontFamily: "var(--font-mono)", 
                      fontSize: "0.78rem", 
                      fontWeight: "bold",
                      backgroundColor: "rgba(0,0,0,0.08)",
                      border: "1px solid rgba(0,0,0,0.18)",
                      borderRadius: "2px",
                      padding: "3px 8px",
                      color: "#111"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Paper>
        </section>

        {/* Next Project Link */}
        <section style={{ marginBottom: "4rem", display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(1.2deg)", width: "100%", maxWidth: "420px" }}>
            <Paper variant="light" rotation={0} padding="medium" style={{ textAlign: "center", border: "1px dashed var(--border-secondary)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>
                UP NEXT IN ARCHIVE
              </span>
              <Link 
                href={nextProject.slug === "modern-calculator" ? "/projects/modern-calculator/" : `/projects/${nextProject.slug}/`}
                style={{ 
                  fontFamily: "var(--font-serif)", 
                  fontSize: "1.2rem", 
                  fontWeight: 700, 
                  fontStyle: "italic",
                  color: "var(--text-dark)", 
                  textDecoration: "underline" 
                }}
              >
                {nextProject.title} &rarr;
              </Link>
            </Paper>
          </div>
        </section>

        {/* 8. Conversion CTA */}
        <section aria-labelledby="cta-heading" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ transform: "rotate(-1deg)", width: "100%", maxWidth: "580px" }}>
            <Paper variant="lined" rotation={0} padding="large" style={{ textAlign: "center" }}>
              <h2 id="cta-heading" style={{ 
                fontFamily: "var(--font-serif)", 
                fontSize: "1.85rem", 
                fontStyle: "italic", 
                color: "var(--text-dark)", 
                marginBottom: "0.5rem" 
              }}>
                NEED A SIMILAR STOREFRONT OR WEBSITE?
              </h2>
              
              <p style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.5", marginBottom: "1.5rem" }}>
                I design and develop responsive business storefronts, e-commerce landing pages, and web applications tailored for fast customer conversion and clear brand presentation.
              </p>

              <div style={{ margin: "1.5rem 0" }}>
                <HandwrittenNote color="blue" tilt={-1.5} fontSize="1.25rem">
                  let's discuss your storefront goals
                </HandwrittenNote>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
                <Link href="/contact/" className="tactile-btn tactile-btn-primary" aria-label="Book a project with Ram Singh">
                  [ BOOK A PROJECT ]
                </Link>
                <Link href="/services/web-development/" className="tactile-btn" aria-label="View web development services">
                  [ WEB SERVICES &rarr; ]
                </Link>
              </div>
            </Paper>
          </div>
        </section>

      </div>
    </main>
  );
}
