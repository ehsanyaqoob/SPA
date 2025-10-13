"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import * as LucideIcons from "lucide-react";

const SkillsSection = () => {
  const grouped = Object.entries(skillCategories).map(([key, label]) => ({
    label,
    category: key,
    items: skills.filter((s) => s.category === key),
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold tracking-tight text-center mb-10 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      <div className="space-y-12">
        {grouped.map(({ label, items }) => (
          <div key={label}>
            <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              {label}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {items.map((skill) => {
                const IconComponent =
                  LucideIcons[skill.icon as keyof typeof LucideIcons] as any;
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer border border-gray-100 dark:border-gray-700"
                  >
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    )}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
