/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // trailingSlash: true,
  // images: { unoptimized: true },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.externals.push({ canvas: "commonjs canvas" });
    return config;
  },
};

module.exports = nextConfig;
