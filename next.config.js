/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // trailingSlash: true,
  // images: { unoptimized: true },

  experimental: {
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
