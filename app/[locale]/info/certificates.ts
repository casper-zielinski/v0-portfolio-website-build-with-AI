// Translated certificate as it is displayed by the cards
export interface Certificate {
  title: string;
  description: string;
  issuer: string;
  issuedLabel?: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  // crops the image to the center, for screenshots with a lot of empty space around the badge
  imageCrop?: boolean;
  link?: string;
  profileLink?: string;
  pdf?: string;
}

// Static part of a certificate; `key` points to the texts in messages/*.json under "certificates.items"
export interface CertificateConfig {
  key: "aiFluencyForBuilders" | "ecdlStandard" | "googleDeveloperProgram";
  // ISO date, formatted by the hook depending on the locale
  issued?: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageCrop?: boolean;
  // optional online verification / badge page
  link?: string;
  // optional link to the profile the badge belongs to
  profileLink?: string;
  pdf?: string;
}

// Order matters: it is the display order
export const certificateCards: CertificateConfig[] = [
  {
    key: "aiFluencyForBuilders",
    issued: "2026-10-01",
    image: "/claude-academy-badge-ai-fluency-for-builders.jpg",
    imageWidth: 3300,
    imageHeight: 2417,
    link: "https://academy.claude.com/badges/20c1c73c-9e8c-43d5-910e-37980ffdfd0c",
    pdf: "/claude-academy-badge-ai-fluency-for-builders.pdf",
  },
  {
    key: "ecdlStandard",
    issued: "2021-12-26",
    image: "/ECDL_Standard_Certificate.png",
    imageWidth: 1380,
    imageHeight: 707,
    pdf: "/ECDL_Standard_Certificate.pdf",
  },
  {
    key: "googleDeveloperProgram",
    image: "/compose_esentials.png",
    imageWidth: 737,
    imageHeight: 692,
    imageCrop: true,
    link: "https://developers.google.com/profile/badges/playlists/android/jetpack-compose-for-android-developers-1?u=casper-zielinski&hl=pl",
    profileLink: "https://g.dev/casper-zielinski",
  },
];
