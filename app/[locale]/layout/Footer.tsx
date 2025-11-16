"use client";

import { motion } from "motion/react";
import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const tNav = useTranslations("navigation");
  return (
    <footer className="pt-12">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
      >
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">{t("copyright")}</p>
          <div
            className="flex justify-center flex-wrap gap-x-2 gap-y-1 sm:gap-x-4"
            role="navigation"
            aria-label={t("navigationAria")}
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#home"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label={tNav("home")}
            >
              {tNav("home")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label={tNav("about")}
            >
              {tNav("about")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#skills"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label={tNav("skills")}
            >
              {tNav("skills")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label={tNav("projects")}
            >
              {tNav("projects")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label={tNav("contact")}
            >
              {tNav("contact")}
            </motion.a>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="mt-3 md:mt-5"
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        role="img"
        aria-label={t("dividerAlt")}
      >
        <img
          src="/divider-sailing-boat.svg"
          alt={t("dividerAlt")}
          className="w-screen h-44"
          loading="lazy"
          aria-hidden="false"
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
