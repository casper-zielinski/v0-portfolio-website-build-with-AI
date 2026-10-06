"use client";

import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import ThemeSwitchButton from "@/components/ThemeSwitchButton";

{
  /* Navigation */
}
const NavSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("");
  const router = useRouter();
  const base = `/${useLocale()}`;
  const t = useTranslations("navigation");

  function setLanguagePage(path: string) {
    setLanguage(path);
    router.push(path);
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="font-bold text-xl text-primary cursor-pointer hover:bg-gray-300 hover:shadow dark:hover:bg-accent p-2 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push(`${base}#home`)}
          >
            Casper Zielinski
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              layoutId="underline"
              id="underline"
              href={`${base}#home`}
              className="text-muted-foreground hover:text-primary transition-color"
            >
              {t("home")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`${base}#about`}
              className="text-muted-foreground hover:text-primary transition-color"
            >
              {t("about")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`${base}#skills`}
              className="text-muted-foreground hover:text-primary transition-color"
            >
              {t("skills")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`${base}#projects`}
              className="text-muted-foreground hover:text-primary transition-color"
            >
              {t("projects")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`${base}#github`}
              className="text-muted-foreground hover:text-primary transition-color"
            >
              {"Github"}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`${base}#contact`}
              className="text-muted-foreground hover:text-primary transition-color"
            >
              {t("contact")}
            </motion.a>
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{t("openLanguageMenu")}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{t("selectLanguage")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={language}
                  onValueChange={(e) => setLanguagePage(e)}
                >
                  <DropdownMenuRadioItem value="/de" className="cursor-pointer">
                    Deutsch
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="/en" className="cursor-pointer">
                    English
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="/pl" className="cursor-pointer">
                    Polski
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <motion.a
              whileHover={{ translateY: -2.5 }}
              href={`${base}#home`}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-muted-foreground hover:text-primary transition-color"
            >
              {t("home")}
            </motion.a>
            <motion.a
              whileHover={{ translateY: -2.5 }}
              href={`${base}#about`}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {t("about")}
            </motion.a>
            <motion.a
              whileHover={{ translateY: -2.5 }}
              href={`${base}#skills`}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {t("skills")}
            </motion.a>
            <motion.a
              whileHover={{ translateY: -2.5 }}
              href={`${base}#projects`}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {t("projects")}
            </motion.a>
            <motion.a
              whileHover={{ translateY: -2.5 }}
              href={`${base}#github`}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {"Github"}
            </motion.a>
            <motion.a
              whileHover={{ translateY: -2.5 }}
              href={`${base}#contact`}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {t("contact")}
            </motion.a>
            <ThemeSwitchButton
              className="flex items-center justify-between px-3 py-2"
              whileHoverScale={1}
              whileTapScale={1}
              whileTapTranslateY={-3.5}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{t("openLanguageMenu")}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{t("selectLanguage")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={language}
                  onValueChange={(e) => setLanguagePage(e)}
                  className="p-2"
                >
                  <DropdownMenuRadioItem value="/de" className="cursor-pointer">
                    Deutsch
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="/en" className="cursor-pointer">
                    English
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="/pl" className="cursor-pointer">
                    Polski
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavSection;
