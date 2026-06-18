# Friends Motors — Used Vehicle Marketplace

Friends Motors is a production-ready, lightweight, and blazing-fast used vehicle selling marketplace web application built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. It is fully optimized for free static hosting (e.g., Vercel Free Tier) and features Google AdSense integration, comprehensive SEO, and a direct WhatsApp-based enquiry system.

---

## 🚀 Key Features

*   **100% Free Hosting Friendly:** Built to compile into a static export (`next.config.js` with `output: 'export'`). No database or server is required at runtime!
*   **WhatsApp Enquiry System:** Instantly connects buyers with the showroom. Generates custom, spec-filled URL-encoded WhatsApp messages containing the vehicle's title, price, year, and unique web link.
*   **Google AdSense Integration:** Clean client-side, non-blocking ad units pre-placed on the Homepage, catalogue list, and detail sidebars.
*   **Complete SEO & Structured Data:**
    *   Pre-configured XML Sitemap (`/sitemap.xml`) and Crawler Guidelines (`/robots.txt`).
    *   Dynamic Open Graph (OG) tags, Twitter Cards, and canonical URLs.
    *   Auto-injected schema markup: **AutoDealer** on the home/layout and **Product** on listing pages for rich search engine result snippets.
*   **Premium Design Aesthetics:** A high-end theme featuring deep navy (#1A3C5E) and action-driving orange (#F97316) color styling, custom car SVG iconography, cards with hover transitions, and a fully responsive layout.

---

## 🛠️ Tech Stack

*   **Framework:** Next.js 14 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (with PostCSS / Autoprefixer)
*   **Icons:** Lucide React
*   **Database:** Local JSON-based files under `/data/`

---

## 📂 Project Structure

```
/
├── app/
│   ├── layout.tsx              ← Global layout, AdSense script, Organization schema
│   ├── page.tsx                ← Homepage (Hero, Categories, Trust points, Arrivals)
│   ├── vehicles/
│   │   ├── page.tsx            ← Showroom listing page (RSC wrapper)
│   │   └── [slug]/
│   │       └── page.tsx        ← Vehicle details page (Static param generation)
│   ├── about/page.tsx          ← About page
│   ├── contact/page.tsx        ← Contact page (Business hours + Google Map)
│   ├── sitemap.ts              ← Dynamic XML Sitemap generator
│   └── robots.ts               ← Robots.txt generator
├── components/
│   ├── Header.tsx              ← Backdrop blur navbar with SVG Car Logo
│   ├── Footer.tsx              ← Category and link directory footer
│   ├── VehicleCard.tsx         ← Custom vehicle grid cards with skeletons
│   ├── VehicleGrid.tsx         ← Grid display wrapper with empty states
│   ├── FilterBar.tsx           ← Param-synced filter controls (Type, Fuel, Sort)
│   ├── WhatsAppButton.tsx      ← Spec message builder & green brand button
│   ├── AdSenseAd.tsx           ← Google AdSense client component
│   └── ShareButton.tsx         ← Web Share API wrapper with clipboard fallback
├── data/
│   ├── config.json             ← Dealership settings (WhatsApp, location, title)
│   └── vehicles.json           ← Showroom vehicle catalog database
└── public/
    ├── images/vehicles/        ← Local vehicle photos
    ├── favicon.ico             ← Tab Icon
    └── og-image.jpg            ← Default social share preview banner
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have **Node.js 18.x or 20+** installed on your system.

### 2. Installation
Clone or navigate to the directory and install dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local server to inspect or debug:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build & Static Export
Compile the project to a static build:
```bash
npm run build
```
This script runs TypeScript checking, optimizes the code, and exports a fully ready static folder named `out` in the root workspace.

---

## ⚙️ Configuration Instructions

### 1. Showroom Settings (`data/config.json`)
Open and customize this file to route WhatsApp enquiries to your number:
```json
{
  "whatsappNumber": "919XXXXXXXXX",
  "businessName": "Friends Motors",
  "location": "Kanhangad, Kerala",
  "tagline": "Trusted Used Vehicles, Best Deals Near You"
}
```
*Note: Make sure your `whatsappNumber` begins with the country code (e.g., `91` for India) and contains no spaces, hyphens, or brackets.*

### 2. Google AdSense Setup
1. Register your custom domain at [adsense.google.com](https://adsense.google.com).
2. Open `app/layout.tsx` and replace the placeholder Publisher ID (`ca-pub-XXXXXXXXXXXXXXXXX`) in the script tag with your actual Publisher ID:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-[YOUR-PUBLISHER-ID]" crossorigin="anonymous"></script>
   ```
3. Locate `data-ad-client` inside `components/AdSenseAd.tsx` and update it to your Publisher ID.
4. Replace the placeholder slot IDs (e.g., `XXXXXXXXX`, `YYYYYYYYY`, etc.) in `app/page.tsx` and `app/vehicles/[slug]/page.tsx` with your actual AdSense Ad Unit IDs.

### 3. Google Search Console Verification
1. Sign in to [search.google.com](https://search.google.com/search-console).
2. Add your domain property (e.g., `friendsmotors.in`).
3. Select HTML tag verification, copy the verification code, and update the verification google key in the metadata inside `app/layout.tsx`:
   ```typescript
   verification: { google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE' }
   ```
4. Once deployed, submit your sitemap at `https://friendsmotors.in/sitemap.xml`.

---

## 🚗 Adding New Vehicles

1. Save the vehicle images under `/public/images/vehicles/` (recommended format: `.png` or `.jpg`).
2. Open `/data/vehicles.json` and append a new entry at the bottom of the array following this model:
```json
{
  "id": "7",
  "slug": "2020-honda-city-v-petrol-silver",
  "title": "2020 Honda City V",
  "make": "Honda",
  "model": "City",
  "variant": "V Petrol MT",
  "type": "Car",
  "year": 2020,
  "price": 850000,
  "mileage": 36000,
  "fuel": "Petrol",
  "transmission": "Manual",
  "color": "Alabaster Silver",
  "location": "Kanhangad, Kerala",
  "condition": "Excellent",
  "description": "Single owner, showrooms serviced, comprehensive insurance valid. Leather seat covers, new battery.",
  "features": ["Alloy Wheels", "Touchscreen Audio", "Reverse Sensors", "Keyless Entry"],
  "images": ["/images/vehicles/honda-city-1.png"],
  "postedDate": "2025-06-10",
  "featured": true
}
```
3. Push changes to GitHub. Vercel will trigger a webhook, build, and deploy the new vehicle details page live in 30 seconds!

---

## ⚡ Deployment to Vercel (Free Tier)

Vercel detects Next.js configurations automatically and provisions free SSL, CDN, and auto-build triggers on every git commit.

1. Push your project code to a GitHub repository.
2. Sign up or log in at [vercel.com](https://vercel.com).
3. Click **Add New...** → **Project** and import your GitHub repository.
4. Vercel automatically detects Next.js. Keep the default build settings:
   *   **Framework Preset:** Next.js
   *   **Build Command:** `next build` (which automatically outputs static files to the `out/` folder due to `output: 'export'`)
   *   **Output Directory:** `out`
5. Click **Deploy**.
6. **Custom Domain:** Go to **Project Settings** → **Domains** to add your own domain. Vercel will automatically provision a free SSL certificate!
