import NavSection from "./layout/NavSection";
import Herosection from "./layout/Herosection";
import AboutSection from "./layout/AboutSection";
import SkillSection from "./layout/SkillSection";
import ProjectsSection from "./layout/ProjectsSection";
import ContactSection from "./layout/ContactSection";
import Footer from "./layout/Footer";

export default function Portfolio() {
  return (
    <div
      className="scrollbar-hide min-h-screen bg-background overflow-x-hidden text-black dark:text-white"
    >
      {/* Nav Section */}
      <NavSection />
      {/* Hero Section */}
      <Herosection />
      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
