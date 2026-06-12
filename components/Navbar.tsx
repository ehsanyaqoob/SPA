"use client";

import { Menu, X, Home, User, Briefcase, Mail, Code2, Layers, Terminal as TerminalIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import TerminalOverlay from "./TerminalOverlay";

const navItems = [
  { id: "01", name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
  { id: "02", name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
  { id: "03", name: "Skills", href: "#skills", icon: <Layers className="w-4 h-4" /> },
  { id: "04", name: "Projects", href: "#projects", icon: <Code2 className="w-4 h-4" /> },
  { id: "05", name: "Experience", href: "#experience", icon: <Briefcase className="w-4 h-4" /> },
  { id: "06", name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className={`flex items-center gap-1.5 p-1.5 px-2 md:px-3 rounded-2xl md:rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] transition-all pointer-events-auto`}
      >
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold tracking-tight transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? "text-white bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {activeSection === item.href.substring(1) && (
                 <span className="text-[#023E8A]">{item.icon}</span>
              )}
              {item.name}
            </a>
          ))}
          <div className="w-px h-5 bg-white/10 mx-2" />
          <button
            onClick={() => setIsTerminalOpen(true)}
            className="p-2 rounded-full text-gray-500 hover:text-green-400 hover:bg-white/10 transition-colors"
            aria-label="Open Terminal"
          >
            <TerminalIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center justify-between w-[240px] px-2">
            <span className="text-white text-xs font-black uppercase tracking-widest bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">EY Portfolio</span>
            <div className="flex items-center gap-1">
                <button
                    onClick={() => setIsTerminalOpen(true)}
                    className="p-2 rounded-full text-green-500/80 hover:text-green-400 transition-colors"
                >
                    <TerminalIcon className="w-4 h-4" />
                </button>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-full text-white/50 hover:text-white transition-colors"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    className="absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:hidden shadow-2xl"
                >
                    <div className="grid grid-cols-2 gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleClick(item.href);
                                }}
                                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${
                                    activeSection === item.href.substring(1)
                                        ? "bg-white/10 border-white/20 text-white"
                                        : "bg-white/5 border-transparent text-gray-500"
                                }`}
                            >
                                <div className={activeSection === item.href.substring(1) ? "text-[#023E8A]" : "text-gray-600"}>
                                    {item.icon}
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-widest">{item.name}</span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </motion.nav>
      <TerminalOverlay isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}
