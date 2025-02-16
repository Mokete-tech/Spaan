import { CategoryNav } from "@/components/category-nav"
import { HeroSection } from "@/components/hero-section"
import { PopularServices } from "@/components/popular-services"
import { FeaturedFreelancers } from "@/components/featured-freelancers"
import { HowItWorks } from "@/components/how-it-works"
import { LocalServicesMarketplace } from "@/components/local-services-marketplace"
import { RecentJobs } from "@/components/recent-jobs"
import { PaymentInfo } from "@/components/payment-info"
import { VerificationInfo } from "@/components/verification-info"
import { AutomatedVerification } from "@/components/automated-verification"
import { SecurePayment } from "@/components/secure-payment"
import { TwoFactorAuth } from "@/components/two-factor-auth"
import { DisputeResolution } from "@/components/dispute-resolution"
import { RatingReview } from "@/components/rating-review"

'use client'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Spaan</h1>
      {session ? (
        <div>Logged in as {session.user?.name}</div>
      ) : (
        <div>Please sign in</div>
      )}
    </main>
  )
}

