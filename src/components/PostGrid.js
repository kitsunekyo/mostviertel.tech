import Link from "next/link";
import Image from "next/image";

import { Date } from "src/components/Date";
import { Card } from "src/components/Card";

export const PostGrid = ({ posts }) => {
  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr)",
      }}
    >
      {posts.map(({ slug, date, title, excerpt, image }) => (
        <Link href={`/blog/${slug}`} key={slug}>
          <a>
            <Card key={slug}>
              <div className="h-24 bg-gray-200 overflow-hidden relative">
                {image ? (
                  <Image src={image} layout="fill" objectFit="cover" alt="" />
                ) : null}
              </div>
              <div className="px-6 py-4">
                <div className="text-xs text-gray-400">
                  <Date dateString={date} />
                </div>
                <h3 className="text-base m-0">{title}</h3>
                {excerpt && <p className="m-0 text-sm">{excerpt}</p>}
              </div>
            </Card>
          </a>
        </Link>
      ))}
    </div>
  );
};
