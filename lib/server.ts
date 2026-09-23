/* eslint-disable @typescript-eslint/no-explicit-any */

// Direct calls to the Wordpress API.
// These functions should only be called in the /api/ routes.

import {
  formatListedPosts,
  formatPosts,
  getPage,
  getPaginatedResponse,
} from "./common";

const postsURL = `${process.env.POSTS_URL}/?number=20`;

// Get all posts from a specific category
export const getCategory = async (category: string) => {
  try {
    const posts = await getPaginatedResponse(
      `${postsURL}&category=${category}`
    );
    return formatPosts(posts);
  } catch (e: any) {
    return { error: e.message };
  }
};

export const getCategoryPage = async (category: string, page: number) => {
  try {
    const posts = await getPage(`${postsURL}&category=${category}`, page);
    return formatListedPosts(posts);
  } catch (e: any) {
    return { error: e.message };
  }
};

// Get posts from within a category that match a search query
export const searchCategory = async (category: string, query: string) => {
  try {
    const posts = await getPaginatedResponse(
      `${postsURL}&category=${category}&search=${encodeURIComponent(query)}`
    );
    return formatListedPosts(posts);
  } catch (e: any) {
    return { error: e.message };
  }
};

// Get posts from within a category that match a tag
export const searchCategoryByTag = async (category: string, tag: string) => {
  try {
    const posts = await getPaginatedResponse(
      `${postsURL}&category=${category}&tag=${encodeURIComponent(
        tag.replace(/ /g, "-")
      )}`
    );
    return formatListedPosts(posts);
  } catch (e: any) {
    return { error: e.message };
  }
};

// Get posts from all categories that match a search query
export const searchAll = async (query: string) => {
  try {
    const posts = await getPaginatedResponse(
      `${postsURL}&search=${encodeURIComponent(query)}`
    );
    return formatListedPosts(posts);
  } catch (e: any) {
    return { error: e.message };
  }
};
