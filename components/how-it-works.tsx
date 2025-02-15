import { Search, CheckCircle, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    icon: Search,
    title: "1. Post a Job",
    description: "Share your project details and requirements with our community of freelancers.",
  },
  {
    icon: MessageSquare,
    title: "2. Connect",
    description: "Review proposals, chat with freelancers, and choose the best match for your project.",
  },
  {
    icon: CheckCircle,
    title: "3. Complete Project",
    description: "Work with your freelancer to deliver the project and only pay when you're satisfied.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.title} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

