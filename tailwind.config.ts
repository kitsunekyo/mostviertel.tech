import type { Config } from "tailwindcss";
import twTypograhpy from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      scroll: {
        from: { transform: "translateX(0)" },
        to: {
          transform: "translateX(calc(-100% - var(--gap, 6rem)))",
        },
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        decoration: ["var(--font-heading)", ...defaultTheme.fontFamily.sans],
      },
    },
    animation: {
      scroll: "scroll 60s linear infinite",
    },
  },
  plugins: [twTypograhpy],
};
export default config;
