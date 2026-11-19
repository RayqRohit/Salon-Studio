import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsData } from "@/data/projectsData";
import WorkDetailClient from "@/components/WorkDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) {
    return {
      title: "Work | hanssen",
    };
  }

  return {
    title: `${project.title} - Hanssen`,
    description: project.description,
  };
}

async function ProjectContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return <WorkDetailClient project={project} />;
}

export default function WorkDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0e1011]" />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}
