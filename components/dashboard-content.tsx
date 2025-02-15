"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

interface User {
  name: string
  email: string
}

interface DashboardContentProps {
  user: User
}

export function DashboardContent({ user }: DashboardContentProps) {
  const [activeJobs, setActiveJobs] = useState([
    { id: 1, title: "Website Redesign", status: "In Progress" },
    { id: 2, title: "Logo Design", status: "Pending Review" },
  ])

  const [completedJobs, setCompletedJobs] = useState([
    { id: 3, title: "Content Writing", status: "Completed" },
    { id: 4, title: "SEO Optimization", status: "Completed" },
  ])

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user.name}!</CardTitle>
          <CardDescription>Here's an overview of your activity on Spaan</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Email: {user.email}</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Jobs</TabsTrigger>
          <TabsTrigger value="completed">Completed Jobs</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Active Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              {activeJobs.map((job) => (
                <div key={job.id} className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.status}</p>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              {completedJobs.map((job) => (
                <div key={job.id} className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.status}</p>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

