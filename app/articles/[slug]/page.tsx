import type { Metadata } from "next";
import { getPostData, getSlugs } from "../../../lib/posts";
import PostContent from "../../../components/Post";
import Container from "../../../components/Container";
import Banner from "../../../components/Banner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug, "Articles");
  return {
    title: `${postData.title} - United Fruit Company`,
    description: postData.excerpt,
  };
}

export async function generateStaticParams() {
  const slugs = await getSlugs("Articles");
  return slugs.map((s) => ({ slug: s.params.slug }));
}

export default async function ArticleSlugPage({ params }: Props) {
  const { slug } = await params;
  const postData = await getPostData(slug, "Articles");

  return (
    <div>
      <Banner header="Articles" previousSlug={postData.previousSlug} nextSlug={postData.nextSlug} />
      <Container>
        <PostContent post={postData} />
      </Container>
    </div>
  );
}
