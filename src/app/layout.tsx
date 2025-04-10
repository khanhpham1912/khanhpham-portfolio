import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/ui/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'Khanh Pham',
    default: 'Khanh Pham',
  },
  description:
    "I'm a web developer and a curious learner who loves exploring new ideas and sharing knowledge",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
