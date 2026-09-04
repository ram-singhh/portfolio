import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import CaseStudyBody from "@/components/projects/CaseStudyBody";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  // Exclude modern-calculator and wrapped-wishes because they have dedicated static routes
  return projectsData
    .filter((project) => project.slug !== "modern-calculator" && project.slug !== "wrapped-wishes")
    .map((project) => ({
      slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return {};
  }

  return {
    title: `${project.title} Case Study`,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${project.slug}/`,
    },
    openGraph: {
      title: `${project.title} Case Study | Ram Singh`,
      description: project.shortDescription,
      url: `/projects/${project.slug}/`,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  
  if (!project || project.slug === "modern-calculator" || project.slug === "wrapped-wishes") {
    notFound();
  }

  return <CaseStudyBody project={project} />;
}
