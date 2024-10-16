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

      <header>
        <div class="container">
          <nav class="navbar">
            <div class="logo">DevBhoomi <span>Yatra<b>.</b></span></div>
            <div class="nav-links">
              <a href="/pages/Destination">Destinations</a>
              <a href="/pages/About">About</a>
              <a href="/pages/Contact">Contact</a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </a>
            </div>
            <div class="right-section">
              <a href="#!" class="btn btn-outline">Login</a>
              <a href="#!" class="btn">Sign Up</a>
            </div>
          </nav>
        </div>
      </header>

      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
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
