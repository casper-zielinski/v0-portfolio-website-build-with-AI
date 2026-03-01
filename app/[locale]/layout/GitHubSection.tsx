"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import { useThemeContext } from "../hooks/ThemeProviderContext";
import { GitHubStats } from "@/constants/GithubStats";
import { useTranslations } from "next-intl";

const GitHubSection = () => {
  const t = useTranslations("github");

  const { getCurrentTheme, mounted } = useThemeContext();

  return (
    <section className="py-20" id="github">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("title")}
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-content-center place-items-center">
          {GitHubStats(
            t("contributionSnake.title"),
            t("contributionSnake.description"),
            "https://raw.githubusercontent.com/casper-zielinski/casper-zielinski/output/github-contribution-grid-snake.svg",
            "https://raw.githubusercontent.com/casper-zielinski/casper-zielinski/output/github-contribution-grid-snake.svg",
            t("contributionSnake.altText"),
            t("stats.title"),
            t("stats.description"),
            "GitHubStats-Light.svg",
            "GitHubStats-Dark.svg",
            t("stats.altText"),
            t("repositories.title"),
            t("repositories.description"),
            "GitContributer-Light.svg",
            "GitContributer-Dark.svg",
            t("repositories.altText")
          ).map((CurrentCard, index) => (
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
                className={`w-full h-full transition-all hover:shadow-2xl focus:shadow-2xl p-2 sm:p-4`}
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
