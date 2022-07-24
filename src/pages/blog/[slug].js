import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { mdxOptions } from "src/mdx.config";
import { getPosts, getPost } from "src/lib/blog";
import { Date } from "src/components/Date";
import { Button } from "src/components/Button";
import { Layout } from "src/components/Layout";
import { Tags } from "src/components/Tags";

const components = {
  img: (props) => (
    // disabled as alt is set automatically through markdown
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      layout="responsive"
      loading="lazy"
      className="rounded-md"
    />
  ),
};

export default function BlogPost({ post }) {
  return (
    <Layout
      ogTitle={`mostviertel.tech | ${post.title}`}
      ogImage={post.image}
      metaDescription={post.description}
    >
      <Head>
        <title>mostviertel.tech | {post.title}</title>
      </Head>
      <div className="px-6">
        <div className="contained">
          {post.image && (
            <Image
              src={post.image}
              height={300}
              width={800}
              objectFit="cover"
              alt=""
            />
          )}
          <h1>{post.title}</h1>
          {/* post meta */}
          <div className="text-sm text-gray-500">
            <Date dateString={post.date} />
            {post.tags.length > 0 && (
              <div className="flex gap-2 items-center">
                Tags: <Tags tags={post.tags} />
              </div>
            )}
          </div>

          <div className="content">
            <MDXRemote {...post.mdxSource} components={components} />
          </div>

          <div className="py-12">
            <Link href="/" passHref>
              <a>
                <Button>← Back to home</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { posts } = await getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content, {
    mdxOptions,
  });

  return {
    props: {
      post: {
        ...post,
        mdxSource,
      },
    },
  };
}
