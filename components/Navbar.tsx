"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Home, Layers, Mail, Menu, Route, Terminal, User, X } from "lucide-react";
import TerminalOverlay from "@/components/TerminalOverlay";
import { person, sections } from "@/site.config";

const navIcons: Record<string, React.ReactNode> = {
  home: <Home className="h-4 w-4" />,
  about: <User className="h-4 w-4" />,
  projects: <Code2 className="h-4 w-4" />,
  skills: <Layers className="h-4 w-4" />,
  process: <Route className="h-4 w-4" />,
  contact: <Mail className="h-4 w-4" />,
};

const navItems = Object.values(sections);

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>(sections.home.id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const closeTerminal = useCallback(() => setIsTerminalOpen(false), []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(sections.projects.id);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsTerminalOpen((isOpen) => !isOpen);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
        <nav className="pointer-events-auto relative w-full rounded-3xl border border-white/10 bg-black/60 p-1.5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl md:w-auto md:rounded-full">
          {/* Desktop and tablet */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map(({ id, nav }) => {
              const isActive = activeSection === id;
              return (
                <Link
                  key={id}
                  href={`/#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors lg:px-5 lg:text-base ${
                    isActive ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {isActive && <span className="text-blue-500">{navIcons[id]}</span>}
                  {nav}
                </Link>
              );
            })}
            <span className="mx-1 h-6 w-px bg-white/10" aria-hidden="true" />
            <button
              type="button"
              onClick={() => setIsTerminalOpen(true)}
              aria-label="Open terminal"
              title="Open terminal (⌘K)"
              className="rounded-full p-2.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-green-400"
            >
              <Terminal className="h-4 w-4" />
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between pl-3 md:hidden">
            <Link href="/" className="text-sm font-semibold text-white">
              {person.name}
            </Link>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsTerminalOpen(true)}
                aria-label="Open terminal"
                className="rounded-full p-2.5 text-gray-400 hover:text-green-400"
              >
                <Terminal className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                className="rounded-full p-2.5 text-white"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="grid gap-1 px-1 pb-1 pt-2 md:hidden">
              {navItems.map(({ id, nav }) => (
                <Link
                  key={id}
                  href={`/#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold ${
                    activeSection === id ? "bg-white/10 text-white" : "text-gray-400"
                  }`}
                >
                  <span className={activeSection === id ? "text-blue-500" : ""}>{navIcons[id]}</span>
                  {nav}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>

      {isTerminalOpen && <TerminalOverlay onClose={closeTerminal} />}
    </>
  );
}
