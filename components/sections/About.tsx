"use client";

import { motion } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import * as LucideIcons from "lucide-react";

export default function About() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

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
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 md:p-12 mb-16 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                  Passionate Developer & Designer
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a Flutter Developer specializing in creating beautiful,
                  responsive, and user-centric mobile and web applications. With
                  a strong foundation in both development and design, I bridge
                  the gap between aesthetics and functionality.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  My journey in software development has been driven by a passion
                  for crafting seamless user experiences. I believe that great
                  apps are not just about clean code, but about understanding
                  user needs and translating them into intuitive interfaces.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest design
                  trends, contributing to open-source projects, or sharing my
                  knowledge with the developer community.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    5+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    Years Experience
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    Projects Completed
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    30+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    Happy Clients
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                    100k+
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    App Users
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              Skills & Technologies
            </h3>

            <div className="space-y-12">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category}>
                  <h4 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
                    {skillCategories[category as keyof typeof skillCategories]}
                  </h4>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                  >
                    {categorySkills.map((skill) => {
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
