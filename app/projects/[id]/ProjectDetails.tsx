"use client";

import { Project } from "@/data/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ArrowLeft, CheckCircle2, TrendingUp, HelpCircle, Lightbulb, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

export default function ProjectDetails({ project }: { project: Project }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects for the Top-Level Hero
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <main ref={containerRef} className="min-h-screen bg-[#050505] text-white selection:bg-[#023E8A]/30">
        
        {/* --- TOP LEVEL VIEW (THE BIG BANNER) --- */}
        <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden border-b border-white/10">
          <motion.div style={{ y, opacity }} className="absolute inset-0">
            {project.images?.[0] ? (
              <>
                <Image
                  src={project.images[0]} // Using the first image as the hero
                  alt={project.title}
                  fill
                  className="object-cover scale-105 brightness-[0.4]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#023E8A]/20 to-[#673AB7]/20 flex items-center justify-center p-12">
                <span className="text-sm md:text-xl font-black uppercase tracking-[0.3em] text-white/40 text-center animate-pulse max-w-2xl leading-relaxed">
                  working on design will update them soon
                </span>
              </div>
            )}
          </motion.div>

          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-12 md:pb-20">
            <Link 
              href="/projects/" 
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-all mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Showcase
            </Link>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4">
                {project.title}
              </h1>
              <div className="flex items-center gap-3 text-sm font-mono text-[#023E8A] uppercase tracking-widest">
                <span className="px-3 py-1 border border-[#023E8A]/30 rounded-lg bg-[#023E8A]/5">
                  {project.techStack[0]}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-gray-500">Project Overview</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- MAIN CONTENT WRAPPER --- */}
        <div className="container mx-auto max-w-6xl px-6 py-20">
          
          {/* 1. INTERFACE EXPLORATION (Adaptive Swipeable Cards) */}
          <section className="mb-24">
            <div className="flex flex-col gap-2 mb-10">
              <h2 className="text-2xl font-bold tracking-tight">Interface Exploration</h2>
              <div className="h-1 w-12 bg-[#023E8A] rounded-full" />
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] p-4 md:p-12 shadow-2xl relative overflow-hidden group">
              {/* Subtle background glow to make mockups pop */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#023E8A]/5 via-transparent to-transparent pointer-events-none" />

              <Carousel className="w-full">
                <CarouselContent className="items-center">
                  {project.images?.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <div className="flex justify-center">
                        <Image
                          src={img}
                          alt={`Screen View ${idx + 1}`}
                          width={1400}
                          height={1000}
                          className="w-full h-auto object-contain max-h-[75vh] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Navigation Arrows: Absolute positioned for the "Proper" look */}
                <div className="hidden md:block">
                  <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white text-black border-none w-12 h-12 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white text-black border-none w-12 h-12 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Carousel>
            </div>
          </section>

          {/* 2. STORY & TECH STACK GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Problem, Solution, Impact */}
            <div className="lg:col-span-8 space-y-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <HelpCircle className="w-5 h-5 text-[#E33C3C]" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">The Challenge</h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {project.problem}
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <Lightbulb className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">The Solution</h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {project.solution}
                  </p>
                </section>
              </div>

              {/* Impact Section: Highlighted Card */}
              <section className="bg-gradient-to-br from-white/5 to-transparent p-10 rounded-[2rem] border border-white/10 relative overflow-hidden">
                <TrendingUp className="w-10 h-10 text-[#28A744] mb-6" />
                <h3 className="text-3xl font-bold mb-4">Results & Impact</h3>
                <p className="text-gray-400 text-xl leading-relaxed relative z-10">
                  {project.impact}
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#023E8A]/10 blur-[80px]" />
              </section>
            </div>

            {/* Right Column: Tech & CTA */}
            <aside className="lg:col-span-4 sticky top-10 space-y-10">
              <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] md:text-xs font-medium text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full py-5 bg-white text-black rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/5"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}