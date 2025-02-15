import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Graphics & Design",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Programming & Tech",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Digital Marketing",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Video & Animation",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Writing & Translation",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Music & Audio",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    name: "Business",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    name: "Local Services",
    image: "/placeholder.svg?height=200&width=300",
    description: "Find skilled professionals for in-person tasks and services",
  },
]

export function CategoryNav() {
  return (
    <section className="container px-4">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="overflow-hidden">
            <img
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              width={300}
              height={200}
              className="w-full object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{category.name}</h3>
              {category.description && <p>{category.description}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

