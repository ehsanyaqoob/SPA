export interface Skill {
  name: string;
  icon: string;
  category: 'mobile' | 'frontend' | 'backend' | 'tools' | 'design';
  link?: string;
}

export const skills: Skill[] = [
  // Mobile Development (Your Core Expertise)
  { 
    name: "Flutter", 
    icon: "Smartphone", 
    category: "mobile",
    link: "https://flutter.dev" 
  },
  { 
    name: "Dart", 
    icon: "Code", 
    category: "mobile",
    link: "https://dart.dev"
  },
  { 
    name: "Android Development", 
    icon: "Smartphone", 
    category: "mobile",
    link: "https://developer.android.com"
  },
  { 
    name: "iOS Development", 
    icon: "Smartphone", 
    category: "mobile",
    link: "https://developer.apple.com/ios/"
  },
  { 
    name: "React Native", 
    icon: "Smartphone", 
    category: "mobile",
    link: "https://reactnative.dev"
  },

  // Frontend Development
  { 
    name: "JavaScript", 
    icon: "FileCode", 
    category: "frontend",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  { 
    name: "TypeScript", 
    icon: "FileCode", 
    category: "frontend",
    link: "https://www.typescriptlang.org"
  },
  { 
    name: "React", 
    icon: "Atom", 
    category: "frontend",
    link: "https://reactjs.org"
  },
  { 
    name: "Next.js", 
    icon: "Layout", 
    category: "frontend",
    link: "https://nextjs.org"
  },
  { 
    name: "Tailwind CSS", 
    icon: "Palette", 
    category: "frontend",
    link: "https://tailwindcss.com"
  },

  // Backend & APIs
  { 
    name: "Firebase", 
    icon: "Flame", 
    category: "backend",
    link: "https://firebase.google.com"
  },
  { 
    name: "REST APIs", 
    icon: "Globe", 
    category: "backend",
    link: "https://restfulapi.net"
  },
  { 
    name: "GraphQL", 
    icon: "Database", 
    category: "backend",
    link: "https://graphql.org"
  },
  { 
    name: "Node.js", 
    icon: "Server", 
    category: "backend",
    link: "https://nodejs.org"
  },
  { 
    name: "Postman", 
    icon: "Globe", 
    category: "backend",
    link: "https://postman.com"
  },

  // Tools & DevOps
  { 
    name: "Git", 
    icon: "GitBranch", 
    category: "tools",
    link: "https://git-scm.com"
  },
  { 
    name: "GitHub", 
    icon: "Github", 
    category: "tools",
    link: "https://github.com"
  },
  { 
    name: "GitHub Actions", 
    icon: "GitBranch", 
    category: "tools",
    link: "https://github.com/features/actions"
  },
  { 
    name: "VS Code", 
    icon: "Code2", 
    category: "tools",
    link: "https://code.visualstudio.com"
  },
  { 
    name: "Android Studio", 
    icon: "Code2", 
    category: "tools",
    link: "https://developer.android.com/studio"
  },
  { 
    name: "JIRA", 
    icon: "List", 
    category: "tools",
    link: "https://www.atlassian.com/software/jira"
  },
  { 
    name: "Trello", 
    icon: "List", 
    category: "tools",
    link: "https://trello.com"
  },

  // Methodologies & Practices
  { 
    name: "Agile/Scrum", 
    icon: "Users", 
    category: "tools",
    link: "https://www.scrum.org"
  },
  { 
    name: "CI/CD", 
    icon: "RefreshCw", 
    category: "tools",
    link: "https://www.redhat.com/en/topics/devops/what-is-ci-cd"
  },
  { 
    name: "Clean Architecture", 
    icon: "Layers", 
    category: "tools"
  },
  { 
    name: "State Management (GetX, Provider)", 
    icon: "Settings", 
    category: "mobile"
  },
  { 
    name: "Automated Testing", 
    icon: "TestTube", 
    category: "tools"
  }
];

export const skillCategories = {
  mobile: "Mobile Development",
  frontend: "Frontend Development",
  backend: "Backend & APIs",
  tools: "Tools & DevOps",
};