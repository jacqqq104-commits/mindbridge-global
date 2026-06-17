import Link from "next/link"
import type { Article } from "@/lib/data"

export default function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  if (featured) {
    return (
      <Link href={`/news/${article.id}`} className="group block">
        <div className={`bg-gradient-to-br ${article.image_color} rounded-2xl p-8 mb-5 aspect-[16/7] flex flex-col justify-end`}>
          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium text-white/80 border border-white/20 mb-3 w-fit">
            {article.region} · {article.topic}
          </span>
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight group-hover:opacity-90 transition-opacity">
            {article.title}
          </h2>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="font-medium" style={{ color: "var(--navy)" }}>{article.country}</span>
          <span>·</span>
          <span>{article.source}</span>
          <span>·</span>
          <span>{article.date}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">{article.summary}</p>
        <p className="text-xs font-semibold" style={{ color: "var(--green)" }}>
          Why it matters: <span className="font-normal text-gray-600">{article.why_it_matters}</span>
        </p>
      </Link>
    )
  }

  return (
    <Link href={`/news/${article.id}`} className="group block bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className={`bg-gradient-to-br ${article.image_color} h-40`} />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: "var(--navy)" }}
          >
            {article.region}
          </span>
          <span
            className="px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ backgroundColor: "#e8f5ef", color: "var(--green)" }}
          >
            {article.topic}
          </span>
        </div>
        <h3 className="font-bold text-sm leading-snug mb-2 group-hover:underline underline-offset-2" style={{ color: "var(--navy)" }}>
          {article.title}
        </h3>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{article.summary}</p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{article.country}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </Link>
  )
}
