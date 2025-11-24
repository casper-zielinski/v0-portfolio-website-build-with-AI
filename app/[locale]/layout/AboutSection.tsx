"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useThemeContext } from "../hooks/ThemeProviderContext";

const AboutSection = () => {
  const t = useTranslations("about");
  const { getCurrentTheme, mounted } = useThemeContext();

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
            <Card className="p-0 pt-7 dark:bg-black bg-white max-w-sm transition-all hover:shadow-2xl focus:shadow-2xl md:scale-110 lg:scale-125">
              <CardHeader>
                <p className="text-center font-bold">
                  {t("mostUsedLanguages.title")}
                </p>
                <p className="text-center text-sm text-gray-400">
                  {t("mostUsedLanguages.description")}
                </p>
              </CardHeader>
              <CardContent className="p-0 pb-0 pt-0">
                <Image
                  src={
                    mounted
                      ? getCurrentTheme() === "dark"
                        ? "https://camo.githubusercontent.com/a6dd7124d800bdedb476ecfb55a812530befc309909f91cde130610bc23e732b/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d6361737065722d7a69656c696e736b69267468656d653d6461726b26686964655f626f726465723d7472756526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565266c61796f75743d636f6d70616374"
                        : "https://github-readme-stats.vercel.app/api/top-langs/?username=casper-zielinski&hide_border=true&include_all_commits=true&count_private=true&layout=compact"
                      : "https://camo.githubusercontent.com/a6dd7124d800bdedb476ecfb55a812530befc309909f91cde130610bc23e732b/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d6361737065722d7a69656c696e736b69267468656d653d6461726b26686964655f626f726465723d7472756526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565266c61796f75743d636f6d70616374"
                  }
                  alt={t("mostUsedLanguages.altText")}
                  width={350}
                  height={350}
                  className={`translate-y-1 scale-x-101 rounded border-1 dark:border-0 border-primary`}
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
