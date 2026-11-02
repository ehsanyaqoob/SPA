/**
 * site.config.ts: the single source of truth for this portfolio.
 *
 * Every fact about Ehsan or the site lives here exactly once. Components only
 * read from this file, so most future changes never need to touch a component.
 * The resumes in public/ are the reference for facts: keep this file in line with them.
 *
 * WHAT THE SITE MUST ANSWER, for a recruiter or fellow developer:
 *   Who are you?          -> person, hero, about
 *   What have you built?  -> projects
 *   What do you use?      -> platformSkills, sharedSkills
 *   How can I hire you?   -> availability, contact, contactSection, resumes
 *
 * RULES
 *   - Positioning: native iOS first, Flutter second. Say "iOS & Flutter" in that order.
 *   - Never hardcode a name, role, email, URL, skill, or heading in a component. Add it here.
 *   - One fact, one place. Derive repeated text from existing values.
 *   - Only claim what can be verified: a store link, a number, a named system.
 *     Do not show install counts or stat rows.
 *   - The only styling value here is each project's brand color. Everything else belongs in components.
 *   - Keep it minimal and to the point. Work history stays short: the resumes cover the detail.
 *
 * DESIGN
 *   - Dark theme only, over the moving network background (components/NexusBackground.tsx).
 *   - Colors and fonts are tokens in app/globals.css and tailwind.config.ts.
 *   - Fraunces for headings, Instrument Sans for text, Caveat for short handwritten notes.
 *   - Hand-drawn marks (components/Sketch.tsx) are the signature. Give each section its own gesture:
 *     never repeat one line across the site.
 *   - Navigation is a floating pill. Order: Home, About, Projects, Skills, Contact.
 *   - Contact is an iMessage-style conversation with a real form, delivered by Web3Forms.
 *
 * WHERE TO CHANGE THINGS
 *   Title, years of experience, location  -> person
 *   Hero text                             -> hero
 *   Open or closed to work                -> availability.open
 *   Email, GitHub, LinkedIn, X            -> contact
 *   Contact text and form key             -> contactSection, availability.pitch
 *   New resume                            -> replace the PDF in public/, update resumes
 *   SEO and link previews                 -> seo
 *   Section titles and navigation         -> sections
 *   Education, work history               -> education, experience
 *   New app                               -> projects (its page is generated at build time)
 *
 * PROJECTS
 *   Newest and strongest first. A store or GitHub URL shows a link; leave it out to hide it.
 *   frames are 720px wide portrait images in public/frames. The card shows the first three, with the
 *   strongest in the middle, and the case study shows them all. frameHeight is their height in pixels.
 */

export const person = {
  name: "Ehsan Yaqoob",
  firstName: "Ehsan",
  role: "Mobile Developer (iOS & Flutter)",
  location: "Islamabad, Pakistan",
  photo: "/me.jpg",
  summary: "3+ years shipping production apps across native iOS and Flutter.",
};

export const hero = {
  greeting: "Hey, I'm",
  intro:
    "I build native iOS apps with Swift and SwiftUI, and cross-platform apps with Flutter. Three are live on the App Store, and one is used by police officers every day.",
  primaryAction: "See my projects",
  photoNote: "that's me",
};

export const availability = {
  open: true,
  label: "Available for new projects",
  pitch: "Yes. I'm open to full-time roles and freelance projects.",
};

export const contact = {
  email: "ehsanyaqoob07@gmail.com",
  mailto: "mailto:ehsanyaqoob07@gmail.com",
  github: "https://github.com/ehsanyaqoob",
  linkedin: "https://www.linkedin.com/in/ehsany",
  x: "https://x.com/iamehsanyaqoob",
};

