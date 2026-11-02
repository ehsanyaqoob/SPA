import { Github, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";
import ContactChat from "@/components/ContactChat";
import ResumeMenu from "@/components/ResumeMenu";
import { SketchArrow, SketchOval } from "@/components/Sketch";
import { contact, contactSection, sections } from "@/site.config";

const socials = [
  { name: "LinkedIn", href: contact.linkedin, Icon: Linkedin },
  { name: "GitHub", href: contact.github, Icon: Github },
  { name: "X", href: contact.x, Icon: SiX },
];

const pillClass =
  "inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 font-semibold transition-colors hover:border-white";

export default function Contact() {
  return (
    <section id={sections.contact.id} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        {/* The ask */}
        <div>
          <h2 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block font-light">{contactSection.headlineLight}</span>
            <span className="relative mt-2 inline-block font-semibold">
              {contactSection.headlineBold}
              <span className="text-blue-500">
                <SketchOval className="-inset-x-5 -inset-y-3 h-[calc(100%+1.5rem)] w-[calc(100%+2.5rem)]" />
              </span>
            </span>
          </h2>
          <div className="mt-12 flex flex-wrap gap-3">
            <ResumeMenu className={pillClass} />
            {socials.map(({ name, href, Icon }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={pillClass}>
                <Icon className="h-4 w-4" />
                {name}
              </a>
            ))}
          </div>
          <p className="mt-8 flex items-center gap-2 font-hand text-3xl text-blue-400">
            {contactSection.formNote}
            <SketchArrow className="h-10 w-16 rotate-[70deg] lg:rotate-0" />
          </p>
        </div>

        <ContactChat />
      </div>
    </section>
  );
}
