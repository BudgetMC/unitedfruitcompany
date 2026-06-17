import type { Metadata } from "next";
import { Suspense } from "react";
import { getPageCount, getPostsForDisplay, getTags } from "../../lib/posts";
import PostListPage from "../../components/PostListPage";

export const metadata: Metadata = {
  title: "Biographies - United Fruit Company",
  description: "Biographies related to the United Fruit Company.",
};

export default async function BiographiesPage() {
  const [posts, pageCount, tags] = await Promise.all([
    getPostsForDisplay("Biographies"),
    getPageCount("Biographies"),
    getTags("Biographies"),
  ]);

  return (
    <Suspense>
      <PostListPage category="biographies" label="Biographies" initialPosts={posts} pageCount={pageCount} tags={tags} />
    </Suspense>
  );
}
