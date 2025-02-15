"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface User {
  id: string
  name: string
  email: string
  role: string
  createdAt: string
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    const fetchUsers = async () => {
      // Simulating API call
      const response = await new Promise<User[]>((resolve) => {
        setTimeout(() => {
          resolve([
            { id: "1", name: "John Doe", email: "john@example.com", role: "user", createdAt: "2023-01-01" },
            { id: "2", name: "Jane Smith", email: "jane@example.com", role: "admin", createdAt: "2023-02-15" },
            { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "user", createdAt: "2023-03-20" },
          ])
        }, 1000)
      })
      setUsers(response)
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

