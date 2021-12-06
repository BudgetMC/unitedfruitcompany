import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPostsForDisplay, getTags } from '../../lib/posts'
import { ListedPost } from '../../lib/types'
import { WideContainer } from '../../components/Container'
import PostList from '../../components/PostList'
import usePageQuery from '../../hooks/usePageQuery'
import { useQueryState } from 'next-usequerystate'

interface Props {
  posts: ListedPost[],
  tags: string[]
}

const Biographies: NextPage<Props> = ({ posts, tags }) => {
  const [, setPage] = useQueryState<number>('page')
  const postsToShow = usePageQuery('biographies', posts)

  return (
    <WideContainer>
      <Head>
        <title>Biographies - United Fruit Company</title>
        <meta name="description" content="Biographies related to the United Fruit Company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList
        label='Biographies'
        posts={postsToShow}
        tags={tags}
      />
      <p onClick={() => setPage(1)}>1</p>
      <p onClick={() => setPage(2)}>2</p>
    </WideContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsForDisplay('Biographies')
  const tags = await getTags('Biographies')
  return {
    props: {
      posts,
      tags
    }
  }
}

export default Biographies