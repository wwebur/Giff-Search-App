/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    api_key: process.env.API_KEY,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "media0.giphy.com",
      "media1.giphy.com",
      "media2.giphy.com",
      "media3.giphy.com",
      "media4.giphy.com",
      "giphy.com",
    ],
  },
};

module.exports = nextConfig;
