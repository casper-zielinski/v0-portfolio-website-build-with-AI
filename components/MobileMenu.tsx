"use client";

import { X, Menu } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import { Button } from "./ui/button";

const MobileMenu = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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

      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border"
          onClick={(e) => {
            // close the menu after a section link was clicked
            if ((e.target as HTMLElement).closest("a")) setIsMenuOpen(false);
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-2">{children}</div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
