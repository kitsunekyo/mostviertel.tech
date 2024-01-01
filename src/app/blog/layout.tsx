export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="px-6 sm:px-8">
      <div className="mx-auto max-w-3xl prose prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-xl">
        {children}
      </div>
    </article>
  );
}
