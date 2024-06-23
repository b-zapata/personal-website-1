/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/personal-website-1/",
  assetPrefix: "/personal-website-1/",
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;