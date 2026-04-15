import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.insidehook.com" },
      { protocol: "https", hostname: "venetosecrets.com" },
      { protocol: "https", hostname: "preview.redd.it" },
      { protocol: "https", hostname: "i.redd.it" },
      { protocol: "https", hostname: "cdn.mos.cms.futurecdn.net" },
      { protocol: "https", hostname: "www.cooperhewitt.org" },
    ],
  },
};

export default nextConfig;
