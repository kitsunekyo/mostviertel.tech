import Link from "next/link";
import Image from "next/image";

import { Date } from "src/components/Date";
import { Tags } from "src/components/Tags";

export const PostList = ({ posts }) => {
  return (
    <div className="flex flex-col gap-4">
      {posts.map(({ slug, date, title, excerpt, image, tags }) => {
        return (
          <div key={slug}>
            {image ? (
              <div className="h-24 bg-gray-200 overflow-hidden relative">
                <Image src={image} layout="fill" objectFit="cover" alt="" />
              </div>
            ) : null}
            <div className="py-4">
              <Link key={slug} href={`/blog/${slug}`}>
                <a>
                  <h3 className="text-base my-0">{title}</h3>
                </a>
              </Link>
              <div className="text-xs text-gray-400">
                <Date dateString={date} />
              </div>
              {excerpt && <p className="my-2 text-sm">{excerpt}</p>}
              {tags.length > 0 && <Tags tags={tags} />}
              <Link key={slug} href={`/blog/${slug}`}>
                <a className="text-sm">Read more →</a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
