import type { Metadata } from "next";
import { Suspense } from "react";
import { getPageCount, getPostsForDisplay, getTags } from "../../lib/posts";
import PostListPage from "../../components/PostListPage";

export const metadata: Metadata = {
  title: "Articles - United Fruit Company",
  description: "Articles related to the United Fruit Company.",
};

export default async function ArticlesPage() {
  const [posts, pageCount, tags] = await Promise.all([
    getPostsForDisplay("Articles"),
    getPageCount("Articles"),
    getTags("Articles"),
  ]);

  return (
    <Suspense>
      <PostListPage category="articles" label="Articles" initialPosts={posts} pageCount={pageCount} tags={tags} />
    </Suspense>
  );
}
