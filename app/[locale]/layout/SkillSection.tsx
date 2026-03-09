"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { skills } from "../Info";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronUp } from "lucide-react";

const VISIBLE_COUNT = 9;

const SkillSection = () => {
  const t = useTranslations("skills");
  const [expanded, setExpanded] = useState(false);

  const visibleSkills = expanded ? skills : skills.slice(0, VISIBLE_COUNT);

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
          {visibleSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <AnimatePresence key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, translateY: -3 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: -3 }}
                  viewport={{ once: true }}
                  transition={{
                    scale: { duration: 0.3 },
                    opacity: { duration: 0.4 },
                    translateY: { duration: 0.4 },
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
              </AnimatePresence>
            );
          })}
        </div>

        {skills.length > VISIBLE_COUNT && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => setExpanded(!expanded)}
              className="gap-2 cursor-pointer"
            >
              {expanded ? t("showLess") : t("showAll")}
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillSection;
