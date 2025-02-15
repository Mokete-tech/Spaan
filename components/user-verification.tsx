"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Upload } from "lucide-react"

export function UserVerification() {
  const [idType, setIdType] = useState<string>("")
  const [idNumber, setIdNumber] = useState<string>("")
  const [frontImage, setFrontImage] = useState<File | null>(null)
  const [backImage, setBackImage] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend for verification
    console.log("Submitting verification data:", { idType, idNumber, frontImage, backImage })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Verify Your Identity for Local Services</CardTitle>
        <CardDescription>Required for providing or hiring local services in South Africa.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="id-type">ID Type</Label>
            <Select onValueChange={setIdType}>
              <SelectTrigger id="id-type">
                <SelectValue placeholder="Select ID type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="id-card">ID Card</SelectItem>
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="green-book">Green ID Book</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="id-number">ID Number</Label>
            <Input id="id-number" type="text" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="front-image">Front Image of ID</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="front-image"
                type="file"
                onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
                required
                accept="image/*"
              />
              <Upload className="h-4 w-4" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="back-image">Back Image of ID (if applicable)</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="back-image"
                type="file"
                onChange={(e) => setBackImage(e.target.files?.[0] || null)}
                accept="image/*"
              />
              <Upload className="h-4 w-4" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="w-full">
          Submit for Verification
        </Button>
      </CardFooter>
      <div className="px-6 py-4 bg-yellow-50 text-yellow-800 rounded-b-lg flex items-start space-x-2">
        <AlertCircle className="h-5 w-5 mt-0.5" />
        <p className="text-sm">
          Your information will be securely processed and verified. This may take up to 48 hours. Verification is only
          required for local services in South Africa.
        </p>
      </div>
    </Card>
  )
}

