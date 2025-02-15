"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Check } from "lucide-react"
import { formatCurrency } from "@/utils/currency"

type PaymentProps = {
  amount: number
  currency: "ZAR" | "USD" | "EUR" | "GBP"
  onSuccess: () => void
  onError: (error: string) => void
}

export function SecurePayment({ amount, currency, onSuccess, onError }: PaymentProps) {
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setPaymentStatus("processing")

    // Simulating API call to payment gateway
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulating processing time

      // In a real scenario, you would send the payment details to your payment gateway
      // The payment gateway would process the payment and return a result
      // For this example, we'll just simulate a successful payment

      setPaymentStatus("success")
      onSuccess()
    } catch (error) {
      setPaymentStatus("error")
      onError("Payment failed. Please try again.")
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Secure Payment</CardTitle>
        <CardDescription>Amount to pay: {formatCurrency(amount, currency)}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handlePayment} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input
              id="card-number"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry-date">Expiry Date</Label>
              <Input
                id="expiry-date"
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
                placeholder="MM/YY"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                placeholder="123"
              />
            </div>
          </div>
          <Button type="submit" disabled={paymentStatus === "processing"} className="w-full">
            {paymentStatus === "processing" ? "Processing..." : "Pay Now"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {paymentStatus === "success" && (
          <div className="flex items-center text-green-500">
            <Check className="mr-2" />
            Payment successful!
          </div>
        )}
        {paymentStatus === "error" && (
          <div className="flex items-center text-red-500">
            <AlertCircle className="mr-2" />
            Payment failed. Please try again or contact support.
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

