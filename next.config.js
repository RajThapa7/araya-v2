/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
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
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "itti.com.np",
      },
      {
        protocol: "https",
        hostname: "swiperjs.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "transvelo.github.io",
      },
      {
        protocol: "https",
        hostname: "www.apple.com",
      },
    ],
  },
};

module.exports = nextConfig;
