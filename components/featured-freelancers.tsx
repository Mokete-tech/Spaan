import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Star } from "lucide-react"

const freelancers = [
  {
    id: 1,
    name: "Alex Thompson",
    title: "Full Stack Developer",
    rating: 4.9,
    reviews: 183,
    image: "/placeholder.svg?height=300&width=300",
    badges: ["Top Rated", "Level 2"],
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "UI/UX Designer",
    rating: 5.0,
    reviews: 142,
    image: "/placeholder.svg?height=300&width=300",
    badges: ["Rising Talent"],
    verified: true,
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    title: "Digital Marketing Expert",
    rating: 4.8,
    reviews: 167,
    image: "/placeholder.svg?height=300&width=300",
    badges: ["Top Rated Plus"],
    verified: false,
  },
]

export function FeaturedFreelancers() {
  return (
    <section className="container px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Freelancers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {freelancers.map((freelancer) => (
          <Card key={freelancer.id}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={freelancer.image || "/placeholder.svg"}
                  alt={freelancer.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    {freelancer.name}
                    {freelancer.verified && <Shield className="h-4 w-4 text-green-500" title="Verified" />}
                  </h3>
                  <p className="text-sm text-muted-foreground">{freelancer.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">{freelancer.rating}</span>
                <span className="text-sm text-muted-foreground">({freelancer.reviews} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {freelancer.badges.map((badge) => (
                  <Badge key={badge} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
              <Button className="w-full">Hire Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

