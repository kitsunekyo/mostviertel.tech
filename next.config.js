const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
    rehypePlugins: [],
  },
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  images: {
    domains: ["placehold.it"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
