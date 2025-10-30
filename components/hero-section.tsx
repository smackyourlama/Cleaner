"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Lower Bills. Colder Air. Happy AC.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          Expert condenser and evaporator coil cleaning services for homes in Mesa, Arizona. Keep your AC running
          efficiently and save on energy costs.
        </p>
        <Button
          size="lg"
          onClick={scrollToBooking}
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
        >
          Schedule Your Cleaning
          <svg
            className="ml-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Button>
      </div>
    </section>
  )
}
