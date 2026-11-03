import { Github, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";
import CopyEmailButton from "@/components/CopyEmailButton";
import ProjectForm from "@/components/ProjectForm";
import ResumeMenu from "@/components/ResumeMenu";
import { SketchArrow, SketchOval, SketchSparks } from "@/components/Sketch";
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
    <section id={sections.contact.id} className="mx-auto max-w-7xl px-5 py-20 text-center md:px-8 md:py-32">
      <h2 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        <span className="block font-light">{contactSection.headlineLight}</span>
        <span className="relative mt-2 inline-block font-semibold">
          {contactSection.headlineBold}
          <span className="text-blue-500">
            <SketchOval className="-inset-x-5 -inset-y-3 h-[calc(100%+1.5rem)] w-[calc(100%+2.5rem)]" />
          </span>
        </span>
      </h2>
      <p className="mx-auto mt-10 max-w-xl text-lg text-gray-300 md:text-xl">{contactSection.lead}</p>

      <div className="relative mx-auto mt-14 w-fit">
        <SketchSparks className="absolute -left-10 -top-8 h-10 w-10 text-violet-400 sm:-left-14 sm:h-14 sm:w-14" />
        <ProjectForm />
        <p className="absolute -bottom-16 right-0 flex items-start gap-1 whitespace-nowrap font-hand text-2xl text-blue-400 sm:-right-10">
          <SketchArrow className="h-8 w-12 -scale-x-100 rotate-[150deg]" />
          {contactSection.startNote}
        </p>
      </div>

      <div className="mt-24 flex items-center justify-center gap-1 text-muted">
        <span className="hidden whitespace-nowrap sm:inline">{contactSection.directLabel}</span>
        <a href={contact.mailto} className="truncate font-medium text-gray-300 hover:text-white hover:underline">
          {contact.email}
        </a>
        <CopyEmailButton />
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-left">
        <ResumeMenu className={pillClass} />
        {socials.map(({ name, href, Icon }) => (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={pillClass}>
            <Icon className="h-4 w-4" />
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}
