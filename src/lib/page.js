import matter from "gray-matter";
import fs from "fs";
import { join } from "path";

const mdxPagesDirectory = join(process.cwd(), "src/mdx/pages");

export function getPageSlugs() {
  return fs.readdirSync(mdxPagesDirectory);
}

export function getPage(path) {
  const slug = path.replace(/\.mdx$/, "");
  const pagePath = join(mdxPagesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(pagePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    ogImage: data.ogImage || null,
    image: data.image || null,
    content,
  };
}

export function getPages() {
  const slugs = getPageSlugs();
  const posts = slugs.map((path) => getPage(path));

  return posts;
}
