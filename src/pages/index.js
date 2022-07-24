import Head from "next/head";
import Link from "next/link";

import { getPosts } from "src/lib/blog";
import { Layout, siteTitle } from "src/components/Layout";
import { Button } from "src/components/Button";
import { PostList } from "src/components/PostList";

import { useCheatcode } from "src/hooks/useCheatcode";
import Image from "next/image";

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
          <h1 className="text-2xl font-extrabold">servus, i&apos;m alex 👋</h1>
          <p className="text-lg text-gray-500">
            i&apos;m a frontend developer from the mostviertel area. currently
            working at the umdaschgroup-ventures as a lead developer.
          </p>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="contained">
          <h2 className="mt-0 text-xl font-extrabold">
            <span
              className="bg-gradient-to-r from-orange-500 to-amber-500 pr-2"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              #
            </span>
            i occasionally contribute in oss{" "}
          </h2>
          <p className="flex items-center gap-2 text-lg text-gray-500">
            find me on github{" "}
            <Link href="https://github.com/kitsunekyo">
              <a className="flex items-center">
                <Image
                  src="/images/GitHub-Mark-64px.png"
                  height={32}
                  width={32}
                  alt="github"
                />
              </a>
            </Link>
          </p>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="contained">
          <h2 className="mt-0 text-xl font-extrabold">
            <span
              className="bg-gradient-to-r from-orange-500 to-amber-500 pr-2"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              #
            </span>
            i help people in discord communities
          </h2>
          <ul className="flex flex-col gap-2 text-lg text-gray-500">
            <li>
              <Link href="https://discord.com/invite/reactiflux">
                <a className="flex items-center gap-4">
                  <div>→ </div>
                  <div>Reactiflux</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://kentcdodds.com/discord">
                <a className="flex items-center gap-4">
                  <div>→ </div>
                  <div>Kent C. Dodds Community Discord</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://discord.com/invite/aYVNktYeEB">
                <a className="flex items-center gap-4">
                  <div>→ </div>
                  <div>Vite Land</div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="contained">
          <h2 className="mt-0 text-xl font-extrabold">
            <span
              className="bg-gradient-to-r from-orange-500 to-amber-500 pr-2"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              #
            </span>
            i write articles
          </h2>

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
  const { posts } = getPosts();

  return {
    props: {
      posts: posts.slice(0, 3),
    },
  };
}
