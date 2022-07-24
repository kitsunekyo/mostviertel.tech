import Head from "next/head";
import Link from "next/link";

import { getPosts } from "src/lib/blog";
import { Layout, siteTitle } from "src/components/Layout";
import { Button } from "src/components/Button";
import { PostList } from "src/components/PostList";

import { useCheatcode } from "src/hooks/useCheatcode";

export default function Home({ posts }) {
  useCheatcode();

  return (
    <Layout
      home
      ogImage="/images/profile.jpg"
      metaDescription="Alex Spieslechner. Practical web developer in the mostviertel area. With a focus on frontend, developer experience, collaboration and code quality."
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="py-10 px-6">
        <div className="contained">
          <h2 className="mt-0">recent articles</h2>

          <PostList posts={posts} />

          <Link href="/blog" passHref>
            <a>
              <Button className="mt-6">More Articles →</Button>
            </a>
          </Link>
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
