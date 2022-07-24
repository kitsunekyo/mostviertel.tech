import { getPosts } from "src/lib/blog";
import { Layout } from "src/components/Layout";
import { PostList } from "src/components/PostList";
import { useRouter } from "next/router";
import Link from "next/link";
import Error from "next/error";
import classNames from "classnames";

function usePagination(data, page) {
  const perPage = 5;
  const pages = Math.ceil(data.length / perPage);
  const paginatedData =
    page > pages ? [] : data.slice(perPage * (page - 1), perPage * page);

  return { paginatedData, pages };
}

export default function Blog({ posts }) {
  const router = useRouter();
  const { page = 1 } = router.query;

  const { paginatedData: pagePosts, pages } = usePagination(posts, page);

  if (page > pages) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout>
      <div className="p-6">
        <div className="contained">
          <h1 className="text-2xl mt-4">
            Blog{" "}
            <small className="text-sm font-normal text-gray-400 ml-2">
              {posts.length} total posts
            </small>
          </h1>
          <PostList posts={pagePosts} />
          <Pagination pages={pages} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

function Pagination({ pages }) {
  const router = useRouter();

  return (
    <div className="flex items-center text-xs border-t border-gray-100 pt-6">
      <div className="mr-2">Pages: </div>
      <div className="flex item-center gap-2">
        {Array.from(Array(pages), (_, i) => i + 1).map((p) => (
          <Link key={p} href={`?page=${p}`}>
            <a
              className={classNames(
                "bg-gray-50 rounded hover:bg-gray-100 flex items-center justify-center h-6 w-6",
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
