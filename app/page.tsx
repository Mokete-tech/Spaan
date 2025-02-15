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

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <CategoryNav />
      <PopularServices />
      <LocalServicesMarketplace />
      <RecentJobs />
      <PaymentInfo />
      <VerificationInfo />
      <AutomatedVerification />
      <SecurePayment
        amount={1000}
        currency="ZAR"
        onSuccess={() => console.log("Payment successful")}
        onError={(error) => console.error(error)}
      />
      <TwoFactorAuth />
      <DisputeResolution />
      <RatingReview />
      <FeaturedFreelancers />
      <HowItWorks />
    </div>
  )
}

