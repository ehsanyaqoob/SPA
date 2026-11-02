export default function SectionHeading({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <header>
      <h2 className="relative inline-block font-display text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
        <span className="text-blue-500">{children}</span>
      </h2>
      <p className="mt-6 text-lg text-muted md:text-xl">{subtitle}</p>
    </header>
  );
}
