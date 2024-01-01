import glob from "fast-glob";
import { remark } from "remark";
import remarkMdx from "remark-mdx";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

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
    <div className="bg-white py-24 sm:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meine letzten Veröffentlichungen
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Auf meinem Blog findest du immer wieder frei verfügbare Artikel zu
            Software Entwicklung, und Tech.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.href}
              className="flex max-w-xl flex-col items-start"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.metadata.date} className="text-gray-500">
                  {post.metadata.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.metadata.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.metadata.excerpt}
                </p>
              </div>
              {post.metadata.tags?.length ? (
                <div className="flex flex-wrap gap-2 text-xs mt-5">
                  {post.metadata.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
