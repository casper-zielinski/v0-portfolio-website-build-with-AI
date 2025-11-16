"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import { useThemeContext } from "../hooks/ThemeProviderContext";
import { GitHubStats } from "@/constants/GithubStats";

const GitHubSection = () => {
  //   const t = useTranslations("github");

  const { getCurrentTheme, mounted } = useThemeContext();

  return (
    <section className="py-20">
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
            {"Github"}
          </motion.h2>
        </div>
        <div className="grid grid-cols-6 gap-6 place-content-center place-items-center">
          {GitHubStats(
            "Github Contributions",
            "Meine Github Contributions in einem Snake game",
            "https://raw.githubusercontent.com/casper-zielinski/casper-zielinski/output/github-contribution-grid-snake.svg",
            "https://raw.githubusercontent.com/casper-zielinski/casper-zielinski/output/github-contribution-grid-snake.svg",
            "Meine Github Statistiken",
            "Meine Github Statistiken mit verschiedenen Rekorden, Commits Anzahl, Commit Streak, etc.",
            "https://camo.githubusercontent.com/caa8dd949e7bacbf669fd87f42d8a5bf1622a22ca5ff1e6e1e8f047bc79e0ef5/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6361737065722d7a69656c696e736b69267468656d653d6461726b26686964655f626f726465723d7472756526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565",
            "https://camo.githubusercontent.com/caa8dd949e7bacbf669fd87f42d8a5bf1622a22ca5ff1e6e1e8f047bc79e0ef5/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6361737065722d7a69656c696e736b69267468656d653d6461726b26686964655f626f726465723d7472756526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565",
            "Meine GitHub Repositorys",
            "Die Github Repositorys wo ich am meisten Contributed habe",
            "https://camo.githubusercontent.com/e2067d79e47803ae825e155c71367dc967ca06836fd5e27ad81efa64cad25a21/68747470733a2f2f6769746875622d636f6e7472696275746f722d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6361737065722d7a69656c696e736b69266c696d69743d35267468656d653d6461726b26636f6d62696e655f616c6c5f796561726c795f636f6e747269627574696f6e733d74727565",
            "https://camo.githubusercontent.com/e2067d79e47803ae825e155c71367dc967ca06836fd5e27ad81efa64cad25a21/68747470733a2f2f6769746875622d636f6e7472696275746f722d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6361737065722d7a69656c696e736b69266c696d69743d35267468656d653d6461726b26636f6d62696e655f616c6c5f796561726c795f636f6e747269627574696f6e733d74727565"
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
                    ? "p-3 pb-5 h-[37vh] lg:h-[30vh] md:scale-x-175"
                    : "h-[40vh]"
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
                    alt="Github Contributions with Snake"
                    width={4000}
                    height={4000}
                    className={`${
                      index === 0
                        ? "scale-x-115 scale-y-300 md:scale-y-200 mt-6"
                        : "translate-y-1 scale-x-101 rounded border-1 dark:border-0 border-primary"
                    }`}
                    // p-1 rounded-2xl
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
