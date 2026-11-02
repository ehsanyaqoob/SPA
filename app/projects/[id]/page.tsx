import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectLinks from "@/components/ProjectLinks";
import { person, projects, sections } from "@/site.config";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return {};
  return { title: `${project.title} | ${person.name}`, description: project.tagline };
}

export default function ProjectPage({ params }: Props) {
  const index = projects.findIndex((p) => p.id === params.id);
  if (index === -1) notFound();

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];
  const story = [
    { title: "The problem", text: project.problem },
    { title: "What I built", text: project.solution },
    { title: "How it's built", text: project.architecture },
    { title: "The result", text: project.impact },
  ];
  const details = [
    { title: "Role", text: project.role },
    { title: "Timeline", text: project.timeline },
    { title: "Platform", text: project.platform },
    { title: "Status", text: project.status },
  ];

  return (
    <main className="mx-auto max-w-6xl px-5 pb-10 pt-28 md:px-8 md:pb-14 md:pt-32">
      <Link
        href={`/#${sections.projects.id}`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        All projects
      </Link>

      <header className="mt-8 max-w-3xl">
        <h1 className="font-display text-5xl font-semibold tracking-tight md:text-7xl">{project.title}</h1>
        <p className="mt-5 text-xl leading-relaxed text-muted">{project.tagline}</p>
        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </header>

      <div
        tabIndex={0}
        aria-label={`${project.title} app screens`}
        className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4 md:mt-14"
      >
        {project.frames.map((frame, frameIndex) => (
          <Image
            key={frame}
            src={frame}
            alt={`${project.title} screen ${frameIndex + 1}`}
            width={720}
            height={project.frameHeight}
            priority={frameIndex === 0}
            sizes="(min-width: 768px) 288px, 224px"
            className="h-auto w-56 shrink-0 snap-start rounded-3xl border border-line md:w-72"
          />
        ))}
      </div>

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-[2fr_1fr] md:gap-16">
        <div className="space-y-10">
          {story.map(
            ({ title, text }) =>
              text && (
                <section key={title}>
                  <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{text}</p>
                </section>
              )
          )}
          {project.keyFeatures && (
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">Key features</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed text-muted marker:text-line">
                {project.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="self-start md:sticky md:top-24">
          <dl className="divide-y divide-line border-y border-line">
            {details.map(
              ({ title, text }) =>
                text && (
                  <div key={title} className="flex justify-between gap-6 py-3">
                    <dt className="text-muted">{title}</dt>
                    <dd className="text-right font-medium">{text}</dd>
                  </div>
                )
            )}
          </dl>
          <p className="mt-6 text-sm font-medium text-muted">Built with</p>
          <p className="mt-1 leading-relaxed">{project.techStack.join(", ")}</p>
        </aside>
      </div>

      <Link
        href={`/projects/${nextProject.id}/`}
        className="group mt-16 flex items-center justify-between gap-6 border-t border-line pt-8"
      >
        <span>
          <span className="block text-sm font-medium text-muted">Next project</span>
          <span className="font-display text-3xl font-semibold tracking-tight">{nextProject.title}</span>
        </span>
        <ArrowRight className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
      </Link>
    </main>
  );
}
