import { MetadataRoute } from 'next'
import vehiclesData from '@/data/vehicles.json'

export const dynamic = 'force-static'

interface Vehicle {
  slug: string
  postedDate: string
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://budgetmotors.in'
  const vehicles = vehiclesData as Vehicle[]
  
  const staticPages = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/vehicles/`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
  ]

  const vehiclePages = vehicles.map((v) => ({
    url: `${baseUrl}/vehicles/${v.slug}/`,
    lastModified: new Date(v.postedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...vehiclePages]
}
