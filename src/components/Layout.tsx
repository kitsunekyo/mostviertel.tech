import React, { useState } from "react";
import Head from "next/head";

import { Header } from "./Header";
import { Drawer } from "./Drawer";

export const siteTitle = "mostviertel.tech";

export const Layout = ({
  children,
  ogImage,
  ogTitle = siteTitle,
  metaDescription = siteTitle,
}: {
  children: React.ReactNode;
  ogImage?: string;
  ogTitle?: string;
  metaDescription?: string;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta name="og:title" content={ogTitle} />
      </Head>

      <Header onMenuClicked={() => setIsDrawerOpen(true)} />

      <main className="overflow-x-hidden mb-16">{children}</main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="grid-layout">
          <div className="text-xs font-light">
            <h4 className="font-medium mb-2">imprint</h4>
            <p className="text-gray-400">
              Ing. Alexander Spieslechner
              <br />
              Fasangartengasse 5, 3251 Purgstall <br />
              alexander.spieslechner@gmail.com
            </p>
          </div>
        </div>
      </footer>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};
