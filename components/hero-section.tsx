import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">Spaan</h1>
          <p className="text-xl mb-8 text-white/80">
            Connect with talented freelancers, deliver quality work on time, and build your success story.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <Link href="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply" aria-hidden="true"></div>
    </section>
  )
}

