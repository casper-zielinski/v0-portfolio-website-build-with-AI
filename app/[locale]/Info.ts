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

type ProjectTranslator = {
  (key: any): string;
  raw: (key: any) => any;
};

export const getProjects = (
  t: (key: string) => string,
  t_smartkasse: ProjectTranslator,
  t_social: ProjectTranslator,
  t_issue: ProjectTranslator,
) => [
  {
    title: t_smartkasse("title"),
    description: t_smartkasse("description"),
    details: t_smartkasse("details"),
    features: t_smartkasse.raw("features") as string[],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Capacitor",
    ],
    image: "/Smart-Kassa-Dashboard.png",
    projectlink: "https://smart-kassa.vercel.app/",
    githublink: "https://github.com/zynqly-smartkassa/smart-kassa",
  },
  {
    title: t_social("title"),
    description: t_social("description"),
    details: t_social("details"),
    features: t_social.raw("features") as string[],
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
    details: t_issue("details"),
    features: t_issue.raw("features") as string[],
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

export type Project = {
  title: string;
  description: string;
  details: string;
  features: string[];
  tech: string[];
  image: string;
  projectlink: string;
  githublink: string;
  backendlink?: string;
};

export const getAllProjects = (
  t: ProjectTranslator,
  t_smartkasse: ProjectTranslator,
  t_social: ProjectTranslator,
  t_issue: ProjectTranslator,
  t_blink: ProjectTranslator,
  t_restaurant: ProjectTranslator,
): Project[] => [
  ...getProjects(t, t_smartkasse, t_social, t_issue),
  {
    title: t_blink("title"),
    description: t_blink("description"),
    details: t_blink("details"),
    features: t_blink.raw("features") as string[],
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design 3",
      "Android",
      "Firebase",
      "Cloudinary",
    ],
    image: "/Blink-Mobile-App.jpeg",
    projectlink: "",
    githublink: "https://github.com/casper-zielinski/Blink-Social-Media-App",
  },
  {
    title: t_restaurant("title"),
    description: t_restaurant("description"),
    details: t_restaurant("details"),
    features: t_restaurant.raw("features") as string[],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Bootstrap",
      "React Router",
      "Axios",
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "PostgreSQL",
    ],
    image: "/modern-restaurant-website.png",
    projectlink: "https://restaurant-bootstrap-gamma.vercel.app/",
    githublink: "https://github.com/casper-zielinski/Restaurant-Bootstrap",
    backendlink:
      "https://github.com/casper-zielinski/Restaurant-Bootstrap-Backend",
  },
];
