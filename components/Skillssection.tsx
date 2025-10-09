"use client";

import React from "react";
import { skills, skillCategories } from "@/data/skills";

const SkillsSection = () => {
  const grouped = Object.entries(skillCategories).map(([key, label]) => ({
    label,
    items: skills.filter((s) => s.category === key),
  }));

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold tracking-tight text-center mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-16">
        {grouped.map(({ label, items }) => (
          <div key={label}>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
              {label}
            </h3>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
              {items.map((skill) => (
                <li key={skill.name} className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3" />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
