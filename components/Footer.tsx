import Link from 'next/link'
import config from '@/data/config.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickMessage = `Hi ${config.businessName}! I was browsing your website and wanted to get in touch.`
  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(quickMessage)}`

  return (
    <footer className="bg-black text-neutral-300 border-t border-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-black italic tracking-tighter text-white leading-none">
                BUD<span className="text-accent">GET</span>
              </span>
              <span className="text-xs font-black tracking-widest text-neutral-400 leading-none">
                MOTORS
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              {config.tagline || 'Quality Pre-Owned Cars | Drive Your Budget'}
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Wayanad's most trusted showroom for certified pre-owned multi-brand cars and commercial utility vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black tracking-widest text-accent uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/vehicles/" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Browse Showroom
                </Link>
              </li>
              <li>
                <Link href="/about/" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-black tracking-widest text-accent uppercase mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/vehicles/?type=Car" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Pre-Owned Cars
                </Link>
              </li>
              <li>
                <Link href="/vehicles/?type=Bike" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Used Bikes
                </Link>
              </li>
              <li>
                <Link href="/vehicles/?type=Auto+Rickshaw" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Auto Rickshaws
                </Link>
              </li>
              <li>
                <Link href="/vehicles/?type=Truck" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                  Commercial Trucks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-black tracking-widest text-accent uppercase mb-4">
              Visit Showroom
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              <strong>Showroom Location:</strong><br />
              Budget Motors, Thonichal,<br />
              Mananthavady, Wayanad,<br />
              Kerala, India. Pin - 670645
            </p>
            <div className="space-y-2">
              <p className="text-neutral-400 text-sm">
                <strong>Business Hours:</strong><br />
                Mon - Sat: 9:00 AM - 6:00 PM
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:text-[#20ba56] transition-colors mt-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.488 4.909 1.489 5.485 0 9.947-4.461 9.95-9.95.002-2.659-1.03-5.159-2.906-7.038C16.724 1.777 14.23 .745 11.57.745c-5.488 0-9.948 4.461-9.952 9.95 0 1.953.517 3.86 1.5 5.568L2.1 20.8l4.547-1.192c-.001.002-.001.002 0 0zm11.365-7.793c-.3-.149-1.77-.874-2.043-.974-.275-.101-.475-.149-.675.15-.2.299-.775.974-.95 1.173-.175.2-.35.226-.65.076-.3-.15-1.267-.467-2.413-1.489-.892-.796-1.493-1.778-1.668-2.077-.175-.3-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.623-.925-2.223-.244-.589-.493-.51-.675-.519-.175-.009-.375-.01-.575-.01a1.102 1.102 0 00-.8.374c-.275.299-1.05 1.023-1.05 2.493 0 1.47 1.075 2.89 1.225 3.09.15.199 2.116 3.23 5.125 4.527.715.309 1.273.493 1.708.631.718.228 1.37.196 1.885.119.574-.087 1.77-.723 2.02-1.385.25-.662.25-1.228.175-1.385-.075-.15-.275-.249-.575-.399z" />
                </svg>
                <span>WhatsApp Live Chat</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-neutral-900/60 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
          <p>
            &copy; {currentYear} {config.businessName}. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Showroom Location: Thonichal, Mananthavady, Wayanad
          </p>
        </div>
      </div>
    </footer>
  )
}
