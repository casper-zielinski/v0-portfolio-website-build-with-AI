import NavSection from "./layout/NavSection";
import Herosection from "./layout/Herosection";
import AboutSection from "./layout/AboutSection";
import SkillSection from "./layout/SkillSection";
import ProjectsSection from "./layout/ProjectsSection";
import ContactSection from "./layout/ContactSection";
import Footer from "./layout/Footer";
import GitHubSection from "./layout/GitHubSection";
import ThemeProviderContext from "./hooks/ThemeProviderContext";

export default function Portfolio() {
  return (
    <div className="scrollbar-hide min-h-screen bg-background overflow-x-hidden text-black dark:text-white">
      <ThemeProviderContext>
        {/* Nav Section */}
        <NavSection />
        {/* Hero Section */}
        <Herosection />
        {/* About Section */}
        <AboutSection />
        {/* Projects Section */}
        <ProjectsSection />
        {/* Skills Section */}
        <SkillSection />
        {/* GitHub Section */}
        <GitHubSection />
        {/* Contact Section */}
        <ContactSection />
        {/* Footer */}
        <Footer />
      </ThemeProviderContext>
    </div>
  );
}
