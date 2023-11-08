/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_ASSET_PREFIX,
};

module.exports = nextConfig;
