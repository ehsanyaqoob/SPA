export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  githubUrl: string;
  images?: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  // Deep Dive Metadata
  role?: string;
  timeline?: string;
  architecture?: string;
  keyFeatures?: string[];
}

export const projects: Project[] = [
  {
    id: "niyyah",
    title: "Niyyah",
    description: "Native iOS Salah tracker with GPS-based prayer times, streak tracking, and monthly heatmap; architected offline-first with Supabase RLS, a dirty-flag sync pattern, and an enum-driven navigation state machine.",
    role: "Mobile Developer",
    timeline: "2026",
    problem: "Existing prayer tracking apps were cluttered, ad-heavy, and lacked a modern, premium iOS-native feel.",
    solution: "Shipped solo end-to-end to the App Store — WidgetKit home screen widget, local notifications, resolving three App Review rejection cycles to reach production approval.",
    architecture: "Architected natively using Swift and SwiftUI. The entire data layer is powered by SwiftData, ensuring seamless, zero-latency offline persistence.",
    keyFeatures: [
      "Algorithmic prayer time calculation",
      "Zero-latency SwiftData persistence",
      "Interactive iOS widgets",
      "Monthly habit heatmap rendering",
      "Location-aware local push notifications"
    ],
    impact: "Shipped solo end-to-end to the App Store.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "Supabase"],
    githubUrl: "",
    appStoreUrl: "https://apps.apple.com/pk/app/niyyah-daily-prayer-tracker/id6780566802",
    images: ["/niyyah-2.png", "/niyyah-1.png"]
  },
  {
    id: "mizan",
    title: "Mizan",
    description: "Freelancer finance tracker with PKR/USD conversion, FBR tax calculation engine, and PDF export, offline-first with Hive, synced to Supabase.",
    role: "Mobile Developer",
    timeline: "2026",
    problem: "Pakistani freelancers faced unique financial tracking issues: volatile PKR/USD conversion rates, complex local FBR (Federal Board of Revenue) tax brackets.",
    solution: "Designed, developed, and shipped solo to both the App Store and Play Store.",
    architecture: "Structured using Flutter Clean Architecture. The app uses Hive for highly encrypted, high-performance local storage (NoSQL).",
    keyFeatures: [
      "Live and cached PKR/USD currency conversion",
      "Automated FBR tax bracket calculations",
      "On-device PDF invoice generation",
      "Encrypted local Hive database",
      "Biometric app locking"
    ],
    impact: "Designed, developed, and shipped solo to both the App Store and Play Store.",
    techStack: ["Flutter", "Riverpod", "Hive", "Supabase"],
    githubUrl: "",
    appStoreUrl: "https://apps.apple.com/us/app/mizan-freelancer-ledger/id6780952991",
    playStoreUrl: "#",
    images: ["/mizanframeone.png", "/mizanframetwo.png"]
  },
  {
    id: "dsa",
    title: "Digital Sergeant",
    description: "Government-grade E-Challan enforcement system with real-time license plate scanning via ML Kit OCR and live violation reporting synced through REST APIs, offline-first with Firebase.",
    role: "Mobile Developer",
    timeline: "2024",
    problem: "Traffic officers issued challans entirely on paper — a slow, error-prone process with no real-time database lookup.",
    solution: "Engineered a production Flutter app with ML Kit OCR for instant QR and license plate scanning.",
    architecture: "Built on Clean Architecture principles, the app separates presentation, domain, and data layers.",
    keyFeatures: [
      "On-device OCR for driver's license parsing",
      "Real-time database sync via Firebase",
      "Offline-first data queuing mechanism",
      "GPS-tagged violation tracking",
      "Role-based access control for officers"
    ],
    impact: "Sole mobile developer, deployed and actively maintained in live production for 500+ Islamabad Traffic Police officers.",
    techStack: ["Flutter", "GetX", "ML Kit OCR", "Firebase", "REST APIs"],
    githubUrl: "",
    images: ["/DSA Frame one.png", "/DSA Frame two.png", "/DSA Frame three.png", "/DSA Frame four.png"]
  },
  {
    id: "padel-app",
    title: "Padel App",
    description: "Building the Flutter mobile client for a real-time court booking platform - slot availability, in-app payments, Google Maps-based court discovery, and role-based UI for players vs. club owners.",
    role: "Mobile Developer",
    timeline: "Dec 2025 – Present",
    problem: "Padel clubs managed court reservations manually, resulting in double bookings and scheduling conflicts.",
    solution: "Collaborating with a backend engineer on Laravel API integration, in active development targeting Play Store release.",
    architecture: "The backend API powers real-time state sync, resolving race conditions for court booking.",
    keyFeatures: [
      "Real-time court booking platform",
      "Slot availability tracking",
      "In-app payments",
      "Google Maps-based court discovery",
      "Role-based UI for players vs. club owners"
    ],
    impact: "In active development targeting Play Store release.",
    techStack: ["Flutter", "Provider", "Google Maps"],
    githubUrl: "",
    images: ["/currentloc-left.png", "/Frame one.png", "/Frame three.png", "/Frame four.png"]
  }
];