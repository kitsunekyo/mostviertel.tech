import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey 👋 I am a practical web developer, with a focus on frontend,
          interfaces, tooling, collaboration and code quality. If you want to
          talk web dev (or dog training), hit me up.
        </p>
      </section>
    </Layout>
  );
}
