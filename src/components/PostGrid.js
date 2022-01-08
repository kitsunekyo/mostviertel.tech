import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Date } from "src/components/Date";
import { Card } from "src/components/Card";
import { Tags } from "src/components/Tags";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const PostGrid = ({ posts }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-4"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {posts.map(({ slug, date, title, excerpt, image, tags }) => {
        return (
          <motion.div key={slug} variants={itemVariants}>
            <Link href={`/blog/${slug}`}>
              <a className="text-inherit hover:no-underline">
                <Card key={slug} className="h-full">
                  {image ? (
                    <div className="h-24 bg-gray-200 overflow-hidden relative">
                      <Image
                        src={image}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                  ) : null}
                  <div className="px-6 py-4">
                    <div className="text-xs text-gray-400">
                      <Date dateString={date} />
                    </div>
                    <h3 className="text-base my-0">{title}</h3>
                    {excerpt && (
                      <p className="my-2 text-sm text-black">{excerpt}</p>
                    )}
                    {tags.length > 0 && <Tags tags={tags} />}
                  </div>
                </Card>
              </a>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
