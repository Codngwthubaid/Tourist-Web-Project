import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plane, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const page = () => {


  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      description: "Experience the city of love with its iconic Eiffel Tower and world-class cuisine.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      name: "Bali, Indonesia",
      description: "Relax on pristine beaches and immerse yourself in rich Balinese culture.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      name: "New York City, USA",
      description: "Explore the Big Apple's skyscrapers, Central Park, and vibrant neighborhoods.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      name: "Tokyo, Japan",
      description: "Discover a unique blend of ultra-modern and traditional in Japan's capital.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      name: "Santorini, Greece",
      description: "Enjoy breathtaking sunsets and white-washed buildings on this picturesque island.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      name: "Machu Picchu, Peru",
      description: "Trek to the ancient Incan citadel high in the Andes Mountains.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]



  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Discover Your Next Adventure
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Explore breathtaking destinations around the world and create unforgettable memories.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input className="max-w-lg flex-1" placeholder="Search destinations" type="text" />
                    <Button type="submit" variant="outline">
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-200">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Popular Destinations
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center">
                {destinations.map((destination) => (
                  <Card key={destination.id} className="w-[90vw] sm:w-[45vw] lg:w-[30vw]">
                    <CardHeader>
                      <Image
                        alt={destination.name}
                        className="aspect-video object-cover rounded-t-lg"
                        height={400}
                        src={destination.image}
                        width={600}
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{destination.name}</CardTitle>
                      <CardDescription>{destination.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Learn More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-200">© 2024 Wanderlust Travel. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}

export default page
