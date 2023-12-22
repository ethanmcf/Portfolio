/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
// next.config.js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};
