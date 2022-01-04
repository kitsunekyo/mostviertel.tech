import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkPrism from "remark-prism";

import { Layout } from "src/components/Layout";
import { getPages, getPage } from "src/lib/page";

export default function Page({ page }) {
  return (
    <Layout ogTitle={page.title}>
      <Head>
        <title>mostviertel.tech | {page.title}</title>
      </Head>
      <div className="contained">
        <MDXRemote {...page.mdxSource} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const pages = getPages();
  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const page = await getPage(params.slug);
  const mdxSource = await serialize(page.content, {
    mdxOptions: { remarkPlugins: [remarkPrism] },
  });

  return {
    props: {
      page: {
        ...page,
        mdxSource,
      },
    },
  };
}