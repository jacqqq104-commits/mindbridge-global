const challenge = [
  { day: 1, action: "Sleep 30 minutes earlier than usual." },
  { day: 2, action: "Take a 20-minute break from all screens." },
  { day: 3, action: "Check in on a friend who seems quieter than usual." },
  { day: 4, action: "Walk outside for at least 15 minutes." },
  { day: 5, action: "Write one worry down — and one thing you're grateful for." },
  { day: 6, action: "Read one hopeful mental health news story and share it." },
  { day: 7, action: "Reflect: what did you notice this week?" },
]

const actions = [
  {
    icon: "📋",
    title: "Start a Mental Health News Board",
    desc: "Create a physical or digital space where you post global mental health headlines with student-friendly summaries. A classroom corner, a shared doc, or a club bulletin board all work.",
  },
  {
    icon: "🎨",
    title: "Make Awareness Posters",
    desc: "Design simple posters with facts, questions, or prompts that reduce stigma. Post them in hallways, locker rooms, or school common areas with permission.",
  },
  {
    icon: "📤",
    title: "Share a Student Guide",
    desc: "Pick one article or resource from this site and share it with someone — a friend, a class group chat, or a club newsletter. One share can start a conversation.",
  },
  {
    icon: "📊",
    title: "Run a Student Survey",
    desc: "Ask your peers anonymous questions about stress, sleep, or social media use. Share what you find. Data-driven conversations are often more effective than general ones.",
  },
  {
    icon: "🍽️",
    title: "Host a Lunch Discussion",
    desc: "Use a news article as a conversation starter during lunch with friends or a club. 'Did you know that...' is often enough to start something real.",
  },
  {
    icon: "✨",
    title: "Make a Good News Wall",
    desc: "Counterbalance heavy news with a wall of hopeful stories — programs that worked, people who helped, young people making change. Hope is not naïve. It is necessary.",
  },
  {
    icon: "🎤",
    title: "Present at Advisory or a Club",
    desc: "Create a 5-minute presentation using MindBridge articles for your advisory, school club, or class. You don't need to be an expert — sharing what you've learned is enough.",
  },
  {
    icon: "📅",
    title: "Start a Monthly Theme",
    desc: "Commit to one mental health theme per month — sleep in October, loneliness in November, social media in January. Depth over breadth creates real awareness.",
  },
]

export default function TakeActionPage() {
  return (
    <div>
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--green)" }}>Take Action</p>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">Turn Awareness Into Action</h1>
          <p className="text-gray-400 mt-4 max-w-xl text-sm leading-relaxed">
            Reading about mental health is the first step. Here's what you can actually do — as a student, right now.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* 7-Day Challenge */}
        <div className="mb-20">
          <h2 className="font-bold text-2xl mb-2" style={{ color: "var(--navy)" }}>7-Day Balance Challenge</h2>
          <p className="text-sm text-gray-500 mb-8 max-w-xl">One small action per day. No pressure, no tracking — just an invitation to try.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {challenge.map((c) => (
              <div
                key={c.day}
                className="rounded-2xl p-5 flex flex-col gap-3"
                style={{ backgroundColor: "var(--navy)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ backgroundColor: "var(--green)" }}
                >
                  {c.day}
                </div>
                <p className="text-white text-xs leading-relaxed">{c.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action ideas */}
        <div>
          <h2 className="font-bold text-2xl mb-2" style={{ color: "var(--navy)" }}>Student Action Ideas</h2>
          <p className="text-sm text-gray-500 mb-8 max-w-xl">These are things you can do at your school, in your community, or online — as an individual or with a group.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {actions.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow">
                <span className="text-2xl mb-4 block">{a.icon}</span>
                <h3 className="font-bold text-sm mb-2" style={{ color: "var(--navy)" }}>{a.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
