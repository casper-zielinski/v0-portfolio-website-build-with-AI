import NavSection from "../layout/NavSection";
import Footer from "../layout/Footer";
import ProjectsPage from "../layout/ProjectsPage";
import ThemeProviderContext from "../hooks/ThemeProviderContext";

export default function Projects() {
  return (
    <div className="scrollbar-hide min-h-screen bg-background overflow-x-hidden text-black dark:text-white">
      <ThemeProviderContext>
        <NavSection />
        <ProjectsPage />
        <Footer />
      </ThemeProviderContext>
    </div>
  );
}
