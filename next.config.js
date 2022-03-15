/* eslint-disable unicorn/prefer-module */
/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "src/styles/variables.scss";`,
  },
};
const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
