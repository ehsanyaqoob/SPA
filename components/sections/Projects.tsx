import { projects, sections } from "@/site.config";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { SketchDouble } from "@/components/Sketch";

export default function Projects() {
  return (
    <section id={sections.projects.id} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading title={sections.projects.title} subtitle={sections.projects.subtitle}>
        <SketchDouble className="-bottom-3 h-3" />
      </SectionHeading>
      <div className="mt-10 space-y-8 md:mt-14">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
