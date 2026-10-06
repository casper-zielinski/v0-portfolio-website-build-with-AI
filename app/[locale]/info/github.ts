// Values of a GitHub card that are already translated, like title, image src, etc.
export interface GitHubCard {
  header: string;
  headerSecondary: string;
  src: string;
  srcDark: string;
  alt: string;
}

// Static part of a GitHub card; `key` points to the texts in messages/*.json under "github"
export interface GitHubCardConfig {
  key: "contributionSnake" | "stats" | "repositories";
  src: string;
  srcDark: string;
}

const SNAKE =
  "https://raw.githubusercontent.com/casper-zielinski/casper-zielinski/output/github-contribution-grid-snake.svg";

// Order matters: the first card is displayed full width
export const githubCards: GitHubCardConfig[] = [
  {
    key: "contributionSnake",
    src: SNAKE,
    srcDark: SNAKE,
  },
  {
    key: "stats",
    src: "/GitHubStats-Light.svg",
    srcDark: "/GitHubStats-Dark.svg",
  },
  {
    key: "repositories",
    src: "https://streak-stats.demolab.com?user=casper-zielinski&fire=1E90FF&ring=1E90FF&currStreakLabel=1E90FF&hide_border=true",
    srcDark:
      "https://streak-stats.demolab.com?user=casper-zielinski&theme=github-dark-blue&hide_border=true",
  },
];
