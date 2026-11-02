"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import {
  availability,
  contact,
  experience,
  person,
  platformSkills,
  projects,
  resumes,
  sharedSkills,
} from "@/site.config";

type Entry = { cmd: string; output: React.ReactNode };

const skillGroups = [
  ...platformSkills.map(({ title, rows }) => ({ title, items: rows.flatMap((row) => row.items) })),
  ...sharedSkills,
];
const skillCount = new Set(skillGroups.flatMap((group) => group.items)).size;
const liveApps = projects.filter((project) => project.status === "Live");
const appStoreCount = projects.filter((project) => project.appStoreUrl).length;
const playStoreCount = projects.filter((project) => project.playStoreUrl).length;

const resumeKey = (label: string) => label.split(" ")[0].toLowerCase();

const quickCommands = ["neofetch", "ls", "git log", "flutter doctor", "hire"];

const allCommands = [
  "help",
  "whoami",
  "neofetch",
  "ls",
  ...projects.map((project) => `open ${project.id}`),
  "skills",
  "git log",
  "flutter doctor",
  "contact",
  "hire",
  ...resumes.map((resume) => `resume ${resumeKey(resume.label)}`),
  "clear",
  "exit",
];

const helpRows = [
  ["neofetch", "who is this, at a glance"],
  ["ls", "list my apps"],
  ["open <app>", "read an app's case study"],
  ["skills", "what I build with"],
  ["git log", "my history, as commits"],
  ["flutter doctor", "run a health check on me"],
  ["hire", "email me"],
  ["resume <ios|flutter>", "download a resume"],
  ["clear / exit", "tidy up or leave"],
];

// A short fake commit hash, stable for each line.
function commitHash(text: string) {
  let hash = 7;
  for (const char of text) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return hash.toString(16).padStart(7, "0").slice(0, 7);
}

function Neofetch() {
  const facts = [
    ["Role", person.role],
    ["Summary", person.summary],
    ["Apps", `${liveApps.length} live: ${liveApps.map((app) => app.title).join(", ")}`],
    ["Packages", `${skillCount} skills`],
    ["Location", person.location],
    ["Status", availability.open ? availability.label : "Not available right now"],
  ];
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
      <pre aria-hidden="true" className="leading-tight text-blue-400">{`╭───────────╮
│   ╺━━━╸   │
│           │
│  ▐█▌ ▐█▌  │
│  ▐█▌ ▐█▌  │
│           │
│  ▐█▌ ▐█▌  │
│  ▐█▌ ▐█▌  │
│           │
│    ───    │
╰───────────╯`}</pre>
      <div className="min-w-0">
        <p className="font-bold text-green-400">{person.name}</p>
        <p className="text-gray-600">───────────────</p>
        {facts.map(([label, value]) => (
          <p key={label}>
            <span className="font-bold text-blue-400">{label}:</span> {value}
          </p>
        ))}
      </div>
    </div>
  );
}

function FlutterDoctor() {
  const checks = [
    `Flutter (${platformSkills[1].rows.find((row) => row.label === "State")?.items.join(", ")})`,
    `Xcode: ${appStoreCount} apps live on the App Store`,
    `Android toolchain: ${playStoreCount} app live on the Play Store`,
    "Offline-first sync: works without network",
    availability.open ? "Connected device: available for new projects" : "Connected device: busy",
  ];
  return (
    <>
      <p>Doctor summary:</p>
      {checks.map((check) => (
        <p key={check}>
          <span className="text-green-400">[✓]</span> {check}
        </p>
      ))}
      <p className="mt-2 text-green-400">• No issues found! Run hire to continue.</p>
    </>
  );
}

const staticOutputs: Record<string, React.ReactNode> = {
  help: (
    <div className="grid gap-x-6 gap-y-1 sm:grid-cols-[auto_1fr]">
      {helpRows.map(([name, description]) => (
        <p key={name} className="contents">
          <span className="text-blue-400">{name}</span>
          <span className="mb-1 text-gray-500 sm:mb-0">{description}</span>
        </p>
      ))}
    </div>
  ),
  whoami: `${person.name}, ${person.role}. ${person.summary}`,
  neofetch: <Neofetch />,
  ls: (
    <div className="grid gap-x-6 gap-y-1 sm:grid-cols-[auto_auto_1fr]">
      {projects.map((project) => (
        <p key={project.id} className="contents">
          <span className="font-bold" style={{ color: project.brand }}>{project.id}/</span>
          <span>{project.platform}</span>
          <span className="mb-1 text-gray-500 sm:mb-0">{project.status}</span>
        </p>
      ))}
      <p className="mt-2 text-gray-500 sm:col-span-3">Try: open {projects[0].id}</p>
    </div>
  ),
  skills: skillGroups.map(({ title, items }) => (
    <p key={title}>
      <span className="font-bold text-blue-400">{title}:</span> {items.join(", ")}
    </p>
  )),
  "git log": [
    ...projects.map((project) => `feat(${project.id}): ${project.title}, ${project.status.toLowerCase()} (${project.timeline})`),
    ...experience.map((job) => `career: ${job.title} at ${job.place} (${job.date})`),
  ].map((line) => (
    <p key={line}>
      <span className="text-yellow-400">{commitHash(line)}</span> {line}
    </p>
  )),
  "flutter doctor": <FlutterDoctor />,
  contact: (
    <>
      <p>Email: <a href={contact.mailto} className="text-blue-400 hover:underline">{contact.email}</a></p>
      <p>GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{contact.github.replace("https://", "")}</a></p>
      <p>LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{contact.linkedin.replace("https://www.", "")}</a></p>
      <p>X: <a href={contact.x} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{contact.x.replace("https://", "")}</a></p>
    </>
  ),
};

