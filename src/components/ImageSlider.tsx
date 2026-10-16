'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const images = [
  {
    src: '/images/edu-rooms/TalkMedia_i_88239f1cd4c2.jpeg.jpeg',
    alt: '창가 아래 낮은 원목 교구장과 아동용 가구가 놓인 몬테소리 교실',
  },
  {
    src: '/images/edu-rooms/TalkMedia_i_d4b60b5d655e.jpeg.jpeg',
    alt: '원목 교구와 작은 책상이 정돈된 밝은 몬테소리 활동 공간',
  },
  {
    src: '/images/edu-rooms/TalkMedia_i_ad28d9c948ac.jpeg.jpeg',
    alt: '수 감각 교구와 낮은 선반이 배치된 몬테소리 교실 전경',
  },
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        goToPrevious()
      } else {
        goToNext()
      }
    }
    touchStartX.current = null
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-full group overflow-hidden rounded-xl border border-ink/10 shadow-[0_24px_60px_-30px_rgba(38,64,47,0.5)] select-none"
    >
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority={index === 0}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-pine-deep/60 via-pine-deep/20 to-transparent"
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-pine-deep/45 hover:bg-pine-deep/70 backdrop-blur-sm text-paper p-2 rounded-full opacity-85 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
        aria-label="이전 교실 사진 보기"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-pine-deep/45 hover:bg-pine-deep/70 backdrop-blur-sm text-paper p-2 rounded-full opacity-85 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
        aria-label="다음 교실 사진 보기"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {images.map((img, index) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-paper w-5' : 'bg-paper/55 w-2 hover:bg-paper/80'
            }`}
            aria-label={`${index + 1}번째 사진으로 이동: ${img.alt}`}
            aria-current={index === currentIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  )
}
