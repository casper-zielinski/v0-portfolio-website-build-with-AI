"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("about");
  return (
    <section id="about" className="py-20 bg-muted/30">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-pretty">
              {t("description")}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">{t("student")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">{t("focus")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">
                  {t("problemSolver")}
                </span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring" }}
            >
              <Button
                variant="outline"
                size="default"
                asChild
                className="text-lg px-8 py-6 bg-transparent"
              >
                <a
                  href="/Casper_Daniel_Zielinski_Lebenslauf.pdf"
                  download="Casper_Zielinski_CV.pdf"
                >
                  {t("downloadCV")}
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ scale: { duration: 0.3 }, opacity: { duration: 1 } }}
          >
            <Card className="p-3 pb-5 max-w-sm transition-all hover:shadow-2xl focus:shadow-2xl md:scale-110 lg:scale-125 xl:scale-150">
              <CardHeader >
                <p className="text-center font-bold">{t("githubContributions")}</p>
                <p className="text-center text-sm text-gray-400">{t("githubContributionsSecondary")}</p>
              </CardHeader>
              <CardContent>
                <Image
                  src={
                    "https://raw.githubusercontent.com/casper-zielinski/casper-zielinski/output/github-contribution-grid-snake.svg"
                  }
                  alt="Github Contributions with Snake"
                  width={4000}
                  height={4000}
                  className="scale-125 md:scale-y-150 p-1 rounded-2xl"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
