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
 *   How would we work?    -> processSection
 *   How can I hire you?   -> availability, contact, contactSection, resumes
 *
 * RULES
 *   - Positioning: native iOS first, Flutter second. Say "iOS & Flutter" in that order.
 *   - Never hardcode a name, role, email, URL, skill, or heading in a component. Add it here.
 *   - One fact, one place, on the page too: a card, its case study, and the sections around it
 *     must not say the same thing twice. Derive repeated text from existing values.
 *   - Voice: mature and dry. A little sarcasm is welcome in notes, never in the facts.
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
 *   - Navigation is a floating pill. Order: Home, About, Projects, Skills, Process, Contact.
 *   - Contact is one tactile button that opens the project form, delivered by Web3Forms.
 *
 * WHERE TO CHANGE THINGS
 *   Title, years of experience, location  -> person
 *   Hero text                             -> hero
 *   Open or closed to work                -> availability.open
 *   Email, GitHub, LinkedIn, X            -> contact
 *   Contact text, form options, form key  -> contactSection
 *   How a project runs, common questions  -> processSection
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
  summary: "Shipping production apps since 2023, across native iOS and Flutter.",
};

export const hero = {
  greeting: "Hey, I'm",
  intro: "I'm a Software Engineer. I build native iOS apps with Swift and SwiftUI, and cross-platform apps with Flutter.",
  photoNote: "that's me",
};

export const availability = {
  open: true,
  label: "Available for new projects",
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
  lead: "Tell me what it is, and I'll tell you honestly whether I'm the right person for it.",
  startAction: "Start a project",
  startNote: "takes about a minute",
  formNote: "let's hear it",
  formTitle: "What are you building?",
  formIntro: "A few details help me see the product, the scope, and how soon it needs to exist.",
  nameLabel: "Name",
  emailLabel: "Email",
  messageLabel: "What are you looking to build?",
  messagePlaceholder: "What it does, who it's for, and what already exists.",
  timelineLabel: "Expected timeline",
  timelineOptions: ["Within a month", "1–3 months", "3+ months", "Still exploring"],
  budgetLabel: "Approximate budget",
  budgetOptions: ["Under $5K", "$5K–$10K", "$10K–$20K", "$20K+", "Not sure yet"],
  selectPlaceholder: "Select one",
  sendLabel: "Continue",
  closeLabel: "Close",
  emailSubject: "New project enquiry from your portfolio",
  sentNote: "got it",
  sentTitle: "Your response has been submitted.",
  sentText: "Thanks. I'll read it properly and reply to",
  mailTitle: "Your mail app should now be open.",
  mailText: "Your details are filled in there. Press send and it reaches me.",
  failure: "That didn't send. Please email me directly at",
  directLabel: "Or email me:",
  // Public Web3Forms access key from web3forms.com. While empty, the form opens the visitor's mail app.
  formKey: "49e1856e-58ec-4763-ac9e-21938a7f9c41",
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
  process: { id: "process", nav: "Process", title: "Process", subtitle: "Four stops, and something real to show at each one" },
  contact: { id: "contact", nav: "Contact" },
};

export const processSection = {
  outcomeLabel: "You get",
  steps: [
    {
      note: "first, we talk",
      title: "Scope it",
      text: "We pin down who it's for, what version one does, and what it can live without. Most apps improve here, by losing features.",
      outcome: "A written scope and a quote",
    },
    {
      note: "then, on screen",
      title: "Design it",
      text: "You see the main screens in Figma before I write code. Changing a screen is cheap. Changing a shipped app isn't.",
      outcome: "Screens you can click through",
    },
    {
      note: "then, on your phone",
      title: "Build it",
      text: "Native Swift or Flutter, whichever suits the product. You follow progress on your own phone, not through status reports.",
      outcome: "Test builds as it comes together",
    },
    {
      note: "finally, in the store",
      title: "Ship it",
      text: "I handle store submission. App Review rejected one of my apps three times, so I know where it bites.",
      outcome: "A live app, and the code",
    },
  ],
  questionsTitle: "Still wondering?",
  questionsNote: "fair enough",
  questions: [
    {
      question: "How long will my app take?",
      answer: "It depends on the scope, so I'd rather give you a real estimate after we've defined it than a flattering one now.",
    },
    {
      question: "Should it be native iOS or Flutter?",
      answer: "If it's iPhone-first and leans on widgets, Live Activities, or Shortcuts, native. If you need iOS and Android on one budget, Flutter. I ship both, so I have no reason to push either.",
    },
    {
      question: "Can you start right away?",
      answer: "Tell me your timeline in the form and you'll get a straight answer on whether I can meet it.",
    },
    {
      question: "Who owns the code?",
      answer: "You do, once the project is paid for.",
    },
    {
      question: "What happens after launch?",
      answer: "I can stay on for fixes and updates. We agree what that looks like before launch, so nobody is surprised later.",
    },
    {
      question: "What do you need from me to start?",
      answer: "A clear idea of who the app is for and what it must do. Rough notes are fine. A polished pitch deck is optional.",
    },
  ],
};

