"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white py-20 px-6">
      <div className="container mx-auto">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-center md:text-left">
            All Projects
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl text-center md:text-left">
            A comprehensive collection of my work, ranging from enterprise-grade mobile applications 
            to innovative AI-driven solutions and AR experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-medium rounded-full">
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                <Link
                  href={`/projects/${project.id}/`}
                  className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Details
                </Link>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
