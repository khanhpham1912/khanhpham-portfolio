import { type Metadata } from 'next'

import {
  Description,
  Education,
  Skills,
  WorkExperience,
} from '@/components/about'
import { Experience } from '@/models/common'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Front-end Developer passionate about building responsive, user-friendly interfaces and optimizing system performance.',
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

const libAndFrameworks = [
  'TanStack Query',
  'Axios',
  'Tailwind CSS',
  'SASS',
  'Ant Design',
  'Shadcn',
  'Redux',
  'OpenAI',
  'Zustand',
  'SheetJS',
  'Socket.IO',
  'Amazon Location Service',
]

const coreTechs = ['TypeScript', 'JavaScript', 'React', 'Next.js', 'HTML/CSS']

export default function About() {
  return (
    <div className="min-h-screen">
      <Description />

      <WorkExperience experiences={experiences} />

      <Education />

      <Skills libAndFrameworks={libAndFrameworks} coreTechs={coreTechs} />
    </div>
  )
}
