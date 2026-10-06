export interface ProjectTag {
  key: string;
  count?: number;
}

// Translated project as it is displayed by the cards
export interface Project {
  title: string;
  description: string;
  details: string;
  features: string[];
  tech: string[];
  image: string;
  tags: ProjectTag[];
  projectlink: string;
  githublink: string;
  backendlink?: string;
}

// Static part of a project; `key` points to the texts in messages/*.json under "projects"
// Tag labels live in messages/*.json under projects.tags
export interface ProjectConfig {
  key:
    "smartKasse" | "socialMediaApp" | "issueTracker" | "blink" | "restaurant";
  // projects shown in the main page section; all of them are shown on the projects page
  featured: boolean;
  tech: string[];
  image: string;
  tags: ProjectTag[];
  projectlink: string;
  githublink: string;
  backendlink?: string;
}

// Order matters: it is the display order
export const projectCards: ProjectConfig[] = [
  {
    key: "smartKasse",
    featured: true,
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
    tags: [
      { key: "fhInternship" },
      { key: "team", count: 4 },
      { key: "scrum" },
      { key: "greenKait" },
      { key: "startupPrototype" },
      { key: "webMobile" },
    ],
    projectlink: "https://smart-kassa.vercel.app/",
    githublink: "https://github.com/zynqly-smartkassa/smart-kassa",
  },
  {
    key: "socialMediaApp",
    featured: true,
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
    tags: [{ key: "personal" }, { key: "web" }],
    projectlink: "https://social-media-web-app-weld.vercel.app/",
    githublink: "https://github.com/casper-zielinski/Social-Media-Web-App",
  },
  {
    key: "issueTracker",
    featured: true,
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "DaisyUI",
      "Tailwind CSS",
    ],
    image: "/issue-tracker-dashboard.png",
    tags: [{ key: "personal" }, { key: "web" }],
    projectlink: "https://issue-tracker-pearl-alpha.vercel.app/",
    githublink: "https://github.com/casper-zielinski/Issue-Tracker",
  },
  {
    key: "blink",
    featured: false,
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design 3",
      "Android",
      "Firebase",
      "Cloudinary",
    ],
    image: "/Blink-Mobile-App.jpeg",
    tags: [{ key: "fhProject" }, { key: "mobile" }, { key: "team", count: 2 }],
    projectlink: "",
    githublink: "https://github.com/casper-zielinski/Blink-Social-Media-App",
  },
  {
    key: "restaurant",
    featured: false,
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
    tags: [{ key: "personal" }, { key: "web" }],
    projectlink: "https://restaurant-bootstrap-gamma.vercel.app/",
    githublink: "https://github.com/casper-zielinski/Restaurant-Bootstrap",
    backendlink:
      "https://github.com/casper-zielinski/Restaurant-Bootstrap-Backend",
  },
];