export const about = {
  headline: "Mobile Developer",
  paths: "./iOS ./Flutter",
  paragraphs: [
    "I'm an iOS-focused mobile developer, shipping production apps since 2023 in Flutter and now natively in Swift. Whether I'm working solo or on a team, I stay with a product from first design through App Review and the updates after launch.",
    "My own apps started with everyday problems, like tracking prayers and working out freelance taxes. Right now I'm going deeper on SwiftUI and SwiftData, and moving toward full-stack iOS development.",
  ],
};

export const education = [
  {
    title: "B.S. in Computer Science",
    place: "PMAS Arid Agriculture University",
    date: "2021 – 2025",
    note: "Four years of theory. Production explained the rest.",
  },
  {
    title: "Certifications",
    place: "Flutter, Supabase Database & Auth, iOS App Development (ongoing)",
    date: "2023 – 2026",
    note: "Proof I read the docs. Shipping is the better proof.",
  },
];

export const experience = [
  {
    title: "Mobile Developer (iOS & Flutter)",
    place: "National Police Foundation",
    date: "Apr 2024 – Present",
    note: "My users carry badges, so bug reports get taken seriously.",
  },
  {
    title: "Flutter Developer Intern",
    place: "Logixsy Tech",
    date: "Jul 2023 – Sep 2023",
    note: "Where I learned \"works on my machine\" doesn't ship.",
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
      "A custom Shortcut and a LiveActivityIntent do the logging, so recording an expense takes three quick answers.",
    architecture:
      "The app, widget, and Live Activity share one SwiftData store through an App Group, with a code-based light and dark design system shared across targets.",
    keyFeatures: [
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
      "A focused Salah tracker built natively for iPhone, designed to feel at home on the platform.",
    architecture:
      "Offline-first with SwiftData, synced through Supabase RLS using a dirty-flag pattern and an enum-driven navigation state machine. Notifications run on a 5-day rolling window with a scenePhase top-up, replacing a fragile midnight reschedule.",
    keyFeatures: [
      "Monthly habit heatmap",
      "Haptic feedback on the compass",
      "WidgetKit home screen widget",
      "Prayer reminders that fire on time",
    ],
    impact:
      "Live on the App Store, built solo, and still getting regular updates.",
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
    note: "because spreadsheets aren't a tax strategy",
    tagline: "A finance ledger for Pakistani freelancers, with PKR/USD conversion and FBR tax calculation.",
    role: "Solo developer",
    timeline: "2026",
    problem:
      "Pakistani freelancers faced unique financial tracking issues: volatile PKR/USD conversion rates and complex local FBR (Federal Board of Revenue) tax brackets.",
    solution:
      "One offline-first ledger that keeps income, tax, and invoices together, then syncs to Supabase.",
    architecture:
      "Structured using Flutter Clean Architecture, with Hive for encrypted, high-performance local storage.",
    keyFeatures: [
      "Live and cached exchange rates",
      "On-device PDF invoices",
      "Encrypted local Hive database",
      "Biometric app lock",
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
    note: "paper challans, retired",
    tagline: "The E-Challan system in production with 500+ Islamabad Traffic Police officers.",
    role: "Sole mobile developer",
    timeline: "2024 – Present",
    problem:
      "Traffic officers issued challans entirely on paper: a slow, error-prone process with no real-time database lookup.",
    solution:
      "A production Flutter app that replaces the paperwork with live scanning and reporting, and keeps working on poor connections.",
    architecture:
      "Built on Clean Architecture, separating presentation, domain, and data layers.",
    keyFeatures: [
      "On-device OCR for license plate scanning",
      "Real-time sync through REST APIs and Firebase",
      "Offline-first data queuing",
      "GPS-tagged violation tracking",
      "Role-based access control for officers",
    ],
    impact: "Sole mobile developer, with over-the-air updates cut from 5 minutes to 20–40 seconds.",
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
    note: "double bookings, not for much longer",
    tagline: "A real-time court booking platform for padel clubs and players.",
    role: "Mobile Developer",
    timeline: "Dec 2025 – Present",
    problem: "Padel clubs managed court reservations manually, resulting in double bookings and scheduling conflicts.",
    solution:
      "The Flutter client plus a Next.js admin dashboard with owner and admin portals, integrated with a Laravel backend alongside a backend engineer.",
    architecture: "The backend API powers real-time state sync, resolving race conditions for court booking.",
    keyFeatures: [
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
