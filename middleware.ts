import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "de", "pl"],
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  matcher: ["/", "/(de|en|pl)/:path*"],
};
