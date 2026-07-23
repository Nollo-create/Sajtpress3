import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Privremeno: portfolio slike se učitavaju sa starog sajta.
    // Kasnije ih preuzeti u public/portfolio/ (vidi docs/portfolio.md).
    remotePatterns: [
      { protocol: "https", hostname: "sajtpress.rs" },
      { protocol: "https", hostname: "www.sajtpress.rs" },
    ],
  },
};

export default nextConfig;
