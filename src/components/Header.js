import Link from "next/link";

import { Button } from "src/components/Button";

export const Header = ({ onMenuClicked }) => (
  <header className="border-b border-gray-300">
    <div className="flex items-center contained">
      <Link href="/">
        <a>
          <div className="font-semibold">mostviertel.tech</div>
        </a>
      </Link>

      <nav className="ml-auto items-center gap-4 text-sm hidden md:flex">
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

      <div className="ml-auto">
        {/* menu icon */}
        <button onClick={onMenuClicked}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
);
