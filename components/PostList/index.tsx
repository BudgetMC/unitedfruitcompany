'use client';

import { ListedPost } from "../../lib/types";
import TypewriterScript from "../TypewriterScript";
import PostCard from "../PostCard";
import SearchPane from "../SearchPane";
import { ThreeDots } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import styles from './PostList.module.css';
import useQueryState from "../../hooks/useQueryState";

interface Props {
  label: string; // e.g. "Biographies"
  posts: ListedPost[];
  tags: string[];
}

const PostList: React.FC<Props> = ({ label, posts, tags }) => {
  const searchParam = useQueryState('search')
  const [displayedPosts, setDisplayedPosts] = useState(posts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    if (!searchParam.value) {
      setDisplayedPosts(posts);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const getPosts = async (query: string) => {
      setLoading(true);

      try {
        const searchResponse = await fetch(
          `/api/${label}/search/${encodeURIComponent(query)}`,
          { signal: controller.signal }
        );

        if (!searchResponse.ok) {
          throw new Error(`Search failed: ${searchResponse.status}`);
        }

        setDisplayedPosts((await searchResponse.json()) as ListedPost[]);
      } catch (e) {
        if (controller.signal.aborted) {
          return;
        }

        console.error(e);
        setError(true);
      }

      setLoading(false);
    };

    getPosts(searchParam.value as string);

    return () => controller.abort();
  }, [searchParam.value, posts, label]);

  const displayPosts = () => {
    if (loading) {
      return (
        <div className={styles.loadingIcon}>
          <ThreeDots />
        </div>
      );
    }

    if (error) {
      return (
        <p className={styles.error}>
          Something went wrong. Please try again.
        </p>
      );
    }

    if (displayedPosts.length > 0) {
      return (
        <ul className={styles.cardFlex}>
          {displayedPosts.map((post) => (
            <li key={post.ID}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p className={styles.error}>
          Nothing found :(
        </p>
      );
    }
  };

  return (
    <>
      <div className={styles.container}>
        <SearchPane tags={tags} />
        <div>
          <h1 className={styles.header}>
            <TypewriterScript text={label} averageDuration={1000} />
          </h1>
          {displayPosts()}
        </div>
      </div>
    </>
  );
};

export default PostList;
