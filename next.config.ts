import type { NextConfig } from "next"

const isProduction = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  /* config options here */
  output: isProduction ? "export" : undefined,
  reactStrictMode: true,
  basePath: isProduction ? "/Portfolio" : "",
  assetPrefix: isProduction ? "/Portfolio" : "",
  images: { unoptimized: true },
}

module.exports = nextConfig
