import { Head } from "next/document";

import { getPosts } from "src/lib/blog";
import Layout from "src/components/Layout";

export default function Blog({ posts }) {
  return (
    <Layout>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.title}>{post.title}</div>
      ))}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
