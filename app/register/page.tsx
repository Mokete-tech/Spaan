"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { AutomatedVerification } from "@/components/automated-verification"
import { useToast } from "@/components/ui/use-toast"

export default function Register() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    offerLocalServices: false,
  })
  const [errors, setErrors] = useState({})
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.password) newErrors.password = "Password is required"
    if (formData.password && formData.password.length < 8) newErrors.password = "Password must be at least 8 characters"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      if (formData.offerLocalServices) {
        setStep(2)
      } else {
        // Here you would typically send this data to your backend
        console.log("Submitting registration data:", formData)
        toast({
          title: "Account created",
          description: "You have successfully registered an account.",
        })
        // Redirect to dashboard or home page
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Create Your Account</CardTitle>
          <CardDescription>Join Spaan and start your freelancing journey</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="local-services"
                  checked={formData.offerLocalServices}
                  onCheckedChange={(checked) => setFormData({ ...formData, offerLocalServices: !!checked })}
                />
                <Label htmlFor="local-services">I want to offer or hire local services in South Africa</Label>
              </div>
              <Button type="submit" className="w-full">
                {formData.offerLocalServices ? "Next: Verify Identity" : "Create Account"}
              </Button>
            </form>
          )}
          {step === 2 && (
            <AutomatedVerification
              onVerificationComplete={() => {
                console.log("Verification completed")
                toast({
                  title: "Verification successful",
                  description: "Your identity has been verified.",
                })
                // Here you would typically send the registration data to your backend
                console.log("Submitting registration data:", formData)
                // Redirect to dashboard or home page
              }}
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}

