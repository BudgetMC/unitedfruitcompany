import type { Metadata } from "next";
import { getPostData, getSlugs, getTimelineMatches } from "../../../lib/posts";
import Container, { FullWidthContainer } from "../../../components/Container";
import TimelinePost from "../../../components/TimelinePost";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug, "Timeline");
  return {
    title: `${postData.title} - United Fruit Company`,
    description: postData.excerpt,
  };
}

export async function generateStaticParams() {
  const slugs = await getSlugs("Timeline");
  return slugs.map((s) => ({ slug: s.params.slug }));
}

export default async function TimelineSlugPage({ params }: Props) {
  const { slug } = await params;

  const [postData, bios, docs, articles] = await Promise.all([
    getPostData(slug, "Timeline"),
    getTimelineMatches(slug, "biographies"),
    getTimelineMatches(slug, "documents"),
    getTimelineMatches(slug, "articles"),
  ]);

  return (
    <FullWidthContainer backgroundColor="black">
      <Container>
        <TimelinePost post={postData} bios={bios} docs={docs} articles={articles} />
      </Container>
    </FullWidthContainer>
  );
}
