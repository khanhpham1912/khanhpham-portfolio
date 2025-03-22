import { ImageProps } from 'next/image'

export interface RoleProps {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

export interface Experience {
  company: string
  position: string
  period: string
  description: string
  responsibilities: string[]
  results: string[]
  technologies: string[]
}
