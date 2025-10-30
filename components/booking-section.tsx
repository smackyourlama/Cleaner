"use client"

import { useEffect, useRef } from "react"

export function BookingSection() {
  const widgetContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (widgetContainerRef.current) {
      const script = document.createElement("script")
      script.src = "https://square.site/appointments/buyer/widget/w6k9ciwqcu2zyo/DMJY36R1T5FE3.js"
      script.async = true

      widgetContainerRef.current.appendChild(script)

      return () => {
        // Cleanup: remove script when component unmounts
        if (widgetContainerRef.current) {
          widgetContainerRef.current.innerHTML = ""
        }
      }
    }
  }, [])

  return (
    <section id="booking" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Schedule Your Cleaning</h2>
          <p className="text-muted-foreground text-lg">Book your appointment directly through our scheduling system</p>
        </div>

        <div className="bg-card rounded-lg shadow-xl p-6 md:p-8">
          <div ref={widgetContainerRef} className="min-h-[500px]"></div>
        </div>
      </div>
    </section>
  )
}
