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
    title: "Digital Sergeant App",
    description: "A comprehensive e-challan application developed for Islamabad Traffic Police, enabling digital fine management, violator tracking, and real-time traffic violation processing with secure payment integration.",
    techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "GetX", "Payment Gateway"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.digitalsergeant",
    githubUrl: "https://github.com/ehsanyaqoob/digital-sergeant-app",
  },
  {
    id: "2",
    title: "National Police Foundation App",
    description: "Enterprise mobile solution for National Police Foundation facilitating maintenance requests, member subscriptions, and real-time service tracking with automated notifications and reporting dashboard.",
    techStack: ["Flutter", "Firebase", "REST APIs", "Cloud Functions", "Push Notifications"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.npf.mobile",
    githubUrl: "https://github.com/ehsanyaqoob/npf-mobile-app",
  },
  {
    id: "3",
    title: "Funica",
    description: "Modern furniture e-commerce platform featuring 3D product visualization, AR preview, and seamless shopping experience with real-time inventory management and order tracking system.",
    techStack: ["Flutter", "Node.js", "MongoDB", "AR Core", "Stripe", "Cloudinary"],
    liveUrl: "https://funica-app.com",
    githubUrl: "https://github.com/ehsanyaqoob/funica-ecommerce",
  },
];