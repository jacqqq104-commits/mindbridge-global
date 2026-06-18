import { articles as localArticles } from "@/lib/data"
import { fetchArticles, fetchArticleById } from "@/lib/fetchArticles"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return localArticles.map((a) => ({ id: a.id }))
}

export const dynamicParams = true

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = await fetchArticleById(id)
  if (!article) notFound()

  const allArticles = await fetchArticles()
  const related = allArticles.filter((a) => a.id !== article.id && (a.region === article.region || a.topic === article.topic)).slice(0, 3)

  return (
    <div className="max-w-3xl mx-auto px-6 py-14">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/news" className="hover:underline">Global News</Link>
        <span>/</span>
        <span className="text-gray-600">{article.region}</span>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-2 mb-5">
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: "var(--navy)" }}
        >
          {article.region}
        </span>
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold"
          style={{ backgroundColor: "#e8f5ef", color: "var(--green)" }}
        >
          {article.topic}
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "var(--navy)" }}>
        {article.title}
      </h1>
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
        <span className="font-medium">{article.country}</span>
        <span>·</span>
        <span>{article.source}</span>
        <span>·</span>
        <span>{article.date}</span>
      </div>

      {/* Hero image */}
      <div className={`bg-gradient-to-br ${article.image_color} rounded-2xl h-56 md:h-72 mb-10`} />

      {/* Quick Summary */}
      <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: "#e8f5ef" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--green)" }}>Quick Summary</p>
        <p className="text-sm leading-relaxed text-gray-700">{article.summary}</p>
      </div>

      {/* What happened */}
      <div className="mb-8">
        <h2 className="font-bold text-lg mb-3" style={{ color: "var(--navy)" }}>What Happened?</h2>
        <p className="text-gray-700 text-sm leading-relaxed">{article.summary}</p>
      </div>

      {/* Why it matters */}
      <div className="mb-8">
        <h2 className="font-bold text-lg mb-3" style={{ color: "var(--navy)" }}>Why Does It Matter?</h2>
        <p className="text-gray-700 text-sm leading-relaxed">{article.why_it_matters}</p>
      </div>

      {/* Student takeaway */}
      <div
        className="rounded-xl p-6 mb-8 border-l-4"
        style={{ backgroundColor: "var(--cream)", borderColor: "var(--coral)" }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--coral)" }}>
          Student Takeaway
        </p>
        <p className="text-sm leading-relaxed text-gray-700">{article.student_takeaway}</p>
      </div>

      {/* Original source */}
      {article.original_url !== "#" && (
        <div className="mb-12">
          <a
            href={article.original_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-2"
            style={{ color: "var(--green)" }}
          >
            Read original source: {article.source} →
          </a>
        </div>
      )}

      {/* Related */}
      {related.length > 0 && (
        <div>
          <h2 className="font-bold text-lg mb-6" style={{ color: "var(--navy)" }}>Related Articles</h2>
          <div className="flex flex-col divide-y divide-gray-200">
            {related.map((a) => (
              <Link key={a.id} href={`/news/${a.id}`} className="group py-4 first:pt-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400">{a.region}</span>
                  <span className="text-xs text-gray-300">·</span>
                  <span className="text-xs font-medium" style={{ color: "var(--green)" }}>{a.topic}</span>
                </div>
                <p className="text-sm font-semibold group-hover:underline underline-offset-2" style={{ color: "var(--navy)" }}>
                  {a.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