const welcome: Entry = {
  cmd: "",
  output: (
    <>
      <p className="text-gray-500">Last login: {new Date().toDateString()} on portfolio</p>
      <p>Welcome. Type <span className="text-blue-400">help</span>, or tap a command below.</p>
    </>
  ),
};

const prompt = (
  <span className="shrink-0">
    <span className="text-green-400">visitor@ehsan</span> <span className="text-blue-400">~</span>{" "}
    <span className="text-gray-500">$</span>
  </span>
);

export default function TerminalOverlay({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [entries, setEntries] = useState<Entry[]>([welcome]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [entries]);

  const print = (cmd: string, output: React.ReactNode) => {
    setEntries((previous) => [...previous, { cmd, output }]);
  };

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase().replace(/\s+/g, " ");
    setInput("");
    setHistoryIndex(null);
    if (!cmd) return;
    setCommandHistory((previous) => [...previous, cmd]);

    if (cmd === "clear") return setEntries([]);
    if (cmd === "exit") return onClose();

    if (cmd === "hire") {
      print(cmd, <span className="text-green-400">Great choice. Opening your mail app...</span>);
      window.location.href = contact.mailto;
      return;
    }

    if (cmd.startsWith("open")) {
      const id = cmd.slice(4).trim();
      const project = projects.find((p) => p.id === id || p.title.toLowerCase() === id);
      if (!project) {
        print(cmd, <span className="text-red-400">Usage: open &lt;app&gt;. Try: {projects.map((p) => p.id).join(", ")}</span>);
        return;
      }
      router.push(`/projects/${project.id}/`);
      onClose();
      return;
    }

    if (cmd.startsWith("resume")) {
      const resume = resumes.find((r) => resumeKey(r.label) === cmd.slice(6).trim());
      if (!resume) {
        print(cmd, <span className="text-red-400">Usage: resume &lt;{resumes.map((r) => resumeKey(r.label)).join("|")}&gt;</span>);
        return;
      }
      const link = document.createElement("a");
      link.href = resume.href;
      link.download = resume.fileName;
      link.click();
      print(cmd, <span className="text-green-400">Downloading {resume.fileName}...</span>);
      return;
    }

    if (cmd === "sudo hire ehsan") {
      print(cmd, <span className="text-green-400">Permission granted. Excellent decision. Opening your mail app...</span>);
      window.location.href = contact.mailto;
      return;
    }
    if (cmd.startsWith("sudo")) {
      print(cmd, <span className="text-red-400">Nice try. This incident will be reported. (Psst: sudo hire ehsan)</span>);
      return;
    }

    print(cmd, staticOutputs[cmd] ?? <span className="text-red-400">Command not found: {cmd}. Type help to see what I can do.</span>);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const typed = input.trimStart().toLowerCase();
      const matches = allCommands.filter((command) => command.startsWith(typed));
      if (typed && matches.length === 1) {
        setInput(matches[0]);
      } else if (typed && matches.length > 1) {
        print(typed, <span className="text-gray-400">{matches.join("   ")}</span>);
      }
    } else if (e.key === "ArrowUp" && commandHistory.length > 0) {
      e.preventDefault();
      const next = historyIndex === null ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setInput(commandHistory[next]);
    } else if (e.key === "ArrowDown" && historyIndex !== null) {
      e.preventDefault();
      const next = historyIndex + 1;
      setHistoryIndex(next < commandHistory.length ? next : null);
      setInput(next < commandHistory.length ? commandHistory[next] : "");
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setEntries([]);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Terminal"
        onClick={() => inputRef.current?.focus()}
        className="relative flex h-[75vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]/95 font-mono text-xs shadow-2xl shadow-blue-500/10 sm:h-[560px] sm:text-sm"
      >
        <div className="flex h-11 shrink-0 items-center justify-between border-b border-white/10 bg-white/5 px-4">
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-xs text-gray-400">visitor@ehsan: ~</span>
          <button type="button" onClick={onClose} aria-label="Close terminal" className="text-gray-400 hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto p-4 text-gray-300 sm:p-6">
          {entries.map((entry, index) => (
            <div key={index} className="space-y-1">
              {entry.cmd && (
                <div className="flex flex-wrap gap-x-2">
                  {prompt}
                  <span className="text-white">{entry.cmd}</span>
                </div>
              )}
              <div className="break-words leading-relaxed">{entry.output}</div>
            </div>
          ))}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              run(input);
            }}
            className="flex items-center gap-2"
          >
            {prompt}
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Terminal command"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              className="min-w-0 flex-1 bg-transparent text-base text-white caret-green-400 outline-none sm:text-sm"
            />
          </form>
          <div ref={bottomRef} />
        </div>

        <div className="flex shrink-0 gap-2 overflow-x-auto border-t border-white/10 bg-white/[0.03] px-4 py-2.5">
          {quickCommands.map((command) => (
            <button
              key={command}
              type="button"
              onClick={() => run(command)}
              className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-gray-300 transition-colors hover:border-green-400 hover:text-green-400"
            >
              {command}
            </button>
          ))}
          <span className="ml-auto hidden shrink-0 self-center text-gray-600 sm:inline">tab ↹ · ↑↓ · esc</span>
        </div>
      </div>
    </div>
  );
}
