'use client'
import { useState, useEffect } from 'react'
import config from '@/data/config.json'

interface WhatsAppButtonProps {
  vehicleTitle: string
  vehiclePrice: number
  vehicleYear: number
  vehicleMileage: number
  vehicleFuel: string
  vehicleTransmission: string
  vehicleSlug: string
  variant?: 'full' | 'small'
}

export default function WhatsAppButton({
  vehicleTitle,
  vehiclePrice,
  vehicleYear,
  vehicleMileage,
  vehicleFuel,
  vehicleTransmission,
  vehicleSlug,
  variant = 'full',
}: WhatsAppButtonProps) {
  const [shareUrl, setShareUrl] = useState('')

  useEffect(() => {
    setShareUrl(`${window.location.origin}/vehicles/${vehicleSlug}/`)
  }, [vehicleSlug])

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(vehiclePrice)

  const message = `Hi ${config.businessName}! 👋

I'm interested in this vehicle:

🚗 ${vehicleTitle}
💰 Price: ${formattedPrice}
📅 Year: ${vehicleYear}
🛣️ KM Driven: ${vehicleMileage.toLocaleString('en-IN')} km
⛽ Fuel: ${vehicleFuel}
⚙️ Transmission: ${vehicleTransmission}

🔗 Vehicle Link:
${shareUrl}

Could you please share more details and availability?`

  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`

  if (variant === 'small') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center p-2 rounded-full bg-[#25D366] hover:bg-[#20ba56] text-white transition-colors duration-200 shadow-sm"
        title="Enquire on WhatsApp"
        aria-label="Enquire on WhatsApp"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.488 4.909 1.489 5.485 0 9.947-4.461 9.95-9.95.002-2.659-1.03-5.159-2.906-7.038C16.724 1.777 14.23 .745 11.57.745c-5.488 0-9.948 4.461-9.952 9.95 0 1.953.517 3.86 1.5 5.568L2.1 20.8l4.547-1.192c-.001.002-.001.002 0 0zm11.365-7.793c-.3-.149-1.77-.874-2.043-.974-.275-.101-.475-.149-.675.15-.2.299-.775.974-.95 1.173-.175.2-.35.226-.65.076-.3-.15-1.267-.467-2.413-1.489-.892-.796-1.493-1.778-1.668-2.077-.175-.3-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.623-.925-2.223-.244-.589-.493-.51-.675-.519-.175-.009-.375-.01-.575-.01a1.102 1.102 0 00-.8.374c-.275.299-1.05 1.023-1.05 2.493 0 1.47 1.075 2.89 1.225 3.09.15.199 2.116 3.23 5.125 4.527.715.309 1.273.493 1.708.631.718.228 1.37.196 1.885.119.574-.087 1.77-.723 2.02-1.385.25-.662.25-1.228.175-1.385-.075-.15-.275-.249-.575-.399z" />
        </svg>
      </a>
    )
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba56] text-white font-semibold transition-all duration-200 shadow-md hover:shadow-lg w-full text-center"
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.488 4.909 1.489 5.485 0 9.947-4.461 9.95-9.95.002-2.659-1.03-5.159-2.906-7.038C16.724 1.777 14.23 .745 11.57.745c-5.488 0-9.948 4.461-9.952 9.95 0 1.953.517 3.86 1.5 5.568L2.1 20.8l4.547-1.192c-.001.002-.001.002 0 0zm11.365-7.793c-.3-.149-1.77-.874-2.043-.974-.275-.101-.475-.149-.675.15-.2.299-.775.974-.95 1.173-.175.2-.35.226-.65.076-.3-.15-1.267-.467-2.413-1.489-.892-.796-1.493-1.778-1.668-2.077-.175-.3-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.623-.925-2.223-.244-.589-.493-.51-.675-.519-.175-.009-.375-.01-.575-.01a1.102 1.102 0 00-.8.374c-.275.299-1.05 1.023-1.05 2.493 0 1.47 1.075 2.89 1.225 3.09.15.199 2.116 3.23 5.125 4.527.715.309 1.273.493 1.708.631.718.228 1.37.196 1.885.119.574-.087 1.77-.723 2.02-1.385.25-.662.25-1.228.175-1.385-.075-.15-.275-.249-.575-.399z" />
      </svg>
      <span>Enquire on WhatsApp</span>
    </a>
  )
}
