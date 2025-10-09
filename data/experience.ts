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
    title: "Senior Flutter Developer",
    company: "Tech Solutions Inc",
    location: "Remote",
    startDate: "Jan 2023",
    endDate: "Present",
    description: [
      "Led development of 3 major mobile applications serving 100k+ users",
      "Architected scalable Flutter solutions using clean architecture principles",
      "Mentored junior developers and conducted code reviews",
      "Integrated third-party APIs and payment gateways",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "BLoC", "Git"],
  },
  {
    id: "2",
    title: "Flutter Developer",
    company: "Digital Innovations",
    location: "Hybrid",
    startDate: "Mar 2021",
    endDate: "Dec 2022",
    description: [
      "Developed and maintained 5+ cross-platform mobile applications",
      "Collaborated with UI/UX designers to implement pixel-perfect designs",
      "Optimized app performance resulting in 40% faster load times",
      "Implemented state management solutions using Provider and GetX",
    ],
    technologies: ["Flutter", "Dart", "Provider", "GetX", "SQLite", "Figma"],
  },
  {
    id: "3",
    title: "Mobile App Developer",
    company: "StartUp Labs",
    location: "On-site",
    startDate: "Jun 2019",
    endDate: "Feb 2021",
    description: [
      "Built MVP applications for multiple startup clients",
      "Worked closely with product teams to define features and requirements",
      "Integrated analytics and crash reporting tools",
      "Participated in agile development cycles and sprint planning",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Jira", "Git", "CI/CD"],
  },
];
