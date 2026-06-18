'use client'
import { useState, useEffect } from 'react'
import { Share2, Check } from 'lucide-react'

interface ShareButtonProps {
  vehicleTitle: string
  vehicleMake: string
  vehicleModel: string
  vehicleYear: number
  vehiclePrice: number
  vehicleSlug: string
}

export default function ShareButton({
  vehicleTitle,
  vehicleMake,
  vehicleModel,
  vehicleYear,
  vehiclePrice,
  vehicleSlug,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState('')

  useEffect(() => {
    setShareUrl(`${window.location.origin}/vehicles/${vehicleSlug}/`)
  }, [vehicleSlug])

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(vehiclePrice)

  const handleShare = async () => {
    const currentShareUrl = shareUrl || `${window.location.origin}/vehicles/${vehicleSlug}/`
    const shareData = {
      title: `${vehicleTitle} for Sale — Budget Motors`,
      text: `Check out this ${vehicleYear} ${vehicleMake} ${vehicleModel} for ${formattedPrice} on Budget Motors!`,
      url: currentShareUrl,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.error('Error sharing:', error)
      }
    } else {
      try {
        await navigator.clipboard.writeText(currentShareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Could not copy text:', err)
      }
    }
  }

  return (
    <div className="relative w-full">
      <button
        onClick={handleShare}
        className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold transition-all duration-200 shadow-sm w-full text-center hover:border-slate-300"
      >
        {copied ? (
          <>
            <Check className="w-5 h-5 text-emerald-500" />
            <span className="text-emerald-600">Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-5 h-5" />
            <span>Share This Vehicle</span>
          </>
        )}
      </button>

      {copied && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg shadow-md animate-fade-in whitespace-nowrap z-10">
          Link copied to clipboard!
        </div>
      )}
    </div>
  )
}
