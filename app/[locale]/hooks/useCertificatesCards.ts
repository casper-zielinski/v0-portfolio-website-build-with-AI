import { useFormatter, useTranslations } from "next-intl";
import { certificateCards, Certificate } from "../info/certificates";

/**
 * Combines the static certificate data (links, images, date) from info/certificates.ts
 * with the translated texts of the "certificates" namespace.
 * @returns the certificates in display order
 */
export const useCertificatesCards = (): Certificate[] => {
  const t = useTranslations("certificates");
  const format = useFormatter();

  return certificateCards.map(({ key, issuer, issued, image, link, pdf }) => ({
    title: t(`items.${key}.title`),
    description: t(`items.${key}.description`),
    issuer,
    issuedLabel: t("issued", {
      date: format.dateTime(new Date(issued), { dateStyle: "long" }),
    }),
    image,
    link,
    pdf,
  }));
};
