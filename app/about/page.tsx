import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, BadgePercent, Heart } from 'lucide-react'
import config from '@/data/config.json'

export const metadata: Metadata = {
  title: 'About Budget Motors | Trusted Used Car Dealer in Wayanad',
  description:
    'Budget Motors is a premier pre-owned car dealership located in Thonichal, Mananthavady, Wayanad, Kerala. We provide physically inspected, multi-brand certified cars at the best local rates.',
}

export default function AboutPage() {
  const stats = [
    { label: 'Happy Customers', value: '1,500+' },
    { label: 'Cars Delivered', value: '1,800+' },
    { label: 'Odometer Certified', value: '100%' },
    { label: 'Quality checks', value: '50-Point' },
  ]

  const values = [
    {
      title: 'Drive Your Budget',
      description:
        'We specialize in matching buyers with vehicles that fit their exact financial target. High-quality rides do not need to carry high-end premiums.',
      icon: BadgePercent,
    },
    {
      title: 'Double Inspection Certified',
      description:
        'Each vehicle undergoes engine testing, electrical assessment, and physical checkups before entering our showroom catalog.',
      icon: ShieldCheck,
    },
    {
      title: 'Verified Ownership Papers',
      description:
        'We inspect and clear all RTO registrations, tax documents, and insurance files. Transfer of ownership is handled completely by us.',
      icon: Heart,
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-accent uppercase tracking-wider block">
          About Us
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase italic">
          Budget Motors Showroom
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-semibold">
          Your premier destination for certified pre-owned multi-brand cars, commercial utility trucks, and passenger three-wheelers in Wayanad.
        </p>
      </section>

      {/* Showroom Front Image Embedding */}
      <section className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl border border-neutral-900 shadow-xl bg-neutral-950">
        <Image
          src="/images/showroom-front.png"
          alt="Budget Motors Thonichal Wayanad Showroom Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-10">
          <p className="text-xs sm:text-sm font-bold text-neutral-300 uppercase tracking-widest bg-black/65 backdrop-blur-sm px-4 py-2 rounded-xl border border-neutral-800">
            Showroom Location: Thonichal, Mananthavady
          </p>
        </div>
      </section>

      {/* Story & Image Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-white tracking-tight uppercase italic">
            Quality Pre-Owned Cars in Wayanad
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-medium">
            Located in <strong>Thonichal, Mananthavady</strong>, Budget Motors is Wayanad's go-to destination for high-quality used cars. We stock an extensive variety of multi-brand vehicles, from fuel-efficient hatchbacks and sedans to rugged family SUVs and commercial mini-trucks.
          </p>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-medium">
            Our company was built on the core values of transparency, prompt service, and budget alignment. We know that purchasing a pre-owned vehicle is a major milestone. That is why we verify each title, test drive each axle, and manage all paperwork RTO registrations so you can buy with confidence.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="/vehicles/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent hover:bg-accent-dark text-white text-sm font-bold tracking-wide transition-all shadow-md"
            >
              Browse Cars
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 text-white text-sm font-bold tracking-wide transition-all shadow-sm"
            >
              Get Location Map
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-10 shadow-lg border border-neutral-900 grid grid-cols-2 gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-accent/10 rounded-bl-full pointer-events-none" />
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-3xl sm:text-4xl font-black text-accent">{stat.value}</div>
              <div className="text-xs sm:text-sm text-neutral-400 font-semibold tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
            Our Methods
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase italic">
            Built On Customer Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val) => {
            const Icon = val.icon
            return (
              <div key={val.title} className="p-6 bg-neutral-950 rounded-2xl border border-neutral-900 shadow-md flex flex-col items-start hover:border-accent/20 transition-all duration-300">
                <div className="rounded-xl bg-neutral-900 text-accent p-3 mb-4 border border-neutral-800">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-white mb-2">{val.title}</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-semibold">
                  {val.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

    </div>
  )
}
