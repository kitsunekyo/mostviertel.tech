import matter from "gray-matter";
import fs from "fs";
import { join } from "path";

const blogPostsDirectory = join(process.cwd(), "src/blog");

export function getPostsSlugs() {
  return fs.readdirSync(blogPostsDirectory);
}

export function getPost(path) {
  const slug = path.replace(/\.mdx$/, "");
  const postPath = join(blogPostsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || null,
    ogImage: data.ogImage || null,
    image: data.image || null,
    content,
  };
}

export function getPosts() {
  const slugs = getPostsSlugs();
  const posts = slugs
    .map((path) => getPost(path))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
