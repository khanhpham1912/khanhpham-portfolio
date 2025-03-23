import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/ui/SimpleLayout'
import { ProjectCard } from '@/components/ui/ProjectCard'

const projects = [
  {
    name: 'Warehouse Management System',
    company: 'Wareflex Sea',
    description:
      'A comprehensive system for inventory tracking, workflow management, and data operations for warehouses.',
    images: ['/wms/wms1.png', '/wms/wms2.png', '/wms/wms3.png'],
    features: [
      'Item CRUD, inbound/outbound workflows, role management',
      'Scanner integrations for efficient inventory tracking',
      'Large-scale data operations handling 10,000+ record imports',
      'Exports of up to 1 million records using Web Workers',
    ],
    techStack: [
      'TypeScript',
      'Next.js',
      'TanStack Query',
      'Ant Design',
      'Web Workers',
      'SheetJS',
      'TailwindCSS',
    ],
  },
  {
    name: 'Transportation Management System',
    company: 'Wareflex Sea',
    description:
      'Real-time vehicle tracking and shipment management system with map integrations.',
    images: ['/tms/tms1.png', '/tms/tms2.png', '/tms/tms3.png'],
    features: [
      'Core shipment flows with real-time updates',
      'Real-time vehicle tracking with Amazon Location Service',
      'Socket integration for live data updates',
      'User-defined fields, batch imports, and third-party map API integration',
    ],
    techStack: [
      'TypeScript',
      'Next.js',
      'Socket.IO',
      'Amazon Location Service',
      'Mapbox',
      'Web Workers',
      'SheetJS',
      'TailwindCSS',
    ],
  },
  {
    name: 'Order Management System',
    company: 'Wareflex Sea',
    description:
      'System for optimizing order processing, booking management, and inventory reporting.',
    images: ['/oms/oms1.png', '/oms/oms2.png', '/oms/oms3.png'],
    features: [
      'Optimized item imports (10,000+ records)',
      'Improved inbound/outbound order management',
      'Booking management with real-time updates',
      'Large-scale inventory reporting with custom field applications',
    ],
    techStack: [
      'TypeScript',
      'Next.js',
      'TanStack Query',
      'Ant Design',
      'Web Workers',
      'SheetJS',
      'TailwindCSS',
    ],
  },
  {
    name: 'E-commerce Platform',
    company: 'Wareflex Sea',
    description:
      'Hybrid e-commerce platform linking warehouses and shipping, warehouse providers with users.',
    images: [
      '/platform/platform1.png',
      '/platform/platform2.png',
      '/platform/platform3.png',
    ],
    features: [
      'Optimized loading by combining client and server components',
      'Warehouse and shipping provider integration',
      'User experience enhancements with router caching',
      'Fast navigation and data retrieval with full-route caching',
    ],
    techStack: ['TypeScript', 'Next.js', 'TanStack Query', 'Tailwind CSS'],
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of my professional work and projects.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects"
      intro="A collection of my professional work and projects, showcasing various systems and applications I've developed."
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard {...project} key={project.name} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
