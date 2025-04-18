// icons
import { Mail, Github, Linkedin } from 'lucide-react'

// components
import { Container } from '../ui'
import Link from 'next/link'
import Image from 'next/image'

// images
import avatar from '@/public/avatar.jpg'

export const Description = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="mr-4 text-pretty">
            <h1 className="mb-6 text-3xl font-bold md:text-5xl">About Me</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              👋 Hi! I&apos;m a Frontend Developer who loves crafting beautiful
              and user-friendly web experiences.
            </p>
            <div className="text-muted-foreground space-y-4">
              <p>
                🚀 My passion lies in creating modern web applications that not
                only look great but also perform exceptionally well. I&apos;m
                deeply experienced with React, TypeScript, and Next.js, and I
                enjoy using these tools to build solutions that make a real
                difference.
              </p>
              <p>
                💡 Throughout my journey, I&apos;ve had the opportunity to work
                on fascinating projects in warehouse management, transportation
                logistics, and e-commerce. What really drives me is finding that
                sweet spot between high performance and great user experience -
                making complex systems feel simple and intuitive for everyone
                who uses them.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="aspect-square rotate-3 overflow-hidden rounded-2xl bg-teal-100 shadow-lg transition-transform duration-300 hover:rotate-0 dark:bg-teal-900/20">
              <Image
                src={avatar}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-teal-500 dark:text-teal-400" />
                <Link
                  href="mailto:qkp.khanh@gmail.com"
                  className="text-sm transition-colors hover:text-teal-500 dark:hover:text-teal-400"
                >
                  qkp.khanh@gmail.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-teal-500 dark:text-teal-400" />
                <Link
                  href="https://github.com/khanhpham1912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-teal-500 dark:hover:text-teal-400"
                >
                  github.com/khanhpham1912
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-teal-500 dark:text-teal-400" />
                <Link
                  href="https://www.linkedin.com/in/phamquangkhanh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-teal-500 dark:hover:text-teal-400"
                >
                  linkedin.com/in/phamquangkhanh
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
