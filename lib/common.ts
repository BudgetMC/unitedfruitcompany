// Helper functions used in multiple places.

import { decode } from "html-entities";
import { ListedPost, Post, Tags } from "./types";

const fetchJSON = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`WordPress API returned ${response.status} for ${url}`);
  }

  return response.json();
};

export const getPage = async (url: string, page: number) => {
  console.log(`Getting single page ${page} from ${url}`);

  const json = await fetchJSON(`${url}&page=${page}`);

  return json.posts as Post[];
};

export const getPaginatedResponse = async (
  url: string,
  page = 1
): Promise<Post[]> => {
  console.log(`Getting ${`${url}&page=${page}`}`);

  const json = await fetchJSON(`${url}&page=${page}`);

  let posts = json.posts as Post[];

  // Check if WP says there's another page
  if (json.meta?.next_page) {
    const nextPage = await getPaginatedResponse(url, page + 1);
    posts = posts.concat(nextPage);
  }

  return posts;
};

// Split tags that represent date ranges into their own array.
// This is a MacGyver solution for dating posts because we're using
// Wordpress.com which doesn't allow custom fields.
export const splitTags = (tags: string[]) => {
  const pattern = /^\d{4}-\d{4}$/;

  const sortedTags: Tags = {
    dateTags: [],
    labelTags: [],
  };

  tags.forEach((tag) => {
    if (pattern.test(tag)) {
      sortedTags.dateTags.push(tag);
    } else {
      sortedTags.labelTags.push(tag);
    }
  });

  return sortedTags;
};

const truncateExcerpt = (excerpt: string): string => {
  const plainText = excerpt.replace(/(<([^>]+)>)/gi, "");

  if (plainText.length < 157) {
    return plainText;
  } else {
    return `${plainText.slice(0, 157)}...`;
  }
};

// Cut down the huge WP objects into smaller ones that contain
// only the data we need.
export const formatPosts = (posts: Post[]): Post[] => {
  const isTimelinePost = (post: Post) =>
    Object.keys(post.categories).includes("Timeline");

  return posts.map((post) => ({
    ID: post.ID,
    title: decode(post.title),
    content: post.content,
    date: post.date,
    excerpt: isTimelinePost(post)
      ? post.excerpt
      : truncateExcerpt(post.excerpt),
    slug: post.slug,
    categories: Object.keys(post.categories).map((c) => c.toLowerCase()),
    featured_image: post.featured_image ? post.featured_image : null,
    tags: splitTags(Object.keys(post.tags)),
  }));
};

export const formatListedPosts = (posts: Post[]): ListedPost[] => {
  return posts.map((post) => ({
    ID: post.ID,
    title: decode(post.title),
    date: post.date,
    categories: Object.keys(post.categories).map((c) => c.toLowerCase()),
    excerpt: post.excerpt,
    slug: post.slug,
    featured_image: post.featured_image ? post.featured_image : null,
    tags: splitTags(Object.keys(post.tags)),
  }));
};

// Get the first URL param.
// Example:
// google.com/search/example => search
export const getUpperPath = (url: string) => {
  const lastSlash = url.lastIndexOf("/");
  return url.slice(0, lastSlash);
};
