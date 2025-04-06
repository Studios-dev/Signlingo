import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  reactStrictMode: true,
  experimental: {
    viewTransition: true,
  }
};

export default nextConfig;
