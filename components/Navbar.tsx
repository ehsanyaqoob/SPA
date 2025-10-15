"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const navItems = [
  { id: "01", name: "Home", href: "#home" },
  { id: "02", name: "About", href: "#about" },
  { id: "03", name: "Projects", href: "#projects" },
  { id: "04", name: "Experience", href: "#experience" },
  { id: "05", name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();

  const bgLight = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]);
  const bgDark = useTransform(scrollY, [0, 100], ["rgba(17,24,39,0)", "rgba(17,24,39,0.95)"]);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
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
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <>
      <motion.nav
        style={{ backgroundColor: theme === "dark" ? bgDark : bgLight }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200/10 dark:border-gray-700/10"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#home");
              }}
              className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >

              {/* logo path src attribute mein add karna hai public folder mein file rakna hai */}
              <img src="/spa2.png" alt="Logo" className="w-10 h-10" />
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                  className={`relative font-medium transition-colors flex items-center gap-2 text-sm tracking-wide ${
                    activeSection === item.href.substring(1)
                      ? "text-blue-600 dark:text-cyan-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                  }`}
                >
                  <span className="text-xs font-mono text-gray-400">{item.id}.</span>
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 md:hidden bg-white dark:bg-gray-900 pt-20"
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                  className={`flex items-center gap-3 text-xl font-semibold ${
                    activeSection === item.href.substring(1)
                      ? "text-blue-600 dark:text-cyan-400"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <span className="text-sm font-mono text-gray-400">{item.id}.</span>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
