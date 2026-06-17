import type { Metadata } from "next";
import { Suspense } from "react";
import { getPageCount, getPostsForDisplay, getTags } from "../../lib/posts";
import PostListPage from "../../components/PostListPage";

export const metadata: Metadata = {
  title: "Documents - United Fruit Company",
  description: "Documents related to the United Fruit Company.",
};

export default async function DocumentsPage() {
  const [posts, pageCount, tags] = await Promise.all([
    getPostsForDisplay("Documents"),
    getPageCount("Documents"),
    getTags("Documents"),
  ]);

  return (
    <Suspense>
      <PostListPage category="documents" label="Documents" initialPosts={posts} pageCount={pageCount} tags={tags} />
    </Suspense>
  );
}
