import Head from "next/head";
import Link from "next/link";

import { getPosts } from "src/lib/blog";
import { Layout, siteTitle } from "src/components/Layout";
import { PostList } from "src/components/PostList";

import { useCheatcode } from "src/hooks/useCheatcode";
import Image from "next/image";

export default function Home({ recentPosts }) {
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
            i&apos;m a frontend developer from the mostviertel area, currently
            working at{" "}
            <a href="https://umdaschgroup-ventures.com/" className="link">
              umdaschgroup-ventures
            </a>{" "}
            as a lead developer.
          </p>
          <div className="mt-8">
            <TechIcons />
          </div>
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
            find me on github{" "}
          </h2>
          <p className="text-lg text-gray-500">
            <a
              href="https://github.com/kitsunekyo"
              className="flex items-center gap-2"
            >
              github.com/kitsunekyo
              <Image
                src="/images/GitHub-Mark-64px.png"
                height={32}
                width={32}
                alt="github"
              />
            </a>
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
              <a
                href="https://discord.com/invite/reactiflux"
                className="inline-flex items-center gap-4"
              >
                <div>→ </div>
                <div className="link">Reactiflux</div>
              </a>
            </li>
            <li>
              <a
                href="https://kentcdodds.com/discord"
                className="inline-flex items-center gap-4"
              >
                <div>→ </div>
                <div className="link">Kent C. Dodds Community Discord</div>
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/invite/aYVNktYeEB"
                className="inline-flex items-center gap-4"
              >
                <div>→ </div>
                <div className="link">Vite Land</div>
              </a>
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
          <Link href="/blog" passHref>
            <a className="link text-sm">go to blog →</a>
          </Link>
          <PostList posts={recentPosts} />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      recentPosts: posts.slice(0, 3),
    },
  };
}

function TechIcons() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
          width="36"
          height="36"
          alt="Typescript"
        />
      </a>
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
          width="36"
          height="36"
          alt="React"
        />
      </a>
      <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
          width="36"
          height="36"
          alt="NextJs"
        />
      </a>
      <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
          width="36"
          height="36"
          alt="TailwindCSS"
        />
      </a>
      <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
          width="36"
          height="36"
          alt="NodeJS"
        />
      </a>
      <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
          width="36"
          height="36"
          alt="PostgreSQL"
        />
      </a>
      <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
        <Image
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
          width="36"
          height="36"
          alt="Figma"
        />
      </a>
    </div>
  );
}
