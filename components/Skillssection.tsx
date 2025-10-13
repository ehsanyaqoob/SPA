"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

const SkillsSection = () => {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold tracking-tight text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent"
      >
        Technical Skills
      </motion.h2>

      <div className="space-y-10">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="group"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 items-center">
              {category.items.map((skill, index) => (
                <React.Fragment key={skill.name}>
                  {skill.link ? (
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium hover:underline decoration-blue-600 dark:decoration-blue-400 decoration-2 underline-offset-4"
                    >
                      {skill.name}
                    </a>
                  ) : (
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  )}
                  {index < category.items.length - 1 && (
                    <span className="text-gray-400 dark:text-gray-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
