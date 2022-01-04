import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "src/components/Layout";
import Date from "src/components/Date";
import { getPosts } from "src/lib/blog";
import { Button } from "src/components/Button";
import { Card } from "src/components/Card";
import { Avatar } from "src/components/Avatar";

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="my-6 text-center">
        <Avatar />
        <p className="text-base text-gray-500 font-light max-w-md mx-auto">
          Hey 👋 I'm Alex Spieslechner. Practical web developer, with a focus on
          frontend, interfaces, tooling, collaboration and code quality. If you
          want to talk web dev (or dog training), hit me up.
        </p>

        <Link href="mailto:alexander.spieslechner@gmail.com">
          <Button>Contact Me</Button>
        </Link>
      </section>

      <section>
        <h2 className="m-0">Latest Blog Posts</h2>

        {posts.map(({ slug, date, title, excerpt }) => (
          <Card className="mt-8" key={slug}>
            <div className="text-xs text-gray-400">
              <Date dateString={date} />
            </div>
            <Link href={`/blog/${slug}`}>
              <a className="font-semibold">{title}</a>
            </Link>
            {excerpt && <p className="m-0 text-sm">{excerpt}</p>}
          </Card>
        ))}
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
