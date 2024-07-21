import glob from "fast-glob";

async function getPostsMeta() {
  let pages = await glob("**/*.mdx", { cwd: "src/app/blog" });
  const pagesWithData = await Promise.all(
    pages.map(async (page) => {
      let metadata: {
        title: string;
        excerpt?: string;
        tags?: string[];
        date?: string;
      } = {
        title: "no title",
        excerpt: "",
      };
      const { metadata: pageMetadata } = await import(`@/app/blog/${page}`);
      if (pageMetadata) {
        metadata = pageMetadata;
      }
      return {
        metadata: metadata,
        href: `/blog/${page.replace(/page\.mdx$/, "")}`,
      };
    }),
  );
  const sorted = pagesWithData.sort((a, b) => {
    if (!a.metadata.date || !b.metadata.date) return 0;
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });
  return sorted;
}

export async function BlogSection() {
  const posts = await getPostsMeta();

  return (
    <div className="py-24 sm:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-5xl font-decoration tracking-tight mb-8 -skew-y-2 text-balance">
          <span className="line-through">Sometimes</span> I publish what I learn
        </h2>
        <div className="space-y-4 text-lg">
          <p>
            Gotta be honest - I&apos;m not the most consistent when it comes to
            publishing on my personal website. But I&apos;m a big advocate of
            active externalism, so I try to write down what I learn in obsidian,
            and sometimes transform my notes into articles.
          </p>
          <p>Here are some of the things I&apos;ve written about.</p>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 pt-10 sm:mt-16 sm:pt-16 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.href}
            className="shadow rounded-xl p-8 bg-white gap-2"
          >
            <h3 className="font-bold text-gray-900 group-hover:text-gray-600 text-balance">
              <a href={post.href}>{post.metadata.title}</a>
            </h3>
            <time
              dateTime={post.metadata.date}
              className="text-gray-400 text-sm font-medium"
            >
              {post.metadata.date}
            </time>
          </article>
        ))}
      </div>
    </div>
  );
}
