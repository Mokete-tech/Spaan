"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function JobFilters({ onApplyFilters }) {
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    budgetRange: "",
  })

  const handleApplyFilters = () => {
    onApplyFilters(filters)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter Jobs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Web Development">Web Development</SelectItem>
            <SelectItem value="Graphic Design">Graphic Design</SelectItem>
            <SelectItem value="Content Writing">Content Writing</SelectItem>
            <SelectItem value="Home Repair">Home Repair</SelectItem>
            <SelectItem value="Moving">Moving</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.type} onValueChange={(value) => setFilters({ ...filters, type: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="remote">Remote</SelectItem>
            <SelectItem value="local">Local</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.budgetRange} onValueChange={(value) => setFilters({ ...filters, budgetRange: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Budgets</SelectItem>
            <SelectItem value="0-5000">R0 - R5,000</SelectItem>
            <SelectItem value="5000-15000">R5,000 - R15,000</SelectItem>
            <SelectItem value="15000-50000">R15,000 - R50,000</SelectItem>
            <SelectItem value="50000-">R50,000+</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={handleApplyFilters} className="w-full">
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  )
}

