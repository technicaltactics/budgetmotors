import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Gauge, Fuel, MapPin, ChevronRight } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

interface Vehicle {
  id: string
  slug: string
  title: string
  make: string
  model: string
  variant: string
  type: string
  year: number
  price: number
  mileage: number
  fuel: string
  transmission: string
  color: string
  location: string
  condition: string
  description: string
  features: string[]
  images: string[]
  postedDate: string
  featured: boolean
  registrationNumber?: string
  vehicleClass?: string
  rcStatus?: string
  ownerName?: string
  registeredRTO?: string
  registrationDate?: string
  vehicleAge?: string
  fitnessUpto?: string
  pollutionUpto?: string
  insuranceUpto?: string
  unloadedWeight?: string
  fuelNorms?: string
}

interface VehicleCardProps {
  vehicle: Vehicle
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(vehicle.price)

  const formattedMileage = vehicle.mileage.toLocaleString('en-IN')

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 hover:border-neutral-800">
      {/* Image Section */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
        <Image
          src={vehicle.images[0]}
          alt={vehicle.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Featured Badge */}
        {vehicle.featured && (
          <div className="absolute left-3 top-3 rounded-lg bg-accent px-2.5 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
            Featured
          </div>
        )}

        {/* Condition Badge */}
        <div className="absolute right-3 top-3 rounded-lg bg-black/85 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-white shadow-md border border-neutral-800">
          {vehicle.condition}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        {/* Location */}
        <div className="flex items-center gap-1 text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span>{vehicle.location}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors duration-200 line-clamp-1 mb-1">
          <Link href={`/vehicles/${vehicle.slug}/`}>
            {vehicle.title}
          </Link>
        </h3>

        {/* Variant */}
        <p className="text-xs text-neutral-400 font-medium mb-3">
          {vehicle.variant}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 border-t border-b border-neutral-900 py-3 mb-4 text-xs text-neutral-300 font-semibold">
          <div className="flex items-center gap-1.5 justify-center">
            <Calendar className="w-4 h-4 text-neutral-500" />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center">
            <Gauge className="w-4 h-4 text-neutral-500" />
            <span>{formattedMileage} km</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center">
            <Fuel className="w-4 h-4 text-neutral-500" />
            <span>{vehicle.fuel}</span>
          </div>
        </div>

        {/* Price and Actions */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Price</span>
            <span className="text-lg font-black text-accent">{formattedPrice}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick WhatsApp Inquiry */}
            <WhatsAppButton
              vehicleTitle={vehicle.title}
              vehiclePrice={vehicle.price}
              vehicleYear={vehicle.year}
              vehicleMileage={vehicle.mileage}
              vehicleFuel={vehicle.fuel}
              vehicleTransmission={vehicle.transmission}
              vehicleSlug={vehicle.slug}
              variant="small"
            />

            {/* View Details button */}
            <Link
              href={`/vehicles/${vehicle.slug}/`}
              className="inline-flex items-center justify-center gap-1 px-4 py-2 text-xs font-bold text-white bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all rounded-xl shadow-sm"
            >
              <span>Details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function VehicleCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 shadow-sm animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-[16/10] w-full bg-neutral-900" />

      {/* Content Skeleton */}
      <div className="p-5 flex flex-col flex-1 space-y-3">
        <div className="h-3 w-1/3 bg-neutral-900 rounded" />
        <div className="h-5 w-3/4 bg-neutral-900 rounded" />
        <div className="h-3 w-1/2 bg-neutral-900 rounded" />
        
        <div className="border-t border-b border-neutral-900 py-3 grid grid-cols-3 gap-2">
          <div className="h-4 bg-neutral-900 rounded" />
          <div className="h-4 bg-neutral-900 rounded" />
          <div className="h-4 bg-neutral-900 rounded" />
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="space-y-1">
            <div className="h-3 w-10 bg-neutral-900 rounded" />
            <div className="h-5 w-20 bg-neutral-900 rounded" />
          </div>
          <div className="flex gap-2">
            <div className="w-9 h-9 bg-neutral-900 rounded-full" />
            <div className="w-20 h-9 bg-neutral-900 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
export type { Vehicle }
