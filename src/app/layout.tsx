import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/libs/cn";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const tankerRegular = localFont({
  src: "./assets/fonts/Tanker-Regular.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "mostviertel.tech - Alex Spieslechner",
  description: "A mostviertel native software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, tankerRegular.variable, "text-slate-800")}
    >
      <body>
        <Header />
        <main className="break-words hyphens-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
