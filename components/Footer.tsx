"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ehsanyaqoob",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ehsanyaqoob",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:ehsanyaqoob@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Ehsan Yaqoob
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Flutter Developer & UI/UX Designer specializing in creating
              beautiful, user-centric mobile and web applications.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Open to new opportunities and collaborations
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Ehsan Yaqoob. Built with
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              and Next.js
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
