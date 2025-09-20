import { Code, Database, Globe, Smartphone } from "lucide-react";

export const translations = {
    EN: {
      nav: ["Home", "About", "Skills", "Projects", "Contact"],
      hero: {
        tagline: "Aspiring Developer & Problem Solver",
        intro:
          "Computer Science student at FH Joanneum passionate about creating innovative web and mobile applications.",
        cta1: "View Projects",
        cta2: "Contact Me",
      },
      about: {
        title: "About Me",
        description:
          "I am a dedicated Computer Science student at FH Joanneum with a passion for web and app development. I enjoy solving complex problems and creating user-friendly applications that make a difference.",
      },
      skills: {
        title: "Skills & Technologies",
      },
      projects: {
        title: "Featured Projects",
      },
      contact: {
        title: "Get In Touch",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message",
        },
      },
    },
    DE: {
      nav: ["Startseite", "Über mich", "Fähigkeiten", "Projekte", "Kontakt"],
      hero: {
        tagline: "Angehender Entwickler & Problemlöser",
        intro:
          "Informatikstudent an der FH Joanneum mit Leidenschaft für innovative Web- und Mobile-Anwendungen.",
        cta1: "Projekte ansehen",
        cta2: "Kontakt",
      },
      about: {
        title: "Über mich",
        description:
          "Ich bin ein engagierter Informatikstudent an der FH Joanneum mit einer Leidenschaft für Web- und App-Entwicklung. Ich löse gerne komplexe Probleme und erstelle benutzerfreundliche Anwendungen.",
      },
      skills: {
        title: "Fähigkeiten & Technologien",
      },
      projects: {
        title: "Ausgewählte Projekte",
      },
      contact: {
        title: "Kontakt aufnehmen",
        form: {
          name: "Name",
          email: "E-Mail",
          message: "Nachricht",
          send: "Nachricht senden",
        },
      },
    },
    PL: {
      nav: ["Główna", "O mnie", "Umiejętności", "Projekty", "Kontakt"],
      hero: {
        tagline: "Początkujący Programista i Rozwiązywacz Problemów",
        intro:
          "Student informatyki na FH Joanneum z pasją do tworzenia innowacyjnych aplikacji webowych i mobilnych.",
        cta1: "Zobacz Projekty",
        cta2: "Kontakt",
      },
      about: {
        title: "O mnie",
        description:
          "Jestem zaangażowanym studentem informatyki na FH Joanneum z pasją do rozwoju aplikacji webowych i mobilnych. Lubię rozwiązywać złożone problemy i tworzyć przyjazne użytkownikowi aplikacje.",
      },
      skills: {
        title: "Umiejętności i Technologie",
      },
      projects: {
        title: "Wybrane Projekty",
      },
      contact: {
        title: "Skontaktuj się",
        form: {
          name: "Imię",
          email: "Email",
          message: "Wiadomość",
          send: "Wyślij wiadomość",
        },
      },
    },
  };

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
      description: "Modern restaurant website with online ordering system",
      tech: ["Bootstrap", "React", "TypeScript", "Firebase", "Express.js"],
      image: "/modern-restaurant-website.png",
      projectlink: "https://restaurant-bootstrap-gamma.vercel.app/",
      githublink: "https://github.com/casper-zielinski/Restaurant-Bootstrap",
    },
    {
      title: "Issue Tracker",
      description:
        "Full-stack issue tracking application for project management",
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
    {
      title: "Social Media App with AI",
      description: "AI-powered social media platform with intelligent features",
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
  ];