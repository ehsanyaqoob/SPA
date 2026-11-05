"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { resumeAction, resumes } from "@/site.config";

/** Pass children (an icon) to replace the text trigger. */
export default function ResumeMenu({ className, children }: { className?: string; children?: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handlePointer = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={children ? resumeAction : undefined}
        title={children ? resumeAction : undefined}
        className={`inline-flex items-center gap-2 ${className}`}
      >
        {children ?? (
          <>
            {resumeAction}
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </>
        )}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-30 mt-2 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#111114] p-1.5 shadow-2xl">
          {resumes.map(({ label, href, fileName }) => (
            <a
              key={href}
              href={href}
              download={fileName}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/10"
            >
              {label}
              <Download className="h-4 w-4 text-muted" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
