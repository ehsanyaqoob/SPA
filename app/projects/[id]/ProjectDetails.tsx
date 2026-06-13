"use client";

import { Project } from "@/data/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ArrowLeft, TrendingUp, HelpCircle, Lightbulb, ExternalLink, Cpu, CheckCircle2, Clock, User } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";

export default function ProjectDetails({ project }: { project: Project }) {
  const { toast } = useToast();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleComingSoon = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Coming Soon!",
      description: "Shipping to store, will update soon!",
    });
  };

  return (
    <>
      <main ref={containerRef} className="min-h-screen bg-transparent text-white selection:bg-blue-500/30 pb-20">
        
        {/* --- TOP LEVEL VIEW (THE BIG BANNER) --- */}
        <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden border-b border-white/5">
          <motion.div style={{ y, opacity }} className="absolute inset-0">
            {project.images?.[0] ? (
              <>
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  quality={100}
                  className="object-cover scale-105 opacity-60"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              </>
            ) : (
              <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center p-12">
                <span className="text-sm md:text-xl font-bold uppercase tracking-widest text-white/20 text-center max-w-2xl">
                  Preview Coming Soon
                </span>
              </div>
            )}
          </motion.div>

          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-12 md:pb-20">
            <Link 
              href="/projects/" 
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Archive
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-blue-400 uppercase tracking-widest">
                <span className="px-4 py-1.5 border border-blue-500/30 rounded-lg bg-blue-500/10 font-bold">
                  {project.techStack[0]}
                </span>
                <span className="text-white/20 hidden md:inline">•</span>
                <span className="text-gray-400 hidden md:inline">Engineering Deep Dive</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- MAIN CONTENT WRAPPER --- */}
        <div className="container mx-auto max-w-6xl px-6 pt-16 md:pt-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: The Narrative */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Challenge */}
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-500/10 rounded-2xl border border-red-500/20">
                    <HelpCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">The Challenge</h3>
                </div>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                  {project.problem}
                </p>
              </section>

              {/* Solution */}
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                    <Lightbulb className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">The Solution</h3>
                </div>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                  {project.solution}
                </p>
              </section>

              {/* Architecture Deep Dive */}
              {project.architecture && (
                <section>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                      <Cpu className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Architecture & Engineering</h3>
                  </div>
                  <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </section>
              )}

              {/* Key Features */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <section>
                  <h3 className="text-2xl font-bold tracking-tight mb-8">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Impact Section: Highlighted Card */}
              <section className="bg-white/[0.03] p-8 md:p-12 rounded-[2rem] border border-white/10 relative overflow-hidden group hover:border-green-500/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-3 bg-green-500/10 rounded-2xl border border-green-500/20 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Results & Impact</h3>
                </div>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed relative z-10">
                  {project.impact}
                </p>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full group-hover:bg-green-500/20 transition-all duration-700" />
              </section>
              
              {/* Interface Exploration Carousel (Moved below narrative) */}
              {project.images && project.images.length > 1 && (
                <section className="pt-10">
                  <div className="flex flex-col gap-3 mb-12 items-center text-center">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">Interface Showcase</h2>
                    <div className="h-1 w-16 bg-blue-500 rounded-full" />
                  </div>

                  <div className="relative group w-full">
                    <Carousel className="w-full">
                      <CarouselContent className="items-center">
                        {project.images.map((img, idx) => (
                          <CarouselItem key={idx}>
                            <div className="flex justify-center px-4 md:px-12">
                              <Image
                                src={img}
                                alt={`Screen View ${idx + 1}`}
                                width={1400}
                                height={1000}
                                quality={100}
                                className="w-full h-auto object-contain max-h-[70vh] drop-shadow-2xl rounded-3xl border border-white/5"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      
                      {/* Navigation Arrows */}
                      <div className="hidden md:block">
                        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/10 text-white border-white/20 hover:bg-white hover:text-black w-14 h-14 backdrop-blur-md shadow-2xl transition-all" />
                        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/10 text-white border-white/20 hover:bg-white hover:text-black w-14 h-14 backdrop-blur-md shadow-2xl transition-all" />
                      </div>
                    </Carousel>
                  </div>
                </section>
              )}

            </div>

            {/* Right Column: Meta, Links & Tech */}
            <aside className="lg:col-span-4 sticky top-10 space-y-8">
              
              {/* Project Meta Data */}
              <div className="p-6 md:p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Project Meta</h3>
                
                {project.role && (
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Role</p>
                      <p className="text-sm font-semibold text-white">{project.role}</p>
                    </div>
                  </div>
                )}

                {project.timeline && (
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                      <Clock className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Timeline</p>
                      <p className="text-sm font-semibold text-white">{project.timeline}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions Panel */}
              <div className="p-6 md:p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Live Links</h3>
                
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target={project.appStoreUrl === "#" ? undefined : "_blank"}
                    rel={project.appStoreUrl === "#" ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (project.appStoreUrl === "#") handleComingSoon(e, "App Store");
                    }}
                    className="flex items-center justify-between w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-white group-hover:fill-blue-400 transition-colors"><path d="M14.307 2.001c.883 0 1.954.516 2.502 1.155.45.52.83 1.343.83 2.158 0 .108-.01.215-.02.302-1.01.04-2.112-.516-2.656-1.15-.46-.534-.84-1.332-.84-2.13 0-.083.007-.174.015-.262.083-.005.158-.005.17-.005C14.322 2.064 14.307 2.001 14.307 2.001zm3.89 10.998c-.015-2.227 1.83-3.284 1.92-3.33-1.03-1.488-2.64-1.688-3.21-1.72-1.37-.13-2.68.802-3.38.802-.7 0-1.78-.79-2.91-.77-1.49.02-2.88.85-3.64 2.15-1.55 2.66-.4 6.58 1.12 8.74.74 1.05 1.62 2.22 2.76 2.18 1.1-.04 1.54-.7 2.87-.7 1.32 0 1.72.7 2.88.68 1.19-.02 1.96-1.07 2.68-2.11.83-1.2 1.17-2.36 1.19-2.42-.02-.01-2.26-.85-2.28-3.5zm0 0"></path></svg>
                      <span className="font-semibold text-sm text-gray-200 group-hover:text-white">App Store</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                  </a>
                )}

                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target={project.playStoreUrl === "#" ? undefined : "_blank"}
                    rel={project.playStoreUrl === "#" ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (project.playStoreUrl === "#") handleComingSoon(e, "Play Store");
                    }}
                    className="flex items-center justify-between w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-green-500/30 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-white group-hover:fill-green-400 transition-colors"><path d="M3.567 21.666c-.167-.147-.267-.373-.267-.666V3c0-.293.1-.52.267-.667C3.766 2.167 4.02 2.1 4.3 2.1c.147 0 .32.04.507.133L19.46 11.2c.493.28.74.627.74 1.04 0 .413-.247.76-.74 1.04l-14.653 8.96c-.187.094-.36.147-.507.147-.28 0-.534-.067-.733-.72zM5.3 4.88v14.24L17.22 12 5.3 4.88z"></path></svg>
                      <span className="font-semibold text-sm text-gray-200 group-hover:text-white">Play Store</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-4 bg-white text-black rounded-xl hover:bg-gray-200 transition-all active:scale-95 group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5" />
                      <span className="font-bold text-sm">Source Code</span>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-50" />
                  </a>
                )}

                {!project.appStoreUrl && !project.playStoreUrl && !project.githubUrl && (
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                    <span className="text-sm text-gray-500 font-medium">Links coming soon</span>
                  </div>
                )}
              </div>

              {/* Tech Stack Panel */}
              <div className="p-6 md:p-8 rounded-[2rem] border border-white/10 bg-white/[0.02]">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-[10px] md:text-xs font-bold font-mono text-blue-400 uppercase tracking-tighter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}