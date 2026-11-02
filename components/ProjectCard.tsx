import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/site.config";
import ProjectLinks from "@/components/ProjectLinks";
import { SketchArrow } from "@/components/Sketch";

const frameTilts = ["-rotate-6 translate-y-3", "z-10 scale-105", "rotate-6 translate-y-3"];

// Frames share one height on the stage, so shorter frames get a wider limit.
const stageHeightRem = 27;

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      style={{ "--stack-top": `${6 + index}rem` } as React.CSSProperties}
      className="group relative grid overflow-hidden rounded-[2rem] border border-line bg-surface shadow-2xl shadow-black/60 transition-colors hover:border-white/25 lg:sticky lg:top-[var(--stack-top)] lg:min-h-[34rem] lg:grid-cols-[1fr_1.2fr]"
    >
      {/* Text */}
      <div className="order-2 flex flex-col gap-5 p-6 md:p-10 lg:order-1 lg:p-12">
        <p className="flex items-center gap-2 text-sm font-semibold text-muted">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: project.brand }} aria-hidden="true" />
          {project.platform} · {project.status}
        </p>
        <h3 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
          <Link href={`/projects/${project.id}/`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        <p className="text-lg leading-relaxed text-muted md:text-xl">{project.tagline}</p>
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={tech} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
              {tech}
            </li>
          ))}
        </ul>
        <p className="mt-1 flex items-center gap-2 font-hand text-2xl md:text-3xl" style={{ color: project.brand }}>
          {project.note}
          <SketchArrow className="hidden h-8 w-14 shrink-0 lg:block" />
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4">
          <ProjectLinks project={project} />
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
            Case study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>

      {/* Three frames on a stage in the app's brand color */}
      <div
        className="relative order-1 flex items-center justify-center overflow-hidden px-6 py-10 lg:order-2"
        style={{ background: `radial-gradient(circle at 50% 45%, ${project.brand}55, ${project.brand}14 60%, transparent 85%)` }}
      >
        <div className="flex w-full items-center justify-center -space-x-1">
          {project.frames.slice(0, 3).map((frame, frameIndex) => (
            <Image
              key={frame}
              src={frame}
              alt={`${project.title} screen ${frameIndex + 1}`}
              width={720}
              height={project.frameHeight}
              sizes="(min-width: 1024px) 240px, 33vw"
              style={{ maxWidth: `${(stageHeightRem * 720) / project.frameHeight}rem` }}
              className={`h-auto w-1/3 rounded-2xl border border-white/10 shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:-translate-y-1 ${frameTilts[frameIndex]}`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
