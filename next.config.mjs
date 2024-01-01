import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = { pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"] };

const withMDX = nextMDX({
  options: {},
});

module.exports = withMDX(nextConfig);
