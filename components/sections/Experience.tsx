"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

// Technology links mapping
const techLinks: { [key: string]: string } = {
  "Flutter": "https://flutter.dev",
  "Dart": "https://dart.dev",
  "Firebase": "https://firebase.google.com",
  "REST APIs": "https://restfulapi.net",
  "GetX": "https://pub.dev/packages/get",
  "CI/CD": "https://about.gitlab.com/topics/ci-cd/",
  "Git": "https://git-scm.com",
  "GitHub Actions": "https://github.com/features/actions",
  "Agile": "https://agilemanifesto.org",
  "UI/UX": "https://www.interaction-design.org/literature/topics/ux-design",
  "Widgets": "https://flutter.dev/docs/development/ui/widgets",
  "Prototyping": "https://www.figma.com/prototyping/",
};

export default function Experience() {
  const handleTechClick = (tech: string) => {
    const link = techLinks[tech];
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transform md:-translate-x-1/2 z-10 mt-6"></div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`ml-16 md:ml-0 flex-1 ${
                    index % 2 === 0 
                      ? "md:mr-auto md:pr-12" 
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-blue-600 rounded-lg">
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => {
                        const hasLink = techLinks[tech];
                        return (
                          <span
                            key={tech}
                            onClick={() => handleTechClick(tech)}
                            className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 flex items-center gap-1 ${
                              hasLink
                                ? "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-600"
                            }`}
                          >
                            {tech}
                            {hasLink && <ExternalLink className="w-3 h-3" />}
                          </span>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}