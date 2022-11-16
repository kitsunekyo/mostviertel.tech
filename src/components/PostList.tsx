import Link from "next/link";
import Image from "next/image";

import { Date } from "src/components/Date";
import { Tags } from "src/components/Tags";

export const PostList = ({ posts }) => {
  return (
    <div className="flex flex-col gap-4">
      {posts.map(({ slug, date, title, excerpt, image, tags }) => (
        <Link
          key={slug}
          href={`/blog/${slug}`}
          className="group hover:text-inherit"
        >
          {image ? (
            <div className="h-24 bg-gray-200 overflow-hidden relative">
              <Image src={image} layout="fill" objectFit="cover" alt="" />
            </div>
          ) : null}
          <div className="py-4">
            <h3 className="text-base my-0 font-bold group-hover:text-orange-600">
              {title}
            </h3>
            {excerpt && <p className="my-2 text-sm">{excerpt}</p>}
            <div className="flex items-center gap-2">
              {date && (
                <div className="text-xs italic text-gray-500">
                  <Date dateString={date} />
                </div>
              )}
              {tags.length > 0 && <Tags tags={tags} />}
            </div>
            <div className="text-sm font-bold my-2 inline-flex items-center">
              <span>Read more</span>
              <span className="ml-2 group-hover:text-orange-600 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
