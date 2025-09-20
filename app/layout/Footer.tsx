"use client";

import { motion } from "motion/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
      >
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            © 2024 Casper Zielinski. All rights reserved.
          </p>
          <div className="flex justify-center flex-wrap gap-x-2 gap-y-1 sm:gap-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#home"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#skills"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
