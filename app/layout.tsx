import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arizona CoilCare | AC Coil Cleaning in Mesa, AZ",
  description:
    "Professional air conditioner coil cleaning services in Mesa, Arizona. Lower bills, colder air, and a happy AC with our expert condenser and evaporator coil cleaning.",
  keywords:
    "AC coil cleaning, Mesa Arizona, HVAC cleaning, condenser coil, evaporator coil, air conditioner maintenance",
  openGraph: {
    title: "Arizona CoilCare | AC Coil Cleaning in Mesa, AZ",
    description: "Professional air conditioner coil cleaning services in Mesa, Arizona.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              name: "Arizona CoilCare",
              description:
                "Professional AC coil cleaning services specializing in condenser and evaporator coil cleaning for homes in Mesa, Arizona.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mesa",
                addressRegion: "AZ",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "City",
                name: "Mesa",
                containedIn: {
                  "@type": "State",
                  name: "Arizona",
                },
              },
              serviceType: ["AC Coil Cleaning", "Condenser Coil Cleaning", "Evaporator Coil Cleaning"],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
