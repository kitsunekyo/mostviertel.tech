import { useState } from "react";
import Head from "next/head";

import { Header } from "./Header";
import { Drawer } from "./Drawer";

export const siteTitle = "mostviertel.tech";

export const Layout = ({
  children,
  ogImage,
  ogTitle = siteTitle,
  metaDescription = siteTitle,
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

      <main className="flex-grow">{children}</main>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};
