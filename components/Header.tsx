'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import config from '@/data/config.json'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Vehicles', href: '/vehicles/' },
    { name: 'About Us', href: '/about/' },
    { name: 'Contact', href: '/contact/' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  const quickMessage = `Hi ${config.businessName}! I was browsing your website and wanted to enquire about your available vehicles.`
  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(quickMessage)}`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-900 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo matching the front banner */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
            <svg
              className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Speedometer Arc in red */}
              <path
                d="M 15 65 A 40 40 0 1 1 85 65"
                stroke="#DC2626"
                strokeWidth="4"
                strokeDasharray="6 3"
                strokeLinecap="round"
              />
              {/* Car outline in white */}
              <path
                d="M 20 62 C 20 62 25 45 35 43 C 45 41 55 35 65 35 C 75 35 80 43 83 48 C 86 53 87 62 87 62 M 15 62 L 90 62"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Wheels */}
              <circle cx="32" cy="62" r="6" fill="#DC2626" stroke="white" strokeWidth="2" />
              <circle cx="72" cy="62" r="6" fill="#DC2626" stroke="white" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex flex-col select-none">
            <div className="text-xl font-black italic tracking-tighter leading-none flex items-center">
              <span className="text-white">BUD</span>
              <span className="text-accent">GET</span>
            </div>
            <span className="text-[9px] font-black tracking-[0.35em] text-neutral-400 uppercase leading-none mt-1">
              MOTORS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-black tracking-wide uppercase transition-colors duration-200 ${
                isActive(link.href)
                  ? 'text-accent border-b-2 border-accent pb-1'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-md hover:bg-accent-dark hover:shadow-lg transition-all duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.488 4.909 1.489 5.485 0 9.947-4.461 9.95-9.95.002-2.659-1.03-5.159-2.906-7.038C16.724 1.777 14.23 .745 11.57.745c-5.488 0-9.948 4.461-9.952 9.95 0 1.953.517 3.86 1.5 5.568L2.1 20.8l4.547-1.192c-.001.002-.001.002 0 0zm11.365-7.793c-.3-.149-1.77-.874-2.043-.974-.275-.101-.475-.149-.675.15-.2.299-.775.974-.95 1.173-.175.2-.35.226-.65.076-.3-.15-1.267-.467-2.413-1.489-.892-.796-1.493-1.778-1.668-2.077-.175-.3-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.623-.925-2.223-.244-.589-.493-.51-.675-.519-.175-.009-.375-.01-.575-.01a1.102 1.102 0 00-.8.374c-.275.299-1.05 1.023-1.05 2.493 0 1.47 1.075 2.89 1.225 3.09.15.199 2.116 3.23 5.125 4.527.715.309 1.273.493 1.708.631.718.228 1.37.196 1.885.119.574-.087 1.77-.723 2.02-1.385.25-.662.25-1.228.175-1.385-.075-.15-.275-.249-.575-.399z" />
            </svg>
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-[#25D366] text-white shadow-sm hover:bg-[#20ba56]"
            aria-label="Contact on WhatsApp"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.488 4.909 1.489 5.485 0 9.947-4.461 9.95-9.95.002-2.659-1.03-5.159-2.906-7.038C16.724 1.777 14.23 .745 11.57.745c-5.488 0-9.948 4.461-9.952 9.95 0 1.953.517 3.86 1.5 5.568L2.1 20.8l4.547-1.192c-.001.002-.001.002 0 0zm11.365-7.793c-.3-.149-1.77-.874-2.043-.974-.275-.101-.475-.149-.675.15-.2.299-.775.974-.95 1.173-.175.2-.35.226-.65.076-.3-.15-1.267-.467-2.413-1.489-.892-.796-1.493-1.778-1.668-2.077-.175-.3-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.623-.925-2.223-.244-.589-.493-.51-.675-.519-.175-.009-.375-.01-.575-.01a1.102 1.102 0 00-.8.374c-.275.299-1.05 1.023-1.05 2.493 0 1.47 1.075 2.89 1.225 3.09.15.199 2.116 3.23 5.125 4.527.715.309 1.273.493 1.708.631.718.228 1.37.196 1.885.119.574-.087 1.77-.723 2.02-1.385.25-.662.25-1.228.175-1.385-.075-.15-.275-.249-.575-.399z" />
            </svg>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-900 bg-[#0A0A0A] px-4 pb-6 pt-2 transition-all duration-200 ease-in-out">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-black tracking-wide uppercase py-2 ${
                  isActive(link.href)
                    ? 'text-accent border-l-4 border-accent pl-3'
                    : 'text-neutral-300 pl-3 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-2 border-t border-neutral-900 pt-4 px-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-accent py-3 text-base font-bold text-white shadow-md hover:bg-accent-dark text-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.488 4.909 1.489 5.485 0 9.947-4.461 9.95-9.95.002-2.659-1.03-5.159-2.906-7.038C16.724 1.777 14.23 .745 11.57.745c-5.488 0-9.948 4.461-9.952 9.95 0 1.953.517 3.86 1.5 5.568L2.1 20.8l4.547-1.192c-.001.002-.001.002 0 0zm11.365-7.793c-.3-.149-1.77-.874-2.043-.974-.275-.101-.475-.149-.675.15-.2.299-.775.974-.95 1.173-.175.2-.35.226-.65.076-.3-.15-1.267-.467-2.413-1.489-.892-.796-1.493-1.778-1.668-2.077-.175-.3-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.623-.925-2.223-.244-.589-.493-.51-.675-.519-.175-.009-.375-.01-.575-.01a1.102 1.102 0 00-.8.374c-.275.299-1.05 1.023-1.05 2.493 0 1.47 1.075 2.89 1.225 3.09.15.199 2.116 3.23 5.125 4.527.715.309 1.273.493 1.708.631.718.228 1.37.196 1.885.119.574-.087 1.77-.723 2.02-1.385.25-.662.25-1.228.175-1.385-.075-.15-.275-.249-.575-.399z" />
                </svg>
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
