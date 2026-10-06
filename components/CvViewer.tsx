"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
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
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);

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
        className="flex justify-center bg-white p-2 sm:p-6 max-h-[80vh] overflow-auto"
      >
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
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
              pageNumber={page}
              width={width - 16}
              className="shadow-lg"
            />
          )}
        </Document>
      </div>

      {numPages > 1 && (
        <div className="flex items-center justify-center gap-4 border-t border-primary/20 p-3">
          <Button
            variant="outline"
            size="icon"
            aria-label={t("cvPrevPage")}
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
          >
            <ChevronLeft />
          </Button>
          <span className="text-sm text-muted-foreground">
            {t("cvPage", { current: page, total: numPages })}
          </span>
          <Button
            variant="outline"
            size="icon"
            aria-label={t("cvNextPage")}
            disabled={page >= numPages}
            onClick={() => setPage((p) => p + 1)}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CvViewer;
