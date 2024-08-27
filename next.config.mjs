import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh5.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh6.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh4.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "streetviewpixels-pa.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Add this to ensure data files are included in the build
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  // You can keep optimizeFonts if needed
  optimizeFonts: true,
};

export default nextConfig;
