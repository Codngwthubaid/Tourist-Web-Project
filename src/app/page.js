"use client"
// import HeroSection from "@/components/HeroSection";
// import Destination from "@/components/Destination";
// import HotDeals from "@/components/HotDeals";
// import AboutShorter from "@/components/AboutShorter";
// import Coppon from "@/components/Coppon";
// import PopularTour from "@/components/PopularTour";
// import BlogPost from "@/components/BlogPost";
// import SubMail from "@/components/SubMail";


// export default function Home() {
//   return (
//     <>
      {/* <main className='container mx-auto'>
        <article>
          <section>
            <HeroSection />
          </section>
          <section>
            <Destination />
          </section>
          <section>
            <HotDeals />
          </section>
          <section>
            <AboutShorter />
          </section>
          <section>
            <Coppon/>
          </section>
          <section>
            <PopularTour/>
          </section>
          <section>
            <BlogPost/>
          </section>
          <section>
            <SubMail/>
          </section>
        </article>
      </main> */}
//     </>
//   );
// }


import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Plane, Search, MapPin, Calendar, DollarSign, ArrowRight, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "Destinations" },
    { href: "#", label: "About" },
    { href: "#", label: "Hospitals" },
    { href: "#", label: "Hotels" },
    { href: "#", label: "Resturants" },
    { href: "#", label: "Maps" },
    { href: "#", label: "Ai-Bot" },
  ]

  return (
    <div className="flex flex-col min-h-screen ">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Plane className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Wanderlust Travel</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          {navLinks.map((link, index) => (
            <Link key={index} className="text-sm font-medium hover:underline underline-offset-4" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus:ring-0 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center" style={{backgroundImage: 'url("/placeholder.svg?height=600&width=1200")'}}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                  Discover Your Next Adventure
                </h1>
                <p className="mx-auto max-w-[700px] text-black md:text-xl">
                  Explore breathtaking destinations around the world and create unforgettable memories.</p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Search destinations" type="text" />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Us</h2>
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  Wanderlust Travel is your gateway to extraordinary adventures. With over a decade of experience, we specialize in crafting unforgettable journeys tailored to your desires. Our expert team is dedicated to providing personalized service, ensuring every aspect of your trip exceeds expectations.
                </p>
                <Button>Learn More About Us</Button>
              </div>
              <Image
                alt="About Wanderlust Travel"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height={300}
                src="/placeholder.svg?height=300&width=400"
                width={400}
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Hot Deals</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Paris Getaway", price: "$999", duration: "5 days", image: "/placeholder.svg?height=200&width=300" },
                { title: "Bali Beach Retreat", price: "$1299", duration: "7 days", image: "/placeholder.svg?height=200&width=300" },
                { title: "Tokyo Adventure", price: "$1499", duration: "6 days", image: "/placeholder.svg?height=200&width=300" },
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

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Latest from Our Blog</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "10 Must-Visit Hidden Gems in Europe", image: "/placeholder.svg?height=200&width=300" },
                { title: "Sustainable Travel: Tips for Eco-Friendly Adventures", image: "/placeholder.svg?height=200&width=300" },
                { title: "Culinary Journeys: Exploring World Cuisines", image: "/placeholder.svg?height=200&width=300" },
              ].map((post, index) => (
                <Card key={index}>
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
                    <Button variant="outline">Read More</Button>
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
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
                { name: "Eiffel Tower, Paris", image: "/placeholder.svg?height=200&width=300" },
                { name: "Colosseum, Rome", image: "/placeholder.svg?height=200&width=300" },
                { name: "Machu Picchu, Peru", image: "/placeholder.svg?height=200&width=300" },
                { name: "Taj Mahal, India", image: "/placeholder.svg?height=200&width=300" },
                { name: "Great Wall, China", image: "/placeholder.svg?height=200&width=300" },
                { name: "Petra, Jordan", image: "/placeholder.svg?height=200&width=300" },
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
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
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