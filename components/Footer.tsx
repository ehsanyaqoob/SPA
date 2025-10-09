"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "GitHub", icon: Github, href: "https://github.com/ehsanyaqoob" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/ehsany" },
    { name: "Email", icon: Mail, href: "mailto:ehsanyaqoob@gmail.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center space-y-6">
        {/* Name + Role */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Ehsan Yaqoob</h3>
          <p className="text-sm">
          App Developer | Android & iOS | UI/UX Focused
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socials.map(({ name, href, icon: Icon }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              className="p-2 rounded-md bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-gray-300 hover:text-white transition-all duration-300"
              aria-label={name}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Bottom Line */}
        <p className="text-xs text-gray-500">
          © {currentYear} Ehsan Yaqoob — Built with Next.js
        </p>
      </div>
    </footer>
  );
}
