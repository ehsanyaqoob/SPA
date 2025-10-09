export interface Skill {
  name: string;
  icon: string;
  category: 'mobile' | 'state' | 'backend' | 'tools' | 'design';
}

export const skills: Skill[] = [
  // 💙 Mobile Development
  { name: "Flutter", icon: "Smartphone", category: "mobile" },
  { name: "Dart", icon: "Code", category: "mobile" },
  { name: "Kotlin", icon: "Code2", category: "mobile" },
  { name: "Swift", icon: "Apple", category: "mobile" },
  { name: "React Native", icon: "Atom", category: "mobile" },

  // ⚡ State Management
  { name: "GetX", icon: "Box", category: "state" },
  { name: "Provider", icon: "Network", category: "state" },
  { name: "Bloc", icon: "Workflow", category: "state" },
  { name: "Riverpod", icon: "Plug", category: "state" },

  // 🔥 Backend & APIs
  { name: "Firebase", icon: "Flame", category: "backend" },
  { name: "REST API", icon: "Globe", category: "backend" },
  { name: "Supabase", icon: "Server", category: "backend" },

  // 🧰 Tools
  { name: "Git", icon: "GitBranch", category: "tools" },
  { name: "GitHub", icon: "Github", category: "tools" },
  { name: "VS Code", icon: "Code2", category: "tools" },

  // 🎨 Design
  { name: "Figma", icon: "Figma", category: "design" },
  { name: "Adobe XD", icon: "Pen", category: "design" },
];

export const skillCategories = {
  mobile: "💙 Mobile Development",
  state: "⚡ State Management",
  backend: "🔥 Backend & APIs",
  tools: "🧰 Tools",
  design: "🎨 Design",
};
