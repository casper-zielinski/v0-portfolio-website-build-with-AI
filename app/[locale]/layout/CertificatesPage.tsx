"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, User } from "lucide-react";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAllCertificatesCards } from "../hooks/useCertificatesCards";

const CertificatesPage = () => {
  const t = useTranslations("certificates");
  const locale = useLocale();
  const certificates = useAllCertificatesCards();

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
          <ArrowLeft className="ml-4 w-4 h-4" />
          {t("backToHome")}
        </Link>

        <div className="text-center mb-16">
          <h1 className="font-display text-3xl sm:text-4xl font-normal tracking-wide mb-4 text-balance">
            {t("title")}
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-8 p-2 lg:p-0">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl bg-primary/20 dark:bg-black/60 transition-shadow group">
                <div
                  className={`overflow-hidden ${
                    certificate.imageCrop ? "aspect-4/3 bg-white" : ""
                  }`}
                >
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={certificate.imageWidth}
                    height={certificate.imageHeight}
                    className={`w-full group-hover:scale-105 transition-transform duration-300 ${
                      certificate.imageCrop
                        ? "h-full object-cover scale-150 group-hover:scale-155"
                        : "h-auto"
                    }`}
                  />
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold">{certificate.title}</h2>
                  <p className="text-sm text-black/90 dark:text-white/90">
                    {[certificate.issuer, certificate.issuedLabel]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  <p className="text-black/80 dark:text-white/60 text-sm">
                    {certificate.description}
                  </p>
                  <div className="mt-auto space-y-4 pt-2">
                    {certificate.link && (
                      <motion.div whileHover={{ scale: 1.05, translateY: -2 }}>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full group bg-primary/30 cursor-pointer dark:hover:bg-primary"
                        >
                          <a
                            href={certificate.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t("viewBadge")}
                            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {certificate.profileLink && (
                      <motion.div whileHover={{ scale: 1.05, translateY: -2 }}>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full group bg-primary/60 cursor-pointer dark:hover:bg-primary"
                        >
                          <a
                            href={certificate.profileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t("viewProfile")}
                            <User className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    {certificate.pdf && (
                      <motion.div whileHover={{ scale: 1.05, translateY: -2 }}>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full group bg-secondary cursor-pointer dark:hover:bg-secondary"
                        >
                          <a href={certificate.pdf} download>
                            {t("downloadPdf")}
                            <Download className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default CertificatesPage;
