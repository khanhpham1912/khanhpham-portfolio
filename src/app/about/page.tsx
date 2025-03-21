import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import {
  Briefcase,
  Calendar,
  Award,
  Mail,
  FileText,
  CheckCircle,
  Target,
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

interface Experience {
  company: string
  position: string
  period: string
  description: string
  responsibilities: string[]
  results: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    company: 'Wareflex Sea, Vietnam',
    position: 'Frontend Engineer',
    period: 'March 2023 - February 2025',
    description:
      'Developed and maintained four integrated systems for warehouse and logistics management, implementing efficient UI components and robust data handling strategies.',
    responsibilities: [
      'Developed reusable UI components across four integrated systems',
      'Leveraged CDN for efficient data storage and optimized load times',
      'Implemented TanStack Query for asynchronous state management',
      'Built features for warehouse and transportation management systems',
      'Managed large-scale data operations with Web Workers',
    ],
    results: [
      'Standardized UI components across four systems',
      'Optimized loading times for static files',
      'Improved handling of 1M+ record exports',
      'Enhanced system customization with user-defined fields',
      'Successfully implemented real-time tracking with Amazon Location Service',
    ],
    technologies: [
      'TypeScript',
      'Next.js',
      'Axios',
      'TanStack Query',
      'Ant Design',
      'SheetJS',
      'Tailwind CSS',
      'SASS',
      'Mapbox',
      'Socket.IO',
      'Amazon Location Service',
      'Amazon S3',
    ],
  },
  {
    company: 'INSEAD',
    position: 'Frontend Engineer, Freelance',
    period: 'February 2023 - July 2023',
    description:
      'Contributed to the EunomiconAI project, developing a chatbot with OpenAI integration and interactive UI components.',
    responsibilities: [
      'Integrated OpenAI for chatbot functionality',
      'Designed interactive chat interface for users',
      'Built admin panel for knowledge management',
    ],
    results: [
      'Successfully deployed foundational knowledge chatbot',
      'Created intuitive UI for end users',
      'Implemented efficient knowledge upload and export system',
    ],
    technologies: [
      'TypeScript',
      'Ant Design',
      'Next.js',
      'Zustand',
      'HTML',
      'SASS',
    ],
  },
  {
    company: 'HCL Tech',
    position: 'Software Engineer Internship',
    period: 'November 2022 - February 2023',
    description:
      'Collaborated in a four-member team to develop an e-commerce website with secure authentication.',
    responsibilities: [
      'Implemented JWT authentication',
      'Optimized performance with prefetching techniques',
      'Collaborated within a four-member development team',
    ],
    results: [
      'Delivered secure authentication system',
      'Improved site loading performance',
      'Successfully contributed to team-based e-commerce project',
    ],
    technologies: ['TypeScript', 'React', 'HTML/CSS', 'SASS', 'Ant Design'],
  },
]

const skills = [
  'React',
  'TypeScript',
  'Next.js',
  'TanStack Query',
  'Tailwind CSS',
  'SASS',
  'Ant Design',
  'Redux',
  'Zustand',
  'HTML/CSS',
  'JavaScript',
  'API Integration',
  'State Management',
  'UI/UX Design',
  'Responsive Design',
  'Authentication',
  'Performance Optimization',
  'WebSockets',
  'AWS',
]

export const metadata: Metadata = {
  title: 'About',
  description:
    'Front-end Developer passionate about building responsive, user-friendly interfaces and optimizing system performance.',
}

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
            <div>
              <h1 className="mb-6 text-3xl font-bold md:text-5xl">About Me</h1>
              <p className="text-muted-foreground mb-8 text-lg">
                👋 Hi! I&apos;m a Frontend Developer who loves crafting
                beautiful and user-friendly web experiences.
              </p>
              <div className="text-muted-foreground space-y-4">
                <p>
                  🚀 My passion lies in creating modern web applications that
                  not only look great but also perform exceptionally well.
                  I&apos;m deeply experienced with React, TypeScript, and
                  Next.js, and I enjoy using these tools to build solutions that
                  make a real difference.
                </p>
                <p>
                  💡 Throughout my journey, I&apos;ve had the opportunity to
                  work on fascinating projects in warehouse management,
                  transportation logistics, and e-commerce. What really drives
                  me is finding that sweet spot between high performance and
                  great user experience - making complex systems feel simple and
                  intuitive for everyone who uses them.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-square rotate-3 overflow-hidden rounded-2xl bg-teal-100 shadow-lg transition-transform duration-300 hover:rotate-0 dark:bg-teal-900/20">
                <Image
                  src={portraitImage}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3">
                  <Mail
                    size={18}
                    className="text-teal-500 dark:text-teal-400"
                  />
                  <a
                    href="mailto:qkp.khanh@gmail.com"
                    className="text-sm transition-colors hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    qkp.khanh@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <GitHubIcon className="h-5 w-5 text-teal-500 dark:text-teal-400" />
                  <a
                    href="https://github.com/khanhpham1912"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    github.com/khanhpham1912
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <LinkedInIcon className="h-5 w-5 text-teal-500 dark:text-teal-400" />
                  <a
                    href="https://www.linkedin.com/in/phamquangkhanh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    linkedin.com/in/phamquangkhanh
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 inline-flex items-center text-2xl font-bold md:text-3xl">
              <Briefcase className="mr-3 text-teal-500 dark:text-teal-400" />
              Professional Experience
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
                        <span className="hidden sm:inline">
                          Responsibilities
                        </span>
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

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 inline-flex items-center text-2xl font-bold md:text-3xl">
              <Award className="mr-3 text-teal-500 dark:text-teal-400" />
              Education
            </h2>

            <div className="rounded-lg border border-zinc-200 p-5 transition-all hover:border-teal-500/50 hover:shadow-lg dark:border-zinc-800 dark:hover:border-teal-400/50">
              <h3 className="mb-1 text-xl font-bold">
                Ton Duc Thang University
              </h3>
              <div className="text-muted-foreground flex flex-wrap items-center gap-x-2">
                <span className="font-medium">
                  Bachelor Of Science in Computer Science
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center text-sm">
                  <Calendar size={14} className="mr-1 inline" />
                  2018-2024
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">
              Skills & Expertise
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="text-muted-foreground mb-3 text-sm font-medium tracking-wider uppercase">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'TypeScript',
                    'Next.js',
                    'JavaScript',
                    'HTML/CSS',
                  ].map((skill, i) => (
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
                  {[
                    'TanStack Query',
                    'Tailwind CSS',
                    'SASS',
                    'Ant Design',
                    'Redux',
                    'Zustand',
                  ].map((skill, i) => (
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
                  Development Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'API Integration',
                    'State Management',
                    'UI/UX Design',
                    'Responsive Design',
                    'Authentication',
                    'Performance Optimization',
                    'WebSockets',
                    'AWS',
                  ].map((skill, i) => (
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
    </div>
  )
}
