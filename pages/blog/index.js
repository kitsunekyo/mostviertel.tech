import { getPosts } from "src/lib/blog";
import { Layout } from "src/components/Layout";
import { PostGrid } from "src/components/PostGrid";

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="contained">
        <h1>Blog</h1>
        <PostGrid posts={posts} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
