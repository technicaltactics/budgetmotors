'use client'
import { useState } from 'react'
import Image from 'next/image'

interface ImageGalleryProps {
  images: string[]
  title: string
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[16/10] bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
        No images available
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm">
        <Image
          src={images[activeIndex]}
          alt={`${title} - View ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center transition-all duration-300"
        />
      </div>

      {/* Thumbnails (Only show if multiple images exist) */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative aspect-[16/10] w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 bg-slate-50 transition-all ${
                activeIndex === idx
                  ? 'border-accent ring-2 ring-accent/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${idx + 1}`}
                fill
                sizes="96px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
