"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function PostAJob() {
  const [jobType, setJobType] = useState("remote")
  const [isNegotiable, setIsNegotiable] = useState(false)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Post a Job</h1>
      <form className="space-y-8 max-w-2xl">
        <div>
          <Label htmlFor="title">Job Title</Label>
          <Input id="title" placeholder="e.g. Web Developer Needed for E-commerce Site" />
        </div>
        <div>
          <Label htmlFor="description">Job Description</Label>
          <Textarea id="description" placeholder="Describe your project in detail..." />
        </div>
        <div>
          <Label>Job Type</Label>
          <RadioGroup defaultValue="remote" onValueChange={setJobType}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="remote" id="remote" />
              <Label htmlFor="remote">Remote</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="local" id="local" />
              <Label htmlFor="local">Local (In-person)</Label>
            </div>
          </RadioGroup>
        </div>
        {jobType === "local" && (
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="e.g. New York, NY" />
          </div>
        )}
        <div>
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-dev">Web Development</SelectItem>
              <SelectItem value="design">Graphic Design</SelectItem>
              <SelectItem value="writing">Content Writing</SelectItem>
              <SelectItem value="marketing">Digital Marketing</SelectItem>
              <SelectItem value="home-repair">Home Repair</SelectItem>
              <SelectItem value="moving">Moving Assistance</SelectItem>
              <SelectItem value="lawn-care">Lawn Care</SelectItem>
              <SelectItem value="cleaning">Cleaning Services</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="budget">Budget (ZAR)</Label>
          <Input id="budget" type="number" placeholder="Enter your budget" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="negotiable" checked={isNegotiable} onCheckedChange={setIsNegotiable} />
          <Label htmlFor="negotiable">Price is negotiable</Label>
        </div>
        {isNegotiable && (
          <div>
            <Label htmlFor="negotiation-notes">Negotiation Notes</Label>
            <Textarea id="negotiation-notes" placeholder="Add any notes about price negotiation..." />
          </div>
        )}
        <Button type="submit">Post Job</Button>
      </form>
    </div>
  )
}

