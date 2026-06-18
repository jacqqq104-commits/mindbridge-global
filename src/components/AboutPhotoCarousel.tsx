"use client"

import Image from "next/image"
import { useState } from "react"

const photos = [
  { src: "/images/jacqueline/jq-01.jpg", alt: "Jacqueline visiting a colorful art exhibition" },
  { src: "/images/jacqueline/jq-02.jpg", alt: "Jacqueline exploring an art gallery" },
  { src: "/images/jacqueline/jq-03.jpg", alt: "Jacqueline holding a basketball" },
  { src: "/images/jacqueline/jq-04.jpg", alt: "Jacqueline enjoying a drink at a cafe" },
  { src: "/images/jacqueline/jq-05.jpg", alt: "A casual portrait of Jacqueline" },
]

export default function AboutPhotoCarousel() {
  const [active, setActive] = useState(0)

  function previous() {
    setActive((current) => (current - 1 + photos.length) % photos.length)
  }

  function next() {
    setActive((current) => (current + 1) % photos.length)
  }

  return (
    <div
      className="relative min-h-[480px] lg:min-h-full bg-[#0D1B2A] overflow-hidden"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") previous()
        if (event.key === "ArrowRight") next()
      }}
      aria-label="Jacqueline's photo gallery"
    >
      <Image
        key={photos[active].src}
        src={photos[active].src}
        alt={photos[active].alt}
        fill
        priority={active === 0}
        className="object-contain"
        sizes="(max-width: 1024px) 100vw, 42vw"
      />

      <button
        type="button"
        onClick={previous}
        aria-label="Previous photo"
        title="Previous photo"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-2xl font-semibold shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center"
        style={{ color: "var(--navy)" }}
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next photo"
        title="Next photo"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-2xl font-semibold shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center"
        style={{ color: "var(--navy)" }}
      >
        ›
      </button>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-6 pt-20">
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-2" aria-label="Choose a photo">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`View photo ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
                className="w-2.5 h-2.5 rounded-full border border-white transition-colors"
                style={{ backgroundColor: active === index ? "white" : "transparent" }}
              />
            ))}
          </div>
          <p className="text-xs font-semibold text-white">{active + 1} / {photos.length}</p>
        </div>
      </div>
    </div>
  )
}
