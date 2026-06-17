import type { Metadata } from "next";
import { getPostData, getSlugs } from "../../../lib/posts";
import ResourceDisplay from "../../../components/ResourceDisplay";
import Container from "../../../components/Container";
import Banner from "../../../components/Banner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug, "Documents");
  return {
    title: `${postData.title} - United Fruit Company`,
    description: postData.excerpt,
  };
}

export async function generateStaticParams() {
  const slugs = await getSlugs("Documents");
  return slugs.map((s) => ({ slug: s.params.slug }));
}

export default async function DocumentSlugPage({ params }: Props) {
  const { slug } = await params;
  const postData = await getPostData(slug, "Documents");

  return (
    <div>
      <Banner header="Documents" previousSlug={postData.previousSlug} nextSlug={postData.nextSlug} />
      <Container>
        <ResourceDisplay post={postData} />
      </Container>
    </div>
  );
}
