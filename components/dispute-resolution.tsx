"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle, Check } from "lucide-react"

export function DisputeResolution() {
  const [disputeDescription, setDisputeDescription] = useState("")
  const [disputeStatus, setDisputeStatus] = useState<"idle" | "processing" | "success" | "error">("idle")

  const handleDisputeSubmission = async (e: React.FormEvent) => {
    e.preventDefault()
    setDisputeStatus("processing")

    // Simulating API call for dispute submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulating processing time

      // In a real scenario, you would send the dispute details to your backend
      // The backend would create a dispute case and assign it to a support representative
      // For this example, we'll just simulate a successful submission

      setDisputeStatus("success")
    } catch (error) {
      setDisputeStatus("error")
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Dispute Resolution</CardTitle>
        <CardDescription>Submit a dispute for review by our support team</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleDisputeSubmission} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="dispute-description">Describe your dispute</Label>
            <Textarea
              id="dispute-description"
              value={disputeDescription}
              onChange={(e) => setDisputeDescription(e.target.value)}
              required
              placeholder="Please provide details about your dispute..."
              rows={5}
            />
          </div>
          <Button type="submit" disabled={disputeStatus === "processing"} className="w-full">
            {disputeStatus === "processing" ? "Submitting..." : "Submit Dispute"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {disputeStatus === "success" && (
          <div className="flex items-center text-green-500">
            <Check className="mr-2" />
            Dispute submitted successfully! Our team will review it shortly.
          </div>
        )}
        {disputeStatus === "error" && (
          <div className="flex items-center text-red-500">
            <AlertCircle className="mr-2" />
            Failed to submit dispute. Please try again or contact support.
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

