import { useTranslations } from "next-intl";
import { projectCards, Project } from "../info/projects";

/**
 * Combines the static project data (tech, links, images) from info/projects.ts
 * with the translated texts of the "projects" namespace.
 */
const useTranslatedProjects = (): (Project & { featured: boolean })[] => {
  const t = useTranslations("projects");

  return projectCards.map(({ key, ...project }) => ({
    ...project,
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    details: t(`${key}.details`),
    features: t.raw(`${key}.features`) as string[],
  }));
};

/**
 * @returns the featured projects shown in the projects section of the main page
 */
export const useProjectsCards = (): Project[] =>
  useTranslatedProjects().filter((project) => project.featured);

/**
 * @returns all projects shown on the projects page
 */
export const useAllProjectsCards = (): Project[] => useTranslatedProjects();
