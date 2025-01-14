import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf|mp4)$/,
      type: 'asset/resource'
    });
    return config;
  }
};

module.exports = nextConfig;
