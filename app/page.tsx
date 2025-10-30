import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BeforeAfterGallery } from "@/components/before-after-gallery"
import { BookingSection } from "@/components/booking-section"
import { EducationalSection } from "@/components/educational-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BeforeAfterGallery />
      <BookingSection />
      <EducationalSection />
      <ContactSection />
    </main>
  )
}
