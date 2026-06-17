import { briefs } from "@/lib/data"
import Link from "next/link"

export default function BriefsPage() {
  return (
    <div>
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--green)" }}>Student Briefs</p>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">Written From a Student Perspective</h1>
          <p className="text-gray-400 mt-4 max-w-xl text-sm leading-relaxed">
            Short reflective posts connecting global mental health news to what it means for students like us.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-14">
        <div className="flex flex-col gap-8">
          {briefs.map((b, i) => (
            <Link
              key={b.id}
              href={`/briefs/${b.id}`}
              className="group block bg-white rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: i % 2 === 0 ? "var(--navy)" : "var(--green)" }}
                >
                  {i + 1}
                </span>
                <div className="text-xs text-gray-400">
                  <span>{b.date}</span>
                  <span className="mx-2">·</span>
                  <span>{b.read_time} min read</span>
                </div>
              </div>
              <h2
                className="font-bold text-lg md:text-xl leading-snug mb-3 group-hover:underline underline-offset-2"
                style={{ color: "var(--navy)" }}
              >
                {b.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{b.excerpt}</p>
              <p className="text-sm font-semibold mt-5" style={{ color: "var(--green)" }}>
                Read brief →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
