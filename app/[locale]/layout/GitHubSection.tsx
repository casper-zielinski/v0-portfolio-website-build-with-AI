"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import { useThemeContext } from "../hooks/ThemeProviderContext";
import { useGitHubCards } from "../hooks/useGitHubCards";
import { useTranslations } from "next-intl";

const GitHubSection = () => {
  const t = useTranslations("github");
  const githubCards = useGitHubCards();

  const { getCurrentTheme, mounted } = useThemeContext();

  return (
    <section className="py-20" id="github">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="font-display text-3xl sm:text-4xl font-normal tracking-wide mb-4 text-balance"
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("title")}
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-content-center place-items-center">
          {githubCards.map((CurrentCard, index) => (
            <motion.div
              className={`col-span-1 ${
                index === 0 ? "md:col-span-2" : "md:col-span-1"
              }`}
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              transition={{
                scale: { duration: 0.3 },
                opacity: { duration: 1 },
              }}
            >
              <Card
                className={`w-full h-full transition-all hover:shadow-2xl focus:shadow-2xl p-2 sm:p-4 dark:bg-black/60`}
              >
                <CardHeader>
                  <p className="text-center font-bold">{CurrentCard.header}</p>
                  <p className="text-center text-sm text-gray-400">
                    {CurrentCard.headerSecondary}
                  </p>
                </CardHeader>
                <CardContent>
                  <Image
                    src={
                      mounted && getCurrentTheme() === "dark"
                        ? CurrentCard.srcDark
                        : CurrentCard.src
                    }
                    alt={CurrentCard.alt}
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg scale-110"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
