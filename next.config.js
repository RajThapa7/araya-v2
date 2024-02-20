/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "instagram.fktm10-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "instagram.fktm7-1.fna.fbcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
