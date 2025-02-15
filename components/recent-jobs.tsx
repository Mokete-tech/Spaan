import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/utils/currency"

const recentJobs = [
  {
    id: 1,
    title: "Frontend Developer Needed for E-commerce Project",
    category: "Web Development",
    budget: formatCurrency(30000) + " - " + formatCurrency(45000),
    type: "Remote",
    postedDate: "1 day ago",
    negotiable: true,
  },
  {
    id: 2,
    title: "Graphic Designer for Brand Identity",
    category: "Graphic Design",
    budget: formatCurrency(15000) + " - " + formatCurrency(22500),
    type: "Remote",
    postedDate: "2 days ago",
    negotiable: false,
  },
  {
    id: 3,
    title: "Local Moving Help - 1 Bedroom Apartment",
    category: "Moving",
    budget: formatCurrency(3000),
    type: "Local",
    location: "Durban",
    postedDate: "3 hours ago",
    negotiable: true,
  },
]

export function RecentJobs() {
  return (
    <section className="container px-4">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Recent Job Postings</h2>
      <div className="grid gap-6 mb-8">
        {recentJobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>{job.category}</Badge>
                <Badge variant="outline">{job.type}</Badge>
                {job.location && <Badge variant="secondary">{job.location}</Badge>}
                {job.negotiable && <Badge variant="outline">Negotiable</Badge>}
              </div>
              <p className="text-muted-foreground mb-4">Budget: {job.budget}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Posted {job.postedDate}</span>
                <Button>Apply Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Link href="/browse">
          <Button variant="outline">View All Jobs</Button>
        </Link>
      </div>
    </section>
  )
}

