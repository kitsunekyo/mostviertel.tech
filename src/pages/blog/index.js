import { getPosts } from "src/lib/blog";
import { Layout } from "src/components/Layout";
import { PostList } from "src/components/PostList";
import { useRouter } from "next/router";
import Link from "next/link";
import Error from "next/error";
import classNames from "classnames";

export default function Blog({ totalPosts, posts }) {
  const router = useRouter();
  const { page = 1 } = router.query;

  const postsPerPage = 5;
  const pages = Math.ceil(totalPosts / postsPerPage);
  const pagePosts = page > pages ? [] : posts.slice(page - 1, postsPerPage);

  if (page > pages) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout>
      <div className="p-6 pb-48">
        <div className="contained">
          <h1>Blog</h1>
          <PostList posts={pagePosts} />
          <Pagination pages={pages} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { posts, totalPosts } = await getPosts();
  return {
    props: {
      posts,
      totalPosts,
    },
  };
};

function Pagination({ pages }) {
  const router = useRouter();

  return (
    <div className="flex items-center text-sm border-t border-gray-100 py-4 justify-end">
      <div className="mr-2">Pages: </div>
      <div className="flex item-center gap-2">
        {Array.from(Array(pages), (_, i) => i + 1).map((p) => (
          <Link key={p} href={`?page=${p}`}>
            <a
              className={classNames(
                "bg-gray-100 rounded hover:bg-gray-100 flex items-center justify-center h-6 w-6",
                {
                  "font-bold text-orange-500":
                    router.asPath === `/blog?page=${p}` ||
                    (router.asPath === "/blog" && p === 1),
                }
              )}
            >
              {p}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
