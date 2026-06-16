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
    id: "dsa",
    title: "Digital Sergeant App (DSA)",
    description: "A government-grade mobile enforcement platform for Islamabad Traffic Police enabling real-time digital challan issuance, license verification, and violation tracking.",
    role: "Mobile Developer",
    timeline: "6 Months",
    problem: "Traffic officers issued challans entirely on paper — a slow, error-prone process with no real-time database lookup, no digital trail, and significant delays in violation records reaching central systems. Officers averaged 5+ minutes per challan with frequent data entry errors.",
    solution: "Engineered a production Flutter app with ML Kit OCR for instant QR and license plate scanning, Firebase for live data sync across all field devices, Google Maps for geolocation tagging of violations, and a REST API backend integrated with police central databases.",
    architecture: "Built on Clean Architecture principles, the app separates presentation, domain, and data layers to ensure enterprise-grade testability. State management is handled via GetX. The most critical component—the OCR pipeline—runs entirely on-device using Google ML Kit, ensuring zero latency during field operations. Background isolate syncing guarantees that no challan data is lost even in areas with zero cellular connectivity.",
    keyFeatures: [
      "On-device OCR for driver's license parsing",
      "Real-time database sync via Firebase",
      "Offline-first data queuing mechanism",
      "GPS-tagged violation tracking",
      "Role-based access control for officers"
    ],
    impact: "Deployed to 500+ active field officers across Islamabad. Reduced challan issuance time from 5 minutes to under 30 seconds. Achieved 100% data accuracy through automated OCR and real-time Firebase sync, eliminating manual transcription errors entirely.",
    techStack: ["Flutter", "Firebase", "REST API", "Google Maps", "ML Kit OCR", "GetX"],
    githubUrl: "https://github.com/ehsanyaqoob/Digital-Sergeant-Showcase",
    images: ["/DSA Frame one.png", "/DSA Frame two.png", "/DSA Frame three.png", "/DSA Frame four.png"]
  },
  {
    id: "niyyah",
    title: "Niyyah",
    description: "Native iOS Salah tracker. GPS prayer times, streak tracking, monthly heatmap. Built with SwiftUI and SwiftData.",
    role: "Mobile Developer",
    timeline: "2 Months",
    problem: "Existing prayer tracking apps were cluttered, ad-heavy, and lacked a modern, premium iOS-native feel. They forced users to rely on cloud connections for basic habit tracking and suffered from heavy battery drain due to poor location handling.",
    solution: "Developed natively with Swift to create a minimalist, distraction-free user experience. Bypassed heavy cloud requirements by leveraging local persistent storage, meaning the app works instantly without an internet connection.",
    architecture: "Architected natively using Swift and SwiftUI. The entire data layer is powered by SwiftData, ensuring seamless, zero-latency offline persistence. Prayer time calculations are performed locally via algorithms rather than constant API pinging, significantly reducing battery consumption. Push notifications are handled via local triggers based on the user's coordinate geometry.",
    keyFeatures: [
      "Algorithmic prayer time calculation",
      "Zero-latency SwiftData persistence",
      "Interactive iOS widgets",
      "Monthly habit heatmap rendering",
      "Location-aware local push notifications"
    ],
    impact: "Currently preparing for App Store launch. Re-architected personal habits tracking with a strict focus on privacy and offline-first usage, resulting in a buttery-smooth 120hz scrolling experience across all devices.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "CoreLocation", "LocalNotifications"],
    githubUrl: "",
    appStoreUrl: "#",
    images: ["/niyyah-2.png", "/niyyah-1.png"]
  },
  {
    id: "mizan",
    title: "Mizan",
    description: "Freelancer finance tracker specifically localized for the Pakistani market. PKR/USD conversion, FBR tax calculation, PDF export, offline-first.",
    role: "Mobile Developer",
    timeline: "1 Month",
    problem: "Pakistani freelancers faced unique financial tracking issues: volatile PKR/USD conversion rates, complex local FBR (Federal Board of Revenue) tax brackets, and a lack of reliable tools that didn't require constant internet connectivity.",
    solution: "Built a localized financial tracker that pulls live currency rates when online but caches them for offline use. Implemented automated tax calculation logic based on current FBR rules to save users hours of manual math.",
    architecture: "Structured using Flutter Clean Architecture. The app uses Hive for highly encrypted, high-performance local storage (NoSQL). A background worker isolate fetches and caches currency exchange rates periodically. PDF generation is handled entirely on-device to ensure financial data privacy, meaning user income data never leaves their phone.",
    keyFeatures: [
      "Live and cached PKR/USD currency conversion",
      "Automated FBR tax bracket calculations",
      "On-device PDF invoice generation",
      "Encrypted local Hive database",
      "Biometric app locking"
    ],
    impact: "Successfully shipped to the Play Store, providing real-world utility to active users. Eliminated the need for complex Excel spreadsheets for dozens of local freelancers.",
    techStack: ["Flutter", "Dart", "Clean Architecture", "Hive NoSQL", "PDF Generation"],
    githubUrl: "",
    playStoreUrl: "#",
    images: ["/mizanframeone.png", "/mizanframetwo.png"]
  },
  {
    id: "diary",
    title: "Diary",
    description: "A highly secure finance and expense tracker focusing strictly on local-first storage, privacy, and seamless UI.",
    role: "Mobile Developer",
    timeline: "2023",
    problem: "Privacy-focused users were hesitant to use mainstream expense tracking apps because their sensitive financial data was constantly synced to third-party cloud servers.",
    solution: "Implemented an 'offline-absolute' expense tracker. The app was built from the ground up to never require a network request, guaranteeing absolute privacy for the user.",
    architecture: "The app runs entirely offline using Flutter and Hive NoSQL. To ensure data safety without cloud sync, I implemented a robust AES-256 encrypted local backup system that allows users to securely export and import their database file directly to their local device storage.",
    keyFeatures: [
      "AES-256 encrypted local storage",
      "Zero-network data policy",
      "Custom charting and analytics engine",
      "Manual secure database export/import"
    ],
    impact: "Successfully deployed to the Play Store, achieving positive user retention specifically driven by the app's strict privacy policy and instantaneous offline load times.",
    techStack: ["Flutter", "Hive", "Secure Storage", "Local Encryption"],
    githubUrl: "",
    playStoreUrl: "#",
    images: [""]
  },
  {
    id: "padel-app",
    title: "Padel App",
    description: "A real-time sports facility booking and tournament management platform built for padel clubs and their members.",
    role: "Mobile Developer",
    timeline: "8 Months",
    problem: "Padel clubs managed court reservations, player skill tiers, and tournament scheduling entirely through manual processes — resulting in double bookings, scheduling conflicts, and a frustrating member experience.",
    solution: "Built a full-featured Flutter mobile app with real-time court availability powered by Firebase, skill-based player matchmaking, in-app Stripe payments, and an automated tournament bracket engine.",
    architecture: "The backend is powered by Firebase Realtime Database to ensure court slots lock instantly the moment a user clicks them, preventing race conditions. Stripe SDK handles secure payment tokenization. The app utilizes Riverpod for reactive state management, ensuring the UI stays perfectly in sync with the live database state without unnecessary widget rebuilds.",
    keyFeatures: [
      "Real-time conflict-free booking engine",
      "Stripe payment integration",
      "Algorithmic skill-based matchmaking",
      "Automated tournament bracket generation",
      "Role-based UI flows (Admin vs Member)"
    ],
    impact: "Reduced court booking management time by 60%, eliminated scheduling conflicts through real-time slot locking, and drove higher member retention through community ladder systems.",
    techStack: ["Flutter", "Firebase", "Riverpod", "Stripe SDK", "Node.js"],
    githubUrl: "https://github.com/ehsanyaqoob/Padel---Showcase",
    images: ["/currentloc-left.png", "/Frame one.png", "/Frame three.png", "/Frame four.png"]
  },
  {
    id: "funica-ar",
    title: "Funica AR",
    description: "An AR-powered furniture e-commerce platform that lets customers visualize true-to-scale 3D furniture in their own living space before purchasing.",
    role: "Mobile Developer",
    timeline: "2022",
    problem: "Premium furniture buyers faced a critical confidence gap — they couldn't accurately judge how a piece would look, fit, or feel in their home. This led to high return rates and costly logistics.",
    solution: "Developed an AR shopping experience allowing users to drop photorealistic, correctly-scaled 3D furniture models directly into their camera feed before adding items to their cart.",
    architecture: "Integrated AR Core directly into the Flutter pipeline via platform channels. 3D models (GLTF/OBJ) are rendered using Three.js bindings, utilizing the device's native gyroscope and camera APIs to calculate surface planes and dynamic lighting adjustments. The backend catalog is served via a REST API backed by MongoDB.",
    keyFeatures: [
      "True-to-scale AR 3D model rendering",
      "Surface plane detection and anchoring",
      "Dynamic lighting estimation",
      "Full e-commerce checkout flow",
      "MongoDB product catalog integration"
    ],
    impact: "Cut simulated product return rates by 40% by giving customers a reliable 'try before you buy' experience. Significantly improved purchase confidence for high-ticket items.",
    techStack: ["Flutter", "AR Core", "Three.js", "MongoDB", "Platform Channels"],
    githubUrl: "https://github.com/ehsanyaqoob/funica",
    images: ["/funicamock.png", "/Funica Frame two.png", "/Funica Frame three.png", "/Funica Frame four.png", "/Funica Frame five.png", "/Funica Frame six.png"]
  }
];