interface FrontMatter {
  title?: string;
  date?: string;
  tags?: string[];
  excerpt?: string;
}

export default function PostLayout({
  children,
  frontmatter,
}: {
  children: React.ReactNode;
  frontmatter?: FrontMatter;
}) {
  let date;
  if (frontmatter?.date) {
    date = new Date(frontmatter.date).toLocaleDateString("en-US");
  }

  return (
    <article className="px-6 sm:px-8">
      <div className="mx-auto max-w-3xl prose prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-xl">
        <h1>{frontmatter?.title}</h1>
        {children}
      </div>
    </article>
  );
}
