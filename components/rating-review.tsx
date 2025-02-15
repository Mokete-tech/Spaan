"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle, Star, Check } from "lucide-react"

export function RatingReview() {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"idle" | "processing" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus("processing")

    // Simulating API call for submitting rating and review
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulating processing time

      // In a real scenario, you would send the rating and review to your backend
      // The backend would save this information and update the freelancer's overall rating
      // For this example, we'll just simulate a successful submission

      setSubmitStatus("success")
    } catch (error) {
      setSubmitStatus("error")
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Rate and Review</CardTitle>
        <CardDescription>Share your experience with this freelancer</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Rating</Label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  type="button"
                  variant={star <= rating ? "default" : "outline"}
                  onClick={() => setRating(star)}
                  className="p-2"
                >
                  <Star className={star <= rating ? "text-yellow-400" : "text-gray-300"} />
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="review">Review</Label>
            <Textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              placeholder="Write your review here..."
              rows={4}
            />
          </div>
          <Button type="submit" disabled={submitStatus === "processing"} className="w-full">
            {submitStatus === "processing" ? "Submitting..." : "Submit Rating and Review"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {submitStatus === "success" && (
          <div className="flex items-center text-green-500">
            <Check className="mr-2" />
            Thank you for your feedback!
          </div>
        )}
        {submitStatus === "error" && (
          <div className="flex items-center text-red-500">
            <AlertCircle className="mr-2" />
            Failed to submit. Please try again.
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

