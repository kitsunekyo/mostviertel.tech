import React from "react";
import Link from "next/link";
import Head from 'next/head';

import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
    <Head>
        <title>first post</title>
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
