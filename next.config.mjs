import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import { mdxAnnotations } from "mdx-annotations";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [mdxAnnotations.recma],
    rehypePlugins: [[rehypePrettyCode, {}]],
    recmaPlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: { domains: ["images.unsplash.com"] },
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
};

export default withMDX(nextConfig);
