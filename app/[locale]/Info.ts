import { Code, Database, Globe, Smartphone } from "lucide-react";

export const skills = [
  { name: "JavaScript", category: "Programming Languages", icon: Code },
  { name: "TypeScript", category: "Programming Languages", icon: Code },
  { name: "Java", category: "Programming Languages", icon: Code },
  { name: "SQL", category: "Query Languages", icon: Database },
  { name: "React", category: "Libraries", icon: Globe },
  { name: "Next.js", category: "Frameworks", icon: Globe },
  { name: "JavaFX", category: "Frameworks", icon: Smartphone },
  { name: "Firebase", category: "Backend Services", icon: Database },
  { name: "Supabase", category: "Backend Services", icon: Database },
];

export const projects = [
  {
    title: "Restaurant Website",
    description:
      "Modern restaurant landing page with interactive menu, reservation system, location map, and contact forms",
    tech: ["Bootstrap", "React", "TypeScript", "Responsive Design"],
    image: "/modern-restaurant-website.png",
    projectlink: "https://restaurant-bootstrap-gamma.vercel.app/",
    githublink: "https://github.com/casper-zielinski/Restaurant-Bootstrap",
  },
  {
    title: "Social Media App with AI",
    description:
      "Interactive social platform with real-time posts, comments, nested replies, and live like updates. Features authentication and guest login",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "DaisyUI",
      "Tailwind",
      "Firebase",
      "Redux",
    ],
    image: "/ai-social-media-app.png",
    projectlink: "https://social-media-web-app-weld.vercel.app/",
    githublink: "https://github.com/casper-zielinski/Social-Media-Web-App",
  },
  {
    title: "Issue Tracker",
    description:
      "Project management tool for tracking issues, bugs, and tasks with status management, priority levels, and user assignments",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "DaisyUI",
      "Tailwind CSS",
    ],
    image: "/issue-tracker-dashboard.png",
    projectlink: "https://issue-tracker-pearl-alpha.vercel.app/",
    githublink: "https://github.com/casper-zielinski/Issue-Tracker",
  },
];
