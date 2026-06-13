"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const bootSequence = [
  { type: "cmd", text: "$ whoami" },
  { type: "output", text: "Ehsan Yaqoob" },
  { type: "cmd", text: "$ role" },
  { type: "output", text: "Mobile App Developer — Flutter & iOS" },
  { type: "cmd", text: "$ status" },
  { type: "link", text: "● Available for new projects", action: "mailto" },
  { type: "cmd", text: "$ ls ./shipping" },
  { type: "link", text: "📱 Niyyah (iOS)", action: "niyyah" },
  { type: "link", text: "📱 Mizan (Flutter)", action: "mizan" },
  { type: "cmd", text: "$ skills --core" },
  { type: "pills", skills: ["Flutter", "Dart", "Swift", "SwiftUI", "Firebase", "Supabase", "Riverpod", "Bloc"] },
];

const storeLinks: Record<string, { url: string; label: string }> = {
  niyyah: { url: "#", label: "Shipping to store, will update soon!" },
  mizan: { url: "#", label: "Shipping to store, will update soon!" },
};

export default function Hero() {
  const { toast } = useToast();
  const [visibleLines, setVisibleLines] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    if (visibleLines >= bootSequence.length) {
      setIsTypingDone(true);
      return;
    }
    const line = bootSequence[visibleLines];
    if (line.type === "pills") {
      const timeout = setTimeout(() => {
        setVisibleLines(visibleLines + 1);
        setTypingIndex(0);
        setCurrentText("");
      }, 200);
      return () => clearTimeout(timeout);
    }
    const fullText = line.text!;
    if (typingIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, line.type === "cmd" ? 35 : 15);
      return () => clearTimeout(timeout);
    } else {
      const delay = line.type === "cmd" ? 250 : 100;
      const timeout = setTimeout(() => {
        setVisibleLines(visibleLines + 1);
        setTypingIndex(0);
        setCurrentText("");
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, typingIndex]);

  const handleLinkClick = (action: string) => {
    if (action === "mailto") {
      window.location.href = "mailto:ehsanyaqoob07@gmail.com";
      return;
    }
    const link = storeLinks[action];
    if (link && link.url !== "#") {
      window.open(link.url, "_blank", "noopener,noreferrer");
    } else if (link) {
      toast({ title: "Coming Soon!", description: link.label });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/ehsanyaqoobresume.pdf";
    link.download = "Ehsan_Yaqoob_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderLine = (line: (typeof bootSequence)[0], isCurrentLine: boolean) => {
    const displayText = isCurrentLine ? currentText : line.text;
    if (line.type === "cmd") {
      return (
        <div className="flex items-center gap-1.5">
          <span className="text-green-400 font-mono text-xs md:text-sm whitespace-pre">{displayText}</span>
          {isCurrentLine && <span className="w-1.5 h-4 bg-green-400 animate-pulse" />}
        </div>
      );
    }
    if (line.type === "link") {
      const isAvailable = line.action === "mailto";
      return (
        <button
          onClick={() => handleLinkClick(line.action!)}
          className={`text-left font-mono text-xs md:text-sm transition-all group/link cursor-pointer ${
            isAvailable ? "text-green-400 hover:text-green-300" : "text-blue-400 hover:text-blue-300"
          }`}
        >
          <span className="group-hover/link:underline underline-offset-4">{displayText}</span>
          {isCurrentLine && <span className="inline-block w-1.5 h-4 bg-blue-400 animate-pulse ml-1 align-middle" />}
        </button>
      );
    }
    if (line.type === "pills") {
      return (
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {(line as any).skills.map((skill: string, i: number) => (
            <span key={i} className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-mono rounded border border-blue-500/20">
              {skill}
            </span>
          ))}
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1.5">
        <span className="text-gray-300 font-mono text-xs md:text-sm font-bold">{displayText}</span>
        {isCurrentLine && <span className="w-1.5 h-4 bg-gray-300 animate-pulse" />}
      </div>
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent pt-24 pb-12"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* HORIZONTAL LAYOUT: Name Left + Terminal Right */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-14">

            {/* LEFT: Name, Title, CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-[40%] text-center lg:text-left space-y-5 flex-shrink-0"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                Ehsan<br />Yaqoob
              </h1>
              <h2 className="text-base md:text-lg text-gray-400 font-medium tracking-wide">
                Mobile App Developer · Flutter &amp; iOS
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto lg:mx-0">
                3+ years shipping production apps — from government-grade enforcement tools to consumer iOS products.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 pt-2">
                <a
                  href="mailto:ehsanyaqoob07@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-full text-gray-300 text-[10px] font-bold uppercase tracking-widest hover:bg-white/[0.08] hover:border-white/20 transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Available
                </a>
                <button
                  onClick={handleDownloadResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 active:scale-95 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download CV
                </button>
              </div>
            </motion.div>

            {/* RIGHT: Compact Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-[60%]"
            >
              <div className="bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                {/* Header */}
                <div className="h-9 bg-white/[0.03] border-b border-white/10 flex items-center px-3.5 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2.5 text-gray-600 text-[10px] font-mono">
                    ehsan@portfolio ~ %
                  </span>
                </div>

                {/* Body */}
                <div className="p-4 md:p-5 space-y-2 min-h-[240px] md:min-h-[280px]">
                  {bootSequence.map((line, i) => {
                    if (i > visibleLines) return null;
                    const isCurrentLine = i === visibleLines;
                    return (
                      <div
                        key={i}
                        className={line.type === "cmd" ? "" : "pl-3 border-l border-white/5"}
                      >
                        {renderLine(line, isCurrentLine)}
                      </div>
                    );
                  })}
                  {isTypingDone && (
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-green-400 font-mono text-xs">$</span>
                      <span className="w-1.5 h-4 bg-green-400 animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500/50 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}