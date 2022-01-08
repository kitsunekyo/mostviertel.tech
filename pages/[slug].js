import Head from "next/head";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { Layout } from "src/components/Layout";
import { getPages, getPage } from "src/lib/page";
import { mdxOptions } from "src/mdx.config";

const components = {
  // disabled as alt is set automatically through markdown
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props) => <Image {...props} layout="responsive" loading="lazy" />,
};

export default function Page({ page }) {
  return (
    <Layout ogTitle={page.title} metaDescription={page.description}>
      <Head>
        <title>mostviertel.tech | {page.title}</title>
      </Head>
      <div className="px-6 pb-12">
        <div className="contained">
          <MDXRemote {...page.mdxSource} components={components} />
        </div>
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
    mdxOptions,
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
