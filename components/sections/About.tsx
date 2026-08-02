"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 bg-transparent relative overflow-hidden flex items-center min-h-[90vh]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* EDITORIAL GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center text-center md:text-left mb-24">
          
          {/* LEFT TEXT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:text-right space-y-6 order-2 md:order-1"
          >
            <p className="text-gray-200 text-xl md:text-2xl font-medium leading-relaxed tracking-tight">
              I&apos;m a Mobile Developer based in Islamabad with 2+ years shipping production apps across Flutter and native iOS.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm md:ml-auto">
              From a government enforcement system deployed to 500+ field officers to two solo-built consumer apps live on the App Store and Play Store.
            </p>
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[3rem] rotate-3 hover:rotate-0 transition-transform duration-700 ease-out overflow-hidden shadow-2xl border border-white/10 group">
              <Image 
                src="/me.jpg" 
                fill 
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                alt="Ehsan Yaqoob" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-3 md:order-3"
          >
            <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed tracking-tight">
              I specialize in offline-first architecture, Supabase/Firebase-backed sync, and CI/CD via Fastlane and GitHub Actions.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Currently deepening native iOS expertise (SwiftUI, SwiftData) while transitioning toward full-stack iOS development.
            </p>
            <div className="inline-block mt-2">
              <div className="px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                🚀 Shipping Niyyah (iOS) & Mizan (Flutter) to stores
              </div>
            </div>
          </motion.div>
        </div>

        {/* BELOW: MINIMAL PILLS */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-8">
            Background & Experience
          </h4>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            
            {/* Education Pill */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all cursor-default">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-bold text-gray-300">BSCS</span>
              <span className="text-xs text-gray-500 hidden sm:inline">· Arid Uni &apos;22-&apos;26</span>
            </div>


            {/* Logixsy Pill */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#97B4D5]" />
              <span className="text-sm font-bold text-gray-300">Flutter Dev</span>
              <span className="text-xs text-gray-500 hidden sm:inline">· Logixsy &apos;23</span>
            </div>

            {/* NPF Pill (Current) */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-sm font-bold text-white">Mobile Dev (iOS & Flutter)</span>
              <span className="text-xs text-gray-400 hidden sm:inline">· NPF (Present)</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}