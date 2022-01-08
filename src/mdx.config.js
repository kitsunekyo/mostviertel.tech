import remarkPrism from "remark-prism";
import imageSize from "rehype-img-size";

export const mdxOptions = {
  remarkPlugins: [remarkPrism],
  rehypePlugins: [[imageSize, { dir: "public" }]],
};
