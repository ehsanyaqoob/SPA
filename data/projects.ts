export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Mobile App",
    description: "A full-featured e-commerce mobile application built with Flutter, featuring product browsing, cart management, and secure payment integration.",
    techStack: ["Flutter", "Dart", "Firebase", "Stripe API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ehsanyaqoob/ecommerce-app",
  },
  {
    id: "2",
    title: "Fitness Tracker",
    description: "Cross-platform fitness tracking app with workout logging, progress charts, and personalized meal plans.",
    techStack: ["Flutter", "SQLite", "Provider", "Charts"],
    githubUrl: "https://github.com/ehsanyaqoob/fitness-tracker",
  },
  {
    id: "3",
    title: "Social Media Dashboard",
    description: "A responsive dashboard for managing multiple social media accounts with analytics and scheduling features.",
    techStack: ["Flutter", "REST API", "GetX", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ehsanyaqoob/social-dashboard",
  },
  {
    id: "4",
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates, team collaboration, and project tracking.",
    techStack: ["Flutter", "Firebase", "Cloud Firestore", "BLoC"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ehsanyaqoob/task-manager",
  },
  {
    id: "5",
    title: "Weather Forecast App",
    description: "Beautiful weather application with 7-day forecasts, location-based updates, and animated weather conditions.",
    techStack: ["Flutter", "OpenWeather API", "Riverpod", "Animations"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ehsanyaqoob/weather-app",
  },
  {
    id: "6",
    title: "Recipe Finder",
    description: "Discover and save your favorite recipes with step-by-step instructions, ingredient lists, and cooking timers.",
    techStack: ["Flutter", "Spoonacular API", "Hive", "Provider"],
    githubUrl: "https://github.com/ehsanyaqoob/recipe-finder",
  },
];
