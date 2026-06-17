import { categories } from "../../../../../lib/posts";
import { searchCategory, searchCategoryByTag } from "../../../../../lib/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ category: string; query: string }> }
) {
  const { category, query } = await params;

  if (!categories.includes(category.toLowerCase())) {
    return new Response(`${category} is not a valid post category.`, { status: 404 });
  }

  // WP search doesn't include tags for image materials, so search by tag for documents.
  const posts = category.toLowerCase() === "documents"
    ? await searchCategoryByTag(category, query)
    : await searchCategory(category, query);

  return Response.json(posts);
}
