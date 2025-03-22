import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/ui/SimpleLayout'
import { ProjectCard } from '@/components/ui/ProjectCard'

const projects = [
  {
    name: 'Warehouse Management System',
    company: 'Wareflex Sea',
    description:
      'A comprehensive system for inventory tracking, workflow management, and data operations for warehouses.',
    images: [
      '/images/projects/warehouse-1.png',
      '/images/projects/warehouse-2.png',
      '/images/projects/warehouse-3.png',
    ],
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
    ],
  },
  {
    name: 'Transportation Management System',
    company: 'Wareflex Sea',
    description:
      'Real-time vehicle tracking and shipment management system with map integrations.',
    images: [
      '/images/projects/transport-1.png',
      '/images/projects/transport-2.png',
      '/images/projects/transport-3.png',
    ],
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
    ],
  },
  {
    name: 'Order Management System',
    company: 'Wareflex Sea',
    description:
      'System for optimizing order processing, booking management, and inventory reporting.',
    images: [
      '/images/projects/order-1.png',
      '/images/projects/order-2.png',
      '/images/projects/order-3.png',
    ],
    features: [
      'Optimized item imports (10,000+ records)',
      'Improved inbound/outbound order management',
      'Booking management with real-time updates',
      'Large-scale inventory reporting with custom field applications',
    ],
    techStack: ['TypeScript', 'Next.js', 'TanStack Query', 'Ant Design'],
  },
  {
    name: 'E-commerce Platform',
    company: 'Wareflex Sea',
    description:
      'Hybrid e-commerce platform linking warehouses and shipping providers with users.',
    images: [
      '/images/projects/ecommerce-1.png',
      '/images/projects/ecommerce-2.png',
      '/images/projects/ecommerce-3.png',
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
      <div className="mx-auto max-w-8xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard {...project} key={project.name} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
