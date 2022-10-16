import Link from "next/link";
import Image from "next/image";

export const Header = ({ onMenuClicked }) => (
  <header className="px-6 py-3 sticky top-0 z-10 border-b border-gray-200 bg-white backdrop-blur bg-opacity-90">
    <div className="flex items-center mx-auto max-w-[var(--width)]">
      <Link href="/">
        <a className="text-inherit hover:text-inherit hover:no-underline">
          <div className="flex items-center gap-2 h-[50px]">
            <div className="font-extrabold text-lg">
              <span
                className="bg-gradient-to-br from-orange-500 to-amber-500"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                mostviertel
              </span>
              <span>.tech</span>
            </div>
          </div>
        </a>
      </Link>

      <nav className="ml-auto font-medium items-center gap-8 text-xs hidden md:flex">
        <Link href="/blog">
          <a>blog</a>
        </Link>
        <Link href="mailto:alexander.spieslechner@gmail.com" passHref>
          <a>contact me</a>
        </Link>
        <a
          href="https://github.com/kitsunekyo"
          rel="nofollow"
          className="leading-none"
        >
          <Image
            src="/icons/github.svg"
            alt="github icon"
            height={30}
            width={30}
          />
        </a>
      </nav>

      <div className="ml-auto md:hidden flex items-center">
        {/* menu icon */}
        <button onClick={onMenuClicked} aria-label="open sidebar">
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
