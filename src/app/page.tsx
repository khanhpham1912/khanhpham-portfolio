// components
import { Container } from '@/components/ui'
import { Article, Resume, SocialContact } from '@/components/home'

// libs
import { getAllArticles } from '@/lib/articles'

// models
import { RoleProps } from '@/models/common'

// images
import logoWareflex from '@/public/logo/wareflex_logo.jpeg'
import logoHcl from '@/public/logo/hcltech_logo.jpeg'
import logoInsead from '@/public/logo/insead_logo.jpeg'

const resume: Array<RoleProps> = [
  {
    company: 'Wareflex Sea',
    title: 'Frontend Developer',
    logo: logoWareflex,
    start: '03/2023',
    end: '02/2025',
  },
  {
    company: 'INSEAD',
    title: 'Frontend Developer',
    logo: logoInsead,
    start: '02/2023',
    end: '07/2023',
  },
  {
    company: 'HCL Tech',
    title: 'Software Engineer Internship',
    logo: logoHcl,
    start: '11/2022',
    end: '02/2023',
  },
]

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4)

  return (
    <div className="">
      <Container className="mt-9">
        <div className="flex w-full flex-col gap-5">
          <h1 className="inline-flex gap-2 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I&apos;m Khanh. Welcome to my journey
          </h1>
          <p className="mt-5 text-base text-zinc-600 dark:text-zinc-300">
            I&apos;m a web developer and a curious learner who loves exploring
            new ideas and sharing knowledge. This blog is where I document what
            I read, study, and discover—whether it&apos;s about problem-solving,
            creativity, or ways to improve how we work and think.
            <br />
          </p>
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            If you enjoy learning and exploring different perspectives, I hope
            you find something interesting here!
          </p>
          <SocialContact />
        </div>
      </Container>
      <Container className="mt-20 md:mt-24">
        <div className="grid w-full grid-cols-1 gap-y-20 lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="lg:pl-16 xl:pl-20">
            <Resume resume={resume} />
          </div>
        </div>
      </Container>
    </div>
  )
}
