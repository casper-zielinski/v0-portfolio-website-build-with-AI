import type { Config } from "tailwindcss";

const config: Config = {
  // ... deine config
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"), // ← Hinzufügen
  ],
};

export default config;