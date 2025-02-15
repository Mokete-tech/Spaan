"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Metrics {
  totalUsers: number
  totalJobs: number
  activeJobs: number
  completedJobs: number
  totalRevenue: number
}

export function MetricsOverview() {
  const [metrics, setMetrics] = useState<Metrics | null>(null)

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    const fetchMetrics = async () => {
      // Simulating API call
      const response = await new Promise<Metrics>((resolve) => {
        setTimeout(() => {
          resolve({
            totalUsers: 1000,
            totalJobs: 500,
            activeJobs: 200,
            completedJobs: 300,
            totalRevenue: 50000,
          })
        }, 1000)
      })
      setMetrics(response)
    }

    fetchMetrics()
  }, [])

  if (!metrics) {
    return <div>Loading metrics...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{metrics.totalUsers}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{metrics.totalJobs}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Active Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{metrics.activeJobs}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Completed Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{metrics.completedJobs}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">R{metrics.totalRevenue.toLocaleString()}</p>
        </CardContent>
      </Card>
    </div>
  )
}

