import { useEffect, useState } from "react";
import { ListedPost } from "../lib/types";
import useQueryState from "./useQueryState";

const usePageQuery = (category: string, initialPosts: ListedPost[]) => {
  const { value } = useQueryState("page");
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    if (!value || value === "1") {
      setPosts(initialPosts);
      return;
    }

    const controller = new AbortController();

    const getPosts = async (page: string) => {
      try {
        const response = await fetch(`/api/${category}/${page}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load page ${page}: ${response.status}`);
        }

        setPosts((await response.json()) as ListedPost[]);
      } catch (e) {
        if (!controller.signal.aborted) {
          console.error(e);
        }
      }
    };

    getPosts(value.toString());

    return () => controller.abort();
  }, [category, initialPosts, value]);

  return posts;
};

export default usePageQuery;
