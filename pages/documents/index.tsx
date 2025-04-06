import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getPageCount, getPostsForDisplay, getTags } from "../../lib/posts";
import { ListedPost } from "../../lib/types";
import { WideContainer } from "../../components/Container";
import PostList from "../../components/PostList";
import PagePicker from "../../components/PagePicker";
import usePageQuery from "../../hooks/usePageQuery";
import useQueryState from "../../hooks/useQueryState";

interface Props {
  posts: ListedPost[];
  pageCount: number;
  tags: string[];
}

const Documents: NextPage<Props> = ({ posts, pageCount, tags }) => {
  const pageParam = useQueryState('page', true)
  const postsToShow = usePageQuery("biographies", posts);

  return (
    <WideContainer>
      <Head>
        <title>Documents - United Fruit Company</title>
        <meta
          name="description"
          content="Documents related to the United Fruit Company."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList label="Documents" posts={postsToShow} tags={tags} />
      <PagePicker pageCount={pageCount} setPage={pageParam.setValue} />
    </WideContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsForDisplay("Documents");
  const pageCount = await getPageCount("Documents");
  const tags = await getTags("Documents");
  return {
    props: {
      posts,
      pageCount,
      tags,
    },
  };
};

export default Documents;
