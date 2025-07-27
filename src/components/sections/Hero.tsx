import Image from "next/image";
import { Marquee } from "./../Marquee";

export function Hero() {
  return (
    <div className="relative isolate">
      <GridBg />
      <div className="px-6 pb-20 pt-20 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:max-w-none gap-12 items-center justify-center">
            <h1 className="font-decoration uppercase -skew-y-6 text-8xl px-8">
              most
              <br />
              <span className="-translate-x-8 inline-block">viertel.</span>
              <br />
              <span className="translate-x-12 inline-block">tech</span>
              <br />
            </h1>
            <div>
              <Avatar />
            </div>
          </div>
          <div className="pt-20 lg:pt-28">
            <Marquee />
          </div>
        </div>
      </div>
    </div>
  );
}

function GridBg() {
  return (
    <svg
      className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          strokeWidth={0}
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
      />
    </svg>
  );
}

function Avatar() {
  return (
    <>
      <Image
        src="/images/alex-sam.jpg"
        alt="Alex und sein weißer Schäferhund Sam"
        width={200}
        height={200}
        style={{ clipPath: "url(#clip0)" }}
      />
      <svg
        width="0"
        height="0"
        viewBox="0 0 1 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="clip0" clipPathUnits="objectBoundingBox">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.5 1C0.776142 1 1 0.776142 1 0.5C1 0.223858 0.776142 0 0.5 0C0.223858 0 0 0.223858 0 0.5C0 0.500664 1.29556e-06 0.501328 3.88431e-06 0.501992H0V1H0.498008V0.999996C0.498672 0.999999 0.499336 1 0.5 1Z"
            fill="black"
          />
        </clipPath>
      </svg>
    </>
  );
}
