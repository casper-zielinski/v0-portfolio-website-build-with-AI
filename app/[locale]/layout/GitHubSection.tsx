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
        <div className="grid grid-cols-6 gap-6 place-content-center place-items-center">
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
              className={`col-span-6 ${index === 0 ? "" : "md:col-span-3"}`}
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
                className={`max-w-sm transition-all hover:shadow-2xl focus:shadow-2xl  ${
                  index === 0
                    ? "p-3 pb-5 min-h-[300px] h-[37vh] lg:h-[30vh] lg:min-h-[280px] md:scale-x-175"
                    : "h-[50vh] min-h-[350px] lg:h-[40vh] lg:min-h-[260px]"
                }`}
              >
                {/* md:scale-110 lg:scale-125 xl:scale-150 */}
                <CardHeader className={index === 0 ? "md:scale-x-60" : ""}>
                  <p className="text-center font-bold">{CurrentCard.header}</p>
                  <p className="text-center text-sm text-gray-400">
                    {CurrentCard.headerSecondary}
                  </p>
                </CardHeader>
                <CardContent className={index === 0 ? "" : "p-0 pb-0 pt-0"}>
                  <Image
                    src={
                      mounted && getCurrentTheme() === "dark"
                        ? CurrentCard.srcDark
                        : CurrentCard.src
                    }
                    alt={CurrentCard.alt}
                    width={4000}
                    height={4000}
                    className={`${
                      index === 0
                        ? "scale-x-115 scale-y-300 md:scale-y-200 mt-6"
                        : "translate-y-1 scale-x-101 rounded border-1 dark:border-0 border-primary"
                    }`}
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
