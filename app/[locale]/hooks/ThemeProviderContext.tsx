"use client";

import Cookies from "js-cookie";
import { useTheme } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

interface useThemeProviderProps {
  children: React.ReactNode;
}

interface useThemeProviderContext {
  toggleTheme: () => void;
  getCurrentTheme: () => string | undefined;
  mounted: boolean;
}

/**
 * Context zum Switchen von Themes + Zum nutzen von Componenten die sich ändern wenn sich die Theme ändert
 */
const ThemeContext = createContext<useThemeProviderContext | undefined>(
  undefined
);

// Provider Komponente
const ThemeProviderContext = ({ children }: useThemeProviderProps) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (theme) Cookies.set("theme", theme, { expires: 365, sameSite: "Lax" });
  }, [theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    Cookies.set("theme", next, { expires: 365, sameSite: "Lax" });
  };

  const getCurrentTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    return currentTheme;
  };

  return (
    <ThemeContext.Provider value={{ mounted, toggleTheme, getCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook zum Nutzen des Context's
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProviderContext");
  }
  return context;
};

export default ThemeProviderContext;