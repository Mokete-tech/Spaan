import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function BecomeAProvider() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Become a Service Provider on Spaan</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
        Join our community of skilled professionals and start earning money on your own terms.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Remote Services</CardTitle>
            <CardDescription>Offer your skills to clients worldwide</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {["Web Development", "Graphic Design", "Content Writing", "Digital Marketing", "Virtual Assistance"].map(
                (service) => (
                  <li key={service} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span>{service}</span>
                  </li>
                ),
              )}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Local Services</CardTitle>
            <CardDescription>Provide in-person services in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {["Home Repairs", "Moving Assistance", "Lawn Care", "Cleaning Services", "Personal Training"].map(
                (service) => (
                  <li key={service} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span>{service}</span>
                  </li>
                ),
              )}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="text-center">
        <Button size="lg">Sign Up as a Provider</Button>
      </div>
    </div>
  )
}

