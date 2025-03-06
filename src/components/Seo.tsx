import * as React from "react"
import { Helmet } from "react-helmet"

interface SeoProps {
  title: string
  description?: string
}

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  const siteTitle = "Chomper's Construction | Sacramento's Trusted Contractors"
  const defaultDescription =
    "Family-owned construction company in Sacramento, CA, specializing in home remodels, renovations, decks, fences, kitchens, bathrooms, and more. Call us for a free estimate!"
  const metaDescription = description || defaultDescription

  return (
    <Helmet>
      {/* General SEO Tags */}
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={metaDescription} />

      {/* Local Business Schema Markup */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Chomper's Construction",
            "image": "https://www.chompersconstruction.com/logo_ver001.png",
            "description": "${metaDescription}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main St",
              "addressLocality": "Sacramento",
              "addressRegion": "CA",
              "postalCode": "95814",
              "addressCountry": "USA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "38.5816",
              "longitude": "-121.4944"
            },
            "telephone": "+1-916-425-1825",
            "openingHours": "Mo-Fr 08:00-17:00",
            "priceRange": "$$",
            "url": "https://www.chompersconstruction.com",
            "sameAs": [
              "https://www.facebook.com/chompersconstruction",
              "https://www.instagram.com/chompersconstruction"
            ]
          }
        `}
      </script>

      {/* OpenGraph Tags (for social media sharing) */}
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.chompersconstruction.com" />
      <meta
        property="og:image"
        content="https://www.chompersconstruction.com/logo_ver001.png"
      />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:image"
        content="https://www.chompersconstruction.com/logo_ver001.png"
      />

      {/* Canonical URL */}
      <link rel="canonical" href="https://www.chompersconstruction.com" />
    </Helmet>
  )
}

export default Seo
