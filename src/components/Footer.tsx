import Link from "next/link"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy)" }} className="text-gray-400 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: "var(--green)" }}
            >
              M
            </span>
            <span className="text-white font-semibold text-sm">MindBridge Global</span>
          </div>
          <p className="text-sm leading-relaxed">
            An independent student-led project. Not an official school website. Not medical advice. Sources reviewed before publishing.
          </p>
        </div>

        <div>
          <p className="text-white text-sm font-semibold mb-3">Pages</p>
          <div className="flex flex-col gap-2 text-sm">
            {[
              ["/news", "Global News"],
              ["/topics", "Topics"],
              ["/briefs", "Student Briefs"],
              ["/mind-body", "Mind & Body"],
              ["/take-action", "Take Action"],
              ["/resources", "Resources"],
              ["/about-me", "About Me"],
              ["/about", "About the Project"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white text-sm font-semibold mb-3">Contact</p>
          <p className="text-sm mb-4">Have a news idea or feedback? Reach out.</p>
          <Link
            href="mailto:jacqqq104@gmail.com"
            className="inline-block text-sm px-4 py-2 rounded-full border border-white/20 hover:border-white/50 transition-colors"
          >
            Email Jacqueline →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 max-w-7xl mx-auto">
        <p className="text-xs text-gray-500">
          © 2026 MindBridge Global · Independent student project · Photos from Unsplash · For education and awareness only · This is not medical advice, therapy, diagnosis, or crisis support.
        </p>
      </div>
    </footer>
  )
}
