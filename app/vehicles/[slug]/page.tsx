import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Calendar,
  Gauge,
  Fuel,
  Compass,
  MapPin,
  Shield,
  Activity,
  ArrowLeft,
} from 'lucide-react'
import ImageGallery from '@/components/ImageGallery'
import WhatsAppButton from '@/components/WhatsAppButton'
import ShareButton from '@/components/ShareButton'
import AdSenseAd from '@/components/AdSenseAd'
import VehicleCard, { Vehicle } from '@/components/VehicleCard'
import vehiclesData from '@/data/vehicles.json'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  const vehicles = vehiclesData as Vehicle[]
  return vehicles.map((v) => ({
    slug: v.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const vehicles = vehiclesData as Vehicle[]
  const vehicle = vehicles.find((v) => v.slug === params.slug)
  if (!vehicle) return {}

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(vehicle.price)

  const title = `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.variant} for Sale in ${vehicle.location} | Budget Motors`
  const description = `Buy used ${vehicle.year} ${vehicle.make} ${vehicle.model} at ${formattedPrice}. ${vehicle.mileage.toLocaleString('en-IN')} km driven, ${vehicle.fuel}, ${vehicle.transmission}. Located in ${vehicle.location}. Enquire now on WhatsApp — Budget Motors.`

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      url: `https://budgetmotors.vercel.app/vehicles/${vehicle.slug}/`,
      title,
      description,
      images: [
        {
          url: vehicle.images[0],
          width: 1200,
          height: 630,
          alt: vehicle.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  }
}

export default function VehicleDetailPage({ params }: PageProps) {
  const vehicles = vehiclesData as Vehicle[]
  const vehicle = vehicles.find((v) => v.slug === params.slug)

  if (!vehicle) {
    notFound()
  }

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(vehicle.price)

  const formattedMileage = vehicle.mileage.toLocaleString('en-IN')

  const similarVehicles = vehicles
    .filter((v) => v.type === vehicle.type && v.id !== vehicle.id)
    .slice(0, 3)

  const recommendedVehicles = similarVehicles.length > 0 
    ? similarVehicles 
    : vehicles.filter((v) => v.id !== vehicle.id).slice(0, 3)

  // Product Schema (JSON-LD)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": vehicle.title,
    "description": vehicle.description,
    "image": vehicle.images.map((img) => `https://budgetmotors.vercel.app${img}`),
    "offers": {
      "@type": "Offer",
      "price": vehicle.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Budget Motors"
      }
    }
  }

  const specs = [
    { label: 'Year', value: vehicle.year, icon: Calendar },
    { label: 'Kilometers', value: `${formattedMileage} km`, icon: Gauge },
    { label: 'Fuel Type', value: vehicle.fuel, icon: Fuel },
    { label: 'Transmission', value: vehicle.transmission, icon: Compass },
    { label: 'Color', value: vehicle.color, icon: Activity },
    { label: 'Condition', value: vehicle.condition, icon: Shield },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/vehicles/"
          className="inline-flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Inventory</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Gallery Component */}
          <ImageGallery images={vehicle.images} title={vehicle.title} />

          {/* Specifications Grid */}
          <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 shadow-md">
            <h2 className="text-lg font-bold text-white mb-5 border-b border-neutral-900 pb-3 uppercase italic">
              Specifications
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {specs.map((spec) => {
                const Icon = spec.icon
                return (
                  <div key={spec.label} className="flex flex-col gap-2 p-3.5 bg-neutral-900 rounded-xl border border-neutral-900/45">
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Icon className="w-4.5 h-4.5 text-accent" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{spec.label}</span>
                    </div>
                    <span className="text-sm font-black text-white">{spec.value}</span>
                  </div>
                )
              })}
            </div>
          </div>
          {/* Description Section */}
          <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 shadow-md">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-neutral-900 pb-3 uppercase italic">
              Vehicle Overview
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-semibold whitespace-pre-line">
              {vehicle.description}
            </p>
          </div>

          {/* Features List */}
          <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 shadow-md">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-neutral-900 pb-3 uppercase italic">
              Features & Comfort
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {vehicle.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center rounded-xl bg-accent/10 border border-accent/20 px-3.5 py-2 text-xs font-bold text-neutral-200 shadow-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Title Box, Pricing, Enquiry Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 shadow-md sticky top-24 space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-1 text-neutral-400 text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{vehicle.location}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
                {vehicle.title}
              </h1>
              <p className="text-xs text-neutral-400 font-semibold mt-1">
                Variant: {vehicle.variant}
              </p>
            </div>

            {/* Price Box */}
            <div className="rounded-2xl bg-neutral-900 p-4 border border-neutral-900">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Showroom Price</span>
              <div className="text-3xl font-black text-accent mt-0.5">{formattedPrice}</div>
              <span className="text-[10px] font-bold text-neutral-500 block mt-1 uppercase tracking-wider">
                *Estimated registration/tax extra
              </span>
            </div>

            {/* Enquiry Actions */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-black text-neutral-400 uppercase tracking-widest text-center mb-1">
                Enquire Now
              </h3>
              
              <WhatsAppButton
                vehicleTitle={vehicle.title}
                vehiclePrice={vehicle.price}
                vehicleYear={vehicle.year}
                vehicleMileage={vehicle.mileage}
                vehicleFuel={vehicle.fuel}
                vehicleTransmission={vehicle.transmission}
                vehicleSlug={vehicle.slug}
                variant="full"
              />

              <ShareButton
                vehicleTitle={vehicle.title}
                vehicleMake={vehicle.make}
                vehicleModel={vehicle.model}
                vehicleYear={vehicle.year}
                vehiclePrice={vehicle.price}
                vehicleSlug={vehicle.slug}
              />
            </div>

            {/* Verification Tag */}
            <div className="flex items-center gap-3 border-t border-neutral-900 pt-4 text-xs font-semibold text-neutral-400">
              <div className="rounded-full bg-neutral-900 p-2 text-accent border border-neutral-800">
                <Shield className="w-4 h-4" />
              </div>
              <p>Physical inspection report and clean papers verified by Budget Motors.</p>
            </div>

            {/* Google AdSense Unit 4 (Sidebar) */}
            <div className="pt-4 border-t border-neutral-900">
              <AdSenseAd
                slot="WWWWWWWWW"
                format="rectangle"
                className="bg-neutral-900/30 p-2 rounded-xl text-center text-xs text-neutral-500 border border-neutral-900 max-h-[250px]"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Similar Vehicles Section */}
      <section className="mt-16 border-t border-neutral-900 pt-12">
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-8 uppercase italic">
          Similar Vehicles You Might Like
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommendedVehicles.map((similar) => (
            <VehicleCard key={similar.id} vehicle={similar} />
          ))}
        </div>
      </section>
    </div>
  )
}
