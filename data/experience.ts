export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Mobile App Developer",
    company: "National Police Foundation",
    location: "Islamabad, Pakistan",
    startDate: "Jul 2023",
    endDate: "Present",
    description: [
      "Architected and developed cross-platform mobile applications using Flutter, serving critical law enforcement operations with 99.9% uptime",
      "Engineered real-time data synchronization systems integrating Firebase services and REST APIs, handling 50,000+ daily transactions",
      "Optimized application performance by 25% through advanced state management implementations and code-level performance tuning",
      "Orchestrated CI/CD pipelines reducing deployment cycles by 40% and implementing comprehensive automated testing strategies",
      "Led stakeholder collaboration sessions to define technical requirements and deliver scalable solutions ahead of schedule"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "GetX", "CI/CD", "Git", "Performance Optimization"]
  },
  {
    id: "2",
    title: "Software Developer",
    company: "Tech Solutions",
    location: "Islamabad, Pakistan",
    startDate: "Jan 2023",
    endDate: "Jun 2023",
    description: [
      "Designed and implemented REST API architectures, reducing latency by 30% and improving data consistency across microservices",
      "Spearheaded development workflow optimizations using Git, GitHub Actions, and Agile methodologies, increasing team velocity by 25%",
      "Engineered responsive UI components achieving 20% faster render times and enhanced cross-platform compatibility",
      "Mentored junior developers through code reviews and technical guidance, elevating team code quality standards",
      "Architected automated deployment systems reducing manual intervention by 60% and improving release reliability"
    ],
    technologies: ["Flutter", "REST APIs", "Git", "GitHub Actions", "Agile", "CI/CD", "System Architecture"]
  },
  {
    id: "3",
    title: "Flutter Developer",
    company: "Freelance Projects",
    location: "Islamabad, Pakistan",
    startDate: "Sep 2022",
    endDate: "Dec 2022",
    description: [
      "Developed modular, reusable UI component libraries serving as foundation for multiple client applications",
      "Implemented secure authentication systems integrating Firebase Auth and Firestore with role-based access control",
      "Optimized application performance through advanced debugging techniques and memory management strategies",
      "Collaborated with cross-functional teams to translate complex UX requirements into production-ready features",
      "Delivered MVP prototypes to enterprise clients, securing 100% project approval and follow-on contracts"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "UI/UX", "System Design", "Prototyping", "Authentication Systems"]
  }
];