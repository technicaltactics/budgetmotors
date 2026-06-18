import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, Clock } from 'lucide-react'
import config from '@/data/config.json'

export const metadata: Metadata = {
  title: 'Contact Budget Motors | WhatsApp & Location Map',
  description:
    'Contact Budget Motors in Wayanad for used car enquiries. Visit our showroom at Thonichal, Mananthavady or connect with us directly on WhatsApp.',
}

export default function ContactPage() {
  const quickMessage = `Hi ${config.businessName}! I am interested in knowing more about your available used vehicles.`
  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(quickMessage)}`

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-accent uppercase tracking-wider block">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase italic">
          Contact Showroom
        </h1>
        <p className="text-neutral-400 text-sm font-semibold">
          Need details about a listing or want to schedule an evaluation? Connect with our staff directly.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Contact Info Card */}
        <div className="lg:col-span-5 bg-neutral-950 border border-neutral-900 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <h2 className="text-xl font-black text-white tracking-tight uppercase italic">
              Dealership Details
            </h2>

            {/* Address */}
            <div className="flex gap-4 items-start text-sm text-neutral-300 font-medium">
              <div className="rounded-xl bg-neutral-900 text-accent p-3 shrink-0 border border-neutral-800">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-white">Showroom Address</h3>
                <p className="leading-relaxed text-neutral-400">
                  Budget Motors, Thonichal,<br />
                  Mananthavady, Wayanad,<br />
                  Kerala, India. Pin - 670645
                </p>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex gap-4 items-start text-sm text-neutral-300 font-medium">
              <div className="rounded-xl bg-neutral-900 text-accent p-3 shrink-0 border border-neutral-800">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-white">Showroom Mobile</h3>
                <p>
                  <a href={`tel:+${config.whatsappNumber}`} className="hover:underline font-black text-white text-base">
                    +91 97475 05264
                  </a>
                </p>
                <p className="text-xs text-neutral-500 font-semibold">(General Enquiry, Valuation, Paper Clearance)</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-4 items-start text-sm text-neutral-300 font-medium">
              <div className="rounded-xl bg-neutral-900 text-accent p-3 shrink-0 border border-neutral-800">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-black text-white">Business Hours</h3>
                <p className="text-neutral-400">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-accent font-black">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Quick Connect Button */}
          <div className="pt-4 border-t border-neutral-900">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba56] text-white font-bold transition-all duration-200 shadow-md hover:shadow-lg w-full text-center text-sm uppercase tracking-wide"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.488 4.909 1.489 5.485 0 9.947-4.461 9.95-9.95.002-2.659-1.03-5.159-2.906-7.038C16.724 1.777 14.23 .745 11.57.745c-5.488 0-9.948 4.461-9.952 9.95 0 1.953.517 3.86 1.5 5.568L2.1 20.8l4.547-1.192c-.001.002-.001.002 0 0zm11.365-7.793c-.3-.149-1.77-.874-2.043-.974-.275-.101-.475-.149-.675.15-.2.299-.775.974-.95 1.173-.175.2-.35.226-.65.076-.3-.15-1.267-.467-2.413-1.489-.892-.796-1.493-1.778-1.668-2.077-.175-.3-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.623-.925-2.223-.244-.589-.493-.51-.675-.519-.175-.009-.375-.01-.575-.01a1.102 1.102 0 00-.8.374c-.275.299-1.05 1.023-1.05 2.493 0 1.47 1.075 2.89 1.225 3.09.15.199 2.116 3.23 5.125 4.527.715.309 1.273.493 1.708.631.718.228 1.37.196 1.885.119.574-.087 1.77-.723 2.02-1.385.25-.662.25-1.228.175-1.385-.075-.15-.275-.249-.575-.399z" />
              </svg>
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Map Container */}
        <div className="lg:col-span-7 bg-neutral-950 border border-neutral-900 rounded-3xl overflow-hidden p-3 shadow-md min-h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9467770857997!2d76.0017108!3d11.7709854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5dff63da067b5%3A0x16e247341573de6a!2sBUDGET%20MOTORS!5e0!3m2!1sen!2sin!4v1718600000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '1.25rem' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Budget Motors Thonichal Wayanad Google Map"
          ></iframe>
        </div>

      </div>

      {/* Visual Showroom Locator Card */}
      <section className="bg-neutral-950 border border-neutral-900 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 shadow-md">
        <div className="relative aspect-[16/9] w-full md:w-96 rounded-2xl overflow-hidden shrink-0 border border-neutral-900">
          <Image
            src="/images/showroom-front.png"
            alt="Budget Motors Storefront Banner"
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover object-center"
          />
        </div>
        <div className="space-y-3">
          <span className="text-[10px] font-black text-accent uppercase tracking-wider block">Visual Locator</span>
          <h3 className="text-xl font-bold text-white uppercase italic">Look for this Signboard</h3>
          <p className="text-neutral-400 text-sm leading-relaxed font-semibold">
            Our showroom is located right by the main roadside in Thonichal, Wayanad. Look for our distinctive black and red "BUDGET MOTORS" signboard with the car silhouette logo. Feel free to pull in for a test drive or to get your vehicle valued!
          </p>
        </div>
      </section>

    </div>
  )
}
