"use client"
import { useState } from "react"
import { articles, REGIONS, TOPICS } from "@/lib/data"
import ArticleCard from "@/components/ArticleCard"

export default function NewsPage() {
  const [region, setRegion] = useState("All")
  const [topic, setTopic] = useState("All")

  const filtered = articles.filter((a) => {
    const regionMatch = region === "All" || a.region === region
    const topicMatch = topic === "All" || a.topic === topic
    return regionMatch && topicMatch
  })

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--green)" }}>Global News</p>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Mental Health News<br />From Around the World
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl text-sm leading-relaxed">
            Explained in student-friendly language. Filtered by region and topic. Updated regularly.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Filters */}
        <div className="mb-10 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Region</p>
            <div className="flex flex-wrap gap-2">
              {["All", ...REGIONS].map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all"
                  style={
                    region === r
                      ? { backgroundColor: "var(--navy)", color: "white", borderColor: "var(--navy)" }
                      : { backgroundColor: "white", color: "#555", borderColor: "#e5e7eb" }
                  }
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Topic</p>
            <div className="flex flex-wrap gap-2">
              {["All", ...TOPICS].map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all"
                  style={
                    topic === t
                      ? { backgroundColor: "var(--green)", color: "white", borderColor: "var(--green)" }
                      : { backgroundColor: "white", color: "#555", borderColor: "#e5e7eb" }
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Count */}
        <p className="text-sm text-gray-500 mb-6">
          Showing <strong>{filtered.length}</strong> articles
          {region !== "All" && <> in <strong>{region}</strong></>}
          {topic !== "All" && <> · <strong>{topic}</strong></>}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm">No articles match this filter. Try a different combination.</p>
          </div>
        )}
      </div>
    </div>
  )
}
