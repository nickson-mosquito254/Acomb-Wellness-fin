"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageSliderProps {
  images: {
    src: string
    alt: string
  }[]
  autoplay?: boolean
  interval?: number
  className?: string
  overlayClassName?: string
  showControls?: boolean
  aspectRatio?: "square" | "video" | "portrait" | "custom"
  height?: number
}

export function ImageSlider({
  images,
  autoplay = false,
  interval = 5000,
  className,
  overlayClassName,
  showControls = true,
  aspectRatio = "custom",
  height = 500,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (autoplay) {
      intervalId = setInterval(() => {
        goToNext()
      }, interval)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [autoplay, interval, images.length])

  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    custom: "",
  }

  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)}>
      <div
        className={cn("relative w-full", aspectRatio !== "custom" ? aspectRatioClass[aspectRatio] : `h-[${height}px]`)}
        style={aspectRatio === "custom" ? { height: `${height}px` } : {}}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className={cn("absolute inset-0", overlayClassName)}></div>
          </div>
        ))}
      </div>

      {showControls && images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentIndex ? "bg-white w-4" : "bg-white/50",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

