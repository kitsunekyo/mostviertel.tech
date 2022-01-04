import Head from "next/head";

import { getPosts } from "src/lib/blog";
import { Layout, siteTitle } from "src/components/Layout";
import { Avatar } from "src/components/Avatar";
import { PostGrid } from "src/components/PostGrid";

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="py-16 px-6 text-center contained">
        <Avatar />
        <p className="text-base font-light max-w-md mx-auto">
          Hey 👋 I&apos;m Alex Spieslechner. Practical web developer, with a
          focus on frontend, interfaces, tooling, collaboration and code
          quality. If you want to talk web dev (or dog training), hit me up.
        </p>
      </section>

      <section className="bg-gradient py-12 px-6">
        <div className="contained">
          <h2 className="text-white">Latest Blog Posts</h2>
          <PostGrid posts={posts} />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts().slice(0, 5);

  return {
    props: {
      posts,
    },
  };
}
