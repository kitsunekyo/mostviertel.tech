import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import { mdxAnnotations } from "mdx-annotations";

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {};

const mdxOptions = {
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [mdxAnnotations.recma],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    recmaPlugins: [],
  },
};

const withMDX = nextMDX(mdxOptions);

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
