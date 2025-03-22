import { Experience } from '@/models/common'
import { Container } from '../ui'
import {
  Briefcase,
  Calendar,
  CheckCircle,
  FileText,
  Target,
} from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs'

export const WorkExperience = ({
  experiences,
}: {
  experiences: Experience[]
}) => {
  return (
    <section className="py-12">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 inline-flex items-center text-2xl font-bold md:text-3xl">
            <Briefcase className="mr-3 text-teal-500 dark:text-teal-400" />
            Work Experience
          </h2>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="rounded-lg border border-zinc-200 p-6 transition-all hover:border-teal-500/50 hover:shadow-lg dark:border-zinc-800 dark:hover:border-teal-400/50"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-2">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center text-sm">
                        <Calendar size={14} className="mr-1 inline" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="mb-6 grid grid-cols-3">
                    <TabsTrigger
                      value="description"
                      className="flex items-center gap-2 data-[state=active]:text-teal-500 dark:data-[state=active]:text-teal-400"
                    >
                      <FileText size={16} />
                      <span className="hidden sm:inline">Description</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="responsibilities"
                      className="flex items-center gap-2 data-[state=active]:text-teal-500 dark:data-[state=active]:text-teal-400"
                    >
                      <CheckCircle size={16} />
                      <span className="hidden sm:inline">Responsibilities</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="results"
                      className="flex items-center gap-2 data-[state=active]:text-teal-500 dark:data-[state=active]:text-teal-400"
                    >
                      <Target size={16} />
                      <span className="hidden sm:inline">Results</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="description" className="mt-0">
                    <p className="text-muted-foreground">{exp.description}</p>
                  </TabsContent>

                  <TabsContent value="responsibilities" className="mt-0">
                    <ul className="text-muted-foreground space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-5 before:absolute before:left-0 before:text-teal-500 before:content-['•'] dark:before:text-teal-400"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="results" className="mt-0">
                    <ul className="text-muted-foreground space-y-2">
                      {exp.results.map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-5 before:absolute before:left-0 before:text-teal-500 before:content-['•'] dark:before:text-teal-400"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>

                <div className="mt-6">
                  <h4 className="text-muted-foreground mb-2 text-sm font-medium tracking-wider uppercase">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-500/20 dark:bg-teal-950/30 dark:text-teal-300 dark:ring-teal-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
