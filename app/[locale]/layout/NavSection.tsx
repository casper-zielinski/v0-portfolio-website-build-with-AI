import React from "react";
import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import LanguageSwitchButton from "@/components/LanguageSwitchButton";
import HomeButton from "@/components/HomeButton";
import NavLink from "@/components/NavLink";
import { sections } from "../info/sections";
import MobileMenu from "@/components/MobileMenu";

{
  /* Navigation */
}
const NavSection = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <HomeButton />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section, index) => (
              <NavLink section={section} isMobile={false} key={index} />
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeSwitchButton
              className={"text-black dark:text-white cursor-pointer"}
              whileHoverScale={1.1}
              whileTapScale={0.95}
              whileTapTranslateY={0}
            />

            {/* Langauge Switcher */}
            <LanguageSwitchButton />
          </div>

          {/* Mobile Menu */}
          <MobileMenu>
            <div className="flex flex-col justify-around">
              {sections.map((section, index) => (
                <NavLink isMobile section={section} key={index} />
              ))}
            </div>
            <ThemeSwitchButton
              className="flex items-center justify-between px-3 py-2"
              whileHoverScale={1}
              whileTapScale={1}
              whileTapTranslateY={-3.5}
            />
            <LanguageSwitchButton />
          </MobileMenu>
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
