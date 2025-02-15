import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, CheckCircle, Globe } from "lucide-react"

export function VerificationInfo() {
  return (
    <section className="container px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Our Verification Process for Local Services</h2>
      <p className="text-lg mb-8">
        Verification is required for offering or hiring local services in South Africa. For remote services,
        verification is optional but encouraged.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Submit Your ID
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              For local services in South Africa, provide your South African ID card, Green ID book, or passport. We
              accept clear photos or scans of both sides.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Verification Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our team typically processes verifications for local services within 24-48 hours. We'll keep you updated
              on the status via email.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Verified Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Once verified for local services, your profile will display a verification badge, increasing trust and
              credibility with potential clients or service providers in South Africa.
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Remote Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            For remote services accessible worldwide, verification is optional. However, we encourage all users to
            verify their accounts to build trust in the Spaan community.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

