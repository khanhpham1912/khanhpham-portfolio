import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <div className="mx-auto h-full max-w-7xl">
      <div className="mx-auto h-full max-w-5xl">
        <div className="flex h-full flex-col items-center justify-center text-3xl text-zinc-500">
          Coming soon!
        </div>
      </div>
    </div>
  )
}
