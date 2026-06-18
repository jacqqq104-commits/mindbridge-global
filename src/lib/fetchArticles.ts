import { supabase } from "./supabase"
import { articles as localArticles, type Article } from "./data"

export async function fetchArticles(): Promise<Article[]> {
  if (!supabase) {
    // No Supabase env vars — use local sample data
    return localArticles
  }

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("approved", true)
    .order("date", { ascending: false })

  if (error || !data || data.length === 0) {
    // Supabase error or empty — fall back to local data
    return localArticles
  }

  return data as Article[]
}

export async function fetchArticleById(id: string): Promise<Article | null> {
  if (!supabase) {
    return localArticles.find((a) => a.id === id) ?? null
  }

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .eq("approved", true)
    .single()

  if (error || !data) {
    return localArticles.find((a) => a.id === id) ?? null
  }

  return data as Article
}
