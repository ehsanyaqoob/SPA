"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "Professional Bachelor Degree in BSCS",
      year: "2025",
      accent: "border-green-500/30 text-green-400"
    },
    {
      title: "Mobile App Development Diploma",
      institution: "Specialized Institute of Mobile Technologies ",
      year: "2023 - 2024",
      accent: "border-green-500/30 text-green-400"
    }
  ];

  const experienceShort = [
    {
      title: "App Developer",
      company: "National Police Foundation",
      year: "2024 - Present",
      accent: "border-purple-500/30 text-purple-400"
    },
    {
      title: "Software Developer",
      company: "Tech Solutions - Remote",
      year: "2024",
      accent: "border-purple-500/30 text-purple-400"
    }
    ,
    {
      title: "Flutter Developer",
      company: "Logixsy Technologies - Internship ",
      year: "2023",
      accent: "border-purple-500/30 text-purple-400"
    }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Learn more about my background, education, and professional journey
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Main Content: Image Left, Text Right */}
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Profile Picture Section */}
            <div className="lg:col-span-5 flex justify-center lg:justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-white/5 backdrop-blur-md">
                  <Image
                    src="/me.jpg"
                    alt="Ehsan Yaqoob - Mobile Engineer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
              </motion.div>
            </div>

            {/* Bio & Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400 leading-tight">
                Mobile App Developer | Flutter & iOS
              </h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
                <p>
                  By profession, I am a Mobile Engineer with 3+ years of applied experience
                  in architecting, developing, and deploying mobile applications across
                  Android and iOS ecosystems for both public and private sector clients.
                </p>
                <p>
                  My expertise is centered on Flutter & Dart, with a strong command over
                  state management (GetX, Provider), networking (REST APIs, GraphQL, Firebase),
                  authentication (OAuth2.0, JWT, social logins), and DevOps practices
                  (Git, CI/CD, automated testing & deployment).
                </p>
                <p>
                  I specialize in building scalable, modular, and performance-optimized
                  applications by applying Clean Architecture principles, performance
                  profiling, and security hardening.
                </p>
                <p className="text-gray-200 leading-relaxed font-medium bg-blue-500/5 px-4 py-3 rounded-lg border-l-4 border-blue-500">
                  🚀 <strong>Currently learning native iOS development</strong> to expand my expertise
                  and become a full-stack iOS developer, complementing my cross-platform skills
                  with deep native platform knowledge.
                </p>
              </div>

              {/* Education & Experience Columns */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {/* Education Column */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <GraduationCap className="w-6 h-6 text-green-400" />
                    <h4 className="text-xl font-bold text-green-400">Education</h4>
                  </div>
                  <div className="space-y-3">
                    {education.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-green-500/30 transition-all duration-300 group"
                      >
                        <h5 className="text-white font-bold mb-1 group-hover:text-green-400 transition-colors">
                          {item.title}
                        </h5>
                        <p className="text-gray-400 text-sm mb-0">{item.institution}</p>
                        <span className="text-green-500/80 text-xs font-bold mt-2 block">{item.year}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Experience Column */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Briefcase className="w-6 h-6 text-purple-400" />
                    <h4 className="text-xl font-bold text-purple-400">Experience</h4>
                  </div>
                  <div className="space-y-3">
                    {experienceShort.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                      >
                        <h5 className="text-white font-bold mb-0 group-hover:text-purple-400 transition-colors">{item.title}</h5>
                        <p className="text-gray-400 text-sm mb-0">{item.company}</p>
                        <span className="text-purple-500/80 text-xs font-bold mt-2 block">{item.year}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}