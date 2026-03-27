import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetails from "./ProjectDetails";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
