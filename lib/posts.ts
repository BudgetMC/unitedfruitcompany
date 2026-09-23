import { notFound } from "next/navigation";
import getPosts from "./cache";
import { ListedPost, Post } from "./types";

export const categories = [
  "articles",
  "biographies",
  "documents",
  "resources",
  "timeline",
];

// Helper for fetching the previous or next item in an array
// when we want to wrap around to the start/beginning instead
// of overflowing.
const getIndex = (current: number, max: number) => {
  if (current > max) {
    return 0;
  } else if (current < 0) {
    return max;
  }

  return current;
};

export const getCategory = async (category: string) => {
  const posts = await getPosts();

  return posts.filter((post) =>
    post.categories.includes(category.toLowerCase())
  );
};

export const getBibliography = async () => {
  const posts = await getPosts();

  const bibItems = posts.filter((post) =>
    post.categories.includes("bibliography")
  );

  return bibItems.sort((a, b) => {
    // This stuff needs to be alphabetized in a way that ignores non-letter characters.
    // So we strip everything other than letters, and then sort based on letters alone.
    const regex = /[^a-zA-Z ]/g;
    const aContent = a.content.toLocaleLowerCase().replace(regex, "");
    const bContent = b.content.toLocaleLowerCase().replace(regex, "");

    if (aContent && bContent) {
      return aContent.localeCompare(bContent);
    } else {
      return 0;
    }
  });
};

export const getCategoryFirstPage = async (category: string) => {
  const posts = await getPosts();

  const postsInCategory = posts.filter((post) =>
    post.categories.includes(category.toLowerCase())
  );

  return postsInCategory.slice(0, 20);
};

export const getPageCount = async (category: string) => {
  const posts = await getPosts();

  const postsInCategory = posts.filter((post) =>
    post.categories.includes(category.toLowerCase())
  );

  // 20 results per page, so we can do this little operation to get the page count
  return Math.max(1, Math.ceil(postsInCategory.length / 20));
};

export const getSlugs = async (category: string) => {
  const posts = await getCategory(category);

  return posts.map((p: Post) => ({
    params: {
      slug: p.slug,
    },
  }));
};

// This function returns an array of string, sorted by frequency of appearance
// in posts. It also truncates the response to 20 for performance.
export const getTags = async (category: string) => {
  const tags: { [name: string]: number } = {};
  const posts = await getCategory(category);

  posts.forEach((post) => {
    post.tags.labelTags.forEach((tag) => {
      tags[tag] = tags[tag] ? tags[tag] + 1 : 1;
    });
  });

  const tagArray: string[] = Object.keys(tags);

  tagArray.sort((a, b) => {
    if (tags[b] === tags[a]) {
      return a > b ? 1 : -1;
    } else {
      return tags[b] > tags[a] ? 1 : -1;
    }
  });

  return tagArray.slice(0, 20);
};

export const getTimelineMatches = async (
  dateRange: string,
  category: string
) => {
  const posts = await getPosts();

  const found = posts.filter(
    (post) =>
      post.tags.dateTags.includes(dateRange) &&
      post.categories.includes(category)
  );

  return found.map((post) => {
    const trimmedData: ListedPost = {
      ID: post.ID,
      title: post.title,
      date: post.date,
      categories: post.categories,
      slug: post.slug,
      excerpt: post.excerpt,
      tags: post.tags,
      featured_image: post.featured_image ? post.featured_image : null,
    };

    return trimmedData;
  });
};

export const getPostsForDisplay = async (category: string) => {
  const posts = await getCategoryFirstPage(category);

  return posts.map((post) => {
    const trimmedData: ListedPost = {
      ID: post.ID,
      title: post.title,
      date: post.date,
      categories: post.categories,
      slug: post.slug,
      excerpt: post.excerpt,
      tags: post.tags,
      featured_image: post.featured_image ? post.featured_image : null,
    };

    return trimmedData;
  });
};

export const getPostData = async (slug: string, category: string) => {
  const posts = await getCategory(category);
  const postIndex = posts.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const maxIndex = posts.length - 1;

  const post = posts[postIndex];
  const previousSlug = posts[getIndex(postIndex - 1, maxIndex)].slug;
  const nextSlug = posts[getIndex(postIndex + 1, maxIndex)].slug;

  return {
    ...post,
    previousSlug,
    nextSlug,
  };
};

// For fetching the single "About" post that will appear on /pages/about
export const getAboutPost = async () => {
  const posts = await getPosts();

  return posts.find(
    (post) => post.title === "About the United Fruit Company Digital Archive"
  );
};
