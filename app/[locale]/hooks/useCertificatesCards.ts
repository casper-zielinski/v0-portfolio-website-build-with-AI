import { useFormatter, useTranslations } from "next-intl";
import { certificateCards, Certificate } from "../info/certificates";

const useTranslatedCertificates = (): Certificate[] => {
  const t = useTranslations("certificates");
  const format = useFormatter();

  return certificateCards.map(({ key, issued, featured: _featured, ...certificate }) => ({
    ...certificate,
    title: t(`items.${key}.title`),
    description: t(`items.${key}.description`),
    issuer: t(`items.${key}.issuer`),
    issuedLabel: issued
      ? t("issued", {
          date: format.dateTime(new Date(issued), { dateStyle: "long" }),
        })
      : undefined,
  }));
};

/**
 * @returns the featured certificates shown in the certificates section of the main page
 */
export const useCertificatesCards = (): Certificate[] => {
  const all = useTranslatedCertificates();
  return all.filter((_, i) => certificateCards[i].featured);
};

/**
 * @returns all certificates shown on the certificates page
 */
export const useAllCertificatesCards = (): Certificate[] =>
  useTranslatedCertificates();
