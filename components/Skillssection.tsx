"use client";

import { skills, skillCategories } from "@/data/skills";

export default function SkillsSection() {
  const grouped = Object.entries(
    skills.reduce((acc, skill) => {
      (acc[skill.category] = acc[skill.category] || []).push(skill.name);
      return acc;
    }, {} as Record<string, string[]>)
  );

  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h2 className="text-sm uppercase tracking-widest text-cyan-500 mb-8">
        02.{" "}
        <span className="ml-2 text-white font-semibold">
          Where I’ve excelled
        </span>
      </h2>

      <div className="space-y-6">
        {grouped.map(([category, names]) => (
          <div key={category}>
            <h3 className="flex items-center gap-2 text-gray-200 font-semibold text-base">
              <span className="text-cyan-400">▹</span>
              {skillCategories[category as keyof typeof skillCategories]}
            </h3>

            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              {names.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
