"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { useCertificatesCards } from "../hooks/useCertificatesCards";

const CertificatesSection = () => {
  const t = useTranslations("certificates");
  const certificates = useCertificatesCards();

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="font-display text-3xl sm:text-4xl font-normal tracking-wide mb-4 text-balance"
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("title")}
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
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
              <Card className="h-full overflow-hidden hover:shadow-xl bg-primary/20 dark:bg-black/60 transition-shadow group">
                <div className="overflow-hidden">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={1100}
                    height={806}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold">{certificate.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {certificate.issuer} · {certificate.issuedLabel}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {certificate.description}
                  </p>
                  <div className="mt-auto space-y-4 pt-2">
                    <motion.div whileHover={{ scale: 1.05, translateY: -2 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full group bg-transparent cursor-pointer dark:hover:bg-primary"
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
                    <motion.div whileHover={{ scale: 1.05, translateY: -2 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full group bg-transparent cursor-pointer dark:hover:bg-secondary"
                      >
                        <a href={certificate.pdf} download>
                          {t("downloadPdf")}
                          <Download className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
