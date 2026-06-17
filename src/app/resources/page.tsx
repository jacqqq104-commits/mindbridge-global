const globalResources = [
  { name: "Crisis Text Line", desc: "Text HOME to 741741 (US, UK, Canada, Ireland)", url: "https://www.crisistextline.org" },
  { name: "WHO Mental Health", desc: "World Health Organization mental health resources and global data", url: "https://www.who.int/health-topics/mental-health" },
  { name: "UNICEF – Mental Health", desc: "Resources for young people from UNICEF", url: "https://www.unicef.org/topics/mental-health" },
  { name: "International Association for Suicide Prevention", desc: "Global directory of crisis centers by country", url: "https://www.iasp.info/resources/Crisis_Centres/" },
]

export default function ResourcesPage() {
  return (
    <div>
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--coral)" }}>Resources</p>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">If You Need Support</h1>
          <p className="text-gray-400 mt-4 max-w-xl text-sm leading-relaxed">
            This page is for education and awareness only. It is not medical advice, therapy, diagnosis, or crisis support.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Disclaimer */}
        <div
          className="rounded-xl p-6 mb-12 border"
          style={{ backgroundColor: "#fff8f7", borderColor: "var(--coral)" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--coral)" }}>Important Disclaimer</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            This website is for education and awareness only. It is not medical advice, therapy, diagnosis, or crisis support.
            If you are in immediate danger, please contact emergency services in your area right away.
          </p>
        </div>

        {/* If in immediate danger */}
        <div className="mb-10">
          <h2 className="font-bold text-lg mb-4" style={{ color: "var(--navy)" }}>🚨 If You Are in Immediate Danger</h2>
          <div className="bg-white rounded-xl p-6">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Call your local emergency number immediately (911, 999, 112, or your country's equivalent).
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Do not wait. Do not search for resources online. Call emergency services or go to the nearest emergency room.
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--coral)" }}>
              Local Taiwan emergency: 119 (medical) · 110 (police)
            </p>
          </div>
        </div>

        {/* Worried about yourself */}
        <div className="mb-10">
          <h2 className="font-bold text-lg mb-4" style={{ color: "var(--navy)" }}>💛 If You Are Worried About Yourself</h2>
          <div className="bg-white rounded-xl p-6 flex flex-col gap-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              You don't have to be in crisis to deserve support. If something feels off — persistent sadness, anxiety, trouble sleeping, withdrawal — that's worth paying attention to.
            </p>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-2">
              <li>Talk to a trusted adult — a parent, teacher, or school counselor.</li>
              <li>Contact a school counseling service. <span className="text-gray-400">(Add your school's contact here.)</span></li>
              <li>Look up a verified crisis line for your country using the IASP directory below.</li>
            </ul>
          </div>
        </div>

        {/* Worried about a friend */}
        <div className="mb-10">
          <h2 className="font-bold text-lg mb-4" style={{ color: "var(--navy)" }}>🤝 If You Are Worried About a Friend</h2>
          <div className="bg-white rounded-xl p-6 flex flex-col gap-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              If a friend seems different — more withdrawn, hopeless, or is saying things that worry you — take it seriously.
            </p>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-2">
              <li>Ask directly: "Are you okay? I've noticed you seem different lately."</li>
              <li>Listen without trying to fix or minimize what they're sharing.</li>
              <li>Encourage them to talk to a trusted adult or counselor — and offer to go with them.</li>
              <li>If you think they are in immediate danger, tell a trusted adult right away.</li>
            </ul>
          </div>
        </div>

        {/* How to talk to a trusted adult */}
        <div className="mb-10">
          <h2 className="font-bold text-lg mb-4" style={{ color: "var(--navy)" }}>💬 How to Talk to a Trusted Adult</h2>
          <div className="bg-white rounded-xl p-6">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Starting the conversation is often the hardest part. Here are three ways to open it:
            </p>
            <div className="flex flex-col gap-3">
              {[
                `"I've been feeling a lot of stress lately and I'm not sure how to manage it."`,
                `"I need to talk to someone about something that's been bothering me."`,
                `"I'm worried about a friend — can I tell you what's going on?"`,
              ].map((s) => (
                <div key={s} className="rounded-lg p-3 text-sm text-gray-700 italic" style={{ backgroundColor: "var(--cream)" }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global resources */}
        <div className="mb-10">
          <h2 className="font-bold text-lg mb-4" style={{ color: "var(--navy)" }}>🌍 Trusted Global Resources</h2>
          <div className="flex flex-col gap-4">
            {globalResources.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl p-5 hover:shadow-md transition-shadow group"
              >
                <p className="font-semibold text-sm group-hover:underline underline-offset-2" style={{ color: "var(--navy)" }}>
                  {r.name} →
                </p>
                <p className="text-xs text-gray-500 mt-1">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Local */}
        <div>
          <h2 className="font-bold text-lg mb-4" style={{ color: "var(--navy)" }}>📍 Local & School Support</h2>
          <div className="rounded-xl p-6 border border-dashed border-gray-300 text-sm text-gray-500 leading-relaxed">
            <p className="mb-2">Local Taiwan support resources: <span className="italic">Add verified resources here.</span></p>
            <p className="mb-2">School counselor or trusted adult: <span className="italic">Add appropriate contact information only if allowed.</span></p>
            <p>Emergency support: <span className="italic">Add verified emergency instructions for your location.</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
