"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Check } from "lucide-react"

export function TwoFactorAuth() {
  const [verificationCode, setVerificationCode] = useState("")
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "processing" | "success" | "error">("idle")

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault()
    setVerificationStatus("processing")

    // Simulating API call for 2FA verification
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulating processing time

      // In a real scenario, you would send the verification code to your backend
      // The backend would validate the code against what was sent to the user's phone
      // For this example, we'll just simulate a successful verification

      setVerificationStatus("success")
    } catch (error) {
      setVerificationStatus("error")
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Two-Factor Authentication</CardTitle>
        <CardDescription>Enter the code sent to your phone</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleVerification} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="verification-code">Verification Code</Label>
            <Input
              id="verification-code"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
              placeholder="Enter 6-digit code"
            />
          </div>
          <Button type="submit" disabled={verificationStatus === "processing"} className="w-full">
            {verificationStatus === "processing" ? "Verifying..." : "Verify"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {verificationStatus === "success" && (
          <div className="flex items-center text-green-500">
            <Check className="mr-2" />
            Verification successful!
          </div>
        )}
        {verificationStatus === "error" && (
          <div className="flex items-center text-red-500">
            <AlertCircle className="mr-2" />
            Verification failed. Please try again or request a new code.
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

