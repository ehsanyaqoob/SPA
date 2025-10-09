export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "design";
}

export const skills: Skill[] = [
  // 🧠 Frontend / Mobile
  { name: "Flutter", icon: "Smartphone", category: "frontend" },
  { name: "Dart", icon: "Code", category: "frontend" },
  { name: "React", icon: "Atom", category: "frontend" },
  { name: "Next.js", icon: "Layout", category: "frontend" },
  { name: "TypeScript", icon: "FileCode", category: "frontend" },
  { name: "JavaScript", icon: "FileJson", category: "frontend" },
  { name: "Tailwind CSS", icon: "Palette", category: "frontend" },

  // ⚙️ Backend & APIs
  { name: "Firebase", icon: "Flame", category: "backend" },
  { name: "REST API", icon: "Globe", category: "backend" },
  { name: "Node.js", icon: "Server", category: "backend" },
  { name: "GraphQL", icon: "Database", category: "backend" },

  // 🧩 Tools
  { name: "Git", icon: "GitBranch", category: "tools" },
  { name: "GitHub", icon: "Github", category: "tools" },
  { name: "VS Code", icon: "Code2", category: "tools" },
  { name: "Postman", icon: "Send", category: "tools" },

  // 🎨 Design
  { name: "Figma", icon: "Figma", category: "design" },
  { name: "Adobe XD", icon: "PenTool", category: "design" },
  { name: "Canva", icon: "Brush", category: "design" },
];

export const skillCategories = {
  frontend: "Frontend & Mobile Development",
  backend: "Backend & Cloud Services",
  tools: "Developer Tools",
  design: "UI/UX & Design",
};
