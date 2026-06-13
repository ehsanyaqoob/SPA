"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Briefcase, Award, CheckCircle2, Navigation } from "lucide-react";

export default function Experience() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/ehsanyaqoobresume.pdf';
    link.download = 'Ehsan_Yaqoob_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      id: "npf",
      title: "Flutter & iOS Developer",
      company: "National Police Foundation",
      period: "Apr 2024 — Present",
      colSpan: "lg:col-span-7",
      color: "from-blue-500/20 to-cyan-500/5",
      bullets: [
        "Built and deployed Digital Sergeant E-Challan system to 500+ Islamabad Traffic Police officers",
        "Implemented ML Kit OCR for real-time, low-latency license plate scanning",
        "Architected an offline-first data layer with background REST API synchronization",
        "Maintained Bloc state management and Clean Architecture for enterprise-grade scalability"
      ]
    },
    {
      id: "techsol",
      title: "Mobile Developer",
      company: "Tech Solutions",
      period: "Dec 2023 — Mar 2024",
      colSpan: "lg:col-span-5",
      color: "from-purple-500/20 to-pink-500/5",
      bullets: [
        "Built scalable Flutter applications, prioritizing modular architecture",
        "Integrated Firebase Auth, Firestore, and complex REST APIs",
        "Implemented robust state management using Riverpod and Provider for 60fps UI",
        "Collaborated with backend engineers to translate complex business logic"
      ]
    },
    {
      id: "logixsy",
      title: "Flutter Developer",
      company: "Logixsy Tech",
      period: "Jan 2023 — Oct 2023",
      colSpan: "lg:col-span-8",
      color: "from-green-500/20 to-emerald-500/5",
      bullets: [
        "Developed cross-platform mobile applications from scratch adhering to SOLID principles",
        "Architected secure user authentication flows and local secure storage caching",
        "Optimized legacy codebases, reducing app bundle sizes significantly",
        "Participated in Agile workflows, code reviews, and sprint planning"
      ]
    }
  ];

  const certifications = [
    { title: "Flutter Certification", date: "2023" },
    { title: "Supabase Database & Auth", date: "2025" },
    { title: "iOS App Development", date: "2026 · Ongoing" } 
  ];

  return (
    <section id="experience" className="py-12 md:py-16 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-4">
            Experience
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 rounded-full" />
        </div>

        {/* BENTO GRID (The entire grid is a group to enable the sibling-dimming hover effect) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 group/bento">
          
          {/* TILE 1: Profile & Resume (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-8 relative overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/5 p-6 md:p-8 hover:border-white/20 transition-all duration-500 group-hover/bento:opacity-50 hover:!opacity-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Mobile App Developer</p>
                <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-tight">
                  Ehsan Yaqoob
                </h3>
                <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                  Building production-ready, high-performance mobile applications with Flutter and iOS. Focused on clean architecture, beautiful UI, and offline-first experiences.
                </p>
              </div>
              <div className="mt-12">
                <button
                  onClick={handleDownloadResume}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
                >
                  <Download className="w-4 h-4" /> 
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>

          {/* TILE 2: The Radar / Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-2 lg:col-span-4 relative overflow-hidden rounded-[2rem] bg-[#0A0A0A] border border-white/5 p-8 flex flex-col items-center justify-center min-h-[300px] hover:border-white/20 transition-all duration-500 group-hover/bento:opacity-50 hover:!opacity-100"
          >
            {/* Radar Animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-32 border border-blue-500/20 rounded-full absolute animate-[ping_3s_linear_infinite]" />
              <div className="w-64 h-64 border border-blue-500/10 rounded-full absolute animate-[ping_4s_linear_infinite]" />
              <div className="w-96 h-96 border border-blue-500/5 rounded-full absolute" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full border border-blue-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                <Navigation className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Current Base</p>
              <h3 className="text-2xl font-black text-white tracking-tight">Islamabad, PK</h3>
              <a href="mailto:ehsanyaqoob07@gmail.com" className="mt-4 flex items-center gap-2 px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full hover:bg-green-500/20 transition-colors cursor-pointer active:scale-95 group">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest group-hover:text-green-300 transition-colors">Available for Work</span>
              </a>
            </div>
          </motion.div>

          {/* EXPERIENCE TILES */}
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx + 1) }}
              className={`md:col-span-2 ${exp.colSpan} relative overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/5 p-8 md:p-10 hover:border-white/20 transition-all duration-500 group-hover/bento:opacity-50 hover:!opacity-100 hover:-translate-y-1`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${exp.color} blur-[100px] opacity-50`} />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">{exp.title}</h3>
                    <p className="text-blue-400 font-bold tracking-wide">{exp.company}</p>
                  </div>
                  <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full inline-flex self-start sm:self-auto">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* TILE 6: Credentials (Bottom Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-2 lg:col-span-4 relative overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/5 p-8 md:p-10 flex flex-col justify-center hover:border-white/20 transition-all duration-500 group-hover/bento:opacity-50 hover:!opacity-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-yellow-500" />
              <h3 className="text-2xl font-black text-white tracking-tight">Credentials</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <span className="text-sm font-bold text-gray-300">{cert.title}</span>
                  <span className="text-xs font-black text-gray-500 uppercase tracking-widest">{cert.date}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}