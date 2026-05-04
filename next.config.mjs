import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.demolab.com",
      },
      {
        protocol: "https",
        hostname: "streak-stats.demolab.com",
      },
    ],
  },
  output: process.env.MOBILE === "true" ? "export" : undefined,
  trailingSlash: true
};

export default withNextIntl(nextConfig);
