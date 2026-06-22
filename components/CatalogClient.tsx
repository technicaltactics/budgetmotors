'use client'
import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import FilterBar from './FilterBar'
import VehicleCard, { Vehicle } from './VehicleCard'
import AdSenseAd from './AdSenseAd'
import vehiclesData from '@/data/vehicles.json'


export default function CatalogClient() {
  const searchParams = useSearchParams()
  const vehicles = vehiclesData as Vehicle[]

  const vehicleTypes = useMemo(() => {
    return Array.from(new Set(vehicles.map((v) => v.type))).filter(Boolean)
  }, [vehicles])

  const fuelTypes = useMemo(() => {
    return Array.from(new Set(vehicles.map((v) => v.fuel))).filter(Boolean)
  }, [vehicles])

  const q = searchParams.get('q') || ''
  const type = searchParams.get('type') || ''
  const fuel = searchParams.get('fuel') || ''
  const price = searchParams.get('price') || ''
  const sort = searchParams.get('sort') || 'newest'

  // Filter vehicles
  const filteredVehicles = useMemo(() => {
    let result = [...vehicles]

    // 1. Text Search Filter
    if (q) {
      const queryLower = q.toLowerCase()
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(queryLower) ||
          v.make.toLowerCase().includes(queryLower) ||
          v.model.toLowerCase().includes(queryLower) ||
          v.variant.toLowerCase().includes(queryLower) ||
          v.location.toLowerCase().includes(queryLower) ||
          v.description.toLowerCase().includes(queryLower) ||
          v.features.some((f) => f.toLowerCase().includes(queryLower))
      )
    }

    // 2. Type Filter
    if (type) {
      result = result.filter((v) => v.type.toLowerCase() === type.toLowerCase())
    }

    // 3. Fuel Filter
    if (fuel) {
      result = result.filter((v) => v.fuel.toLowerCase() === fuel.toLowerCase())
    }

    // 4. Price Range Filter
    if (price) {
      const [minStr, maxStr] = price.split('-')
      const min = parseInt(minStr, 10) || 0
      const max = parseInt(maxStr, 10) || Infinity
      result = result.filter((v) => v.price >= min && v.price <= max)
    }

    // 5. Sorting
    if (sort === 'newest') {
      result.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
    } else if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sort === 'mileage-asc') {
      result.sort((a, b) => a.mileage - b.mileage)
    }

    return result
  }, [vehicles, q, type, fuel, price, sort])

  // Render items chunked by 6 to insert AdSense ads between them
  const renderListingsWithAds = () => {
    const elements: React.ReactNode[] = []
    const chunk = 6

    for (let i = 0; i < filteredVehicles.length; i += chunk) {
      const subList = filteredVehicles.slice(i, i + chunk)
      
      elements.push(
        <div key={`grid-${i}`} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subList.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      )

      if (i + chunk < filteredVehicles.length) {
        elements.push(
          <div key={`ad-${i}`} className="my-8 w-full">
            <AdSenseAd
              slot="ZZZZZZZZZ"
              format="auto"
              className="bg-neutral-950 p-2 rounded-2xl text-center text-xs text-neutral-500 border border-neutral-900"
            />
          </div>
        )
      }
    }

    return elements
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <FilterBar vehicleTypes={vehicleTypes} fuelTypes={fuelTypes} />

      {/* Results Count Summary */}
      <div className="flex items-center justify-between text-sm text-neutral-400 font-semibold pt-2">
        <p>
          Showing <span className="text-accent font-bold">{filteredVehicles.length}</span> matching{' '}
          {filteredVehicles.length === 1 ? 'vehicle' : 'vehicles'}
        </p>
      </div>

      {/* Main Listings */}
      {filteredVehicles.length === 0 ? (
        <div className="text-center py-16 px-4 border border-dashed border-neutral-800 rounded-3xl bg-neutral-950 max-w-lg mx-auto shadow-sm my-8">
          <svg
            className="mx-auto h-12 w-12 text-neutral-600 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-base font-bold text-neutral-200 mb-1">No Matches Found</h3>
          <p className="text-neutral-500 text-sm max-w-sm mx-auto mb-6">
            We couldn't find any vehicles in our showroom that match your search filters. Try resetting the criteria.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {renderListingsWithAds()}
        </div>
      )}
    </div>
  )
}
