// Translated certificate as it is displayed by the cards
export interface Certificate {
  title: string;
  description: string;
  issuer: string;
  issuedLabel: string;
  image: string;
  link: string;
  pdf: string;
}

// Static part of a certificate; `key` points to the texts in messages/*.json under "certificates.items"
export interface CertificateConfig {
  key: "aiFluencyForBuilders";
  issuer: string;
  // ISO date, formatted by the hook depending on the locale
  issued: string;
  image: string;
  link: string;
  pdf: string;
}

// Order matters: it is the display order
export const certificateCards: CertificateConfig[] = [
  {
    key: "aiFluencyForBuilders",
    issuer: "Claude Academy",
    issued: "2026-10-01",
    image: "/claude-academy-badge-ai-fluency-for-builders.jpg",
    link: "https://academy.claude.com/badges/20c1c73c-9e8c-43d5-910e-37980ffdfd0c",
    pdf: "/claude-academy-badge-ai-fluency-for-builders.pdf",
  },
];
