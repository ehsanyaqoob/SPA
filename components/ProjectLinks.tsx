import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/site.config";

function AppStoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}><path d="M14.307 2.001c.883 0 1.954.516 2.502 1.155.45.52.83 1.343.83 2.158 0 .108-.01.215-.02.302-1.01.04-2.112-.516-2.656-1.15-.46-.534-.84-1.332-.84-2.13 0-.083.007-.174.015-.262.083-.005.158-.005.17-.005C14.322 2.064 14.307 2.001 14.307 2.001zm3.89 10.998c-.015-2.227 1.83-3.284 1.92-3.33-1.03-1.488-2.64-1.688-3.21-1.72-1.37-.13-2.68.802-3.38.802-.7 0-1.78-.79-2.91-.77-1.49.02-2.88.85-3.64 2.15-1.55 2.66-.4 6.58 1.12 8.74.74 1.05 1.62 2.22 2.76 2.18 1.1-.04 1.54-.7 2.87-.7 1.32 0 1.72.7 2.88.68 1.19-.02 1.96-1.07 2.68-2.11.83-1.2 1.17-2.36 1.19-2.42-.02-.01-2.26-.85-2.28-3.5zm0 0"></path></svg>
  );
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}><path d="M5 2.6c-.5.3-.8.8-.8 1.5v15.8c0 .7.3 1.2.8 1.5L19.6 13.3c.9-.6.9-2 0-2.6L5 2.6z"></path></svg>
  );
}

// Sits above the card's overlay link, so a store pill never opens the case study.
export default function ProjectLinks({ project }: { project: Project }) {
  const links = [
    { label: "App Store", href: project.appStoreUrl, Icon: AppStoreIcon },
    { label: "Play Store", href: project.playStoreUrl, Icon: PlayStoreIcon },
    { label: "Source code", href: project.githubUrl, Icon: Github },
  ];

  return (
    <div className="relative z-10 flex flex-wrap gap-2">
      {links.map(
        ({ label, href, Icon }) =>
          href && (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3.5 py-1.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )
      )}
    </div>
  );
}
