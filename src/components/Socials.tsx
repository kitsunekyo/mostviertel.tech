import {
  Youtube,
  Instagram,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export function Socials() {
  return (
    <div className="px-6 py-20 sm:py-28 lg:px-8 isolate text-center">
      <div className="">
        <h2 className="font-decoration text-5xl mb-6 -skew-y-2 text-balance">
          Social Media und andere Plattformen
        </h2>
        <div className="text-lg text-neutral-500 leading-relaxed max-w-xl mx-auto space-y-4">
          <p>
            Du findest meinen Code auf{" "}
            <a href="https://github.com/kitsunekyo" rel="noopener noreferrer">
              <Github className="inline-block" />
            </a>
            , Musik auf{" "}
            <a
              href="https://www.youtube.com/@alexspieslechner"
              rel="noopener noreferrer"
            >
              <Youtube className="inline-block" />
            </a>
            , Fotos auf{" "}
            <a
              href="https://www.instagram.com/wayward.fox"
              rel="noopener noreferrer"
            >
              <Instagram className="inline-block" />
            </a>{" "}
            und Lebenslauf auf{" "}
            <a
              href="https://www.linkedin.com/in/aspieslechner/"
              rel="noopener noreferrer"
            >
              <Linkedin className="inline-block" />
            </a>
            .
          </p>
          <p>
            Oder schreib an{" "}
            <a
              href="mailto:hi@mostviertel.tech"
              className="font-semibold text-indigo-500 inline-flex gap-1 items-center"
            >
              <span>hi@mostviertel.tech</span>
              <ArrowUpRight />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
