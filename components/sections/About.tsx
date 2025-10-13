"use client";

import { motion } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import * as LucideIcons from "lucide-react";
import Image from "next/image";

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
              {/* Profile Picture Section */}
              <div className="flex justify-center md:justify-start">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                    <Image
                      src="/me.jpg"
                      alt="Ehsan Yaqoob - Mobile Engineer"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                  Mobile Engineer & Flutter Specialist
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  By profession, I am a Mobile Engineer with 3+ years of applied experience 
                  in architecting, developing, and deploying mobile applications across 
                  Android and iOS ecosystems for both public and private sector clients.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  My expertise is centered on Flutter & Dart, with a strong command over 
                  state management (GetX, Provider), networking (REST APIs, GraphQL, Firebase), 
                  authentication (OAuth2.0, JWT, social logins), and DevOps practices 
                  (Git, CI/CD, automated testing & deployment).
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I specialize in building scalable, modular, and performance-optimized 
                  applications by applying Clean Architecture principles, performance 
                  profiling, and security hardening. Alongside Flutter, I maintain working 
                  familiarity with native Android/iOS stacks and React Native.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium bg-blue-50 dark:bg-blue-900/20 px-4 py-3 rounded-lg border-l-4 border-blue-500">
                  🚀 <strong>Currently learning native iOS development</strong> to expand my expertise 
                  and become a full-stack iOS developer, complementing my cross-platform skills 
                  with deep native platform knowledge.
                </p>
                
                {/* Professional Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      3+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      Years Experience
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                      15+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      Production Apps
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      25%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      Performance Gain
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                      iOS
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      Next Goal
                    </div>
                  </motion.div>
                </div>
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