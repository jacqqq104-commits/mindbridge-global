import Link from "next/link"
import { briefs, REGIONS } from "@/lib/data"
import { fetchArticles } from "@/lib/fetchArticles"
import ArticleCard from "@/components/ArticleCard"

const REGION_EMOJI: Record<string, string> = {
  Asia: "🌏",
  Europe: "🌍",
  Africa: "🌍",
  Americas: "🌎",
  "Middle East": "🕌",
  Oceania: "🌊",
  "Global / WHO": "🌐",
}

export default async function Home() {
  const articles = await fetchArticles()
  const featured = articles[0]
  const latest = articles.slice(1, 9)
  const weeklyFocus = articles.find((a) => a.topic === "Social Media") ?? articles[1]
  const latestBriefs = briefs.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase"
            style={{ backgroundColor: "var(--green)", color: "white" }}
          >
            Student-led · Independent · Global
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Mental Health Is Global.
            <br />
            <span style={{ color: "var(--green)" }}>So Is Hope.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            A student-led website sharing worldwide mental health news, simple explanations, and ways young people can take action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/news"
              className="px-7 py-3 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--green)" }}
            >
              Read Global News →
            </Link>
            <Link
              href="/briefs"
              className="px-7 py-3 rounded-full font-semibold text-white border border-white/20 hover:border-white/50 transition-colors"
            >
              Explore Student Briefs
            </Link>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div
        className="border-y py-3 px-6 overflow-hidden"
        style={{ borderColor: "var(--navy)", backgroundColor: "var(--cream)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <span
            className="shrink-0 text-xs font-bold px-2 py-0.5 rounded text-white"
            style={{ backgroundColor: "var(--coral)" }}
          >
            LATEST
          </span>
          <p className="text-xs text-gray-600 truncate">
            {articles.slice(0, 4).map((a) => `${a.country}: ${a.title}`).join("  ·  ")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg" style={{ color: "var(--navy)" }}>Featured Story</h2>
              <Link href="/news" className="text-sm font-medium hover:underline" style={{ color: "var(--green)" }}>
                All news →
              </Link>
            </div>
            <ArticleCard article={featured} featured />
          </div>

          <div>
            <h2 className="font-bold text-lg mb-6" style={{ color: "var(--navy)" }}>More Stories</h2>
            <div className="flex flex-col divide-y divide-gray-200">
              {articles.slice(1, 6).map((a) => (
                <Link key={a.id} href={`/news/${a.id}`} className="group py-4 first:pt-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-medium text-gray-400">{a.region}</span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-xs font-medium" style={{ color: "var(--green)" }}>{a.topic}</span>
                  </div>
                  <p className="text-sm font-semibold leading-snug group-hover:underline underline-offset-2" style={{ color: "var(--navy)" }}>
                    {a.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{a.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Latest articles grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold text-xl" style={{ color: "var(--navy)" }}>Latest from Around the World</h2>
            <Link href="/news" className="text-sm font-medium hover:underline" style={{ color: "var(--green)" }}>
              See all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {latest.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </div>

        {/* Weekly focus + Student briefs */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">
          {/* This week's focus */}
          <div className="lg:col-span-3">
            <h2 className="font-bold text-xl mb-6" style={{ color: "var(--navy)" }}>This Week's Focus</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
              <div className={`bg-gradient-to-br ${weeklyFocus.image_color} p-8`}>
                <span className="inline-block text-xs font-semibold text-white/80 uppercase tracking-widest mb-2">
                  Focus Topic
                </span>
                <h3 className="text-white text-2xl font-bold leading-tight">Social Media & Youth Anxiety</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  This week we're looking at a growing body of research — and legislation — connecting social media platform design to rising anxiety rates in teenagers.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  From the UK's new age restrictions to ongoing debates about algorithmic content, the question isn't just 'how much time' but 'what is the platform designed to make you feel?'
                </p>
                <Link
                  href="/news?topic=Social+Media"
                  className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--navy)" }}
                >
                  Read related articles →
                </Link>
              </div>
            </div>
          </div>

          {/* Student Briefs */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-xl" style={{ color: "var(--navy)" }}>Student Briefs</h2>
              <Link href="/briefs" className="text-sm font-medium hover:underline" style={{ color: "var(--green)" }}>
                All →
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {latestBriefs.map((b) => (
                <Link key={b.id} href={`/briefs/${b.id}`} className="group block bg-white rounded-xl p-5 hover:shadow-md transition-shadow">
                  <p className="text-xs text-gray-400 mb-2">{b.date} · {b.read_time} min read</p>
                  <h3 className="text-sm font-bold leading-snug group-hover:underline underline-offset-2 mb-2" style={{ color: "var(--navy)" }}>
                    {b.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{b.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Explore by Region */}
        <div className="mb-20">
          <h2 className="font-bold text-xl mb-8" style={{ color: "var(--navy)" }}>Explore by Region</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {REGIONS.map((region) => {
              const count = articles.filter((a) => a.region === region).length
              return (
                <Link
                  key={region}
                  href={`/news?region=${encodeURIComponent(region)}`}
                  className="group flex flex-col items-center gap-2 bg-white rounded-2xl py-6 px-3 hover:shadow-md transition-shadow text-center"
                >
                  <span className="text-2xl">{REGION_EMOJI[region]}</span>
                  <span className="text-xs font-semibold leading-tight" style={{ color: "var(--navy)" }}>
                    {region}
                  </span>
                  <span className="text-xs text-gray-400">{count} articles</span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Take action preview */}
        <div
          className="rounded-2xl p-8 md:p-12 text-white"
          style={{ backgroundColor: "var(--navy)" }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Turn Awareness Into Action</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Reading about mental health is a start. Here are three things you can do this week.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: "💬", title: "Start a Conversation", desc: "Check in on a friend who seems quieter than usual." },
                { icon: "📤", title: "Share a Resource", desc: "Send one article to someone who might find it useful." },
                { icon: "🏃", title: "7-Day Challenge", desc: "Try our balance challenge — one small action per day." },
              ].map((action) => (
                <div key={action.title} className="rounded-xl p-5 text-left" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                  <span className="text-2xl mb-3 block">{action.icon}</span>
                  <h3 className="font-bold text-sm mb-1">{action.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{action.desc}</p>
                </div>
              ))}
            </div>
            <Link
              href="/take-action"
              className="inline-block px-7 py-3 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--green)" }}
            >
              See All Actions →
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--green)" }}>Get In Touch</p>
            <h2 className="font-bold text-xl" style={{ color: "var(--navy)" }}>Have a story, idea, or question?</h2>
            <p className="text-sm text-gray-500 mt-2">MindBridge Global is built by Jacqueline Wu, a student in Kaohsiung.</p>
          </div>
          <Link href="mailto:jacqqq104@gmail.com" className="shrink-0 px-6 py-3 rounded-full font-semibold text-white" style={{ backgroundColor: "var(--navy)" }}>
            jacqqq104@gmail.com
          </Link>
        </div>
      </div>
    </div>
  )
}
