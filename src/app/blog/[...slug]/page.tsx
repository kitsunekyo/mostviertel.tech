import type { Metadata } from "next";
import PostLayout from "@/components/PostLayout";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const content = await import(`@/_markdown/${params.slug.join("/")}/page.mdx`);

  return (
    <PostLayout frontmatter={content.frontmatter}>
      <content.default />
    </PostLayout>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const { frontmatter } = await import(
    `@/_markdown/${params.slug.join("/")}/page.mdx`
  );

  return {
    title: frontmatter.title,
  };
}
