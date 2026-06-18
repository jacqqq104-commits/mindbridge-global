import { topics } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"

const topicFilterMap: Record<string, string> = {
  youth: "Youth",
  school: "School",
  sleep: "Mind & Body",
  "social-media": "Social Media",
  anxiety: "Youth",
  stigma: "Youth",
  suicide: "Crisis & Trauma",
  crisis: "Crisis & Trauma",
  policy: "Policy",
  "mind-body": "Mind & Body",
}

const topicImages: Record<string, { src: string; alt: string }> = {
  youth: { src: "/images/student-team.jpg", alt: "Young people working together" },
  school: { src: "/images/students-collaborating.jpg", alt: "Students learning together" },
  sleep: { src: "/images/topic-sleep.jpg", alt: "A calm bedroom representing healthy sleep" },
  "social-media": { src: "/images/topic-social-media.jpg", alt: "A student using digital technology" },
  anxiety: { src: "/images/topic-anxiety.jpg", alt: "A quiet moment of reflection" },
  stigma: { src: "/images/topic-stigma.jpg", alt: "People having an open group conversation" },
  suicide: { src: "/images/topic-hope.jpg", alt: "A hopeful view of nature and morning light" },
  crisis: { src: "/images/topic-crisis-support.jpg", alt: "Friends supporting one another" },
  policy: { src: "/images/topic-policy.jpg", alt: "A government building representing public policy" },
  "mind-body": { src: "/images/topic-mind-body.jpg", alt: "People practicing movement and wellbeing" },
}

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
              href={`/news?topic=${encodeURIComponent(topicFilterMap[t.id] || t.title)}`}
              className="group block bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={topicImages[t.id].src}
                  alt={topicImages[t.id].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
