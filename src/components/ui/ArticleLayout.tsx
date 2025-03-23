'use client'

import { useEffect, useState } from 'react'

import { Container } from '@/components/ui/Container'
import { Prose } from '@/components/ui/Prose'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'

interface TableOfContentsItem {
  id: string
  title: string
  level: number
  children?: TableOfContentsItem[]
}

function generateId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function TableOfContents({ items }: { items: TableOfContentsItem[] }) {
  return (
    <nav>
      <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
        <h5 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          On this page
        </h5>
        <ul className="mt-4 space-y-3 text-sm">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
              >
                {item.title}
              </Link>
              {item.children && item.children.length > 0 && (
                <ul className="mt-2 space-y-2">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        href={`#${child.id}`}
                        className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                        style={{ paddingLeft: `${(child.level - 1) * 1}rem` }}
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>(
    [],
  )

  useEffect(() => {
    // Extract headings from the article content
    const headings = Array.from(document.querySelectorAll('h2, h3'))
    const tocItems: TableOfContentsItem[] = []
    let currentH2: TableOfContentsItem | null = null
    const idCounts: Record<string, number> = {}

    headings.forEach((heading) => {
      // Get the heading text and clean it
      const title = heading.textContent?.trim() ?? ''
      const level = parseInt(heading.tagName[1])

      // Generate ID from the title
      let id = generateId(title)

      // Ensure unique IDs by appending a number if necessary
      if (idCounts[id]) {
        idCounts[id]++
        id = `${id}-${idCounts[id]}`
      } else {
        idCounts[id] = 1
      }

      // Set the ID on the heading element
      heading.id = id

      if (level === 2) {
        currentH2 = { id, title, level, children: [] }
        tocItems.push(currentH2)
      } else if (level === 3 && currentH2) {
        currentH2.children?.push({ id, title, level })
      }
    })

    setTableOfContents(tocItems)
  }, [])

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="relative mx-auto max-w-5xl xl:flex">
          <article className="mx-auto max-w-2xl">
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {article.title}
              </h1>
              <time
                dateTime={article.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>
            </header>
            <div className="mt-8 flex gap-8">
              <div className="flex-1">
                <Prose data-mdx-content>{children}</Prose>
              </div>
            </div>
          </article>
          <aside className="hidden xl:block xl:w-64">
            <div className="sticky top-8">
              <TableOfContents items={tableOfContents} />
            </div>
          </aside>
        </div>
      </div>
    </Container>
  )
}
