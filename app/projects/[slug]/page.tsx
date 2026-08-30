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
  // Exclude modern-calculator because it has a dedicated static route
  return projectsData
    .filter((project) => project.slug !== "modern-calculator")
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
    title: `${project.title} | Case Study by Ram Singh`,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${project.slug}/`,
    },
    openGraph: {
      title: `${project.title} | Case Study by Ram Singh`,
      description: project.shortDescription,
      url: `/projects/${project.slug}/`,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  
  if (!project || project.slug === "modern-calculator") {
    notFound();
  }

  return <CaseStudyBody project={project} />;
}
