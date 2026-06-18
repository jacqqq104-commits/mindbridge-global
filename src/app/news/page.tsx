import { fetchArticles } from "@/lib/fetchArticles"
import NewsClient from "./NewsClient"

export default async function NewsPage() {
  const articles = await fetchArticles()
  return <NewsClient articles={articles} />
}
