import Link from "next/link"
import AboutPhotoCarousel from "@/components/AboutPhotoCarousel"

export default function AboutMePage() {
  return (
    <div className="bg-[#eef0f2] px-4 md:px-10 py-8 md:py-12">
      <section className="max-w-7xl mx-auto bg-white grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] min-h-[650px] overflow-hidden">
        <div className="px-8 py-12 md:px-16 md:py-16 lg:px-20 lg:py-20 flex flex-col justify-center">
          <p className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--green)" }}>About</p>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--navy)" }}>Jacqueline Wu</h1>
          <p className="text-sm md:text-base text-gray-500 mt-2 mb-6">You can call me JQ, too.</p>

          <div className="max-w-2xl space-y-5 text-base md:text-lg text-gray-700 leading-relaxed mb-9">
            <p>
              Hii, I&apos;m Jacqueline! I go to Kaohsiung American School in Taiwan. I love hanging out with my friends and exploring different kinds of things that challenge me.
            </p>
            <p>
              I created MindBridge Global to make mental health news easier for students to understand and to share practical ways we can support ourselves and one another.
            </p>
            <p>Feel free to reach out if you have any questions or ideas.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="mailto:jacqqq104@gmail.com" className="px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "var(--navy)" }}>
              Email Me
            </Link>
            <Link href="/about" className="px-6 py-3 rounded-full text-sm font-semibold border" style={{ color: "var(--navy)", borderColor: "var(--navy)" }}>
              About the Project
            </Link>
          </div>

          <p className="text-xs text-gray-400 mt-8 max-w-xl leading-relaxed">
            MindBridge Global is Jacqueline&apos;s independent student project. It is not an official Kaohsiung American School website and does not provide medical advice.
          </p>
        </div>

        <AboutPhotoCarousel />
      </section>
    </div>
  )
}
