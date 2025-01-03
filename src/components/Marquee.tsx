const items = [
  "typescript",
  "reactjs",
  "tailwindcss",
  "nextjs",
  "express",
  "mongodb",
  "vscode",
  "aws",
  "azure cloud",
  "vite",
  "vitest",
  "prisma",
  "docker",
  "angular",
  "figma",
  "javascript",
  "html",
  "windows",
  "gaming",
];

export function Marquee() {
  return (
    <div
      className="flex overflow-hidden select-none gap-[var(--gap)]"
      style={{
        "--gap": "3rem",
        maskImage: `
          linear-gradient(
            to right,
            hsl(0 0% 0% / 0),
            hsl(0 0% 0% / 1) 20%,
            hsl(0 0% 0% / 1) 80%,
            hsl(0 0% 0% / 0)
          )`,
      }}
    >
      <MarqueeContent />
      <MarqueeContent aria-hidden="true" />
    </div>
  );
}

function MarqueeContent({ ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      {...props}
      className="shrink-0 flex justify-around min-w-[100%] gap-[var(--gap)] font-decoration text-2xl motion-safe:animate-scroll"
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
