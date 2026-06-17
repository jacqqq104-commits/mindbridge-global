import { topics } from "@/lib/data"
import Link from "next/link"

export default function TopicsPage() {
  return (
    <div>
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--green)" }}>Topics</p>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">Explore by Topic</h1>
          <p className="text-gray-400 mt-4 max-w-xl text-sm leading-relaxed">
            Ten themes that shape the global conversation about youth mental health.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((t) => (
            <Link
              key={t.id}
              href={`/news?topic=${encodeURIComponent(t.title.split(" ")[0])}`}
              className="group block bg-white rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-4 block">{t.icon}</span>
              <h2 className="font-bold text-base mb-2 group-hover:underline underline-offset-2" style={{ color: "var(--navy)" }}>
                {t.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{t.description}</p>
              <div
                className="text-xs rounded-lg p-3 leading-relaxed"
                style={{ backgroundColor: "#e8f5ef", color: "var(--green)" }}
              >
                <span className="font-bold">Takeaway: </span>
                <span className="font-normal text-gray-600">{t.takeaway}</span>
              </div>
              <p className="text-xs text-gray-400 mt-4">{t.count} articles</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
