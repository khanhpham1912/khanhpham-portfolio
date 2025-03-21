'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { cn } from '@/lib/utils'
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'

interface ProjectCardProps {
  name: string
  company?: string
  description: string
  images: string[]
  features: string[]
  techStack: string[]
  githubLink?: string
}

export function ProjectCard({
  name,
  company,
  description,
  images,
  features,
  techStack,
  githubLink,
}: ProjectCardProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoPlay({ delay: 5000, stopOnInteraction: false }),
  ])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <Card
      as="div"
      data-expanded={showDetails}
      className="group absolute inset-0 flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-md transition-shadow hover:shadow-lg dark:border-zinc-700/50 dark:bg-zinc-900"
    >
      {/* Image Carousel */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="h-full" ref={emblaRef}>
          <div className="flex h-full touch-pan-y">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-full min-w-full flex-[0_0_100%]"
              >
                <Image
                  src={image}
                  alt={`${name} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Carousel Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-1.5 w-1.5 rounded-full transition-all duration-300',
                index === selectedIndex
                  ? 'w-4 bg-white'
                  : 'bg-white/60 hover:bg-white/80',
              )}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Header */}
      <div className="flex flex-col space-y-1 p-6">
        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          {name}
        </h2>
        {company && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{company}</p>
        )}
      </div>

      {/* Tech Stack */}
      <div className="px-6">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-flex h-6 items-center rounded-full bg-zinc-100 px-3 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-6 items-center rounded-full bg-zinc-100 px-3 text-xs font-medium text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1 h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-auto px-6 pb-6">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm font-medium text-teal-500 hover:text-teal-600"
        >
          {showDetails ? 'View less' : 'View more'}
        </button>
      </div>

      {/* Expandable Details */}
      {showDetails && (
        <div className="border-t border-zinc-100 dark:border-zinc-800">
          {/* Description */}
          <div className="p-6">
            <h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
              DESCRIPTION
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {description}
            </p>
          </div>

          {/* Key Features */}
          <div className="border-t border-zinc-100 p-6 dark:border-zinc-800">
            <h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
              KEY FEATURES
            </h3>
            <ul className="mt-2 space-y-1">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-zinc-600 dark:text-zinc-300"
                >
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Card>
  )
}
