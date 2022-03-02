/** @type {import('next').NextConfig} */

const path = require("path");
const nextConfig = {
  reactStrictMode: true,
};
const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
