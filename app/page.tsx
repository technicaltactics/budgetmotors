import Link from 'next/link'
import {
  Car,
  BadgeCheck,
  RefreshCw,
  Coins,
  ShieldCheck,
  CircleDollarSign,
  UserCheck,
  HelpCircle,
  ArrowRight,
} from 'lucide-react'
import HeroSearch from '@/components/HeroSearch'
import VehicleGrid from '@/components/VehicleGrid'
import AdSenseAd from '@/components/AdSenseAd'
import vehiclesData from '@/data/vehicles.json'
import { Vehicle } from '@/components/VehicleCard'
import config from '@/data/config.json'

export default function HomePage() {
  const vehicles = vehiclesData as Vehicle[]

  const featuredVehicles = vehicles.filter((v) => v.featured).slice(0, 3)

  const recentVehicles = [...vehicles]
    .sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
    .slice(0, 6)

  // 4 Core pillars from the left side of the storefront banner
  const businessPillars = [
    {
      title: 'BUY',
      description: 'Find your dream pre-owned vehicle from our inspected multi-brand showroom.',
      icon: BadgeCheck,
      actionText: 'Browse Inventory',
      href: '/vehicles/',
    },
    {
      title: 'SELL',
      description: 'Sell your car directly to us. Hassle-free inspection and instant payment.',
      icon: Car,
      actionText: 'Value Your Car',
      href: '/contact/',
    },
    {
      title: 'EXCHANGE',
      description: 'Bring in your old vehicle, upgrade easily, and drive home your new choice.',
      icon: RefreshCw,
      actionText: 'Upgrade Ride',
      href: '/contact/',
    },
    {
      title: 'FINANCE',
      description: 'Get bank loan approvals, competitive rates, and complete documentation help.',
      icon: Coins,
      actionText: 'Get Finance Info',
      href: '/contact/',
    },
  ]

  // 4 Trust checks from the right side of the storefront banner
  const trustPoints = [
    {
      title: 'Quality Cars',
      description: 'Every vehicle undergoes physical evaluation, engine checks, and title verification before listing.',
      icon: ShieldCheck,
    },
    {
      title: 'Best Prices',
      description: 'Direct dealership pricing with zero broker commission, hidden markups, or third-party fees.',
      icon: CircleDollarSign,
    },
    {
      title: 'Trusted Service',
      description: 'Transparent history checks, authentic odometer readings, and verified details.',
      icon: UserCheck,
    },
    {
      title: 'Complete Support',
      description: 'End-to-end documentation assistance, prompt RTO ownership transfer, and finance assistance.',
      icon: HelpCircle,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section with storefront image background and dark overlay */}
      <section className="relative overflow-hidden min-h-[550px] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        
        {/* Storefront Image Background */}
        <div className="absolute inset-0 bg-[url('/images/showroom-front.png')] bg-cover bg-center bg-no-repeat" />
        
        {/* Dark radial and linear gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black" />
        
        <div className="relative mx-auto max-w-7xl text-center space-y-6 md:space-y-8 w-full">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-accent border border-accent/30 animate-pulse">
            Budget Motors Wayanad
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase italic">
            <span className="text-white block text-sm sm:text-base md:text-lg font-black tracking-[0.25em] mb-4 text-accent not-italic uppercase">Budget Motors Wayanad</span>
            <span className="text-white block">Drive Your</span>
            <span className="text-accent block mt-1 tracking-wider">Budget</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-lg max-w-2xl mx-auto font-bold uppercase tracking-wide">
            Quality Pre-Owned Cars & Utility Commercials at Thonichal, Wayanad
          </p>

          <div className="pt-2">
            <HeroSearch />
          </div>

          <div className="flex justify-center items-center pt-2">
            <Link
              href="/vehicles/"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950/70 hover:bg-neutral-900 px-6 py-3 text-sm font-bold tracking-wide transition-all shadow-md backdrop-blur-sm text-white hover:border-neutral-700"
            >
              <span>Explore Showroom Inventory</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* Business Pillars - BUY | SELL | EXCHANGE | FINANCE */}
      <section className="py-12 bg-black border-b border-neutral-900 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessPillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="group relative flex flex-col p-6 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-accent/30 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-black italic tracking-wider text-white group-hover:text-accent transition-colors">
                      {pillar.title}
                    </h3>
                    <div className="p-2.5 rounded-xl bg-neutral-900 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-semibold mb-6 flex-grow">
                    {pillar.description}
                  </p>
                  <Link
                    href={pillar.href}
                    className="text-xs font-black uppercase tracking-wider text-neutral-300 hover:text-accent flex items-center gap-1 group/link"
                  >
                    <span>{pillar.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
              Top Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase italic">
              Featured Fleet
            </h2>
          </div>
          <Link
            href="/vehicles/?sort=newest"
            className="text-sm font-black text-accent hover:text-accent-light transition-colors flex items-center gap-1 group uppercase tracking-wider"
          >
            <span>View All Stock</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <VehicleGrid vehicles={featuredVehicles} />
      </section>

      {/* Google AdSense Unit 1 */}
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 mb-12">
        <AdSenseAd
          slot="XXXXXXXXX"
          format="auto"
          className="bg-neutral-950 p-2 rounded-2xl text-center text-xs text-neutral-500 border border-neutral-900"
        />
      </div>

      {/* Why Choose Us matching Right Side Banner */}
      <section className="py-16 bg-neutral-950 border-t border-b border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
              Our Core Strengths
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase italic">
              The Budget Motors Promise
            </h2>
            <p className="text-neutral-400 text-sm mt-2 font-semibold">
              Delivering reliability and quality to multi-brand car buyers in Wayanad district.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {trustPoints.map((point) => {
              const Icon = point.icon
              return (
                <div
                  key={point.title}
                  className="flex flex-col p-6 rounded-2xl bg-black border border-neutral-900/60 shadow-md text-center items-center"
                >
                  <div className="rounded-2xl bg-neutral-900 text-accent p-3.5 mb-4 border border-neutral-800">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-black text-white mb-2">{point.title}</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed font-semibold">
                    {point.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Arrivals Section */}
      <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
              New Showroom Stock
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase italic">
              Recently Listed Cars
            </h2>
          </div>
          <Link
            href="/vehicles/"
            className="text-sm font-black text-accent hover:text-accent-light transition-colors flex items-center gap-1 group uppercase tracking-wider"
          >
            <span>View Catalog</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <VehicleGrid vehicles={recentVehicles} />
      </section>

      {/* Google AdSense Unit 2 */}
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 my-12">
        <AdSenseAd
          slot="YYYYYYYYY"
          format="auto"
          className="bg-neutral-950 p-2 rounded-2xl text-center text-xs text-neutral-500 border border-neutral-900"
        />
      </div>
    </div>
  )
}
