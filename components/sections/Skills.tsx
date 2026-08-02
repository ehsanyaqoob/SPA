"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Code2,
  Layers,
  ShieldCheck
} from "lucide-react";

const technicalSkills = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Swift", "Dart", "JavaScript/TypeScript (familiar)"],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    skills: ["SwiftUI, SwiftData, UIKit", "WidgetKit, Combine", "Swift Concurrency", "Riverpod, Bloc, GetX", "Provider, Hive"],
  },
  {
    title: "Architecture & Backend",
    icon: <Layers className="w-5 h-5" />,
    skills: ["Clean Architecture, MVVM", "offline-first sync", "Supabase (Auth/RLS/Postgres)", "Firebase", "REST APIs"],
  },
  {
    title: "DevOps",
    icon: <ShieldCheck className="w-5 h-5" />,
    skills: ["Fastlane", "GitHub Actions", "Shorebird", "App Store Connect", "TestFlight, Play Console"],
  },
  {
    title: "Other",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Git", "ML Kit OCR", "Google Maps SDK", "Stripe/PayPal"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
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
        </motion.div>

        {/* Content Area */}
        <div className="min-h-[200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
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
        </div>
      </div>
    </section>
  );
}