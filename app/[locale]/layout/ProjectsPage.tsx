"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAllProjects } from "../Info";

const ProjectsPage = () => {
  const locale = useLocale();
  const t = useTranslations("projects");
  const t_smartkasse = useTranslations("projects.smartKasse");
  const t_social = useTranslations("projects.socialMediaApp");
  const t_issue = useTranslations("projects.issueTracker");
  const t_blink = useTranslations("projects.blink");
  const t_restaurant = useTranslations("projects.restaurant");
  const t_tags = useTranslations("projects.tags");

  const projects = getAllProjects(
    t,
    t_smartkasse,
    t_social,
    t_issue,
    t_blink,
    t_restaurant,
  );

  return (
    <motion.main
      className="pt-32 pb-20"
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("backToHome")}
        </Link>

        <div className="text-center mb-16">
          <h1 className="font-display text-3xl sm:text-4xl font-normal tracking-wide mb-4 text-balance">
            {t("title")}
          </h1>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="h-full overflow-hidden hover:shadow-xl bg-primary/20 dark:bg-black/60 transition-shadow group"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4 flex flex-col flex-1">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag.key}
                      variant="outline"
                      className="text-xs rounded-full border-primary/50 text-primary"
                    >
                      {t_tags(tag.key, { count: tag.count ?? 0 })}
                    </Badge>
                  ))}
                </div>
                <p className="font-semibold">
                  {project.description}
                </p>
                <p className="text-sm">{project.details}</p>
                <div>
                  <h3 className="text-sm font-semibold mb-2">
                    {t("features")}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto space-y-4 pt-2">
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
                  {project.projectlink && (
                    <motion.div whileHover={{ scale: 1.05, translateY: -2 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full group bg-transparent cursor-pointer dark:hover:bg-primary"
                      >
                        <a href={project.projectlink}>
                          {t("viewProject")}
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </motion.div>
                  )}
                  {[
                    {
                      href: project.githublink,
                      label: project.backendlink
                        ? t("viewFrontendCode")
                        : t("viewCode"),
                    },
                    ...(project.backendlink
                      ? [
                          {
                            href: project.backendlink,
                            label: t("viewBackendCode"),
                          },
                        ]
                      : []),
                  ].map((link) => (
                    <motion.div
                      key={link.href}
                      whileHover={{ scale: 1.05, translateY: -2 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full group bg-transparent cursor-pointer dark:hover:bg-secondary"
                      >
                        <a href={link.href}>
                          {link.label}
                          <Github className="w-4 h-4 ml-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default ProjectsPage;
