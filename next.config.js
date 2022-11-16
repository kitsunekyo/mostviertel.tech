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
    domains: ["placehold.it", "raw.githubusercontent.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/coderdojo",
        destination:
          "https://www.zukunftsakademie.or.at/freetimelearning/coder-dojo/",
        permanent: true,
      },
      {
        source: "/mentor",
        destination:
          "https://www.zukunftsakademie.or.at/freetimelearning/coder-dojo-mentor-innen/",
        permanent: true,
      },
    ];
  },
});
