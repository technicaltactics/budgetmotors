'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { SlidersHorizontal, ChevronDown, X, Search } from 'lucide-react'

interface FilterBarProps {
  vehicleTypes: string[]
  fuelTypes: string[]
}

export default function FilterBar({ vehicleTypes, fuelTypes }: FilterBarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [isOpen, setIsOpen] = useState(false)

  // Local state synced with URL params
  const [search, setSearch] = useState(searchParams.get('q') || '')
  const [type, setType] = useState(searchParams.get('type') || '')
  const [fuel, setFuel] = useState(searchParams.get('fuel') || '')
  const [priceRange, setPriceRange] = useState(searchParams.get('price') || '')
  const [sort, setSort] = useState(searchParams.get('sort') || 'newest')

  // Sync state when URL params change
  useEffect(() => {
    setSearch(searchParams.get('q') || '')
    setType(searchParams.get('type') || '')
    setFuel(searchParams.get('fuel') || '')
    setPriceRange(searchParams.get('price') || '')
    setSort(searchParams.get('sort') || 'newest')
  }, [searchParams])

  const applyFilters = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString())
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    params.delete('page')
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handleClear = () => {
    setSearch('')
    setType('')
    setFuel('')
    setPriceRange('')
    setSort('newest')
    router.push(pathname, { scroll: false })
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    applyFilters({ q: search })
  }

  const priceRanges = [
    { label: 'Under ₹2 Lakhs', value: '0-200000' },
    { label: '₹2 Lakhs - ₹5 Lakhs', value: '200000-500000' },
    { label: '₹5 Lakhs - ₹10 Lakhs', value: '500000-1000000' },
    { label: 'Above ₹10 Lakhs', value: '1000000-99999999' },
  ]

  const hasActiveFilters = search || type || fuel || priceRange || sort !== 'newest'

  return (
    <div className="w-full bg-neutral-950 border border-neutral-900 rounded-2xl shadow-md">
      {/* Mobile Toggle Button */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-xl border border-neutral-800 px-4 py-2.5 text-sm font-semibold text-neutral-300 hover:bg-neutral-900 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4 text-accent" />
          <span>Filters & Sort</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {hasActiveFilters && (
          <button
            onClick={handleClear}
            className="text-xs font-bold text-accent hover:underline flex items-center gap-1"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filter Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block p-5 border-t border-neutral-900 md:border-t-0`}>
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          {/* Keyword Search */}
          <div className="relative">
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Search</label>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Model, make..."
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900 pl-9 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent font-semibold"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            </div>
            {search && (
              <button
                type="button"
                onClick={() => { setSearch(''); applyFilters({ q: '' }) }}
                className="absolute right-3.5 top-9 text-neutral-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Vehicle Type Dropdown */}
          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Vehicle Type</label>
            <select
              value={type}
              onChange={(e) => { setType(e.target.value); applyFilters({ type: e.target.value }) }}
              className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent font-black cursor-pointer"
            >
              <option value="" className="bg-neutral-900">All Types</option>
              {vehicleTypes.map((t) => (
                <option key={t} value={t} className="bg-neutral-900">
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Fuel Type Dropdown */}
          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Fuel Type</label>
            <select
              value={fuel}
              onChange={(e) => { setFuel(e.target.value); applyFilters({ fuel: e.target.value }) }}
              className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent font-black cursor-pointer"
            >
              <option value="" className="bg-neutral-900">All Fuels</option>
              {fuelTypes.map((f) => (
                <option key={f} value={f} className="bg-neutral-900">
                  {f}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Dropdown */}
          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Price Budget</label>
            <select
              value={priceRange}
              onChange={(e) => { setPriceRange(e.target.value); applyFilters({ price: e.target.value }) }}
              className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent font-black cursor-pointer"
            >
              <option value="" className="bg-neutral-900">Any Budget</option>
              {priceRanges.map((r) => (
                <option key={r.value} value={r.value} className="bg-neutral-900">
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Sort By</label>
            <select
              value={sort}
              onChange={(e) => { setSort(e.target.value); applyFilters({ sort: e.target.value }) }}
              className="w-full rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent font-black cursor-pointer"
            >
              <option value="newest" className="bg-neutral-900">Newest First</option>
              <option value="price-asc" className="bg-neutral-900">Price: Low to High</option>
              <option value="price-desc" className="bg-neutral-900">Price: High to Low</option>
              <option value="mileage-asc" className="bg-neutral-900">Lowest Mileage</option>
            </select>
          </div>

        </form>

        {/* Clear Filters Link */}
        {hasActiveFilters && (
          <div className="hidden md:flex justify-end mt-4">
            <button
              onClick={handleClear}
              className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:text-accent-light transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear All Active Filters</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
