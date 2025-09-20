"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun, X, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { motion } from "motion/react";
{
  /* Navigation */
}
const NavSection = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="font-bold text-xl text-primary cursor-pointer hover:bg-gray-300 hover:shadow dark:hover:bg-accent p-2 rounded"
            whileHover={{scale: 1.1}}
            onClick={() => router.push("/#home")}
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
              href="#home"
              className="text-muted-foreground hover:text-primary transition-color"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="text-muted-foreground hover:text-primary transition-color"
            >
              About
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#skills"
              className="text-muted-foreground hover:text-primary transition-color"
            >
              Skills
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-color"
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-color"
            >
              Contact
            </motion.a>
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
                title={`Current theme: ${theme}`}
                className="text-black dark:text-white cursor-pointer"
              >
                {currentTheme === "dark" ? <Moon /> : <Sun />}
              </Button>
            </motion.div>
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
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-muted-foreground hover:text-primary transition-color"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ translateY: -2.5 }}
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </motion.a>
            <motion.a
              whileHover={{ translateY: -2.5 }}
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </motion.a>
            <motion.a
              whileHover={{ translateY: -2.5 }}
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ translateY: -2.5 }}
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </motion.a>
            <motion.div className="flex items-center justify-between px-3 py-2" whileHover={{translateY: -3.5}} whileTap={{scale: 1.01}}>
              <Button
                variant="ghost"
                size="sm"
                className="border cursor-pointer"
                onClick={() =>
                  setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
                title={`Current theme: ${theme}`}
              >
                {currentTheme === "dark" ? <Moon /> : <Sun />}
              </Button>
            </motion.div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavSection;