export const contactSection = {
  headlineLight: "Got an app",
  headlineBold: "to build?",
  formNote: "just type here",
  question: "Hey Ehsan, are you available?",
  prompt: "Tell me what you're building.",
  emailSubject: "New message from your portfolio",
  emailPlaceholder: "Your email",
  messagePlaceholder: "Your message",
  sendLabel: "Send message",
  confirmation: "Got it, thanks! I'll reply to your email soon.",
  failure: "That didn't send. Please email me directly below.",
  directLabel: "Or email me:",
  // Public Web3Forms access key from web3forms.com. While empty, the form opens the visitor's mail app.
  formKey: "",
  formEndpoint: "https://api.web3forms.com/submit",
};

export const resumeAction = "Download CV";

export const resumes = [
  { label: "iOS resume", href: "/Ehsan_Yaqoob_iOS_Developer.pdf", fileName: "Ehsan_Yaqoob_iOS_Developer.pdf" },
  { label: "Flutter resume", href: "/Ehsan_Yaqoob_Flutter_Developer.pdf", fileName: "Ehsan_Yaqoob_Flutter_Developer.pdf" },
];

export const seo = {
  url: "https://ehsanyaqoob.com",
  title: `${person.name} | ${person.role}`,
  description: `${person.name} is a mobile developer building native iOS apps with Swift and SwiftUI, and cross-platform apps with Flutter.`,
  ogImage: "/me.jpg",
  favicon: "/spaicon.png",
  twitter: "@iamehsanyaqoob",
  keywords: [
    "iOS Developer",
    "SwiftUI Developer",
    "Flutter Developer",
    "Mobile App Developer",
    "Ehsan Yaqoob Portfolio",
  ],
};

export const sections = {
  home: { id: "home", nav: "Home" },
  about: { id: "about", nav: "About", title: "About Me", subtitle: "Who I am and where I've been" },
  projects: { id: "projects", nav: "Projects", title: "Projects", subtitle: "Apps I've designed, built, and shipped" },
  skills: { id: "skills", nav: "Skills", title: "Skills", subtitle: "What I use to build and ship" },
  contact: { id: "contact", nav: "Contact" },
};

export const about = {
  headline: "iOS & Flutter Developer",
  paragraphs: [
    "I'm a mobile developer with 3+ years of production experience. I build natively in Swift and SwiftUI, and use Flutter when a product needs both platforms, with a focus on offline-first sync and clean architecture.",
    "I built and shipped Tally, Niyyah, and Mizan on my own, from first design to App Review. At the National Police Foundation, I'm the sole mobile developer on Digital Sergeant, used daily by 500+ Islamabad Traffic Police officers.",
  ],
};

export const education = [
  {
    title: "B.S. in Computer Science",
    place: "PMAS Arid Agriculture University, Islamabad",
    date: "2021 – 2025",
  },
  {
    title: "Certifications",
    place: "Flutter, Supabase Database & Auth, iOS App Development (ongoing)",
    date: "2023 – 2026",
  },
];

export const experience = [
  {
    title: "Mobile Developer (iOS & Flutter)",
    place: "National Police Foundation, Islamabad",
    date: "Apr 2024 – Present",
  },
  {
    title: "Flutter Developer Intern",
    place: "Logixsy Tech, Islamabad",
    date: "Jul 2023 – Sep 2023",
  },
];

export const platformSkills = [
  {
    title: "iOS Development",
    rows: [
      { label: "Language", items: ["Swift"] },
      { label: "UI", items: ["SwiftUI", "UIKit"] },
      { label: "Data", items: ["SwiftData", "Core Data"] },
      { label: "Async", items: ["Swift Concurrency", "Combine"] },
      { label: "System", items: ["WidgetKit", "Live Activities", "App Intents", "Core Location", "Notifications"] },
      { label: "Quality", items: ["XCTest", "Instruments"] },
    ],
  },
  {
    title: "Flutter Development",
    rows: [
      { label: "Language", items: ["Dart"] },
      { label: "UI", items: ["Flutter", "Custom widgets", "Animations"] },
      { label: "State", items: ["Riverpod", "Bloc", "GetX", "Provider"] },
      { label: "Data", items: ["Hive"] },
      { label: "Native", items: ["Platform channels", "ML Kit", "Google Maps"] },
      { label: "Quality", items: ["Unit tests", "Widget tests"] },
    ],
  },
];

