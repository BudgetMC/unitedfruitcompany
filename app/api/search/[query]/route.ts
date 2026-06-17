import { searchAll } from "../../../../lib/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ query: string }> }
) {
  const { query } = await params;
  const posts = await searchAll(query);
  return Response.json(posts);
}
