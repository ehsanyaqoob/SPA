"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";
export interface Experience {
  id: number;
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
    id: 1,
    title: "Flutter Developer",
    company: "National Police Foundation",
    location: "Islamabad, Pakistan",
    startDate: "Jul 2023",
    endDate: "Present",
    description: [
      "Developed and deployed cross-platform mobile apps using Flutter for law enforcement operations",
      "Integrated Firebase backend services and REST APIs for real-time data synchronization",
      "Improved application performance by 25% using state management techniques (GetX)",
      "Reduced deployment time by implementing CI/CD pipelines with automated testing",
      "Collaborated with stakeholders to gather requirements and deliver timely updates"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "GetX", "CI/CD", "Git"]
  },
  {
    id: 2,
    title: "Software Development Intern",
    company: "Tech Solutions",
    location: "Islamabad, Pakistan",
    startDate: "Jan 2023",
    endDate: "Jun 2023",
    description: [
      "Assisted in designing and developing REST API features and fixing bugs",
      "Improved workflows with Git, GitHub Actions, and Agile collaboration",
      "Enhanced UI responsiveness and reduced build times by 20%",
      "Participated in sprint planning, code reviews, and testing activities",
      "Supported automated deployment processes"
    ],
    technologies: ["Flutter", "REST APIs", "Git", "GitHub Actions", "Agile", "CI/CD"]
  },
  {
    id: 3,
    title: "Flutter Intern",
    company: "Freelance Projects",
    location: "Islamabad, Pakistan",
    startDate: "Sep 2022",
    endDate: "Dec 2022",
    description: [
      "Built reusable UI widgets and responsive screens with Flutter",
      "Integrated Firebase Authentication and Firestore for user management",
      "Debugged and optimized app performance for smooth user experience",
      "Worked with team members on UX/UI improvements",
      "Delivered functional prototypes for client demos"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "UI/UX", "Widgets", "Prototyping"]
  }
];