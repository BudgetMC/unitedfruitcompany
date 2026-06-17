import { getCategoryPage } from "../../../../lib/server";
import { categories } from "../../../../lib/posts";
import { formatListedPosts } from "../../../../lib/common";
import { Post } from "../../../../lib/types";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ category: string; page: string }> }
) {
  const { category, page } = await params;

  if (!categories.includes(category.toLowerCase())) {
    return new Response(`${category} is not a valid post category.`, { status: 404 });
  }

  const pageNum = parseInt(page);
  if (isNaN(pageNum)) {
    return new Response(`${page} is not a valid page number.`, { status: 400 });
  }

  const response = await getCategoryPage(category, pageNum);
  const filteredPosts = formatListedPosts(response as Post[]);

  return Response.json(filteredPosts, {
    headers: { 'Cache-Control': 's-maxage=86400' },
  });
}
