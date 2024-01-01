import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { cn } from "@/libs/cn";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mostviertel.tech",
  description: "leistbare digitalisierung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "text-slate-800")}>
        <Header />
        <main className="break-words hyphens-auto">{children}</main>
        <div className="mt-12 h-px border-t border-slate-100"></div>
        <footer className="w-full py-16 md:py-20">
          <div className="px-6 sm:px-8 flex flex-wrap justify-between">
            <div>mostviertel.tech</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
