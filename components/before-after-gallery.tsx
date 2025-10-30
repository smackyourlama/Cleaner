import { Card } from "@/components/ui/card"

export function BeforeAfterGallery() {
  const images = [
    {
      before: "/dirty-ac-condenser-coil-covered-in-dust.jpg",
      after: "/clean-shiny-ac-condenser-coil.jpg",
      title: "Condenser Coil Cleaning",
    },
    {
      before: "/clogged-evaporator-coil-with-debris.jpg",
      after: "/pristine-clean-evaporator-coil.jpg",
      title: "Evaporator Coil Cleaning",
    },
    {
      before: "/dirty-ac-unit-exterior-dusty.jpg",
      after: "/clean-ac-unit-exterior-spotless.jpg",
      title: "Complete AC Unit Service",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See the Difference</h2>
          <p className="text-muted-foreground text-lg">Real results from our professional coil cleaning services</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-4 text-center text-foreground">{item.title}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-destructive mb-2">Before</p>
                    <img
                      src={item.before || "/placeholder.svg"}
                      alt={`Before ${item.title}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-accent mb-2">After</p>
                    <img
                      src={item.after || "/placeholder.svg"}
                      alt={`After ${item.title}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
