import Link from "next/link";

import { Button } from "src/components/Button";

export const Header = () => (
  <header className="border-b border-gray-300">
    <div className="flex items-center contained">
      <Link href="/">
        <a>
          <div className="font-semibold">mostviertel.tech</div>
        </a>
      </Link>
      <nav className="ml-auto flex items-center gap-4 text-sm">
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/uses">
          <a>Uses</a>
        </Link>
        <Link href="mailto:alexander.spieslechner@gmail.com" passHref>
          <Button>Contact Me</Button>
        </Link>
      </nav>
    </div>
  </header>
);
