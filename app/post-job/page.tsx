"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export default function PostAJob() {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    type: "remote",
    location: "",
    budget: "",
    isNegotiable: false,
  })
  const [errors, setErrors] = useState({})
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors = {}
    if (!jobData.title) newErrors.title = "Job title is required"
    if (!jobData.description) newErrors.description = "Job description is required"
    if (jobData.type === "local" && !jobData.location) newErrors.location = "Location is required for local jobs"
    if (!jobData.budget) newErrors.budget = "Budget is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log("Job posted successfully!", jobData)
      toast({
        title: "Job Posted",
        description: "Your job has been successfully posted.",
      })
      // Reset form or redirect
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Post a Job</CardTitle>
          <CardDescription>Fill in the details to post your job on Spaan</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                value={jobData.title}
                onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
                placeholder="e.g. Web Developer Needed for E-commerce Site"
                required
              />
              {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                value={jobData.description}
                onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
                placeholder="Describe your project in detail..."
                required
                rows={5}
              />
              {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
            </div>
            <div className="space-y-2">
              <Label>Job Type</Label>
              <Select value={jobData.type} onValueChange={(value) => setJobData({ ...jobData, type: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="local">Local (In-person)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {jobData.type === "local" && (
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={jobData.location}
                  onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
                  placeholder="e.g. Cape Town, South Africa"
                  required
                />
                {errors.location && <p className="text-sm text-red-500">{errors.location}</p>}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="budget">Budget (ZAR)</Label>
              <Input
                id="budget"
                type="number"
                value={jobData.budget}
                onChange={(e) => setJobData({ ...jobData, budget: e.target.value })}
                placeholder="Enter your budget"
                required
              />
              {errors.budget && <p className="text-sm text-red-500">{errors.budget}</p>}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="negotiable"
                checked={jobData.isNegotiable}
                onCheckedChange={(checked) => setJobData({ ...jobData, isNegotiable: !!checked })}
              />
              <Label htmlFor="negotiable">Price is negotiable</Label>
            </div>
            <Button type="submit" className="w-full">
              Post Job
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

