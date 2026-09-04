import { MetadataRoute } from "next";
import { siteConfig } from "../lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/skills",
    "/projects",
    "/projects/wrapped-wishes",
    "/projects/modern-calculator",
    "/projects/ai-multi-module-system",
    "/projects/portfolio-website",
    "/services",
    "/services/web-development",
    "/services/frontend-development",
    "/services/landing-pages",
    "/services/website-redesign",
    "/experience",
    "/certificates",
    "/contact",
    "/notes",
    "/notes/physical-desk-portfolio",
    "/notes/spotify-currently-playing",
    "/notes/project-case-study-system",
    "/notes/portfolio-to-freelance-site",
  ];

  return routes.map((route) => {
    let priority = 0.8;
    if (route === "") priority = 1.0;
    else if (route === "/projects" || route === "/services") priority = 0.9;
    else if (route.startsWith("/projects/") || route.startsWith("/services/")) priority = 0.8;
    else if (route === "/certificates") priority = 0.7;
    else if (route === "/contact") priority = 0.7;

    let changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "monthly";
    if (route.startsWith("/projects/") || route.startsWith("/services/") || route === "/contact") {
      changefreq = "yearly";
    }

    return {
      url: `${siteConfig.url}${route}/`,
      lastModified: new Date("2026-08-30"),
      changeFrequency: changefreq,
      priority: priority,
    };
  });
}
