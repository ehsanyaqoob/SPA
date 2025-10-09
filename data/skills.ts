export interface Skill {
  name: string;
  icon: string;
  category:
    | 'mobile'
    | 'stateManagement'
    | 'backend'
    | 'tools'
    | 'design';
}

export const skills: Skill[] = [
  // 💙 Mobile Development
  { name: "Flutter", icon: "Smartphone", category: "mobile" },
  { name: "Dart", icon: "Code", category: "mobile" },
  { name: "Kotlin", icon: "Code2", category: "mobile" },
  { name: "Swift", icon: "Apple", category: "mobile" },
  { name: "Java", icon: "Terminal", category: "mobile" },
  { name: "React Native", icon: "Atom", category: "mobile" },
  { name: "Expo", icon: "Package", category: "mobile" },

  // ⚡ State Management
  { name: "GetX", icon: "Box", category: "stateManagement" },
  { name: "Provider", icon: "Network", category: "stateManagement" },
  { name: "Bloc", icon: "Workflow", category: "stateManagement" },
  { name: "Riverpod", icon: "Plug", category: "stateManagement" },

  // 🔥 Backend & APIs
  { name: "Firebase", icon: "Flame", category: "backend" },
  { name: "REST API", icon: "Globe", category: "backend" },
  { name: "GraphQL", icon: "Database", category: "backend" },
  { name: "Supabase", icon: "Server", category: "backend" },

  // 🧰 Tools & CI/CD
  { name: "Pub.dev", icon: "Package", category: "tools" },
  { name: "Git", icon: "GitBranch", category: "tools" },
  { name: "GitHub", icon: "Github", category: "tools" },
  { name: "GitLab", icon: "Gitlab", category: "tools" },
  { name: "CI/CD", icon: "Cloud", category: "tools" },
  { name: "VS Code", icon: "Code2", category: "tools" },

  // 🎨 UI/UX & Design
  { name: "Figma", icon: "Figma", category: "design" },
  { name: "Adobe XD", icon: "Pen", category: "design" },
  { name: "Canva", icon: "Palette", category: "design" },
];

export const skillCategories = {
  mobile: "💙 Mobile Development",
  stateManagement: "⚡ State Management",
  backend: "🔥 Backend & APIs",
  tools: "🧰 Tools & CI/CD",
  design: "🎨 UI/UX & Design",
};
