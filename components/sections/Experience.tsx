"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Download, Award } from "lucide-react";

export default function Experience() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/ehsanyaqoobresume.pdf';
    link.download = 'Ehsan_Yaqoob_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const personalInfo = {
    name: "Ehsan Yaqoob",
    email: "ehsanyaqoob07.@gmail.com",
    location: "Islamabad, Pakistan"
  };

  const experience = [
    {
      id: 1,
      title: "Flutter & iOS Developer",
      company: "National Police Foundation",
      period: "Apr 2024 — Present",
      bullets: [
        "Built and deployed Digital Sergeant E-Challan system to 500+ Islamabad Traffic Police officers",
        "ML Kit OCR for real-time license plate scanning",
        "Offline-first architecture with REST API sync",
        "Bloc state management, Clean Architecture, production CI/CD"
      ]
    },
    {
      id: 2,
      title: "Mobile Developer",
      company: "Tech Solutions",
      period: "Dec 2023 — Mar 2024",
      bullets: [
        "Built and maintained Flutter apps for 3 client projects",
        "Integrated Firebase Auth, REST APIs, and real-time data sync"
      ]
    },
    {
      id: 3,
      title: "Flutter Developer",
      company: "Logixsy Tech",
      period: "Jan 2023 — Oct 2023",
      bullets: [
        "First professional Flutter role — learned production-grade architecture and clean code under a real team",
        "Worked across auth flows, modular UI, and app lifecycle management"
      ]
    }
  ];

  const certifications = [
    { title: "Flutter Certification", date: "2023" },
    { title: "Supabase Database & Auth", date: "2025" },
    { title: "iOS App Development", date: "2026 · Ongoing" } 
  ];

  return (
    <section id="experience" className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">Resume</h2>
            <p className="text-[#023E8A] text-xs font-black uppercase tracking-[0.5em] opacity-80">Mobile App Developer · Flutter & iOS</p>
          </div>
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2.5 px-6 py-3.5 bg-white/[0.03] border border-white/10 rounded-2xl text-white text-[11px] font-bold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md active:scale-95 shadow-xl shadow-black/20"
          >
            <Download className="w-4 h-4 text-[#023E8A]" /> Download CV
          </button>
        </div>

        {/* Main Glass Content */}
        <div className="bg-transparent rounded-[3rem] border border-white/5 p-8 md:p-14 space-y-20 relative overflow-hidden group">

          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] pointer-events-none" />

          {/* Profile & Location */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3 text-gray-400">
              <User className="w-10 h-10 text-blue-400" />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Profile</h3>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase mb-2 tracking-widest">Mobile App Developer</p>
                <p className="text-xl font-bold text-white tracking-tight">{personalInfo.name}</p>
                <p className="text-gray-400 text-sm mt-1">{personalInfo.email}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase mb-2 tracking-widest">Current Base</p>
                <p className="text-xl font-bold text-gray-300 tracking-tight">{personalInfo.location}</p>
                <p className="text-gray-400 text-sm mt-1">Available for Remote/On-site</p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Experience - The Core of the Page */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3 text-gray-400">
              <Briefcase className="w-10 h-10 text-purple-400" />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Experience</h3>
            </div>
            <div className="md:col-span-2 space-y-12">
              {experience.map((exp) => (
                <div key={exp.id} className="group border-l border-white/5 pl-8 relative transition-all">
                  <div className="absolute -left-[1px] top-0 h-8 w-[2px] bg-[#023E8A] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-2">
                    <div>
                      <h4 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">{exp.title}</h4>
                      <p className="text-[#023E8A] text-xs font-black uppercase mt-2 tracking-[0.2em]">{exp.company}</p>
                    </div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <ul className="grid grid-cols-1 gap-y-3">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300 text-[14px] font-normal leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-500/50 shrink-0 transition-colors" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Credentials - Compact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3 text-gray-400">
              <Award className="w-10 h-10  text-yellow-500" />
              <h3 className="text-[11px] font-black uppercase tracking-widest">Credentials</h3>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between hover:bg-white/[0.05] transition-all cursor-default group/cert">
                  <span className="text-sm font-bold text-gray-300 group-hover/cert:text-white transition-colors">{cert.title}</span>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-tighter">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}