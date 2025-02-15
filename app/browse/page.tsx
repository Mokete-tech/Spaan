"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/utils/currency"
import { JobFilters } from "@/components/job-filters"

const initialJobs = [
  {
    id: 1,
    title: "Website Redesign for Local Restaurant",
    category: "Web Development",
    budget: formatCurrency(15000) + " - " + formatCurrency(30000),
    type: "Remote",
    postedDate: "2 days ago",
    negotiable: true,
  },
  {
    id: 2,
    title: "Logo Design for Tech Startup",
    category: "Graphic Design",
    budget: formatCurrency(7500) + " - " + formatCurrency(15000),
    type: "Remote",
    postedDate: "1 day ago",
    negotiable: false,
  },
  {
    id: 3,
    title: "Content Writer for Blog Posts",
    category: "Content Writing",
    budget: formatCurrency(750) + " per article",
    type: "Remote",
    postedDate: "3 days ago",
    negotiable: true,
  },
  {
    id: 4,
    title: "Home Renovation - Kitchen Remodel",
    category: "Home Repair",
    budget: formatCurrency(75000) + " - " + formatCurrency(150000),
    type: "Local",
    location: "Cape Town",
    postedDate: "1 week ago",
    negotiable: true,
  },
  {
    id: 5,
    title: "Moving Assistance - 2 Bedroom Apartment",
    category: "Moving",
    budget: formatCurrency(4500),
    type: "Local",
    location: "Johannesburg",
    postedDate: "2 days ago",
    negotiable: false,
  },
]

export default function Browse() {
  const [jobs, setJobs] = useState(initialJobs)
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    budgetRange: "",
  })

  const applyFilters = (newFilters) => {
    setFilters(newFilters)
    let filteredJobs = initialJobs

    if (newFilters.category) {
      filteredJobs = filteredJobs.filter((job) => job.category === newFilters.category)
    }

    if (newFilters.type) {
      filteredJobs = filteredJobs.filter((job) => job.type.toLowerCase() === newFilters.type)
    }

    if (newFilters.budgetRange) {
      const [min, max] = newFilters.budgetRange.split("-").map(Number)
      filteredJobs = filteredJobs.filter((job) => {
        const jobBudget = Number.parseInt(job.budget.replace(/[^0-9]/g, ""))
        return jobBudget >= min && (max ? jobBudget <= max : true)
      })
    }

    setJobs(filteredJobs)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Browse Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <JobFilters onApplyFilters={applyFilters} />
        </div>
        <div className="md:col-span-3">
          <div className="grid gap-6">
            {jobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{job.title}</span>
                    <Badge variant={job.type === "Remote" ? "default" : "secondary"}>{job.type}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">{job.category}</Badge>
                    {job.location && <Badge variant="outline">{job.location}</Badge>}
                    {job.negotiable && <Badge variant="outline">Negotiable</Badge>}
                  </div>
                  <p className="text-lg font-semibold mb-2">Budget: {job.budget}</p>
                  <p className="text-sm text-muted-foreground mb-4">Posted {job.postedDate}</p>
                  <Button>Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

