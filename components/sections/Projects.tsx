"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Github, ArrowRight, ChevronUp, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

export default function Projects() {
  const { toast } = useToast();
  const [showAll, setShowAll] = useState(false);

  const handleComingSoon = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Coming Soon!",
      description: "Shipping to store, will update soon!",
    });
  };

  // show 3 by default, or all if expanded
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-12 md:py-16 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Building production-ready mobile applications that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex flex-col h-[480px] bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-500"
            >
              {/* Overlay Link for the entire card (excluding buttons) */}
              <Link
                href={`/projects/${project.id}/`}
                className="absolute inset-0 z-10"
                aria-label={project.title}
              />

              {/* Top 50% - Image/Banner */}
              <div className="h-1/2 relative overflow-hidden bg-white/5 border-b border-white/5">
                {project.images && project.images.length > 0 && project.images[0] !== "" ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity p-6">
                    <Eye className="w-12 h-12 text-blue-400/50 mb-4" />
                    <span className="text-[10px] uppercase tracking-widest font-black text-center leading-relaxed">working on design<br/>will update them soon</span>
                  </div>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>

              {/* Bottom 50% - Content */}
              <div className="h-1/2 p-6 flex flex-col">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded-md border border-blue-500/20 uppercase tracking-tighter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 relative z-20">
                    <Link
                      href={`/projects/${project.id}/`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-xs hover:shadow-xl hover:shadow-blue-500/20 active:scale-95 transition-all duration-300 group"
                    >
                      Details
                    </Link>
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target={project.appStoreUrl === "#" ? undefined : "_blank"}
                        rel={project.appStoreUrl === "#" ? undefined : "noopener noreferrer"}
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/5 text-white rounded-xl border border-white/10 hover:bg-white/10 transition-all hover:text-blue-400"
                        title="App Store"
                        onClick={(e) => {
                          if (project.appStoreUrl === "#") {
                            handleComingSoon(e, "App Store");
                          } else {
                            e.stopPropagation();
                          }
                        }}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M14.307 2.001c.883 0 1.954.516 2.502 1.155.45.52.83 1.343.83 2.158 0 .108-.01.215-.02.302-1.01.04-2.112-.516-2.656-1.15-.46-.534-.84-1.332-.84-2.13 0-.083.007-.174.015-.262.083-.005.158-.005.17-.005C14.322 2.064 14.307 2.001 14.307 2.001zm3.89 10.998c-.015-2.227 1.83-3.284 1.92-3.33-1.03-1.488-2.64-1.688-3.21-1.72-1.37-.13-2.68.802-3.38.802-.7 0-1.78-.79-2.91-.77-1.49.02-2.88.85-3.64 2.15-1.55 2.66-.4 6.58 1.12 8.74.74 1.05 1.62 2.22 2.76 2.18 1.1-.04 1.54-.7 2.87-.7 1.32 0 1.72.7 2.88.68 1.19-.02 1.96-1.07 2.68-2.11.83-1.2 1.17-2.36 1.19-2.42-.02-.01-2.26-.85-2.28-3.5zm0 0"></path></svg>
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target={project.playStoreUrl === "#" ? undefined : "_blank"}
                        rel={project.playStoreUrl === "#" ? undefined : "noopener noreferrer"}
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/5 text-white rounded-xl border border-white/10 hover:bg-white/10 transition-all hover:text-blue-400"
                        title="Play Store"
                        onClick={(e) => {
                          if (project.playStoreUrl === "#") {
                            handleComingSoon(e, "Play Store");
                          } else {
                            e.stopPropagation();
                          }
                        }}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M3.567 21.666c-.167-.147-.267-.373-.267-.666V3c0-.293.1-.52.267-.667C3.766 2.167 4.02 2.1 4.3 2.1c.147 0 .32.04.507.133L19.46 11.2c.493.28.74.627.74 1.04 0 .413-.247.76-.74 1.04l-14.653 8.96c-.187.094-.36.147-.507.147-.28 0-.534-.067-.733-.72zM5.3 4.88v14.24L17.22 12 5.3 4.88z"></path></svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/5 text-white rounded-xl border border-white/10 hover:bg-white/10 transition-all hover:text-blue-400"
                        title="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {!project.githubUrl && !project.appStoreUrl && !project.playStoreUrl && (
                      <div 
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/5 text-gray-600 rounded-xl border border-white/5 cursor-help"
                        title="Links coming soon"
                      >
                        <Github className="w-4 h-4 opacity-30" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Less Button */}
        <div className="text-center mt-12">
          {!showAll && (
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-xl shadow-blue-600/20 active:scale-95 transition-all duration-300 transform group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all active:scale-95"
            >
              Show Less <ChevronUp className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-8">
          <a
            href="https://github.com/ehsanyaqoob"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            Explore More on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
