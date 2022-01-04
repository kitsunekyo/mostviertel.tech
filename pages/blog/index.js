import { getPosts } from "src/lib/blog";
import { Layout } from "src/components/Layout";
import { PostGrid } from "src/components/PostGrid";

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="p-6 pb-48 bg-gradient h-full">
        <div className="contained">
          <h1 className="text-white">Blog</h1>
          <PostGrid posts={posts} />
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
