import { contact, person } from "@/site.config";

const links = [
  { name: "Email", href: contact.mailto },
  { name: "GitHub", href: contact.github },
  { name: "LinkedIn", href: contact.linkedin },
  { name: "X", href: contact.x },
];

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
      <p>
        © {new Date().getFullYear()} {person.name}
      </p>
      <div className="flex gap-6">
        {links.map(({ name, href }) => (
          <a key={name} href={href} className="transition-colors hover:text-ink">
            {name}
          </a>
        ))}
      </div>
    </footer>
  );
}
