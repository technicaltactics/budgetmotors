'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

export default function HeroSearch() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [type, setType] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (type) params.set('type', type)
    
    router.push(`/vehicles/?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-2xl md:rounded-full border border-white/20 flex flex-col md:flex-row gap-2 shadow-lg"
    >
      <div className="relative flex-1">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search used cars, bikes, models..."
          className="w-full rounded-xl md:rounded-full bg-white px-6 py-3.5 pl-12 text-slate-800 placeholder-slate-400 focus:outline-none text-sm font-semibold shadow-inner"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
      </div>

      <div className="w-full md:w-48">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full rounded-xl md:rounded-full bg-white px-5 py-3.5 text-slate-800 focus:outline-none text-sm font-bold shadow-inner cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_1.25rem_center] bg-no-repeat pr-8"
        >
          <option value="">All Types</option>
          <option value="Car">Cars</option>
          <option value="Bike">Bikes</option>
          <option value="Auto Rickshaw">Auto Rickshaw</option>
          <option value="Truck">Trucks</option>
        </select>
      </div>

      <button
        type="submit"
        className="rounded-xl md:rounded-full bg-accent hover:bg-accent-dark text-white px-8 py-3.5 text-sm font-black uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg text-center"
      >
        Search
      </button>
    </form>
  )
}
