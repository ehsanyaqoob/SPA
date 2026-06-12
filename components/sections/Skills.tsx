"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Smartphone,
  Code2,
  Layers,
  Zap,
  ShieldCheck,
  Cpu,
  Globe,
  MessageSquare,
  Users,
  Lightbulb,
  Clock,
  Search
} from "lucide-react";

const technicalSkills = [
  {
    title: "Core Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    skills: ["Flutter", "Dart", "Swift (iOS)"],
  },
  {
    title: "Frameworks & State",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["SwiftUI", "Riverpod", "Bloc", "GetX", "Provider"],
  },
  {
    title: "Backend & Data",
    icon: <Layers className="w-5 h-5" />,
    skills: ["Firebase", "Supabase", "SwiftData", "Hive", "REST APIs"],
  },
  {
    title: "Architecture & Ops",
    icon: <ShieldCheck className="w-5 h-5" />,
    skills: ["Clean Architecture", "CI/CD", "Git", "GitHub Actions"],
  }
];

const softSkills = [
  { name: "Communication", icon: <MessageSquare className="w-5 h-5" /> },
  { name: "Team Collaboration", icon: <Users className="w-5 h-5" /> },
  { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" /> },
  { name: "Time Management", icon: <Clock className="w-5 h-5" /> },
  { name: "Critical Thinking", icon: <Search className="w-5 h-5" /> },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"tech" | "soft">("tech");

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-blue-950/20 to-purple-950/20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
            Expertise
          </h2>

          {/* --- INDUSTRY STANDARD TOGGLE --- */}
          <div className="flex justify-center mt-8">
            <div className="relative p-1 bg-white/[0.03] border border-white/10 rounded-full flex items-center backdrop-blur-md">
              <motion.div
                className="absolute h-[calc(100%-8px)] rounded-full bg-[#023E8A]"
                initial={false}
                animate={{
                  x: activeTab === "tech" ? 0 : "100%",
                  width: activeTab === "tech" ? "120px" : "120px",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button
                onClick={() => setActiveTab("tech")}
                className={`relative z-10 w-[120px] py-2 text-[10px] font-black uppercase tracking-widest transition-colors ${activeTab === "tech" ? "text-white" : "text-gray-500"}`}
              >
                Technical
              </button>
              <button
                onClick={() => setActiveTab("soft")}
                className={`relative z-10 w-[120px] py-2 text-[10px] font-black uppercase tracking-widest transition-colors ${activeTab === "soft" ? "text-white" : "text-gray-500"}`}
              >
                Soft Skills
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "tech" ? (
              <motion.div
                key="tech"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {technicalSkills.map((category, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-2.5 rounded-xl bg-white/5 text-gray-400 group-hover:text-blue-400 transition-colors">
                        {category.icon}
                      </div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-200">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {category.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-3">
                          <div className="w-1 h-1 rounded-full bg-[#023E8A]" />
                          <span className="text-gray-400 text-sm font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="soft"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto py-10"
              >
                {softSkills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-4 p-8 min-w-[160px] rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#023E8A]/30 transition-all group"
                  >
                    <div className="p-4 rounded-2xl bg-white/5 text-gray-400 group-hover:text-blue-400 group-hover:bg-[#023E8A]/10 transition-all duration-500">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}