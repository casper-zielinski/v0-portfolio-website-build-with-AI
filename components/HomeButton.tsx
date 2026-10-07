"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useLocale } from "next-intl";

const HomeButton = () => {
  const router = useRouter();
  const base = `/${useLocale()}`;

  return (
    <motion.div
      className="font-bold text-xl text-primary cursor-pointer hover:bg-gray-300 hover:shadow dark:hover:bg-accent p-2 rounded"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.push(`${base}#home`)}
    >
      Casper Zielinski
    </motion.div>
  );
};

export default HomeButton;
