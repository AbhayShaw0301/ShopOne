/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "plus.unsplash.com",
      },
      {
        hostname:"images.unsplash.com"
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
