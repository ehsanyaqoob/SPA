export interface Skill {
  name: string;
  category: "mobile" | "state" | "backend" | "tools" | "design";
}

export const skills: Skill[] = [
  // 💙 Mobile Development
  { name: "Flutter", category: "mobile" },
  { name: "Dart", category: "mobile" },
  { name: "Kotlin", category: "mobile" },
  { name: "Swift", category: "mobile" },
  { name: "React Native", category: "mobile" },

  // ⚡ State Management
  { name: "GetX", category: "state" },
  { name: "Provider", category: "state" },
  { name: "Bloc", category: "state" },
  { name: "Riverpod", category: "state" },

  // 🔥 Backend & APIs
  { name: "Firebase", category: "backend" },
  { name: "REST API", category: "backend" },
  { name: "Supabase", category: "backend" },

  // 🧰 Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },

  // 🎨 Design
  { name: "Figma", category: "design" },
  { name: "Adobe XD", category: "design" },
];

export const skillCategories = {
  mobile: "💙 Mobile Development",
  state: "⚡ State Management",
  backend: "🔥 Backend & APIs",
  tools: "🧰 Tools",
  design: "🎨 Design",
};
