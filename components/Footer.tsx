"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "GitHub", icon: Github, href: "https://github.com/ehsanyaqoob" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/ehsany" },
    { name: "Email", icon: Mail, href: "mailto:ehsanyaqoob07@gmail.com" },
  ];

  return (
    <footer className="bg-transparent text-gray-400 py-12 border-t border-white/5">
      <div className="container mx-auto px-6 text-center space-y-8">
        {/* Name + Role */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Ehsan Yaqoob</h3>
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            App Developer | Android & iOS | UI/UX Focused
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socials.map(({ name, href, icon: Icon }) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label={name}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Bottom Line */}
        <p className="text-xs text-gray-600 font-mono">
          © {currentYear} EH — BUILT WITH NEXT.JS
        </p>
      </div>
    </footer>
  );
}
