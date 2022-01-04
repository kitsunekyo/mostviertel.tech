import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { Header } from "./Header";
import { Button } from "./Button";

export const siteTitle = "mostviertel.tech";

export const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="mostviertel.tech blog" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header onMenuClicked={() => setIsDrawerOpen(true)} />

      <main className="flex-grow bg-gray-50">{children}</main>

      {isDrawerOpen && (
        <>
          {/* overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "hsla(0, 0%, 0%, 0.8)" }}
          />
          {/* drawer */}
          <div className="absolute inset-0 bg-white" style={{ left: "2rem" }}>
            <div className="p-4">
              {/* close button */}
              <div className="flex">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="ml-auto"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="items-center gap-2 text-base flex flex-col pt-20 font-medium">
                <Link href="/blog">
                  <a className="p-4 w-full text-center">Blog</a>
                </Link>
                <Link href="/uses">
                  <a className="p-4 w-full text-center">Uses</a>
                </Link>
                <Link href="mailto:alexander.spieslechner@gmail.com" passHref>
                  <Button className="mt-6">Contact Me</Button>
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};
