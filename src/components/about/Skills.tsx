// icons
import { Wrench } from 'lucide-react'

// components
import { Container } from '../ui'

// images

export const Skills = ({
  libAndFrameworks,
  coreTechs,
}: {
  libAndFrameworks: string[]
  coreTechs: string[]
}) => {
  return (
    <section className="py-12">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 inline-flex items-center text-2xl font-bold md:text-3xl">
            <Wrench className="mr-3 text-teal-500 dark:text-teal-400" />
            Skills & Expertise
          </h2>

          <div className="space-y-6">
            <div>
              <h4 className="text-muted-foreground mb-3 text-sm font-medium tracking-wider uppercase">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {coreTechs.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-500/20 dark:bg-teal-950/30 dark:text-teal-300 dark:ring-teal-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-muted-foreground mb-3 text-sm font-medium tracking-wider uppercase">
                Frontend Frameworks & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {libAndFrameworks.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-500/20 dark:bg-teal-950/30 dark:text-teal-300 dark:ring-teal-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
