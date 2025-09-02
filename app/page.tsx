"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Menu,
  X,
  Moon,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState("green")
  const [language, setLanguage] = useState("EN")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "green"
    setTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (selectedTheme: string) => {
    document.documentElement.className = ""
    document.documentElement.classList.add(`theme-${selectedTheme}`)
  }

  const toggleTheme = () => {
    const themes = ["green", "blue", "dark"]
    const currentIndex = themes.indexOf(theme)
    const nextTheme = themes[(currentIndex + 1) % themes.length]
    setTheme(nextTheme)
    applyTheme(nextTheme)
    localStorage.setItem("theme", nextTheme)
  }

  const getThemeIcon = () => {
    switch (theme) {
      case "green":
        return <div className="w-4 h-4 bg-green-500 rounded-full" />
      case "blue":
        return <div className="w-4 h-4 bg-blue-500 rounded-full" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        return <Palette className="h-4 w-4" />
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const translations = {
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
        intro: "Informatikstudent an der FH Joanneum mit Leidenschaft für innovative Web- und Mobile-Anwendungen.",
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
        intro: "Student informatyki na FH Joanneum z pasją do tworzenia innowacyjnych aplikacji webowych i mobilnych.",
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
  }

  const t = translations[language as keyof typeof translations]

  const skills = [
    { name: "JavaScript", category: "Programming Languages", icon: Code },
    { name: "TypeScript", category: "Programming Languages", icon: Code },
    { name: "Java", category: "Programming Languages", icon: Code },
    { name: "SQL", category: "Programming Languages", icon: Database },
    { name: "React", category: "Libraries", icon: Globe },
    { name: "Next.js", category: "Frameworks", icon: Globe },
    { name: "JavaFX", category: "Frameworks", icon: Smartphone },
    { name: "Firebase", category: "Backend Services", icon: Database },
    { name: "Supabase", category: "Backend Services", icon: Database },
  ]

  const projects = [
    {
      title: "Restaurant Website",
      description: "Modern restaurant website with online ordering system",
      tech: ["Bootstrap", "React", "TypeScript", "Firebase", "Express.js"],
      image: "/modern-restaurant-website.png",
    },
    {
      title: "Issue Tracker",
      description: "Full-stack issue tracking application for project management",
      tech: ["Next.js", "React", "TypeScript", "Supabase", "shadcn/ui", "Tailwind CSS"],
      image: "/issue-tracker-dashboard.png",
    },
    {
      title: "Social Media App with AI",
      description: "AI-powered social media platform with intelligent features",
      tech: ["Next.js", "React", "TypeScript", "shadcn/ui", "Tailwind", "Firebase", "Redux"],
      image: "/ai-social-media-app.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">Casper Zielinski</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav[0]}
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav[1]}
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav[2]}
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav[3]}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav[4]}
              </a>
            </div>

            {/* Theme Toggle & Language Switcher */}
            <div className="hidden md:flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-background border border-border rounded px-2 py-1 text-sm"
              >
                <option value="EN">🇺🇸 EN</option>
                <option value="DE">🇩🇪 DE</option>
                <option value="PL">🇵🇱 PL</option>
              </select>
              <Button variant="ghost" size="sm" onClick={toggleTheme} title={`Current theme: ${theme}`}>
                {getThemeIcon()}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav[0]}
              </a>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav[1]}
              </a>
              <a
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav[2]}
              </a>
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav[3]}
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav[4]}
              </a>
              <div className="flex items-center justify-between px-3 py-2">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-background border border-border rounded px-2 py-1 text-sm"
                >
                  <option value="EN">🇺🇸 EN</option>
                  <option value="DE">🇩🇪 DE</option>
                  <option value="PL">🇵🇱 PL</option>
                </select>
                <Button variant="ghost" size="sm" onClick={toggleTheme}>
                  {getThemeIcon()}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                  Hi, I'm <span className="text-primary">Casper Zielinski</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground text-pretty">{t.hero.tagline}</p>
                <p className="text-lg text-muted-foreground max-w-2xl text-pretty">{t.hero.intro}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <a href="#projects">{t.hero.cta1}</a>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 bg-transparent">
                  <a href="#contact">{t.hero.cta2}</a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img
                    src="/casper-portrait.jpg"
                    alt="Casper Zielinski"
                    className="w-72 h-72 rounded-full object-cover border-4 border-background shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t.about.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{t.about.description}</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Student at FH Joanneum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Focus on Web & App Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Passionate Problem Solver</span>
                </div>
              </div>
            </div>

            <div className="hidden 2xl:flex justify-center">
              <Card className="p-8 max-w-sm">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Always Learning</h3>
                  <p className="text-muted-foreground text-sm">
                    Continuously exploring new technologies and best practices in software development.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t.skills.title}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.category}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t.projects.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group bg-transparent">
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t.contact.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">casper.zielinski.work@gmail.com</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <form className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium">{t.contact.form.name}</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium">{t.contact.form.email}</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-medium">{t.contact.form.message}</label>
                  <Textarea placeholder="Your message..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  {t.contact.form.send}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">© 2024 Casper Zielinski. All rights reserved.</p>
            <div className="flex justify-center flex-wrap gap-x-2 gap-y-1 sm:gap-x-4">
              <a href="#home" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                {t.nav[0]}
              </a>
              <a
                href="#about"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav[1]}
              </a>
              <a
                href="#skills"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav[2]}
              </a>
              <a
                href="#projects"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav[3]}
              </a>
              <a
                href="#contact"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav[4]}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
