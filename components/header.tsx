import Image from "next/image"

export function Header() {
  return (
    <header className="w-full bg-card border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-center items-center">
        <div className="relative w-[300px] h-[120px] md:w-[400px] md:h-[160px]">
          <Image
            src="/arizona-coilcare-logo.png"
            alt="Arizona CoilCare - AC Coil Cleaning • Mesa, AZ"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </header>
  )
}
