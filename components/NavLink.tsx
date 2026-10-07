"use client";

import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const DesktopLink = ({
  section,
  isMobile,
}: {
  section: string;
  isMobile: boolean;
}) => {
  const base = `/${useLocale()}`;
  const t = useTranslations("navigation");

  return (
    <motion.a
      whileHover={{
        scale: isMobile ? 1 : 1.1,
        translateY: isMobile ? -2.5 : 0,
      }}
      whileTap={{ scale: isMobile ? 1 : 0.95 }}
      href={`${base}#${section}`}
      className={`text-muted-foreground hover:text-primary transition-color ${
        isMobile ? "block px-3 py-3" : ""
      }`}
    >
      {t(section)}
    </motion.a>
  );
};

export default DesktopLink;
