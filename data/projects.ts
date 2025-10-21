export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Digital Sergeant App",
    description: "Digital law enforcement platform for traffic violation management and automated fine processing.",
    problem: "Manual traffic fine processing causing delays, paperwork overhead, and inefficient violator tracking for Islamabad Traffic Police.",
    solution: "Mobile e-challan system enabling real-time violation recording, digital payments, and automated offender database management.",
    techStack: ["Flutter", "Dart", "Firebase Auth", "Firestore", "REST APIs", "GetX State Management", "Stripe Payment Integration", "Google Maps SDK"],
    liveUrl: "https://github.com/ehsanyaqoob/ITP-App-.git",
    githubUrl: "https://github.com/ehsanyaqoob/ITP-App-.git",
  },
  {
    id: "2",
    title: "National Police Foundation App",
    description: "Enterprise facility management and member services platform for police housing communities.",
    problem: "Inefficient manual maintenance request systems and poor communication channels between residents and facility management.",
    solution: "Centralized mobile platform for maintenance ticketing, subscription management, and real-time service status updates with push notifications.",
    techStack: ["Flutter", "Firebase Authentication", "Cloud Firestore", "Cloud Functions", "FCM Push Notifications", "RESTful APIs", "Provider Pattern"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.npf.mobile",
    githubUrl: "https://github.com/ehsanyaqoob/npf-mobile-app",
  },
  {
    id: "3",
    title: "Funica - AR Furniture Studio",
    description: "Immersive furniture shopping experience with augmented reality visualization and 3D product previews.",
    problem: "Customers unable to visualize furniture in their space before purchase, leading to high return rates and purchase hesitation.",
    solution: "E-commerce platform with AR room integration, 3D product models, and real-time inventory with seamless checkout experience.",
    techStack: ["Flutter", "Node.js Backend", "MongoDB Database", "AR Core SDK", "Stripe Payments", "Cloudinary CDN", "3D Model Rendering"],
    liveUrl: "https://funica-app.com",
    githubUrl: "https://github.com/ehsanyaqoob/funica",
  },
  {
    id: "4",
    title: "Nutri - AI Nutrition Coach",
    description: "Intelligent dietary tracking and personalized meal planning with machine learning insights.",
    problem: "Generic nutrition apps lacking personalized recommendations and accurate calorie tracking for individual health goals.",
    solution: "AI-driven nutrition platform with food recognition, personalized meal plans, and macro-nutrient analytics using ML models.",
    techStack: ["Flutter", "Dart", "Firebase ML Kit", "TensorFlow Lite", "Nutritionix API", "Bloc Architecture", "Health Data Sync"],
    githubUrl: "https://github.com/ehsanyaqoob/nutri",
  },
  {
    id: "5",
    title: "Noot - Aviation Social Network",
    description: "Community platform for aviation enthusiasts to share experiences and connect with fellow aviation professionals.",
    problem: "Lack of dedicated social platform for aviation enthusiasts to share experiences, photos, and connect with like-minded individuals.",
    solution: "Specialized social network featuring aviation-focused content sharing, community engagement, and real-time flight tracking integration.",
    techStack: ["Flutter", "Firebase Auth", "Cloud Storage", "Realtime Database", "Bloc Pattern", "Image Compression", "Social Feed Algorithm"],
    githubUrl: "https://github.com/ehsanyaqoob/noot",
  },
  {
    id: "6",
    title: "Exmi - Career Preparation Hub",
    description: "Comprehensive job portal with aptitude testing and personalized career path recommendations.",
    problem: "Fragmented job search experience lacking integrated skill assessment and personalized career guidance for job seekers.",
    solution: "Unified platform combining job listings, aptitude test preparation, mock exams, and AI-powered job matching algorithms.",
    techStack: ["Flutter", "Node.js Server", "Express.js", "MongoDB Atlas", "REST APIs", "JWT Authentication", "Recommendation Engine"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.knowledge.spark&hl=en",
    githubUrl: "https://github.com/ehsanyaqoob/Spark",

  },
];