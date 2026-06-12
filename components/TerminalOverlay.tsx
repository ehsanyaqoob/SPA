"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

type Command = {
  cmd: string;
  output: React.ReactNode;
};

export default function TerminalOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [history, setHistory] = useState<Command[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      if (history.length === 0) {
        setHistory([
          {
            cmd: "",
            output: (
              <div className="text-gray-400 mt-2">
                Welcome to EhsanOS v1.0.0. <br />
                Type <span className="text-blue-400 font-bold">help</span> to see available commands.
              </div>
            ),
          },
        ]);
      }
    }
  }, [isOpen, history.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (cmd === "exit") {
      onClose();
      return;
    }

    let output: React.ReactNode = <div className="text-red-400">Command not found: {cmd}. Type 'help' for a list of commands.</div>;

    if (cmd === "help") {
      output = (
        <div className="text-gray-300 space-y-2 mt-2">
          <p><span className="text-blue-400 font-bold w-32 inline-block">whoami</span> - Display personal information</p>
          <p><span className="text-blue-400 font-bold w-32 inline-block">cat skills.txt</span> - List technical expertise</p>
          <p><span className="text-blue-400 font-bold w-32 inline-block">contact</span> - Get in touch</p>
          <p><span className="text-blue-400 font-bold w-32 inline-block">clear</span> - Clear the terminal</p>
          <p><span className="text-blue-400 font-bold w-32 inline-block">exit</span> - Close the terminal</p>
        </div>
      );
    } else if (cmd === "whoami") {
      output = <div className="text-gray-300 mt-2">Ehsan Yaqoob — Mobile App Developer (Flutter & iOS). Building production-ready applications that real people use daily.</div>;
    } else if (cmd === "skills" || cmd === "cat skills.txt") {
      output = <div className="text-gray-300 mt-2 leading-relaxed">► Core: Flutter, Dart, Swift (iOS)<br/>► State: Riverpod, Bloc, GetX, Provider<br/>► Backend: Firebase, Supabase, SwiftData, REST APIs<br/>► Ops: CI/CD, GitHub Actions, Clean Architecture</div>;
    } else if (cmd === "contact") {
      output = <div className="text-gray-300 mt-2">Email: <a href="mailto:ehsanyaqoob07@gmail.com" className="text-blue-400 hover:underline">ehsanyaqoob07@gmail.com</a><br/>GitHub: <a href="https://github.com/ehsanyaqoob" target="_blank" className="text-blue-400 hover:underline">github.com/ehsanyaqoob</a></div>;
    } else if (cmd === "sudo" || cmd.startsWith("sudo ")) {
      output = <div className="text-red-400 mt-2">Nice try. This incident will be reported.</div>;
    }

    setHistory((prev) => [...prev, { cmd, output }]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl h-[60vh] sm:h-[500px] bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Header */}
            <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between shrink-0">
              <div className="flex gap-2">
                <div 
                  className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500 transition-colors" 
                  onClick={(e) => { e.stopPropagation(); onClose(); }} 
                  title="Close Terminal"
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-gray-500 text-xs flex items-center gap-2">
                <TerminalIcon className="w-3 h-3" /> visitor@ehsanyaqoob:~
              </div>
              <div className="flex items-center">
                <button 
                  onClick={(e) => { e.stopPropagation(); onClose(); }}
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-hide">
              {history.map((item, i) => (
                <div key={i} className="space-y-1">
                  {item.cmd && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-green-400">visitor@ehsanyaqoob</span>
                      <span className="text-blue-400">~/portfolio</span>
                      <span className="text-gray-500">$</span>
                      <span className="text-white">{item.cmd}</span>
                    </div>
                  )}
                  <div>{item.output}</div>
                </div>
              ))}
              
              {/* Active Input Line */}
              <form onSubmit={handleCommand} className="flex flex-wrap sm:flex-nowrap items-center gap-2 text-gray-300 pt-2">
                <div className="flex gap-2 shrink-0">
                  <span className="text-green-400">visitor@ehsanyaqoob</span>
                  <span className="text-blue-400">~/portfolio</span>
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 min-w-[200px] bg-transparent outline-none text-white font-mono caret-blue-400"
                  autoComplete="off"
                  spellCheck="false"
                  autoFocus
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
