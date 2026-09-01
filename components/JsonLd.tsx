import React from "react";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ram Singh",
    "url": "https://ramsingh.dev",
    "sameAs": ["https://www.linkedin.com/in/ram-singhh/"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export { JsonLd };
