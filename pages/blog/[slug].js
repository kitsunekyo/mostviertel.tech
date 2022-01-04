import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { getPosts, getPost } from "src/lib/blog";
import Layout from "src/components/Layout";

export default function BlogPost({ post }) {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <div>
        <Date dateString={post.date} />
      </div>
      <MDXRemote {...post.mdxSource} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);

  return {
    props: {
      post: {
        ...post,
        mdxSource,
      },
    },
  };
}
