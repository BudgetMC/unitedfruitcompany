import type { Metadata } from "next";
import { getPostsForDisplay } from "../../lib/posts";
import TimelineDisplay from "../../components/Timeline";

export const metadata: Metadata = {
  title: "Timeline - United Fruit Company",
  description: "The United Fruit Company Timeline.",
};

export default async function TimelinePage() {
  const posts = await getPostsForDisplay("Timeline");

  return <TimelineDisplay posts={posts} />;
}
