import { Card } from "@/components/ui/card"

export function EducationalSection() {
  const benefits = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Lower Energy Bills",
      description: "Clean coils improve efficiency by up to 30%, reducing your monthly cooling costs significantly.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Better Performance",
      description: "Remove dirt and debris to restore your AC to peak cooling capacity and airflow.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Extended Lifespan",
      description: "Regular coil cleaning prevents premature wear and can add years to your AC unit's life.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Improved Air Quality",
      description: "Clean coils mean cleaner air circulating through your home, reducing allergens and odors.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Coil Cleaning Matters</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            Your AC coils are the heart of your cooling system. When they're dirty, your entire unit works harder, costs
            more to run, and wears out faster. Regular professional cleaning is an investment that pays for itself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 rounded-full p-3">{benefit.icon}</div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Cleaning Process</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Inspection</h4>
                <p className="text-muted-foreground">
                  We thoroughly inspect your AC unit to assess coil condition and identify any issues.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Deep Cleaning</h4>
                <p className="text-muted-foreground">
                  Using professional-grade equipment and eco-friendly solutions, we remove all dirt, debris, and
                  buildup.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Testing & Verification</h4>
                <p className="text-muted-foreground">
                  We test your system to ensure optimal performance and verify improved efficiency.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Maintenance Tips</h4>
                <p className="text-muted-foreground">
                  We provide personalized recommendations to keep your AC running efficiently between cleanings.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
