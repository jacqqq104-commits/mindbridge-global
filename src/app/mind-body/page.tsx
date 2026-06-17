const sections = [
  {
    icon: "😰",
    title: "Stress and the Body",
    body: "When you feel stressed, your body releases cortisol and adrenaline — hormones designed for short-term emergencies. Chronic stress from school pressure, social conflict, or global news keeps these hormones elevated, which over time affects sleep, digestion, immunity, and mood.",
    example: "A student preparing for finals may notice headaches, poor sleep, and irritability. These are not just feelings — they are physical stress responses.",
    habit: "Take three slow, deep breaths before a stressful class or exam. It directly signals your nervous system to slow down.",
    color: "var(--coral)",
  },
  {
    icon: "🌙",
    title: "Sleep and Mood",
    body: "Poor sleep reduces the brain's ability to regulate emotion, process memory, and manage focus. For students, sleep is not just rest — it is part of learning, emotional balance, and physical health. Research consistently shows that sleep deprivation amplifies anxiety and depression symptoms.",
    example: "A student getting 5 hours of sleep per night may feel more anxious, make more impulsive decisions, and retain less from studying than a peer sleeping 8 hours.",
    habit: "Set a 20-minute no-screen routine before bed twice this week. The goal is habit formation, not perfection.",
    color: "var(--navy)",
  },
  {
    icon: "🏃",
    title: "Exercise and Mental Health",
    body: "Regular movement releases endorphins, reduces cortisol, and improves neuroplasticity — the brain's ability to adapt and learn. Even moderate exercise has been shown to reduce symptoms of depression and anxiety comparably to some medications in mild to moderate cases.",
    example: "A 20-minute walk after school has measurable effects on mood regulation and focus for the remainder of the evening.",
    habit: "Move for 15 minutes today. It does not have to be exercise — a walk, dancing alone in your room, or stretching all count.",
    color: "var(--green)",
  },
  {
    icon: "🥗",
    title: "Nutrition and Energy",
    body: "The gut and brain are deeply connected through what researchers call the gut-brain axis. Diets high in processed food and sugar have been linked to higher rates of depression and anxiety in young people. Nutritional deficiencies — especially in B vitamins, omega-3s, and magnesium — can directly affect mood and cognitive function.",
    example: "Students who skip meals or rely heavily on caffeine and snacks during exam season often report worse mood and focus compared to those who maintain regular eating patterns.",
    habit: "Eat something with protein and complex carbs before a big task — not just caffeine. Fuel your brain like it matters.",
    color: "var(--coral)",
  },
  {
    icon: "💊",
    title: "Chronic Illness and Emotional Health",
    body: "Living with a chronic physical condition — diabetes, asthma, autoimmune disorders — significantly increases the risk of depression and anxiety. The relationship goes both ways: poor mental health can worsen physical symptoms. This bidirectional relationship is one reason integrated health care matters.",
    example: "A student managing a chronic condition may experience grief, frustration, or isolation alongside physical symptoms. These emotional responses are real and deserve attention.",
    habit: "If you or someone you know manages a chronic condition, check in on how they're doing emotionally — not just physically.",
    color: "var(--navy)",
  },
  {
    icon: "📱",
    title: "Screen Time and Anxiety",
    body: "It is not screen time itself but context that matters. Passive scrolling through social media, especially late at night, is consistently linked to higher anxiety and lower self-esteem in teenagers. Active use — creating, connecting intentionally, learning — has far weaker negative associations.",
    example: "An hour of mindless TikTok scrolling before bed affects sleep, mood, and self-perception very differently than an hour of watching a documentary or video calling a friend.",
    habit: "For one day, notice how you feel after different types of screen use. The awareness itself often creates better instincts.",
    color: "var(--green)",
  },
]

export default function MindBodyPage() {
  return (
    <div>
      <section style={{ backgroundColor: "var(--navy)" }} className="px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--green)" }}>Mind & Body</p>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Mental Health and Physical<br />Health Are Connected
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl text-sm leading-relaxed">
            This isn't a wellness blog. It's a look at what research actually says about how your brain and body affect each other — and what that means for students.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-14">
        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl overflow-hidden">
              <div className="h-2" style={{ backgroundColor: s.color }} />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{s.icon}</span>
                  <h2 className="font-bold text-lg" style={{ color: "var(--navy)" }}>{s.title}</h2>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-5">{s.body}</p>
                <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: "var(--cream)" }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Student Example</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{s.example}</p>
                </div>
                <div className="rounded-lg p-4 border-l-4" style={{ borderColor: s.color, backgroundColor: "#fafaf8" }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: s.color }}>Try This</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{s.habit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
