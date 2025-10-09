export interface Skill {
  name: string;
  icon: string;
  category: 'mobile' | 'backend' | 'tools' | 'design';
}

export const skills: Skill[] = [
  // 🧠 Mobile Development
  { name: "Flutter", icon: "Smartphone", category: "mobile" },
  { name: "Dart", icon: "Code", category: "mobile" },
  { name: "Kotlin", icon: "Code2", category: "mobile" },
  { name: "Swift", icon: "Apple", category: "mobile" },

  // ⚙️ Backend & APIs
  { name: "Firebase", icon: "Flame", category: "backend" },
  { name: "REST API", icon: "Globe", category: "backend" },
  { name: "Node.js", icon: "Server", category: "backend" },

  // 🧰 Tools & Version Control
  { name: "Git", icon: "GitBranch", category: "tools" },
  { name: "GitHub", icon: "Github", category: "tools" },
  { name: "VS Code", icon: "Code2", category: "tools" },
  { name: "Android Studio", icon: "Smartphone", category: "tools" },
  { name: "Xcode", icon: "Laptop", category: "tools" },

  // 🎨 Design
  { name: "Figma", icon: "Figma", category: "design" },
  { name: "Adobe XD", icon: "Pen", category: "design" },
];

export const skillCategories = {
  mobile: "Mobile App Development",
  backend: "Backend & APIs",
  tools: "Tools & IDEs",
  design: "UI/UX Design",
};
