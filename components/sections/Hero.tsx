import Image from "next/image";
import { PiEnvelopeBold, PiFileTextBold, PiLinkedinLogoFill, PiXLogoBold } from "react-icons/pi";
import ResumeMenu from "@/components/ResumeMenu";
import { SketchArrow, SketchCircle, SketchSparks, SketchSwash } from "@/components/Sketch";
import { availability, contact, hero, person, sections } from "@/site.config";

const socials = [
  { name: "LinkedIn", href: contact.linkedin, Icon: PiLinkedinLogoFill },
  { name: "Email", href: contact.mailto, Icon: PiEnvelopeBold },
  { name: "X", href: contact.x, Icon: PiXLogoBold },
];

const iconClass = "block text-accent-text transition-colors hover:text-ink";

export default function Hero() {
  return (
    <section
      id={sections.home.id}
      className="mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 md:px-8 md:pt-32"
    >
      <div className="grid w-full items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-12 lg:gap-20">
        <div className="order-2 md:order-1">
          <h1 className="font-display text-6xl leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
            <span className="block font-light">{hero.greeting}</span>
            <span className="relative inline-block font-semibold">
              {person.firstName}
              <span className="text-blue-500">
                <SketchSwash className="-bottom-3 h-5 lg:-bottom-5 lg:h-7" />
              </span>
            </span>
          </h1>
          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-gray-300 lg:mt-12 lg:text-2xl lg:leading-relaxed">
            {hero.intro}
          </p>

          <div className="mt-8 flex items-center gap-8 lg:mt-10 lg:gap-10">
            <ResumeMenu className={iconClass}>
              <PiFileTextBold className="h-9 w-9 rotate-6 lg:h-10 lg:w-10" />
            </ResumeMenu>
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target={href === contact.mailto ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className={iconClass}
              >
                <Icon className="h-9 w-9 lg:h-10 lg:w-10" />
              </a>
            ))}
          </div>

          {availability.open && (
            <a
              href={contact.mailto}
              className="mt-7 inline-flex items-center gap-2.5 text-gray-300 underline-offset-4 transition-colors hover:text-white hover:underline lg:text-lg"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" aria-hidden="true" />
              {availability.label}
            </a>
          )}
        </div>

        {/* The photo, circled by hand, with a little note pointing at it */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative w-52 sm:w-64 md:w-full md:max-w-[25rem]">
            <div className="relative aspect-square overflow-hidden rounded-full">
              <Image
                src={person.photo}
                alt={person.name}
                fill
                priority
                sizes="(min-width: 768px) 400px, 256px"
                className="object-cover object-[50%_25%]"
              />
            </div>
            <SketchCircle className="pointer-events-none absolute -inset-[9%] h-[118%] w-[118%]" />
            <SketchSparks className="absolute -left-[14%] -top-[10%] h-10 w-10 text-violet-400 md:h-14 md:w-14" />
            <div className="absolute -bottom-[12%] -left-[16%] flex rotate-[-6deg] items-start gap-1 text-blue-400">
              <span className="font-hand text-2xl md:text-3xl">{hero.photoNote}</span>
              <SketchArrow className="-mt-3 h-8 w-14 -rotate-[28deg] md:h-10 md:w-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
