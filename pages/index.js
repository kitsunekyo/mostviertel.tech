import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/Layout";
import Date from "../components/Date";
import { getSortedPostsData } from "../lib/posts";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Avatar } from "../components/Avatar";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="my-6">
        <div className="flex items-center">
          <div className="pr-4">
            <Avatar />
          </div>
          <blockquote>
            Hey 👋 I'm Alex Spieslechner. Practical web developer, with a focus
            on frontend, interfaces, tooling, collaboration and code quality. If
            you want to talk web dev (or dog training), hit me up.
          </blockquote>
        </div>
        <Link href="mailto:alexander.spieslechner@gmail.com">
          <Button>Contact Me</Button>
        </Link>
      </section>

      <section>
        <Card className="mt-8">
          <h2 className="m-0">Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
