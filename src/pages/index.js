import Head from "next/head";
import Link from "next/link";

import { getPosts } from "src/lib/blog";
import { Layout, siteTitle } from "src/components/Layout";
import { PostList } from "src/components/PostList";

import { useCheatcode } from "src/hooks/useCheatcode";
import Image from "next/image";

const testimonials = [
  {
    name: "Lukas Anzengruber",
    role: "Technical Product Manager @ Energy Hero",
    text: "Alex ist nicht nur ein großartiger Mensch, sondern in seiner Ausstrahlung und Ausdrucksweise immer freundlich, professionell und fokussiert. Alex hält die Stimmung hoch und ist stets bemüht die Wünsche seiner Kunden bis ins letzte Detail zu erfüllen. Ich bedanke mich für die tolle Arbeit über die letzten Jahre und bin sehr froh an ihn geraten zu sein. Auf noch viele Zusammentreffen, sei es geschäftlich oder privat, in der Zukunft.",
  },
  {
    name: "Bernhard Wytek",
    role: "Product Manager SaaS @ ap24/willhaben",
    text: "Alex hat eine unglaublich tiefes Verständnis von Webentwicklung. Die Kombination aus Wissen im Bereich Bundling/Frameworks, wie man Enterprise Projekte aufzieht und eine sehr hohe Affinität für User Interfaces und Animationen hat die Arbeit mit Alex sehr lehrreich und fruchtbar gemacht. Jedes Projekt mit ihm lief unglaublich toll und auch Monate nach unserer Zusammenarbeit spricht man noch positiv von den Projekterfolgen die wir gemeinsam erreichen konnten.",
  },
  {
    name: "Kenny Hall",
    role: "Senior Frontend Developer",
    text: "I met Alex through a Babel.js slack community. I had ask a question and he jump in to answer my question. Alex went above and beyond to help me out. I'm extremely grateful for him, as he helped me get something I've been working on for a few weeks sorted out in about 2 hours. He had no real reason aside from being kind and giving back time to the greater dev community. It's developers like him that empower others to be successful, cheers to Alex!!",
  },
  {
    name: "Michael E. Jurkovic",
    role: "Senior Project Manager @ IKARUS Security Software GmbH",
    text: "Die Zusammenarbeit mit Alex in einen gemeinsamen Projekt war äußerst professionell, konstruktiv und hat dank seiner offenen Art auch sehr viel Spaß gemacht und eine tolle Stimmung in die Projektarbeit gebracht. Durch sein fundiertes Know-how, vor allem im Bereich der Frontend-Entwicklung, haben wir eine maßgeschneiderte Lösung für unseren Auftraggeber geschaffen. Ich habe die Zusammenarbeit sehr zu schätzen gewusst und würde mich auf eine Zusammenarbeit mit ihm jederzeit wieder freuen.",
  },
  {
    name: "Amela Bajric",
    role: "Content Marketing Manager @ Canva",
    text: "I've worked with Alex for over a year now and I am amazed by how he is not just great at his job but also at consistently learning other tasks even when the time is tight. He's also been a great teacher to me and inspires me to learn more about technology. We all here rely heavily on his work and he's become our go-to person when it comes to finding quick and effective web technology solutions. I am more than happy to recommend Alex not only for his excellent work but also for him being a person that can easily fit into any team, small or big.",
  },
  {
    name: "Dominik Gocumyan",
    role: "Selbstständiger Texter / Werbeagentur",
    text: "Alexander Spieslechner ist ein sehr verlässlicher, professioneller und sympathischer Arbeitskollege. Es macht Spaß, mit ihm zusammenzuarbeiten und seine Fachkenntnisse in fast allen Bereichen des Online Marketings sind mehr als hilfreich, wenn es um die positiven Erledigung von Aufträgen geht!",
  },
  {
    name: "Andreas Jansch",
    role: "Marketing Manager @ Funstage",
    text: "Alexander is an amazing person to work with. We used to be colleagues in the same company, but also worked on a lot of other projects together. His knowledge is impressive on so many levels and in so many areas. There is no problem he can't solve.",
  },
];

export default function Home({ recentPosts }) {
  useCheatcode();

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Alex Spieslechner. Practical web developer in the mostviertel area. With a focus on frontend, developer experience, collaboration and code quality."
        />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta property="og:title" content="mostviertel.tech" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@HouseOfFoxes" />
      </Head>

      <div className="grid-layout">
        <Hero />
        <RecentBlogPosts posts={recentPosts} />
        <Testimonials />
      </div>
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

function Testimonials() {
  return (
    <section className="py-10">
      <h2 className="text-xl font-extrabold mb-4">
        <span
          className="bg-gradient-to-r from-orange-500 to-amber-500 pr-2"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          #
        </span>
        what others say about me
      </h2>
      <div
        className="flex overflow-auto flex-nowrap"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {testimonials.map((t) => (
          <div key={t.name} className="w-full flex-none snap-center">
            <h3>{t.name}</h3>
            <small className="text-sm text-gray-400">{t.role}</small>
            <p
              dangerouslySetInnerHTML={{ __html: t.text }}
              className="text-sm my-3"
            ></p>
          </div>
        ))}
      </div>
    </section>
  );
}

function RecentBlogPosts({ posts }) {
  return (
    <section className="py-10">
      <h2 className="text-xl font-extrabold mb-4">
        <span
          className="bg-gradient-to-r from-orange-500 to-amber-500 pr-2"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          #
        </span>
        i write about webdev
      </h2>
      <Link href="/blog" passHref>
        <a className="link text-sm">go to blog →</a>
      </Link>
      <div className="mt-4">
        <PostList posts={posts} />
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="popout py-10">
      <div className="rounded-xl from-orange-100 to-amber-50 bg-gradient-to-tr p-10 flex flex-col justify-end">
        <h1 className="text-2xl md:text-4xl font-extrabold mt-8 mb-4">
          servus, i&apos;m alex 👋
        </h1>
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
  );
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
