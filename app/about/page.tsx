import type { Metadata } from "next";
import { getAboutPost } from "../../lib/posts";
import Post from "../../components/Post";
import Container from "../../components/Container";

export const metadata: Metadata = {
  title: "About - United Fruit Company",
  description: "About the United Fruit Company Digital Archive.",
};

export default async function AboutPage() {
  const post = await getAboutPost();

  return (
    <Container>
      <Post post={post!} />
    </Container>
  );
}
