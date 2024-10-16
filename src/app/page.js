"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MapPin, Calendar, DollarSign, ArrowRight, Hotel } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import demo from "@/public/Img/demo.jpg"
import b2 from "@/public/Img/b2.jpg"
import b3 from "@/public/Img/b3.jpg"
import b4 from "@/public/Img/b4.jpg"
import k2 from "@/public/Img/k2.jpg"
import k3 from "@/public/Img/k3.webp"
import k4 from "@/public/Img/k4.jpg"
import h2 from "@/public/Img/h2.jpg"
import h3 from "@/public/Img/h3.jpg"
import h1 from "@/public/Img/h1.jpg"
import Hotel1 from "@/public/Img/Hotel1.jpg"
import Hotel2 from "@/public/Img/Hotel2.jpg"
import Hotel3 from "@/public/Img/Hotel3.jpg"

// Mock function to simulate API call
const searchPlaces = async (query) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Mock data
  const places = [
    // "New York", "London", "Paris", "Tokyo", "Sydney",
    // "Berlin", "Rome", "Madrid", "Moscow", "Beijing"
    "Nanital", "Mussoorie", "Haridwar", "Kedarnath", "Budrinath"
  ]

  // Filter places based on query
  return places.filter(place => place.toLowerCase().includes(query.toLowerCase()))
}


export default function HomePage() {

  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError('Please enter a place name')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const searchResults = await searchPlaces(searchTerm)
      setResults(searchResults)
    } catch (err) {
      setError('An error occurred while searching. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen ">
      {/* <CodedCarousel/> */}
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center" style={{ backgroundImage: 'url("demo")' }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                  Discover Your Next Adventure
                </h1>
                <p className="mx-auto max-w-[700px] text-black md:text-xl">
                  "Devbhoomi Yatra: Your Journey to the Heart of Uttarakhand's Spiritual and Natural Wonders!"
                </p>
              </div>

              {/* Search Section */}
              <Card className="w-full max-w-md mx-auto">
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Enter place name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <Button onClick={handleSearch} disabled={isLoading}>
                    {isLoading ? 'Searching...' : <Search className="h-4 w-4" />}
                  </Button>
                </div>

                {error && <p className="text-red-500 mt-2">{error}</p>}
                {results.length > 0 && (
                  <div className="mt-4">
                    <ul className="space-y-1">
                      {results.map((place, index) => {
                        console.log(`Place: ${place}`);
                        return (
                          <li key={index} className="bg-secondary  bg-white text-black p-2 rounded">
                            <Link href={`/pages/Destination/${place}`}>{place}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {results.length === 0 && !isLoading && !error && searchTerm && (
                  <p className="mt-2 text-muted-foreground">No results found.</p>
                )}
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Us</h2>
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400 text-sm">



                  About Devbhoomi Yatra
                  At Devbhoomi Yatra, we are dedicated to providing an enriching travel experience in the breathtaking state of Uttarakhand, also known as the "Land of Gods." Our platform offers a comprehensive suite of features designed to enhance your journey, ensuring that you can explore the region with ease and comfort.
                  Key Features:
                  Hotel Reservation: Simply locate and book that perfect accommodation whether it is a luxurious hotel or a small homestay.
                  Local Foods and Restaurants Locator: Enjoy the local dishes by looking at our recommended restaurant for authentic flavors of Uttarakhand.
                  Taxi Services: Convenient taxi reservations are available for seamless transportation throughout your travels.
                  Interactive Maps: To navigate, use our interactive maps featuring famous areas and local attractions, which can help in navigating the breathtaking landscapes and cultural sites.
                  Live Weather Conditions: I can view current weather conditions and assess them to better plan my activities.
                  Emergency Contacts and Safety Assistance: We prioritize your safety by providing real-time emergency contacts and a dedicated safety assistant to assist you during your travels.
                  Homestay and Rural Tourism Experience: Unravel the local culture with unique homestay options and rural tourism experiences, which touch the heart of Uttarakhand.
                  Join us on the Devbhoomi Yatra - an unparalleled journey of spirituality and adventure set amidst the rich heritage of Uttarakhand.
                </p>
                <Button>Learn More About Us</Button>
              </div>
              <Image
                alt="About Wanderlust Travel"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height={300}
                src={demo}
                width={400}
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Popular Places</h2>
            <div className="mb-8">
              <form className="flex space-x-2 max-w-md mx-auto">
                <Input className="flex-1" placeholder="Search places" type="text" />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Eiffel Tower, Paris", image: b2 },
                { name: "Colosseum, Rome", image: b3 },
                { name: "Machu Picchu, Peru", image: b4 },
                { name: "Taj Mahal, India", image: k2 },
                { name: "Great Wall, China", image: k3 },
                { name: "Petra, Jordan", image: k4 },
              ].map((place, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Image
                      alt={place.name}
                      className="aspect-video object-cover rounded-t-lg"
                      height={200}
                      src={place.image}
                      width={300}
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {place.name}
                    </CardTitle>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full text-white">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Hot Deals</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Paris Getaway", price: "$999", duration: "5 days", image: Hotel1},
                { title: "Bali Beach Retreat", price: "$1299", duration: "7 days", image: Hotel2 },
                { title: "Tokyo Adventure", price: "$1499", duration: "6 days", image:  Hotel3},
              ].map((deal, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Image
                      alt={deal.title}
                      className="aspect-video object-cover rounded-t-lg"
                      height={200}
                      src={deal.image}
                      width={300}
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{deal.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center mt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {deal.duration}
                      </div>
                      <div className="flex items-center mt-2">
                        <DollarSign className="h-4 w-4 mr-2" />
                        {deal.price}
                      </div>
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Book Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Latest from Our Blog</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "10 Must-Visit Hidden Gems in Europe", image: h1 },
                { title: "Sustainable Travel: Tips for Eco-Friendly Adventures", image: h2 },
                { title: "Culinary Journeys: Exploring World Cuisines", image: h3 },
              ].map((post, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <Image
                      alt={post.title}
                      className="aspect-video object-cover rounded-t-lg"
                      height={200}
                      src={post.image}
                      width={300}
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{post.title}</CardTitle>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="text-white">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button>
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Wanderlust Travel. All rights reserved.</p>
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

  )
}