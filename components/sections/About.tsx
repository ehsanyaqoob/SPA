"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const timeline = [
    {
      title: "Flutter & iOS Developer",
      organization: "National Police Foundation",
      year: "2024 - Present",
      type: "experience",
      icon: <Briefcase className="w-5 h-5 text-purple-400" />,
      accent: "border-purple-500/30 group-hover:border-purple-500/50 text-purple-400"
    },
    {
      title: "Software Developer",
      organization: "Tech Solutions - Remote",
      year: "2024",
      type: "experience",
      icon: <Briefcase className="w-5 h-5 text-purple-400" />,
      accent: "border-purple-500/30 group-hover:border-purple-500/50 text-purple-400"
    },
    {
      title: "Flutter Developer",
      organization: "Logixsy Technologies - Internship",
      year: "2023",
      type: "experience",
      icon: <Briefcase className="w-5 h-5 text-purple-400" />,
      accent: "border-purple-500/30 group-hover:border-purple-500/50 text-purple-400"
    },
    {
      title: "Bachelor of Science in Computer Science",
      organization: "PMAS Arid Agriculture University",
      year: "2025",
      type: "education",
      icon: <GraduationCap className="w-5 h-5 text-green-400" />,
      accent: "border-green-500/30 group-hover:border-green-500/50 text-green-400"
    }
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-transparent to-blue-950/20 relative overflow-hidden"
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
                  I'm a mobile app developer focused on turning complex problems into intuitive, high-performance applications that users love. With over 3 years of experience shipping production-ready apps across both iOS and Android, I've built everything from government-grade enforcement tools to sleek social platforms.
                </p>
                <p>
                  My core expertise lies in Flutter, Dart, and Swift, backed by a strong foundation in modern state management (Riverpod, GetX, Bloc) and robust local/remote data syncing (SwiftData, Hive, Firebase, Supabase).
                </p>
                <p>
                  I don't just write code — I focus on the entire lifecycle. From architecting scalable offline-first databases to setting up seamless CI/CD pipelines, I prioritize clean architecture and maintainability so the products I build are meant to last.
                </p>
                <p className="text-gray-200 leading-relaxed font-medium bg-blue-500/5 px-4 py-3 rounded-lg border-l-4 border-blue-500">
                  🚀 <strong>Currently building native iOS apps</strong> — Niyyah, a daily Salah tracker, coming to App Store 2026.
                </p>
              </div>

              {/* Single Column Timeline */}
              <div className="mt-12">
                <h4 className="text-2xl font-bold text-white mb-8">Journey</h4>
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                      {/* Timeline Icon */}
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0a0a] bg-white/10 backdrop-blur-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10 ${item.type === 'education' ? 'shadow-green-500/20 text-green-400' : 'shadow-purple-500/20 text-purple-400'}`}>
                        {item.icon}
                      </div>

                      {/* Card Content */}
                      <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-300 ${item.accent}`}>
                        <h5 className={`font-bold mb-1 transition-colors ${item.type === 'education' ? 'text-green-400' : 'text-purple-400'}`}>
                          {item.title}
                        </h5>
                        <p className="text-gray-400 text-sm mb-0">{item.organization}</p>
                        <span className={`text-xs font-bold mt-2 block opacity-80 ${item.type === 'education' ? 'text-green-500' : 'text-purple-500'}`}>
                          {item.year}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}