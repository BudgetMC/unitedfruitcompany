// This stuff will only run when there's no cache.
// When it's done, it places a cache file into ../.cache/posts
// Future requests in ./posts.ts will just read that file.
import fs from "fs";
import path from "path";
import { formatPosts, getPaginatedResponse } from "./common";
import { Post } from "./types";

const cacheFolder = path.join(process.cwd(), ".cache");
const cacheFile = path.join(cacheFolder, "posts");

let postsPromise: Promise<Post[]> | null = null;

const getPosts = () => {
  if (!postsPromise) {
    postsPromise = loadPosts().catch((e) => {
      postsPromise = null;
      throw e;
    });
  }

  return postsPromise;
};

const loadPosts = async () => {
  const cachedPosts = getCachedPosts();

  if (cachedPosts) {
    return cachedPosts;
  }

  const posts = await requestFromServer();
  return posts;
};

const requestFromServer = async () => {
  if (!process.env.POSTS_URL) {
    throw new Error("Missing post URL environment variable.");
  }

  console.log("Requesting posts from Wordpress API...");

  const posts = await getPaginatedResponse(
    `${process.env.POSTS_URL}/?number=100`
  );

  const formattedPosts = formatPosts(posts);

  // Create the cache directory if it doesn't exist.
  if (!fs.existsSync(cacheFolder)) {
    fs.mkdirSync(cacheFolder);
  }

  fs.writeFileSync(cacheFile, JSON.stringify(formattedPosts));

  return formattedPosts;
};

const getCachedPosts = () => {
  try {
    const cachedPost = fs.readFileSync(cacheFile);
    return JSON.parse(cachedPost.toString()) as Post[];
  } catch {
    return null;
  }
};

export default getPosts;
