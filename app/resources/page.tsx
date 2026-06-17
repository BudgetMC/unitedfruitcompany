import type { Metadata } from "next";
import { getBibliography } from "../../lib/posts";
import Bibliography from "../../components/Bibliography";
import { WideContainer } from "../../components/Container";

export const metadata: Metadata = {
  title: "Resources - United Fruit Company",
  description: "Resources related to the United Fruit Company.",
};

export default async function ResourcesPage() {
  const posts = await getBibliography();

  return (
    <WideContainer>
      <Bibliography items={posts} />
    </WideContainer>
  );
}
