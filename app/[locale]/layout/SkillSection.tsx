"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { skills } from "../Info";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const SkillSection = () => {
  const t = useTranslations("skills");
  return (
    <section id="skills" className="py-20 bg-muted dark:bg-muted/30">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                initial={{ opacity: 0, translateY: -3 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  scale: { duration: 0.3 },
                  opacity: { duration: 1, type: "spring" },
                  translateY: { duration: 1.6, type: "spring" },
                }}
              >
                <Card className="p-6 hover:shadow-lg bg-white dark:bg-zinc-950 transition-shadow group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
