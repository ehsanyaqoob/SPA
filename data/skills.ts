export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export const skills: Skill[] = [
  { name: "Flutter", icon: "Smartphone", category: "frontend" },
  { name: "Dart", icon: "Code", category: "frontend" },
  { name: "React", icon: "Atom", category: "frontend" },
  { name: "TypeScript", icon: "FileCode", category: "frontend" },
  { name: "JavaScript", icon: "FileJson", category: "frontend" },
  { name: "Next.js", icon: "Layout", category: "frontend" },
  { name: "Tailwind CSS", icon: "Palette", category: "frontend" },
  { name: "Firebase", icon: "Flame", category: "backend" },
  { name: "REST API", icon: "Globe", category: "backend" },
  { name: "Node.js", icon: "Server", category: "backend" },
  { name: "GraphQL", icon: "Database", category: "backend" },
  { name: "Git", icon: "GitBranch", category: "tools" },
  { name: "GitHub", icon: "Github", category: "tools" },
  { name: "VS Code", icon: "Code2", category: "tools" },
  { name: "Figma", icon: "Figma", category: "design" },
  { name: "Adobe XD", icon: "Pen", category: "design" },
];

export const skillCategories = {
  frontend: "Frontend Development",
  backend: "Backend & APIs",
  tools: "Tools & Version Control",
  design: "UI/UX Design",
};
