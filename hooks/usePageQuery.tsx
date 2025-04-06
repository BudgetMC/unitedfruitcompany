import { useEffect, useRef, useState } from "react";
import { ListedPost } from "../lib/types";
import useQueryState from "./useQueryState";

const usePageQuery = (category: string, initialPosts: ListedPost[]) => {
  const { value } = useQueryState("page");
  const [posts, setPosts] = useState(initialPosts);

  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const getPosts = async (page: string) => {
      const response = await fetch(`/api/${category}/${page}`);
      const newPosts = (await response.json()) as ListedPost[];

      if (mountedRef.current) {
        setPosts(newPosts);
      }
    };

    if (value) {
      if (value === "1") {
        setPosts(initialPosts);
      } else {
        getPosts(value.toString());
      }
    }
  }, [category, initialPosts, value]);

  return posts;
};

export default usePageQuery;
