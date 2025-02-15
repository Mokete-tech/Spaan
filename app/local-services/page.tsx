"use client"

import { useState, useEffect, useCallback } from "react"
import { LocalServicesMarketplace } from "@/components/local-services-marketplace"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const initialServices = [
  {
    id: 1,
    title: "Home Repairs & Maintenance",
    description: "Book skilled handymen for various home repair tasks",
    category: "home",
    badges: ["Verified Pros", "Insured"],
    pricing: "R300 per hour",
    rating: 4.8,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    title: "Moving & Packing Assistance",
    description: "Get help with packing, loading, and moving your belongings",
    category: "moving",
    badges: ["Background Checked", "Equipped"],
    pricing: "Flat rates from R2000",
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 3,
    title: "Lawn Care & Landscaping",
    description: "Professional lawn maintenance and landscaping services",
    category: "landscaping",
    badges: ["Eco-friendly", "Scheduled"],
    pricing: "Monthly plans from R1000",
    rating: 4.9,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    id: 4,
    title: "Cleaning Services",
    description: "Book reliable cleaners for your home or office",
    category: "cleaning",
    badges: ["Bonded", "Supplies Included"],
    pricing: "Per-visit from R500",
    rating: 4.6,
    reviews: 178,
  },
  {
    id: 5,
    title: "Electrical Repairs",
    description: "Professional electricians for all your electrical needs",
    category: "home",
    badges: ["Licensed", "24/7 Emergency"],
    pricing: "R400 per hour",
    rating: 4.9,
    reviews: 132,
  },
  {
    id: 6,
    title: "Plumbing Services",
    description: "Expert plumbers for installations and repairs",
    category: "home",
    badges: ["Certified", "Same-day Service"],
    pricing: "R350 per hour",
    rating: 4.7,
    reviews: 189,
  },
]

export default function LocalServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [services, setServices] = useState(initialServices)

  const handleSearch = useCallback(
    (e?: React.FormEvent) => {
      if (e) e.preventDefault()
      const filteredServices = initialServices.filter((service) => {
        return (
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (category === "all" || service.category === category)
        )
      })
      setServices(filteredServices)
    },
    [searchTerm, category],
  )

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
  }

  useEffect(() => {
    handleSearch()
  }, [handleSearch])

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Local Services in South Africa</h1>
      <div className="mb-12">
        <form onSubmit={handleSearch} className="flex gap-4">
          <Input
            type="search"
            placeholder="Search for services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="home">Home Services</SelectItem>
              <SelectItem value="moving">Moving Services</SelectItem>
              <SelectItem value="landscaping">Landscaping</SelectItem>
              <SelectItem value="cleaning">Cleaning Services</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit">Search</Button>
        </form>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initialServices.slice(0, 3).map((service) => (
            <Card key={service.id} className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="font-medium">{service.rating}</span>
                  <span className="text-sm text-muted-foreground">({service.reviews} reviews)</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.badges.map((badge) => (
                    <Badge key={badge} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <LocalServicesMarketplace services={services} />
    </div>
  )
}

