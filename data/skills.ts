export interface SkillItem {
  name: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Mobile Development",
    items: [
      { name: "Flutter", link: "https://flutter.dev" },
      { name: "Dart", link: "https://dart.dev" },
      { name: "Android", link: "https://developer.android.com" },
      { name: "iOS", link: "https://developer.apple.com/ios/" },
      { name: "React Native", link: "https://reactnative.dev" },
      { name: "Kotlin", link: "https://kotlinlang.org" },
      { name: "Java", link: "https://docs.oracle.com/en/java/" },
      { name: "Objective-C", link: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html" },
    ],
  },
  {
    title: "State Management & Architecture",
    items: [
      { name: "GetX", link: "https://pub.dev/packages/get" },
      { name: "Bloc", link: "https://bloclibrary.dev" },
      { name: "Provider", link: "https://pub.dev/packages/provider" },
      { name: "MVC" },
      { name: "MVVM" },
      { name: "Clean Architecture", link: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Firebase", link: "https://firebase.google.com" },
      { name: "REST APIs", link: "https://restfulapi.net" },
      { name: "GraphQL", link: "https://graphql.org" },
      { name: "Node.js", link: "https://nodejs.org" },
      { name: "Socket.io", link: "https://socket.io" },
    ],
  },
  {
    title: "Databases & Storage",
    items: [
      { name: "SQLite", link: "https://www.sqlite.org" },
      { name: "Hive", link: "https://pub.dev/packages/hive" },
      { name: "Shared Preferences", link: "https://pub.dev/packages/shared_preferences" },
      { name: "Realm", link: "https://realm.io" },
      { name: "IndexedDB", link: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" },
    ],
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Git", link: "https://git-scm.com" },
      { name: "GitHub", link: "https://github.com" },
      { name: "CI/CD" },
      { name: "JIRA", link: "https://www.atlassian.com/software/jira" },
      { name: "Postman", link: "https://www.postman.com" },
      { name: "Android Studio", link: "https://developer.android.com/studio" },
      { name: "VS Code", link: "https://code.visualstudio.com" },
    ],
  },
  {
    title: "Testing & Methodologies",
    items: [
      { name: "Unit Testing" },
      { name: "UI Testing" },
      { name: "Agile", link: "https://agilemanifesto.org" },
      { name: "Scrum", link: "https://www.scrum.org" },
      { name: "SOLID Principles", link: "https://en.wikipedia.org/wiki/SOLID" },
    ],
  },
];