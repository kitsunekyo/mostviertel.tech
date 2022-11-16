import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkPrism from "remark-prism";
import imageSize from "rehype-img-size";

import { getPosts, getPost } from "src/lib/blog";
import { Date } from "src/components/Date";
import { Button } from "src/components/Button";
import { Layout, siteTitle } from "src/components/Layout";
import { Tags } from "src/components/Tags";
import { GetStaticPaths, GetStaticProps } from "next";

const components = {
  img: (props) => (
    <Image
      alt=""
      {...props}
      layout="responsive"
      loading="lazy"
      className="rounded-md"
    />
  ),
};

function getOGImagePath(post) {
  if (post.image) return post.image;

  const ogImageUrl = new URL("https://og-image.mostviertel.tech/api");
  ogImageUrl.searchParams.set("title", post.title);
  ogImageUrl.searchParams.set("createdAt", post.date);
  post.tags.forEach((tag) => {
    ogImageUrl.searchParams.append("tags", tag);
  });

  return ogImageUrl;
}

export default function BlogPost({ post }) {
  return (
    <Layout>
      <Head>
        <title>
          {post.title} - {siteTitle}
        </title>
        <meta property="og:title" content={`${post.title} - ${siteTitle}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={getOGImagePath(post)} />
        <meta name="description" content={post.excerpt} />
        <meta name="twitter:title" content={`${post.title} - ${siteTitle}`} />
        <meta name="twitter:image" content={getOGImagePath(post)} />
        <meta name="twitter:description" content={post.excerpt} />
      </Head>

      <article className="grid-layout markdown-content">
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

        <Meta post={post} />

        <MDXRemote {...post.mdxSource} components={components} />

        <div className="py-12">
          <Link href="/blog" passHref>
            <Button>← back to all posts</Button>
          </Link>
        </div>
      </article>
    </Layout>
  );
}

const Meta = ({ post }) => {
  return (
    <div className="text-sm text-gray-500 mb-8 mt-2">
      <Date dateString={post.date} />
      {post.tags.length > 0 && (
        <div className="flex gap-2 items-center mt-2">
          Tags: <Tags tags={post.tags} />
        </div>
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkPrism],
      rehypePlugins: [[imageSize, { dir: "public" }]],
    },
  });

  return {
    props: {
      post: {
        ...post,
        mdxSource,
      },
    },
  };
};
