import { useTranslations } from "next-intl";
import { githubCards, GitHubCard } from "../info/github";

/**
 * Combines the static GitHub card data (links, image paths) from info/github.ts
 * with the translated texts of the "github" namespace.
 * @returns the GitHub cards in display order
 */
export const useGitHubCards = (): GitHubCard[] => {
  const t = useTranslations("github");

  return githubCards.map(({ key, src, srcDark }) => ({
    header: t(`${key}.title`),
    headerSecondary: t(`${key}.description`),
    src,
    srcDark,
    alt: t(`${key}.altText`),
  }));
};
