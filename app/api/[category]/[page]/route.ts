import { getCategoryPage } from "../../../../lib/server";
import { categories } from "../../../../lib/posts";

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

  const posts = await getCategoryPage(category, pageNum);

  if ("error" in posts) {
    return Response.json(posts, { status: 500 });
  }

  return Response.json(posts, {
    headers: { 'Cache-Control': 's-maxage=86400' },
  });
}
