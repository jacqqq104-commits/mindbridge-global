import { briefs } from "@/lib/data"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return briefs.map((brief) => ({ id: brief.id }))
}

export default async function BriefPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const brief = briefs.find((item) => item.id === id)
  if (!brief) notFound()

  const related = briefs.filter((item) => item.id !== brief.id).slice(0, 3)

  return (
    <div className="max-w-3xl mx-auto px-6 py-14">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/briefs" className="hover:underline">Student Briefs</Link>
        <span>/</span>
        <span className="text-gray-600">{brief.date}</span>
      </div>

      <span
        className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-5"
        style={{ backgroundColor: "var(--green)" }}
      >
        Student Brief
      </span>

      <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "var(--navy)" }}>
        {brief.title}
      </h1>

      <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
        <span>{brief.date}</span>
        <span>·</span>
        <span>{brief.read_time} min read</span>
      </div>

      <div className="rounded-xl p-6 mb-10" style={{ backgroundColor: "#e8f5ef" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--green)" }}>
          Quick Reflection
        </p>
        <p className="text-sm leading-relaxed text-gray-700">{brief.excerpt}</p>
      </div>

      <article className="bg-white rounded-2xl p-8 mb-10">
        <h2 className="font-bold text-lg mb-3" style={{ color: "var(--navy)" }}>What this brief is asking</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          This reflection connects global mental health news to everyday student life. It is meant to help readers slow down, notice patterns, and think about what action could look like in a school or community setting.
        </p>

        <h2 className="font-bold text-lg mb-3" style={{ color: "var(--navy)" }}>Why it matters for students</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          Mental health is often talked about as something private, but the news shows that it is also shaped by schools, technology, policy, family expectations, social connection, and access to support. Students deserve language that makes those connections easier to understand.
        </p>

        <h2 className="font-bold text-lg mb-3" style={{ color: "var(--navy)" }}>A small action to try</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Share one idea from this brief with a friend, classmate, or club. The goal is not to become an expert. The goal is to make mental health easier to talk about before someone reaches a crisis point.
        </p>
      </article>

      {related.length > 0 && (
        <div>
          <h2 className="font-bold text-lg mb-6" style={{ color: "var(--navy)" }}>More Student Briefs</h2>
          <div className="flex flex-col divide-y divide-gray-200">
            {related.map((item) => (
              <Link key={item.id} href={`/briefs/${item.id}`} className="group py-4 first:pt-0">
                <p className="text-xs text-gray-400 mb-1">{item.date} · {item.read_time} min read</p>
                <p className="text-sm font-semibold group-hover:underline underline-offset-2" style={{ color: "var(--navy)" }}>
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
