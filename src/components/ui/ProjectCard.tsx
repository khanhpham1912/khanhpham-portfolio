'use client'

import { useState, useEffect, useCallback } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Card } from '@/components/ui'
import { cn } from '@/lib/utils'
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { Github } from 'lucide-react'

interface ProjectCardProps {
  name: string
  company?: string
  description: string
  images: StaticImageData[]
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
      className="group absolute inset-0 flex h-fit flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-md transition-shadow hover:shadow-lg dark:border-zinc-700/50 dark:bg-zinc-900"
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
                index === selectedIndex ? 'w-4 bg-black/30' : 'bg-black/20',
              )}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Project Header */}
        <div className="flex w-full flex-col space-y-1 pb-4">
          <div className="inline-flex items-center gap-4">
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
              {name}
            </h2>
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500"
              >
                <Github className="size-5" />
              </Link>
            )}
          </div>

          {company && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {company}
            </p>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex min-h-14 flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-flex h-6 items-center rounded-full bg-zinc-100 px-3 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View More Button */}
        <div className={cn('mt-6')}>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-sm font-medium text-teal-500 hover:text-teal-600"
          >
            {showDetails ? 'View less' : 'View more'}
          </button>
        </div>

        {/* Expandable Details */}
        {showDetails && (
          <div className="mt-6 border-t border-zinc-100 dark:border-zinc-800">
            {/* Description */}
            <div className="py-4">
              <h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                DESCRIPTION
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {description}
              </p>
            </div>

            {/* Key Features */}
            <div className="border-t border-zinc-100 py-4 dark:border-zinc-800">
              <h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                KEY FEATURES
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
