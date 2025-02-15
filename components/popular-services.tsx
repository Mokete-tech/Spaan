import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { formatCurrency } from "@/utils/currency"

const services = [
  {
    id: 1,
    title: "Website Development",
    price: 5000,
    currency: "ZAR" as const,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviews: 2947,
  },
  {
    id: 2,
    title: "Logo Design",
    price: 1000,
    currency: "ZAR" as const,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviews: 1832,
  },
  {
    id: 3,
    title: "Content Writing",
    price: 500,
    currency: "ZAR" as const,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviews: 1523,
  },
  {
    id: 4,
    title: "Digital Marketing",
    price: 3500,
    currency: "ZAR" as const,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviews: 2156,
  },
]

export function PopularServices() {
  return (
    <section className="container px-4">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Popular Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={300}
              height={200}
              className="w-full object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                From {formatCurrency(service.price, service.currency)}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">★ {service.rating}</span>
                <span className="text-sm text-muted-foreground">({service.reviews})</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

