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
}

export const projects: Project[] = [
  {
    id: "dsa",
    title: "Digital Sergeant App (DSA)",
    description: "A government-grade mobile enforcement platform for Islamabad Traffic Police enabling real-time digital challan issuance, license verification, and violation tracking.",
    problem: "Traffic officers issued challans entirely on paper — a slow, error-prone process with no real-time database lookup, no digital trail, and significant delays in violation records reaching central systems. Officers averaged 5+ minutes per challan with frequent data entry errors.",
    solution: "Engineered a production Flutter app with ML Kit OCR for instant QR and license plate scanning, Firebase for live data sync across all field devices, Google Maps for geolocation tagging of violations, and a REST API backend integrated with police central databases. Delivered under Clean Architecture with GetX state management.",
    impact: "Deployed to 500+ active field officers across Islamabad. Reduced challan issuance time from 5 minutes to under 30 seconds. Achieved 100% data accuracy through automated OCR and real-time Firebase sync, eliminating manual transcription errors entirely.",
    techStack: ["Flutter", "Firebase", "REST API", "Google Maps", "ML Kit OCR", "GetX"],
    githubUrl: "https://github.com/ehsanyaqoob/Digital-Sergeant-Showcase",
    images: ["/DSA Frame one.png", "/DSA Frame two.png", "/DSA Frame three.png", "/DSA Frame four.png"]
  },
  {
    id: "niyyah",
    title: "Niyyah",
    description: "Native iOS Salah tracker. GPS prayer times, streak tracking, monthly heatmap. SwiftUI + SwiftData + Supabase.",
    problem: "Existing prayer tracking apps were cluttered, ad-heavy, and lacked a modern, premium iOS-native feel.",
    solution: "Developed natively with Swift and SwiftData for seamless offline persistence. Used SwiftUI to create a minimalist, distraction-free user experience.",
    impact: "Currently preparing for App Store launch (2026). Re-architected personal habits tracking with a focus on privacy and offline-first usage.",
    techStack: ["Swift", "SwiftUI", "SwiftData"],
    githubUrl: "",
    appStoreUrl: "#",
    images: ["/niyyah-2.png", "/niyyah-1.png"]
  },
  {
    id: "mizan",
    title: "Mizan",
    description: "Freelancer finance tracker for Pakistani market. PKR/USD conversion, FBR tax calculation, PDF export, offline-first.",
    problem: "Users needed a reliable, fast app for community engagement with seamless offline capabilities.",
    solution: "Built using Flutter and Clean Architecture, utilizing robust state management and local caching.",
    impact: "Successfully shipped to the Play Store, providing real-world value to active users.",
    techStack: ["Flutter", "Dart", "Clean Architecture"],
    githubUrl: "",
    playStoreUrl: "#",
    images: ["/mizan-dashboard.png"]
  },
  {
    id: "diary",
    title: "Diary",
    description: "A secure finance and expense tracker focusing on local-first storage, privacy, and seamless sync, available on the Play Store.",
    problem: "Privacy-focused users wanted an expense tracking experience that doesn't rely entirely on cloud storage.",
    solution: "Implemented using Flutter and Hive for secure offline-first storage, ensuring user financial entries remain private.",
    impact: "Successfully deployed to the Play Store, achieving positive user retention and strong engagement.",
    techStack: ["Flutter", "Hive", "Secure Storage"],
    githubUrl: "",
    playStoreUrl: "#",
    images: [""]
  },
  {
    id: "padel-app",
    title: "Padel App",
    description: "A real-time sports facility booking and tournament management platform built for padel clubs and their members.",
    problem: "Padel clubs managed court reservations, player skill tiers, and tournament scheduling entirely through manual processes — resulting in double bookings, scheduling conflicts, and a frustrating member experience with no visibility into court availability.",
    solution: "Built a full-featured Flutter mobile app with real-time court availability powered by Firebase, skill-based player matchmaking, in-app Stripe payments, and an automated tournament bracket engine. Designed for both club admins and end-users with separate role-based flows.",
    impact: "Reduced court booking management time by 60%, eliminated scheduling conflicts through real-time slot locking, and drove higher member retention through community ladder systems and in-app engagement features.",
    techStack: ["Flutter", "Firebase", "Node.js", "Stripe"],
    githubUrl: "https://github.com/ehsanyaqoob/Padel---Showcase",
    images: ["/currentloc-left.png", "/Frame one.png", "/Frame three.png", "/Frame four.png"]
  },
  {
    id: "funica-ar",
    title: "Funica AR",
    description: "An AR-powered furniture e-commerce platform that lets customers visualize true-to-scale 3D furniture in their own living space before purchasing.",
    problem: "Premium furniture buyers faced a critical confidence gap — they couldn't accurately judge how a piece would look, fit, or feel in their home. This led to high return rates, costly logistics, and lost revenue for retailers.",
    solution: "Developed a Flutter-based AR shopping experience using AR Core to render photorealistic, correctly-scaled 3D furniture models in the user's real environment. Integrated Three.js for model rendering, dynamic lighting adjustments, and a seamless checkout flow backed by MongoDB.",
    impact: "Cut product return rates by 40% by giving customers a reliable 'try before you buy' experience. Significantly improved purchase confidence for high-ticket items and reduced customer support load related to size and fit queries.",
    techStack: ["Flutter", "AR Core", "Three.js", "MongoDB"],
    githubUrl: "https://github.com/ehsanyaqoob/funica",
    images: ["/funicamock.png", "/Funica Frame two.png", "/Funica Frame three.png", "/Funica Frame four.png", "/Funica Frame five.png", "/Funica Frame six.png"]
  },
  {
    id: "dastarkhwan",
    title: "Dastarkhwan iOS App",
    description: "A premium iOS-native culinary community platform for sharing recipes, HD cooking tutorials, and building a personalized digital cookbook.",
    problem: "Home chefs and food enthusiasts had no dedicated, high-quality iOS platform to showcase original recipes, follow step-by-step cooking guides, or connect with a like-minded culinary community. Existing platforms were cluttered, generic, and not built for serious cooking content.",
    solution: "Built a native iOS app using Swift and SwiftUI with a focus on rich content presentation — HD video tutorials, curated recipe discovery, social following, and a personalized 'Cookbook' feature for saving and organizing recipes. Firebase Auth handles secure user sessions and Cloud Functions power backend recipe management and notifications.",
    impact: "Onboarded 5,000+ active users within the first month of launch. Established a focused niche community of home cooks and professional chefs with strong organic retention driven by content quality and social features.",
    techStack: ["Swift", "SwiftUI", "Firebase Auth", "Cloud Functions"],
    githubUrl: "",
    images: [""]
  },
  {
    id: "onepay",
    title: "OnePay Wallet",
    description: "A secure, full-featured digital wallet for everyday payments, balance management, and real-time financial tracking.",
    problem: "Users were juggling multiple fragmented payment apps — none of which balanced ease of use with enterprise-level security. Simple apps lacked advanced transaction features; secure ones were too complex for daily personal finance management.",
    solution: "Developed a Flutter-based digital wallet with two-factor authentication (2FA), encrypted secure storage, QR code payments, bill splitting, and real-time transaction sync via Socket.io. Provider state management keeps the UI reactive and performant. A Node.js backend with PostgreSQL handles transaction integrity and user data at scale.",
    impact: "Processed over $1M in transactions within the first quarter of deployment with zero security incidents. Achieved a 4.8-star user satisfaction rating driven by a clean UX, fast transaction speeds, and reliable real-time sync across sessions.",
    techStack: ["Flutter", "Provider", "Node.js", "PostgreSQL", "Socket.io", "Secure Storage"],
    githubUrl: "",
    images: [""]
  }
];