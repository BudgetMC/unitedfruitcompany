'use client';

import { ListedPost } from "../../lib/types";
import PostList from "../PostList";
import PagePicker from "../PagePicker";
import usePageQuery from "../../hooks/usePageQuery";
import useQueryState from "../../hooks/useQueryState";
import { WideContainer } from "../Container";

interface Props {
  category: string;
  label: string;
  initialPosts: ListedPost[];
  pageCount: number;
  tags: string[];
}

export default function PostListPage({ category, label, initialPosts, pageCount, tags }: Props) {
  const postsToShow = usePageQuery(category, initialPosts);
  const pageParam = useQueryState('page', true);

  return (
    <WideContainer>
      <PostList label={label} posts={postsToShow} tags={tags} />
      <PagePicker pageCount={pageCount} setPage={pageParam.setValue} />
    </WideContainer>
  );
}
