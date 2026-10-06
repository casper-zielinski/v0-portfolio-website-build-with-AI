"use client";

import { motion } from "motion/react";
import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/app/[locale]/hooks/ThemeProviderContext";

const ThemeSwitchButton = ({
  className,
  whileHoverScale,
  whileTapScale,
  whileTapTranslateY,
}: {
  className: string;
  whileHoverScale: number;
  whileTapScale: number;
  whileTapTranslateY: number;
}) => {
  const { getCurrentTheme, toggleTheme, mounted } = useThemeContext();

  return (
    <motion.div
      whileHover={{ scale: whileHoverScale }}
      whileTap={{ scale: whileTapScale, translateY: whileTapTranslateY }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        title="Theme-Switcher"
        className={className}
      >
        {mounted ? (
          getCurrentTheme() === "dark" ? (
            <Moon />
          ) : (
            <Sun />
          )
        ) : (
          <div className="rounded-4xl bg-accent animate-pulse w-6 h-6" />
        )}
      </Button>
    </motion.div>
  );
};

export default ThemeSwitchButton;
