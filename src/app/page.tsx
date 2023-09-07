import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { PrimaryNavigation } from "@/components/primary-navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container">
        <main>
          <Hero />
        </main>
      </div>
      <footer className="bg-gray-800 text-gray-300 min-h-[100px] pt-32 pb-8 text-sm">
        <div className="container">
          <div className="grid grid-cols-3 gap-12">
            <div>
              <Link href="/">
                <figure aria-label="logo" className="mb-4 text-gray-500">
                  <span className="font-semibold">mostviertel.tech</span>
                </figure>
              </Link>
              <p className="leading-8">
                Pragmatische Digitalisierung aus dem Mostviertel, für große und
                kleinere Betriebe.
              </p>
            </div>
          </div>
          <div className="mt-48 border-t border-gray-700 pt-8">
            <span className="text-gray-500">
              © 2023 Alexander Spieslechner. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative isolate px-6">
      <div className="mx-auto max-w-2xl pb-48 pt-32">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Web Engineering und Beratung aus{" "}
            <span className="line-through">dem Valley</span> dem Mostviertel{" "}
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-[1.3]">
            Digitalisierung, ohne unnötigen Kaas
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Digitalisierung muss nicht immer aus der Stadt kommen und geht auch
            kosteneffizient. Ich unterstütze kleinere Betriebe und Vereine dabei
            von AI und maßgeschneiderten Softwarelösungen zu profitieren.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="mailto:aspieslechner+web@gmail.com"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Einfach mal reden
            </a>
            <a
              href="/#services"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Meine Services <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky border-b h-16 flex items-center top-0 isolate z-50 bg-white/95">
      <div className="container flex items-center gap-2">
        <Link href="/">
          <figure aria-label="logo" className="mr-12">
            <span className="font-semibold">mostviertel.tech</span>
          </figure>
        </Link>
        <div className="hidden md:block">
          <PrimaryNavigation />
        </div>
        <nav arial-label="socialmedia navigation" className="ml-auto">
          <Button variant="ghost" size="icon">
            <a
              href="https://github.com/kitsunekyo"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
