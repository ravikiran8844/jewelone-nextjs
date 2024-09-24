/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // trailingSlash: true,
  // images: { unoptimized: true },

  images: {
    // Define the widths (in pixels) to be used for responsive images
    deviceSizes: [200,344,440, 687, 794, 1024, 1080, 1200, 1920, 2048],
    // Enable support for AVIF and WebP formats for better compression
    formats: ['image/avif', 'image/webp'],
  },
  
};

module.exports = nextConfig;
