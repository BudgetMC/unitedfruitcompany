import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getPageCount, getPostsForDisplay, getTags } from "../../lib/posts";
import { ListedPost } from "../../lib/types";
import { WideContainer } from "../../components/Container";
import PostList from "../../components/PostList";
import usePageQuery from "../../hooks/usePageQuery";
import PagePicker from "../../components/PagePicker";
import useQueryState from "../../hooks/useQueryState";

interface Props {
  posts: ListedPost[];
  pageCount: number;
  tags: string[];
}

const Biographies: NextPage<Props> = ({ posts, pageCount, tags }) => {
  const pageParam = useQueryState('page', true)
  const postsToShow = usePageQuery("biographies", posts);

  return (
    <WideContainer>
      <Head>
        <title>Biographies - United Fruit Company</title>
        <meta
          name="description"
          content="Biographies related to the United Fruit Company."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList label="Biographies" posts={postsToShow} tags={tags} />
      <PagePicker pageCount={pageCount} setPage={pageParam.setValue} />
    </WideContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsForDisplay("Biographies");
  const pageCount = await getPageCount("Biographies");
  const tags = await getTags("Biographies");
  return {
    props: {
      posts,
      pageCount,
      tags,
    },
  };
};

export default Biographies;
