import Link from "next/link"

export default function AboutPage() {
  return (
    <div>
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--green)" }}>About</p>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">About MindBridge Global</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14">
        <div className="bg-white rounded-2xl p-8 mb-8">
          <p className="text-sm leading-relaxed text-gray-700 mb-5">
            MindBridge Global is an independent student-led project created by a high school student in Taiwan. It is not an official school website and does not represent any school, organization, or institution.
          </p>
          <p className="text-sm leading-relaxed text-gray-700 mb-5">
            The goal is to make global mental health news easier for students to understand — and to encourage thoughtful reflection and student-led action.
          </p>
          <p className="text-sm leading-relaxed text-gray-700">
            This website does not provide medical advice, diagnosis, therapy, or crisis support. All articles and summaries are created for education and awareness only. Sources are reviewed before publishing.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8">
          <h2 className="font-bold text-lg mb-5" style={{ color: "var(--navy)" }}>What This Site Is For</h2>
          <ul className="flex flex-col gap-3">
            {[
              "Promoting mental health awareness among students",
              "Sharing mental health news from around the world",
              "Explaining serious topics in student-friendly language",
              "Connecting mental health with physical health",
              "Reducing stigma around asking for help",
              "Encouraging thoughtful student action",
              "Providing safe, responsible resource guidance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <span style={{ color: "var(--green)" }} className="mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8">
          <h2 className="font-bold text-lg mb-5" style={{ color: "var(--navy)" }}>What This Site Is Not</h2>
          <ul className="flex flex-col gap-3">
            {[
              "A source of medical advice, diagnosis, or treatment",
              "A crisis support service or replacement for counseling",
              "An official school or institutional website",
              "A platform that auto-publishes AI content without review",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <span style={{ color: "var(--coral)" }} className="mt-0.5 shrink-0">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8">
          <h2 className="font-bold text-lg mb-5" style={{ color: "var(--navy)" }}>Future: n8n Automation</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            This site is designed to eventually connect to an automated news pipeline using n8n. Here's how it works:
          </p>
          <div className="flex flex-col gap-2">
            {[
              "Trusted RSS / news source (WHO, BBC Health, Reuters, etc.)",
              "Keyword filter (mental health, youth, school stress...)",
              "AI summary draft generated",
              "Stored in Google Sheets / Airtable / Supabase",
              "Human review and approval",
              "Approved articles appear on website",
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span
                  className="w-6 h-6 rounded-full text-xs font-bold text-white flex items-center justify-center shrink-0"
                  style={{ backgroundColor: i === 5 ? "var(--green)" : "var(--navy)" }}
                >
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-5">
            Important: AI-generated mental health content is never published without human review.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="mailto:mindbridge@example.com"
            className="inline-block px-7 py-3 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--green)" }}
          >
            Contact / Submit a News Idea →
          </Link>
        </div>
      </div>
    </div>
  )
}
