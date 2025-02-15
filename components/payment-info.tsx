import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, DollarSign, MessageSquare } from "lucide-react"

export function PaymentInfo() {
  return (
    <section className="container px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Secure Payments & Fair Negotiations</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Secure Escrow Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We use a secure escrow system to protect both clients and service providers. Funds are held safely until
              the job is completed satisfactorily.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              EFT Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our platform supports Electronic Funds Transfer (EFT) for easy and familiar payments within South Africa.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Price Negotiation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Many jobs allow for price negotiation. Discuss terms with potential clients or service providers to find a
              fair agreement for both parties.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

