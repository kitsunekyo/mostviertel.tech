import glob from "fast-glob";

async function getPostsMeta() {
  const pages = await glob("**/*.mdx", { cwd: "src/_markdown" });

  const pagesWithData = await Promise.all(
    pages.map(async (page) => {
      const { frontmatter } = await import(`@/_markdown/${page}`);

      return {
        frontmatter,
        href: `/blog/${page.replace(/page\.mdx$/, "")}`,
      };
    }),
  );

  const sorted = pagesWithData.sort((a, b) => {
    if (!a.frontmatter?.date || !b.frontmatter?.date) {
      return 0;
    }

    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
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

      <div className="mx-auto mt-10 max-w-2xl space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
        {posts.map((post) => (
          <article
            key={post.href}
            className="flex max-w-xl flex-col items-start justify-between"
          >
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.frontmatter?.date} className="text-gray-500">
                {post.frontmatter?.date}
              </time>
              {post.frontmatter?.tags &&
              Array.isArray(post.frontmatter.tags) ? (
                <div className="flex gap-1">
                  {post.frontmatter.tags.map((tag) => (
                    <a
                      key={tag}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-indigo-500">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.frontmatter?.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                {post.frontmatter?.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
