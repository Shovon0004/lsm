import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com,unsplash.com",
      },
    ],
  },
};

export default nextConfig;
