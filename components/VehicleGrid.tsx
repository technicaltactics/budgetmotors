import VehicleCard, { Vehicle, VehicleCardSkeleton } from './VehicleCard'

interface VehicleGridProps {
  vehicles: Vehicle[]
  isLoading?: boolean
}

export default function VehicleGrid({ vehicles, isLoading = false }: VehicleGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <VehicleCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (vehicles.length === 0) {
    return (
      <div className="text-center py-16 px-4 border border-dashed border-slate-200 rounded-3xl bg-white max-w-lg mx-auto shadow-sm my-8">
        <svg
          className="mx-auto h-12 w-12 text-slate-300 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-base font-bold text-slate-800 mb-1">No Vehicles Match Your Filters</h3>
        <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
          We couldn't find any vehicles in our showroom that match all your selected filters. Try broadening your criteria.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  )
}
export type { Vehicle }
