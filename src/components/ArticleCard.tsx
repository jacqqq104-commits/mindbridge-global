import Link from "next/link"
import Image from "next/image"
import type { Article } from "@/lib/data"

const topicImages: Record<string, { src: string; alt: string }> = {
  Youth: { src: "/images/student-team.jpg", alt: "Young people working together" },
  School: { src: "/images/students-collaborating.jpg", alt: "Students collaborating around a table" },
  "Social Media": { src: "/images/topic-social-media.jpg", alt: "A student using digital technology" },
  Policy: { src: "/images/topic-policy.jpg", alt: "A government building representing public policy" },
  Research: { src: "/images/topic-research.jpg", alt: "Researchers working in a laboratory" },
  "Crisis & Trauma": { src: "/images/topic-crisis-support.jpg", alt: "Friends supporting one another" },
  "Good News": { src: "/images/topic-good-news.jpg", alt: "A group of friends sharing a positive moment" },
  "Mind & Body": { src: "/images/topic-mind-body.jpg", alt: "People practicing movement and wellbeing" },
}

function getArticleImage(article: Article) {
  return topicImages[article.topic] ?? topicImages.Youth
}

export default function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const image = getArticleImage(article)

  if (featured) {
    return (
      <Link href={`/news/${article.id}`} className="group block">
        <div className="relative rounded-2xl p-8 mb-5 aspect-[16/7] flex flex-col justify-end overflow-hidden">
          <Image src={image.src} alt={image.alt} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/75 to-white/5" />
          <span
            className="relative inline-block px-2.5 py-1 rounded-full text-xs font-semibold border mb-3 w-fit"
            style={{ color: "var(--navy)", borderColor: "#7f9db9", backgroundColor: "#e8f1f8" }}
          >
            {article.region} · {article.topic}
          </span>
          <h2
            className="relative text-2xl md:text-3xl font-bold leading-tight group-hover:opacity-80 transition-opacity"
            style={{ color: "var(--navy)" }}
          >
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
      <div className="relative h-40 overflow-hidden">
        <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
      </div>
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
