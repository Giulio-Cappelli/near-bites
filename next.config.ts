import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/near-bites" : "",
  assetPrefix: isProd ? "/near-bites/" : "",
  output: "export",
  reactStrictMode: true,
  images: {
    path: "/",
  },
};

export default nextConfig;
