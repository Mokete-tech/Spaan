import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign, Star, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { QRCodeSVG } from "qrcode.react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Service {
  id: number
  title: string
  description: string
  category: string
  badges: string[]
  pricing: string
  rating: number
  reviews: number
  image?: string
}

interface LocalServicesMarketplaceProps {
  services: Service[]
}

const placeholderImages = [
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400&text=Local+Services",
  "/placeholder.svg?height=300&width=400&text=Spaan",
  "/placeholder.svg?height=300&width=400&text=Quality+Work",
]

export function LocalServicesMarketplace({ services = [] }: LocalServicesMarketplaceProps) {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  if (services.length === 0) {
    return (
      <section className="container px-4 py-16">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              No services found. Please try a different search or category.
            </p>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section className="container px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredService(service.id)}
            onHoverEnd={() => setHoveredService(null)}
          >
            <Link href={`/services/${service.id}`} className="block">
              <Card className="h-full cursor-pointer transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                    <Image
                      src={service.image || placeholderImages[index % placeholderImages.length]}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.badges.map((badge) => (
                      <Badge key={badge} variant="secondary">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>Local service providers in your area</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    <span>Flexible scheduling</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium mb-4">
                    <DollarSign className="h-4 w-4" />
                    <span>{service.pricing}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="inline-flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download Mobile App
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Download Our Mobile App</DialogTitle>
              <DialogDescription>
                Scan the QR code below to download our mobile app for easy access to local services on the go.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center py-4">
              <QRCodeSVG value="https://spaan.app/download" size={200} />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Or visit{" "}
              <a href="https://spaan.app/download" className="text-primary hover:underline">
                https://spaan.app/download
              </a>
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

