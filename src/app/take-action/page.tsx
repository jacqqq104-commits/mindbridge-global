"use client"

import { useEffect, useState } from "react"

const challenge = [
  { day: 1, action: "Sleep 30 minutes earlier than usual." },
  { day: 2, action: "Take a 20-minute break from all screens." },
  { day: 3, action: "Check in on a friend who seems quieter than usual." },
  { day: 4, action: "Walk outside for at least 15 minutes." },
  { day: 5, action: "Write down one worry and one thing you are grateful for." },
  { day: 6, action: "Read one hopeful mental health story and share it." },
  { day: 7, action: "Reflect on what you noticed this week." },
]

const actions = [
  { number: "01", title: "Start a Mental Health News Board", desc: "Post reliable headlines with short, student-friendly summaries in a classroom corner, shared document, or club board." },
  { number: "02", title: "Make Awareness Posters", desc: "Create clear posters that reduce stigma and point students toward trusted support. Ask permission before posting them at school." },
  { number: "03", title: "Share a Student Guide", desc: "Send one useful MindBridge article or resource to a friend, class chat, or club newsletter." },
  { number: "04", title: "Run an Anonymous Survey", desc: "Ask classmates about stress, sleep, or social media, with an adult helping you protect privacy and respond safely." },
  { number: "05", title: "Host a Lunch Discussion", desc: "Choose one news story and invite a small group to discuss what it means for students in Taiwan." },
  { number: "06", title: "Make a Good News Wall", desc: "Collect hopeful stories about programs that worked and young people making a difference." },
  { number: "07", title: "Present at Advisory or a Club", desc: "Build a five-minute presentation from one MindBridge story and end with one realistic action." },
  { number: "08", title: "Start a Monthly Theme", desc: "Focus on one subject each month, such as sleep, belonging, stress, or healthier social media habits." },
]

const storageKey = "mindbridge-seven-day-challenge"

export default function TakeActionPage() {
  const [completed, setCompleted] = useState<number[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = window.localStorage.getItem(storageKey)
      if (saved) setCompleted(JSON.parse(saved))
      setReady(true)
    }, 0)

    return () => window.clearTimeout(timer)
  }, [])

  function toggle(day: number) {
    const next = completed.includes(day) ? completed.filter((item) => item !== day) : [...completed, day]
    setCompleted(next)
    window.localStorage.setItem(storageKey, JSON.stringify(next))
  }

  function reset() {
    setCompleted([])
    window.localStorage.removeItem(storageKey)
  }

  const progress = Math.round((completed.length / challenge.length) * 100)

  return (
    <div>
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--green)" }}>Student Challenge</p>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">Small Actions. Real Progress.</h1>
          <p className="text-gray-300 mt-4 max-w-xl text-sm leading-relaxed">
            Try one manageable action at a time. Your checkmarks stay saved on this device, and you can restart whenever you want.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <section className="mb-20" aria-labelledby="challenge-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 id="challenge-heading" className="font-bold text-2xl mb-2" style={{ color: "var(--navy)" }}>7-Day Balance Challenge</h2>
              <p className="text-sm text-gray-500">Complete the days in any order. This is about noticing, not being perfect.</p>
            </div>
            <button type="button" onClick={reset} className="text-sm font-semibold hover:underline text-left sm:text-right" style={{ color: "var(--navy)" }}>
              Reset challenge
            </button>
          </div>

          <div className="mb-8" aria-live="polite">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span style={{ color: "var(--navy)" }}>{ready ? `${completed.length} of 7 complete` : "Loading progress"}</span>
              <span style={{ color: "var(--green)" }}>{ready ? `${progress}%` : ""}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full transition-all duration-300" style={{ width: `${progress}%`, backgroundColor: "var(--green)" }} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {challenge.map((item) => {
              const checked = completed.includes(item.day)
              return (
                <label key={item.day} className="cursor-pointer rounded-lg p-5 border-2 transition-colors min-h-44 flex flex-col" style={{ backgroundColor: checked ? "#e8f5ef" : "white", borderColor: checked ? "var(--green)" : "#e5e7eb" }}>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: checked ? "var(--green)" : "var(--navy)" }}>Day {item.day}</span>
                    <input type="checkbox" checked={checked} onChange={() => toggle(item.day)} className="w-5 h-5 accent-[#2D9B6F]" aria-label={`Mark day ${item.day} complete`} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--navy)" }}>{item.action}</p>
                  <p className="text-xs font-semibold mt-auto pt-4" style={{ color: checked ? "var(--green)" : "#9ca3af" }}>{checked ? "Completed" : "Not checked"}</p>
                </label>
              )
            })}
          </div>

          {completed.length === 7 && (
            <div className="mt-6 rounded-lg p-5 text-sm font-semibold" style={{ backgroundColor: "#e8f5ef", color: "var(--green)" }}>
              Challenge complete. Take a moment to notice which action helped you most.
            </div>
          )}
        </section>

        <section aria-labelledby="action-ideas-heading">
          <h2 id="action-ideas-heading" className="font-bold text-2xl mb-2" style={{ color: "var(--navy)" }}>Bring It to Your School</h2>
          <p className="text-sm text-gray-500 mb-8 max-w-2xl">Ideas for students in Taiwan to try independently or with a trusted adult, counselor, teacher, or club advisor.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {actions.map((action) => (
              <article key={action.title} className="bg-white p-6 min-h-56">
                <span className="text-xs font-bold tracking-widest" style={{ color: "var(--green)" }}>{action.number}</span>
                <h3 className="font-bold text-base mt-5 mb-3" style={{ color: "var(--navy)" }}>{action.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{action.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
