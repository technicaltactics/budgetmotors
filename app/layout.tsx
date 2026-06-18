import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://budgetmotors.in'),
  title: {
    default: 'Budget Motors | Quality Pre-Owned Cars in Wayanad, Kerala',
    template: '%s | Budget Motors',
  },
  description:
    'Browse trusted used cars, bikes, auto-rickshaws, and mini trucks at Budget Motors. Best deals on pre-owned vehicles in Thonichal, Mananthavady, Wayanad, Kerala. Direct WhatsApp enquiry!',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://budgetmotors.in',
    siteName: 'Budget Motors',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Budget Motors | Quality Pre-Owned Cars',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dealerSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Budget Motors",
    "description": "Wayanad's most trusted showroom for certified pre-owned multi-brand cars and utility vehicles.",
    "url": "https://budgetmotors.in",
    "telephone": "+919747505264",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thonichal",
      "addressLocality": "Mananthavady, Wayanad",
      "addressRegion": "Kerala",
      "postalCode": "670645",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "₹₹"
  }

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dealerSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-[#0A0A0A] text-[#F5F5F5]">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
