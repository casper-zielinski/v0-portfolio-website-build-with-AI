"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { projects } from "../Info";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const ProjectsSection = () => {
  const router = useRouter();
  const t = useTranslations("projects");

  return (
    <section id="projects" className="py-20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.94 }}
              initial={{ opacity: 0, translateY: -5 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                scale: { duration: 0.3 },
                opacity: { duration: 1, type: "spring" },
                translateY: { duration: 1.6, type: "spring" },
              }}
              viewport={{ once: true }}
              key={index}
            >
              <Card
                className={`overflow-hidden hover:shadow-xl transition-shadow group ${
                  index === 1 && "bg-white/10 dark:bg-black scale-101 md:scale-105 lg:scale-110"
                }`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-accent dark:bg-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: 1.05, translateY: -2 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group bg-transparent cursor-pointer dark:hover:bg-primary"
                      onClick={() => router.push(project.projectlink)}
                    >
                      {t("viewProject")}
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, translateY: -2 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group bg-transparent cursor-pointer dark:hover:bg-secondary"
                      onClick={() => router.push(project.githublink)}
                    >
                      {t("viewCode")}
                      <Github className="w-4 h-4 ml-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
