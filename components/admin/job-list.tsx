"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Job {
  id: string
  title: string
  category: string
  status: "active" | "completed" | "cancelled"
  postedBy: string
  postedAt: string
}

export function JobList() {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    const fetchJobs = async () => {
      // Simulating API call
      const response = await new Promise<Job[]>((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: "1",
              title: "Website Redesign",
              category: "Web Development",
              status: "active",
              postedBy: "John Doe",
              postedAt: "2023-05-01",
            },
            {
              id: "2",
              title: "Logo Design",
              category: "Graphic Design",
              status: "completed",
              postedBy: "Jane Smith",
              postedAt: "2023-04-15",
            },
            {
              id: "3",
              title: "Content Writing",
              category: "Writing",
              status: "active",
              postedBy: "Bob Johnson",
              postedAt: "2023-05-10",
            },
          ])
        }, 1000)
      })
      setJobs(response)
    }

    fetchJobs()
  }, [])

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Posted By</TableHead>
            <TableHead>Posted At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.category}</TableCell>
              <TableCell>
                <Badge
                  variant={job.status === "active" ? "default" : job.status === "completed" ? "success" : "destructive"}
                >
                  {job.status}
                </Badge>
              </TableCell>
              <TableCell>{job.postedBy}</TableCell>
              <TableCell>{new Date(job.postedAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

