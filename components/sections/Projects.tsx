"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Github, ArrowRight, ChevronUp, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // show 3 by default, or all if expanded
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Building production-ready mobile applications that solve real-world problems.
            Each project showcases my expertise in Flutter development, clean architecture,
            and delivering user-centric solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col h-[480px] bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-500"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />
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
                    {project.githubUrl ? (
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
                    ) : (
                      <div 
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/5 text-gray-600 rounded-xl border border-white/5 cursor-help"
                        title="working on design will update them soon"
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

        {/* View More / Less Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
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
        </motion.div>

        {/* GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-8"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
