import { getPosts } from "src/lib/blog";
import { Layout } from "src/components/Layout";
import { PostList } from "src/components/PostList";

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="p-6 pb-48 h-full">
        <div className="contained">
          <h1>Blog</h1>
          <PostList posts={posts} />
        </div>
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