export const sharedSkillsTitle = "Across both platforms";

export const sharedSkills = [
  { title: "Architecture", items: ["Clean Architecture", "MVVM", "Offline-first sync", "Design systems"] },
  { title: "Backend", items: ["Supabase", "Firebase", "Cloud Messaging", "REST APIs"] },
  { title: "Release & CI/CD", items: ["Fastlane", "GitHub Actions", "Shorebird", "App Store Connect", "TestFlight", "Play Console"] },
  { title: "Tools", items: ["Xcode", "Android Studio", "VS Code", "Git", "Figma", "Postman"] },
];

export interface Project {
  id: string;
  title: string;
  platform: "iOS" | "Flutter";
  status: "Live" | "In production" | "In development";
  brand: string;
  tagline: string;
  note: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  githubUrl?: string;
  frames: string[];
  frameHeight: number;
  appStoreUrl?: string;
  playStoreUrl?: string;
  role?: string;
  timeline?: string;
  architecture?: string;
  keyFeatures?: string[];
}

export const projects: Project[] = [
  {
    id: "tally",
    title: "Tally",
    platform: "iOS",
    status: "Live",
    brand: "#4F8CFF",
    note: "my newest app",
    tagline: "Tap the back of your iPhone twice and log an expense, without opening the app.",
    role: "Solo developer",
    timeline: "2026",
    problem: "Expense trackers ask you to open an app every time you spend, so most expenses never get logged.",
    solution:
      "Tap the phone twice, answer three quick questions, and the expense is saved through a custom Shortcut and a LiveActivityIntent.",
    architecture:
      "The app, widget, and Live Activity share one SwiftData store through an App Group, with a code-based light and dark design system shared across targets.",
    keyFeatures: [
      "Back Tap logging with no app launch",
      "Live Activity and home screen widget",
      "Monthly spending chart and calendar view",
      "Multi-currency support",
      "Free, with no paid tier",
    ],
    impact: "Tested on physical hardware and shipped solo from design to the App Store.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "App Intents", "WidgetKit", "ActivityKit"],
    appStoreUrl: "https://apps.apple.com/us/app/tally-log-expense/id6814942383",
    frames: [1, 2, 3, 4, 5, 6].map((n) => `/frames/tally-${n}.jpg`),
    frameHeight: 1558,
  },
  {
    id: "niyyah",
    title: "Niyyah",
    platform: "iOS",
    status: "Live",
    brand: "#22B8A0",
    note: "survived 3 App Review rejections",
    tagline: "A daily prayer tracker with GPS-based prayer times, streaks, and a Qibla compass.",
    role: "Solo developer",
    timeline: "2026",
    problem:
      "Existing prayer tracking apps were cluttered, ad-heavy, and lacked a modern, premium iOS-native feel.",
    solution:
      "A native Salah tracker with GPS-based prayer times, streak tracking, a monthly heatmap, a WidgetKit home screen widget, and local notifications.",
    architecture:
      "Offline-first with SwiftData, synced through Supabase RLS using a dirty-flag pattern and an enum-driven navigation state machine. Notifications run on a 5-day rolling window with a scenePhase top-up, replacing a fragile midnight reschedule.",
    keyFeatures: [
      "GPS-based prayer time calculation",
      "Streaks and a monthly habit heatmap",
      "Qibla compass with haptic feedback",
      "WidgetKit home screen widget",
      "Reliable local notifications",
    ],
    impact:
      "Shipped solo to the App Store, resolving three App Review rejection cycles to reach approval, and still getting regular updates.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "Supabase", "CoreLocation"],
    appStoreUrl: "https://apps.apple.com/pk/app/niyyah-daily-prayer-tracker/id6780566802",
    frames: [1, 2, 3, 4, 5, 6].map((n) => `/frames/niyyah-${n}.jpg`),
    frameHeight: 1558,
  },
  {
    id: "mizan",
    title: "Mizan",
    platform: "Flutter",
    status: "Live",
    brand: "#D0785C",
    note: "live on both stores",
    tagline: "A finance ledger for Pakistani freelancers, with PKR/USD conversion and FBR tax calculation.",
    role: "Solo developer",
    timeline: "2026",
    problem:
      "Pakistani freelancers faced unique financial tracking issues: volatile PKR/USD conversion rates and complex local FBR (Federal Board of Revenue) tax brackets.",
    solution:
      "A single offline-first ledger that handles PKR/USD conversion, FBR tax brackets, and PDF export, then syncs to Supabase.",
    architecture:
      "Structured using Flutter Clean Architecture, with Hive for encrypted, high-performance local storage.",
    keyFeatures: [
      "Live and cached PKR/USD currency conversion",
      "Automated FBR tax bracket calculations",
      "On-device PDF invoice generation",
      "Encrypted local Hive database",
      "Biometric app locking",
    ],
    impact: "Designed, built, and shipped solo to both the App Store and Play Store.",
    techStack: ["Flutter", "Riverpod", "Hive", "Supabase"],
    appStoreUrl: "https://apps.apple.com/us/app/mizan-freelancer-ledger/id6780952991",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mizanapp.freelancer",
    frames: [4, 2, 3, 1].map((n) => `/frames/mizan-${n}.jpg`),
    frameHeight: 1321,
  },
  {
    id: "dsa",
    title: "Digital Sergeant",
    platform: "Flutter",
    status: "In production",
    brand: "#2F6FDE",
    note: "used daily by 500+ officers",
    tagline: "The E-Challan system in production with 500+ Islamabad Traffic Police officers.",
    role: "Sole mobile developer",
    timeline: "2024 – Present",
    problem:
      "Traffic officers issued challans entirely on paper: a slow, error-prone process with no real-time database lookup.",
    solution:
      "A production Flutter app with ML Kit OCR for instant license plate scanning, live violation reporting, and offline-first handling for poor connectivity.",
    architecture:
      "Built on Clean Architecture, separating presentation, domain, and data layers. Over-the-air updates run through an optimized Shorebird pipeline, cut from 5 minutes to 20–40 seconds.",
    keyFeatures: [
      "On-device OCR for license plate scanning",
      "Real-time sync through REST APIs and Firebase",
      "Offline-first data queuing",
      "GPS-tagged violation tracking",
      "Role-based access control for officers",
    ],
    impact: "Deployed and actively maintained in live production for 500+ Islamabad Traffic Police officers.",
    techStack: ["Flutter", "GetX", "ML Kit OCR", "Firebase", "REST APIs"],
    frames: [2, 1, 3, 4, 5].map((n) => `/frames/dsa-${n}.jpg`),
    frameHeight: 1240,
  },
  {
    id: "padel-app",
    title: "Padel App",
    platform: "Flutter",
    status: "In development",
    brand: "#E5393A",
    note: "in the works right now",
    tagline: "A real-time court booking platform for padel clubs and players.",
    role: "Mobile Developer",
    timeline: "Dec 2025 – Present",
    problem: "Padel clubs managed court reservations manually, resulting in double bookings and scheduling conflicts.",
    solution:
      "The Flutter client plus a Next.js admin dashboard with owner and admin portals, integrated with a Laravel backend alongside a backend engineer.",
    architecture: "The backend API powers real-time state sync, resolving race conditions for court booking.",
    keyFeatures: [
      "Real-time court booking",
      "Slot availability tracking",
      "In-app payments",
      "Google Maps-based court discovery",
      "Role-based UI for players and club owners",
    ],
    impact: "In active development, targeting a Play Store release.",
    techStack: ["Flutter", "Provider", "Google Maps", "Laravel API", "Next.js"],
    frames: [2, 1, 3, 4, 5].map((n) => `/frames/padel-${n}.jpg`),
    frameHeight: 1241,
  },
];
