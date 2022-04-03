import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPageCount, getPostsForDisplay, getTags } from '../../lib/posts'
import { ListedPost } from '../../lib/types'
import { WideContainer } from '../../components/Container'
import PostList from '../../components/PostList'
import { queryTypes, useQueryState } from 'next-usequerystate'
import PagePicker from '../../components/PagePicker'
import usePageQuery from '../../hooks/usePageQuery'

interface Props {
  posts: ListedPost[],
  pageCount: number,
  tags: string[]
}

const Articles: NextPage<Props> = ({ posts, pageCount, tags }) => {
  const [, setPage] = useQueryState<number>('page', queryTypes.integer)
  const postsToShow = usePageQuery('biographies', posts)

  return (
    <WideContainer>
      <Head>
        <title>Articles - United Fruit Company</title>
        <meta name="description" content="Articles related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList
        label='Articles'
        posts={postsToShow}
        tags={tags}
      />
      <PagePicker pageCount={pageCount} setPage={setPage} />
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsForDisplay('Articles')
  const pageCount = await getPageCount('Articles')
  const tags = await getTags('Articles')
  return {
    props: {
      posts,
      pageCount,
      tags
    }
  }
}

export default Articles
