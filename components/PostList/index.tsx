import { ListedPost } from "../../lib/types";
import TypewriterScript from "../TypewriterScript";
import PostCard from "../PostCard";
import SearchPane from "../SearchPane";
import { ThreeDots } from "react-bootstrap-icons";
import { useEffect, useRef, useState } from "react";
import { useQueryState } from "nuqs";
import styles from './PostList.module.css';

interface Props {
  label: string; // e.g. "Biographies"
  posts: ListedPost[];
  tags: string[];
}

const PostList: React.FC<Props> = ({ label, posts, tags }) => {
  const [displayedPosts, setDisplayedPosts] = useState(posts);
  const [loading, setLoading] = useState(false);
  const [query] = useQueryState("search");

  const mountedRef = useRef(true);

  // Remember when it's unmounted so we can avoid trying to update
  // state in the async call below.
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const searchResponse = await fetch(`/api/${label}/search/${query}`);

      const matchingPosts = await searchResponse.json();

      if (!mountedRef.current) {
        return null;
      }

      setDisplayedPosts(matchingPosts);
      setLoading(false);
    };

    if (!query || query === "") {
      setDisplayedPosts(posts);
    } else {
      getPosts();
    }
  }, [query, posts, label]);

  const displayPosts = () => {
    if (loading) {
      return (
        <div className={styles.loadingIcon}>
          <ThreeDots />
        </div>
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
