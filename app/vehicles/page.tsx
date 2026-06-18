import { Suspense } from 'react'
import type { Metadata } from 'next'
import CatalogClient from '@/components/CatalogClient'

export const metadata: Metadata = {
  title: 'Used Vehicles for Sale | Budget Motors Wayanad',
  description:
    'Browse all pre-owned cars, bikes, auto-rickshaws, and mini trucks for sale at Budget Motors Thonichal. Filter by price, vehicle type, fuel, and location in Wayanad, Kerala. Direct WhatsApp enquiry.',
}

export default function VehiclesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-8 border-b border-neutral-900 pb-5">
        <h1 className="text-3xl font-black text-white tracking-tight md:text-4xl uppercase italic">
          Showroom Stock
        </h1>
        <p className="text-neutral-400 text-sm mt-1 font-semibold">
          Explore our wide selection of certified used cars, bikes, rickshaws, and trucks.
        </p>
      </div>

      {/* Catalog wrapped in Suspense */}
      <Suspense
        fallback={
          <div className="space-y-6">
            <div className="h-16 bg-neutral-950 border border-neutral-900 rounded-2xl animate-pulse" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-96 bg-neutral-950 border border-neutral-900 rounded-2xl animate-pulse" />
              ))}
            </div>
          </div>
        }
      >
        <CatalogClient />
      </Suspense>
    </div>
  )
}
