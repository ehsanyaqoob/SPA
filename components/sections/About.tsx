import { about, education, experience, sections } from "@/site.config";
import SectionHeading from "@/components/SectionHeading";
import { SketchDot, SketchOval, SketchTimeline, SketchWave } from "@/components/Sketch";

const timelines = [
  { title: "Education", items: education, color: "text-green-400" },
  { title: "Experience", items: experience, color: "text-violet-400" },
];

export default function About() {
  return (
    <section id={sections.about.id} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading title={sections.about.title} subtitle={sections.about.subtitle}>
        <SketchWave className="-bottom-3 h-3" />
      </SectionHeading>

      <h3 className="mt-12 font-display text-3xl tracking-tight md:text-5xl">
        <span className="font-semibold">{about.headline}</span>{" "}
        <span className="whitespace-nowrap font-light text-gray-400">{about.paths}</span>
      </h3>
      <div className="mt-6 max-w-4xl space-y-5">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-relaxed text-gray-300 md:text-xl md:leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-10">
        {timelines.map(({ title, items, color }) => (
          <div key={title} className={color}>
            <h3 className="relative ml-3 inline-block px-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
              <SketchOval className="-inset-x-5 -inset-y-3 h-[calc(100%+1.5rem)] w-[calc(100%+2.5rem)]" />
            </h3>
            <div className="relative mt-10">
              <SketchTimeline className="left-2 opacity-70" />
              <div className="space-y-9">
                {items.map((item) => (
                  <article key={item.title} className="relative pl-12">
                    <SketchDot className="absolute left-0 top-1 h-7 w-7 rounded-full bg-black" />
                    <p className="text-sm font-semibold">{item.date}</p>
                    <h4 className="mt-1 text-xl font-semibold text-ink">{item.title}</h4>
                    <p className="mt-1 text-gray-400">{item.place}</p>
                    <p className="mt-2 font-hand text-2xl leading-tight">{item.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
