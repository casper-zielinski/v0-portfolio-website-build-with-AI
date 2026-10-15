"use client";

import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Polyfill for browsers lacking Promise.withResolvers (used by pdf.js)
if (typeof Promise.withResolvers !== "function") {
  (Promise as any).withResolvers = function () {
    let resolve!: (v: unknown) => void;
    let reject!: (r?: unknown) => void;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const CvViewer = ({ file }: { file: string }) => {
  const t = useTranslations("about");
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) =>
      setWidth(Math.min(entry.contentRect.width, 900))
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rounded-xl border border-primary/30 bg-white shadow-xl overflow-hidden">
      <div
        ref={containerRef}
        className="flex justify-center bg-white p-2 sm:p-6 h-[45vh] md:h-[70vh] min-h-[250px] max-h-[55vh] md:max-h-[1000px] xl:max-h-[1200px] resize-y overflow-auto"
      >
        <Document
          file={file}
          loading={
            <div className="flex items-center gap-2 py-20 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              {t("cvLoading")}
            </div>
          }
          error={
            <p className="py-20 text-destructive">{t("cvError")}</p>
          }
        >
          {width && (
            <Page
              pageNumber={1}
              width={width - 16}
              className="shadow-lg"
            />
          )}
        </Document>
      </div>
    </div>
  );
};

export default CvViewer;
