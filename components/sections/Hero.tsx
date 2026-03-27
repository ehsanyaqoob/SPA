"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/ehsanyaqoob.pdf';
    link.download = 'Ehsan_Yaqoob_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent pt-20"
    >
      {/* Resume Button - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-10 right-6 md:right-12 z-20"
      >
        <button
          onClick={handleDownloadResume}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-all duration-300"
        >
          <Download className="w-4 h-4" />
          Resume
        </button>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Left Side: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-tr from-blue-500/20 to-transparent border border-white/10 shadow-2xl relative z-10 overflow-hidden">
              <Image
                src="/me.jpg"
                alt="Ehsan Yaqoob"
                fill
                className="object-cover rounded-full p-2 transition-all duration-700"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full -z-10 animate-pulse" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center md:text-left space-y-4"
          >

            {/* Line 1 — Name + handle + badge */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight whitespace-nowrap">
                Ehsan Yaqoob
              </h1>
              <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-blue-500 fill-blue-500/10 shrink-0" />
              <span className="text-lg md:text-xl text-gray-500 font-medium whitespace-nowrap">
                @ehsanyaqoob
              </span>
            </div>

            {/* Line 2 — Role */}
            <h2 className="text-xl md:text-2xl font-bold text-blue-400 tracking-wide">
              Mobile App Developer · Flutter & iOS
            </h2>

            {/* Description — 2 clean lines */}
            <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
              Crafting elegant, high-performance mobile experiences with Flutter and modern iOS tech.
              Clean architecture, smooth animations, and production-grade code — built to last.
            </p>

            {/* Availability badge */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500 font-mono pt-1">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for New Projects
              </span>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500/50 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}