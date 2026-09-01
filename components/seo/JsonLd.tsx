import React from "react";
import { siteConfig } from "@/lib/config";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.name,
    "url": `${siteConfig.url}/`,
    "image": `${siteConfig.url}/assets/images/Profile.jpg`,
    "jobTitle": "Freelance Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Self-Employed / Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "sameAs": [
      siteConfig.links.github,
      siteConfig.links.linkedin
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": `${siteConfig.url}/`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
