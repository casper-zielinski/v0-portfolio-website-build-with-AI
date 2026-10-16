import NavSection from "../layout/NavSection";
import Footer from "../layout/Footer";
import CertificatesPage from "../layout/CertificatesPage";
import ThemeProviderContext from "../hooks/ThemeProviderContext";

export default function Certificates() {
  return (
    <div className="scrollbar-hide min-h-screen bg-background overflow-x-hidden text-black dark:text-white">
      <ThemeProviderContext>
        <NavSection />
        <CertificatesPage />
        <Footer />
      </ThemeProviderContext>
    </div>
  );
}
