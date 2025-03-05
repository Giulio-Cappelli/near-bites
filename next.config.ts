import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/near-bites" : "",
  assetPrefix: isProd ? "/near-bites/" : "",
};

const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
