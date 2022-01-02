import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./Button";

const name = "mostviertel.tech";
export const siteTitle = "mostviertel.tech";

export default function Layout({ children, home }) {
  return (
    <div>
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

      <header className="p-4 bg-gradient">
        <div className="flex items-center mx-auto" style={{ maxWidth: "60ch" }}>
          <Link href="/">
            <a>
              <div className="font-semibold text-white">mostviertel.tech</div>
            </a>
          </Link>
        </div>
      </header>

      <main className="p-4">
        <div className="mx-auto" style={{ maxWidth: "60ch" }}>
          {children}

          {!home && (
            <div className="mt-3">
              <Link href="/">
                <Button>
                  <a>← Back to home</a>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
