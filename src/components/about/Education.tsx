// icons
import { Award } from 'lucide-react'

// components
import { Container } from '../ui'

export const Education = () => {
  return (
    <section className="py-12">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 inline-flex items-center text-2xl font-bold md:text-3xl">
            <Award className="mr-3 text-teal-500 dark:text-teal-400" />
            Education
          </h2>

          <div className="rounded-lg border border-zinc-200 p-5 transition-all hover:border-teal-500/50 hover:shadow-lg dark:border-zinc-800 dark:hover:border-teal-400/50">
            <h3 className="mb-1 text-xl font-bold">Ton Duc Thang University</h3>
            <div className="text-muted-foreground flex flex-wrap items-center gap-x-2">
              <span className="font-medium">
                Bachelor Of Science in Computer Science
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
