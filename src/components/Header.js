import Link from "next/link";

import { Button } from "src/components/Button";
import { Dots } from "src/components/Dots";

export const Header = ({ onMenuClicked }) => (
  <header className="border-b border-gray-300 p-6">
    <div className="flex items-center contained">
      <Link href="/">
        <a>
          <div className="flex items-center gap-2">
            <div className="font-semibold">mostviertel.tech</div>
            <Dots size={20} fill="rgb(255, 75, 10)" />
          </div>
        </a>
      </Link>

      <nav className="ml-auto font-medium items-center gap-8 text-sm hidden md:flex">
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/uses">
          <a>Uses</a>
        </Link>
        <Link href="mailto:alexander.spieslechner@gmail.com" passHref>
          <a>
            <Button>Contact Me</Button>
          </a>
        </Link>
      </nav>

      <div className="ml-auto md:hidden">
        {/* menu icon */}
        <button onClick={onMenuClicked} name="open sidebar">
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
