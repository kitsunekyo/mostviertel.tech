import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { mdxOptions } from "src/mdx.config";
import { getPosts, getPost } from "src/lib/blog";
import { Date } from "src/components/Date";
import { Button } from "src/components/Button";
import { Layout, siteTitle } from "src/components/Layout";
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

function getOGImagePath(post) {
  const ogImageUrl = new URL("https://og-image.mostviertel.tech/api");
  ogImageUrl.searchParams.set("title", post.title);
  ogImageUrl.searchParams.set("createdAt", post.date);
  post.tags.forEach((tag) => {
    ogImageUrl.searchParams.append("tags", tag);
  });
  const ogImage = post.image || ogImageUrl;
  return ogImage;
}

export default function BlogPost({ post }) {
  const ogImage = getOGImagePath(post);

  return (
    <Layout>
      <Head>
        <title>
          {post.title} - {siteTitle}
        </title>
        <meta name="og:title" content={`${siteTitle} - ${post.title}`} />
        <meta property="og:image" content={ogImage} />
        <meta name="description" content={post.excerpt} />
      </Head>
      <article className="px-6">
        <div className="mx-auto max-w-[800px]">
          {post.image && (
            <Image
              src={post.image}
              height={300}
              width={800}
              objectFit="cover"
              alt=""
            />
          )}
          <h1 className="text-2xl font-extrabold mt-8 mb-6">{post.title}</h1>
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
            <Link href="/blog" passHref>
              <a>
                <Button>← back to all posts</Button>
              </a>
            </Link>
          </div>
        </div>
      </article>
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
