import {
  Code,
  Database,
  Globe,
  Smartphone,
  GitBranch,
  Server,
} from "lucide-react";

export const skills = [
  { name: "TypeScript", category: "Programming Languages", icon: Code },
  { name: "Java", category: "Programming Languages", icon: Code },
  { name: "Python", category: "Programming Languages", icon: Code },
  { name: "SQL", category: "Query Languages", icon: Database },
  { name: "React", category: "Libraries", icon: Globe },
  { name: "Next.js", category: "Frameworks", icon: Globe },
  { name: "Express.js", category: "Frameworks", icon: Server },
  { name: "Node.js", category: "Runtime", icon: Server },
  { name: "Capacitor", category: "Mobile", icon: Smartphone },
  { name: "PostgreSQL", category: "Databases", icon: Database },
  { name: "Firebase", category: "Backend Services", icon: Database },
  { name: "Supabase", category: "Backend Services", icon: Database },
  { name: "Git", category: "Tools", icon: GitBranch },
  { name: "Spring Boot", category: "Frameworks", icon: Server },
  { name: "Kotlin", category: "Programming Languages", icon: Code },
  { name: "Jetpack Compose", category: "Mobile", icon: Smartphone },
];

export const getProjects = (
  t: (key: string) => string,
  t_restaurant: (key: string) => string,
  t_social: (key: "title" | "description") => string,
  t_issue: (key: "title" | "description") => string,
) => [
  {
    title: t_restaurant("title"),
    description: t_restaurant("description"),
    tech: ["Bootstrap", "React", "TypeScript", "Responsive Design"],
    image: "/modern-restaurant-website.png",
    projectlink: "https://restaurant-bootstrap-gamma.vercel.app/",
    githublink: "https://github.com/casper-zielinski/Restaurant-Bootstrap",
  },
  {
    title: t_social("title"),
    description: t_social("description"),
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
    title: t_issue("title"),
    description: t_issue("description"),
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
