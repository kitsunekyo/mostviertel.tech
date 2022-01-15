import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { getPosts } from "src/lib/blog";
import { Layout, siteTitle } from "src/components/Layout";
import { Avatar } from "src/components/Avatar";
import { Button } from "src/components/Button";
import { PostGrid } from "src/components/PostGrid";
import { Dots } from "src/components/Dots";

import tsImage from "public/images/home/ts.png";
import reactImage from "public/images/home/react.png";
import reduxImage from "public/images/home/redux.png";
import jestImage from "public/images/home/jest.png";
import awsImage from "public/images/home/aws.png";
import azureImage from "public/images/home/azure.png";
import dockerImage from "public/images/home/docker.png";
import { useCheatcode } from "src/hooks/useCheatcode";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const animationVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home({ posts }) {
  useCheatcode();

  return (
    <Layout
      home
      ogImage="/images/profile.jpg"
      metaDescription="Alex Spieslechner. Practical web developer in the mostviertel area. With a focus on frontend, developer experience, collaboration and code quality."
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="py-16 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="contained"
        >
          <motion.div variants={animationVariants}>
            <Avatar />
          </motion.div>
          <motion.h1
            variants={animationVariants}
            className="font-extrabold text-4xl md:text-6xl mt-4 mb-4 relative w-fit"
          >
            <div className="absolute bottom-0 right-0 -z-10 opacity-50 translate-x-3/4">
              <Dots fill="rgb(255, 75, 10)" />
            </div>
            Hey, I&apos;m Alex
          </motion.h1>
          <motion.div
            variants={animationVariants}
            className="text-xl text-gray-500 leading-9"
          >
            <p>
              Practical web developer, with a focus on frontend, developer
              experience, collaboration and code quality.
            </p>
            <p>If you want to talk web dev (or dog training), hit me up.</p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-12 px-6 border-t border-gray-200">
        <div className="contained">
          <TechIcons />
        </div>
      </section>

      <section className="bg-gradient py-24 px-6">
        <div className="contained">
          <h2 className="text-white mt-0 relative w-fit">
            <div className="absolute bottom-0 right-0 opacity-30 translate-x-3/4">
              <Dots size={30} fill="rgb(255, 255, 255)" />
            </div>
            My last Posts
          </h2>

          <PostGrid posts={posts} />
          <Link href="/blog" passHref>
            <a>
              <Button className="mt-6">More Articles</Button>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts().slice(0, 5);

  return {
    props: {
      posts,
    },
  };
}

const TechIcons = () => (
  <div className="flex gap-4 items-center flex-wrap justify-center">
    <div className="inline-block rounded-md overflow-hidden hover:-translate-y-2 transition-transform">
      <Image
        src={tsImage}
        height="70"
        width="70"
        alt={`typescript icon`}
        placeholder="blur"
      />
    </div>
    <div className="inline-block rounded-md overflow-hidden hover:-translate-y-2 transition-transform">
      <Image
        src={reactImage}
        height="70"
        width="70"
        alt={`react icon`}
        placeholder="blur"
      />
    </div>
    <div className="inline-block rounded-md overflow-hidden hover:-translate-y-2 transition-transform">
      <Image
        src={reduxImage}
        height="70"
        width="70"
        alt={`redux icon`}
        placeholder="blur"
      />
    </div>
    <div className="inline-block rounded-md overflow-hidden hover:-translate-y-2 transition-transform">
      <Image
        src={jestImage}
        height="70"
        width="70"
        alt={`jest icon`}
        placeholder="blur"
      />
    </div>
    <div className="inline-block rounded-md overflow-hidden hover:-translate-y-2 transition-transform">
      <Image
        src={awsImage}
        height="70"
        width="70"
        alt={`aws icon`}
        placeholder="blur"
      />
    </div>
    <div className="inline-block rounded-md overflow-hidden hover:-translate-y-2 transition-transform">
      <Image
        src={azureImage}
        height="70"
        width="70"
        alt={`azure icon`}
        placeholder="blur"
      />
    </div>
    <div className="inline-block rounded-md overflow-hidden hover:-translate-y-2 transition-transform">
      <Image
        src={dockerImage}
        height="70"
        width="70"
        alt={`docker icon`}
        placeholder="blur"
      />
    </div>
  </div>
);
