import { MetadataRoute } from "next";
import getPosts from "../lib/cache";

const baseUrl = "https://www.unitedfruitcompany.com"

const categorySlugs = [
  'about',
  'articles',
  'biographies',
  'documents',
  'resources',
  'timeline'
]

export default async function generateSiteMaps(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  const items: MetadataRoute.Sitemap = [{
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1
  }]

  for (const catSlug of categorySlugs) {
    items.push({
      url: `${baseUrl}/${catSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    })
  }

  for (const post of posts) {
    const mainCategory = post.categories[0]

    if (mainCategory !== 'bibliography') {
      items.push({
        url: `${baseUrl}/${mainCategory}/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
      })
    }
  }

  return items
}