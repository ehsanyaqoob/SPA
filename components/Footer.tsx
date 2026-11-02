import { person } from "@/site.config";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 py-10 text-sm text-muted md:px-8">
      <p>
        © {new Date().getFullYear()} {person.name}
      </p>
    </footer>
  );
}
