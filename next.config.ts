import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/portfolio.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
