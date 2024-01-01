import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { cn } from "@/libs/cn";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
