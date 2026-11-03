import { Plus } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  SketchLoop,
  SketchPhone,
  SketchRoute,
  SketchScreens,
  SketchStore,
  SketchTalk,
} from "@/components/Sketch";
import { processSection, sections } from "@/site.config";

const doodles = [SketchTalk, SketchScreens, SketchPhone, SketchStore];

export default function Process() {
  return (
    <section id={sections.process.id} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading title={sections.process.title} subtitle={sections.process.subtitle}>
        <SketchLoop className="-bottom-4 h-5" />
      </SectionHeading>

      {/* One road through four stops. Every second stop sits lower, so the road has to wander. */}
      <div className="relative mt-14">
        <span className="hidden text-blue-500/70 lg:block">
          <SketchRoute className="inset-x-0 top-0 h-[150px] w-full" />
        </span>
        <ol className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {processSection.steps.map(({ note, title, text, outcome }, index) => {
          const Doodle = doodles[index];
          return (
            <li key={title} className="relative lg:even:mt-14">
              <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-black text-blue-300">
                <Doodle className="h-14 w-14" />
              </span>
              <p className="mt-3 font-hand text-2xl text-blue-400">{note}</p>
              <h3 className="mt-1 font-display text-3xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 leading-relaxed text-gray-300">{text}</p>
              <p className="mt-4 border-t border-white/10 pt-3 text-sm">
                <span className="text-muted">{processSection.outcomeLabel}: </span>
                <span className="font-semibold text-white">{outcome}</span>
              </p>
            </li>
          );
        })}
        </ol>
      </div>

      <div className="mt-20 grid gap-8 md:mt-28 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <h3 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{processSection.questionsTitle}</h3>
          <p className="mt-2 font-hand text-3xl text-violet-400">{processSection.questionsNote}</p>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {processSection.questions.map(({ question, answer }) => (
            <details key={question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold transition-colors hover:text-blue-300 [&::-webkit-details-marker]:hidden">
                {question}
                <Plus className="h-5 w-5 shrink-0 text-blue-400 transition-transform group-open:rotate-45" />
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-gray-300">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
