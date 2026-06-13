"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Github, ArrowLeft, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

export default function AllProjectsPage() {
  const { toast } = useToast();

  const handleComingSoon = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Coming Soon!",
      description: "Shipping to store, will update soon!",
    });
  };

  return (
    <main className="min-h-screen bg-transparent py-20 px-6">
      <div className="container mx-auto">
        {/* Back Link */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors group text-sm font-medium uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6">
            The Archive
          </h1>
          <p className="text-gray-500 text-base md:text-xl max-w-2xl font-medium tracking-wide">
            Every production app, tool, and experiment I&apos;ve shipped.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    quality={100}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity p-6">
                    <Eye className="w-10 h-10 text-gray-500 mb-3" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 text-center">Preview Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Bottom 50% - Content */}
              <div className="h-1/2 p-6 flex flex-col relative z-20">
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
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 text-gray-400 text-[10px] font-bold rounded-md uppercase tracking-tighter">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
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
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/5 text-white rounded-xl border border-white/10 hover:bg-white/10 transition-all hover:text-blue-400 z-30"
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
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/5 text-white rounded-xl border border-white/10 hover:bg-white/10 transition-all hover:text-blue-400 z-30"
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
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/5 text-white rounded-xl border border-white/10 hover:bg-white/10 transition-all hover:text-blue-400 z-30"
                        title="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {!project.githubUrl && !project.appStoreUrl && !project.playStoreUrl && (
                      <div 
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/5 text-gray-600 rounded-xl border border-white/5 cursor-help z-30"
                        title="Links coming soon"
                      >
                        <Github className="w-4 h-4 opacity-30" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
