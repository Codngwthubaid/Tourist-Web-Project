"use client"
import "./globals.css"
import {Calendar, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
import Hotel1 from "@/public/Img/Hotel1.jpg"
import Hotel2 from "@/public/Img/Hotel2.jpg"
import Hotel3 from "@/public/Img/Hotel3.jpg"
import b2 from "@/public/Img/b2.jpg"
import m5 from "@/public/Img/m5.jpg"
import k2 from "@/public/Img/k2.jpg"
import m2 from "@/public/Img/m2.jpg"
import m3 from "@/public/Img/m3.jpg"
import k4 from "@/public/Img/k4.jpg"

// Mock function to simulate API call
const searchPlaces = async (query) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Mock data
  const places = [
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
 

        {/* Adding code */}

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
        <main>
          <section id="home">
            <div class="container">
              <div class="carousel-container">
                <div class="carousel-slide fade">
                  <Image src={m2} alt="Image 1" width={200} height={200}/>
                    <div class="carousel-text">Auli</div>
                </div>
                <div class="carousel-slide fade">
                  <Image src={m2} alt="Image 2" width={200} height={200}/>
                    <div class="carousel-text">Tehri Dam</div>
                </div>
                <div class="carousel-slide fade">
                  <Image src={m2} alt="Image 3" width={200} height={200}/>
                    <div class="carousel-text">Vasuki Tal</div>
                </div>

                {/* <!-- Navigation Arrows --> */}
                <div class="nav-arrows">
                  <button class="arrow left" onclick="changeSlide(-1)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l14 0" />
                      <path d="M5 12l4 4" />
                      <path d="M5 12l4 -4" />
                    </svg>
                  </button>
                  <button class="arrow right" onclick="changeSlide(1)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l14 0" />
                      <path d="M15 16l4 -4" />
                      <path d="M15 8l4 4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div class="about container-fluid">
            <h2 class="heading">About Uttrakhand</h2>
            <div class="row">
              <div class="col-5">
                <Image src={m2} class="hero-Image" srcset="" width={200} height={200}/>
              </div>

              <div class="col-7">
                <p class="hero-text">Paradise for nature lovers and adventure enthusiasts. Nestled in the Himalayas,
                  this state offers a perfect blend of spiritual and natural experiences. The holy towns of
                  Rishikesh and Haridwar draw pilgrims seeking peace along the Ganges, while scenic <span>hill
                    stations</span> like Nainital and Mussoorie offer breathtaking vistas and serene lakes. For
                  trekkers and adventure seekers, places like Auli and Chopta provide thrilling hikes and skiing
                  opportunities amidst <span>snow-capped peaks</span>. Wildlife lovers can explore the famous Jim
                  Corbett National Park, home to Bengal tigers and rich biodiversity. With its <span>diverse
                    landscape</span> and spiritual heritage, Uttarakhand promises a rejuvenating and
                  exhilarating escape from urban life.</p>
              </div>
            </div>

            <div class="row">
              <div class="col-6 col-md-12">
                <div class="about-panel panel-large panel-left">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 8h.01" />
                      <path d="M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5" />
                      <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l1.5 1.5" />
                      <path
                        d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
                    </svg>
                  </button>
                  <h3>Heart Warming Scenarios you have ever seen.</h3>
                  <p>Experience the elegance of our Light Mode, designed to offer a clean and bright interface.
                    Enjoy a visually pleasing and distraction-free environment.</p>
                  <Image src={m2} width={200} height={200} alt="" class="responsiv-Image" />
                </div>
              </div>
              <div class="col-6 col-md-12">
                <div class="about-panel panel-large panel-right">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                      <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                      <path d="M19 11h2m-1 -1v2" />
                    </svg>
                  </button>
                  <h3>A Sleek and Modern Look for Comfortable Viewing</h3>
                  <p>Discover the sophistication of our Dark Mode, crafted to provide a sleek and modern look.
                    Perfect for low-light settings, and engaging appearance.</p>
                  <Image src={m2} width={200} height={200} alt="" class="responsiv-Image" />
                </div>
              </div>
            </div>
          </div>

          <h2 class="heading">Discover Destinations</h2>
          <div class="scrolling-wrapper">
            <div class="card">
              <Image src={m2} width={200} height={200} alt="Image 1" />
                <h2 class="card-title">Auli</h2>
            </div>
            <div class="card">
              <Image src={m2} width={200} height={200} alt="Image 2" />
                <h2 class="card-title">Chamba</h2>
            </div>
            <div class="card">
              <Image src={m2} width={200} height={200} alt="Image 3" />
                <h2 class="card-title">Almora</h2>
            </div>
            <div class="card">
              <Image src={m2} width={200} height={200} alt="Image 4" />
                <h2 class="card-title">Vasuki Tal</h2>
            </div>
            <div class="card">
              <Image src={m2} width={200} height={200} alt="Image 4" />
                <h2 class="card-title">Pauri Garhwal</h2>
            </div>
          </div>
        </main>


















        {/* Regional Places */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Popular Regional Places</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {/* Paris Getaway Card */}
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={k2}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Temple</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Bali Beach Retreat Card */}
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={m2}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Temple</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Tokyo Adventure Card */}
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={k2}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Temple</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={k4}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Temple</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={k2}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Temple</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={m5}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Temple</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinational Places */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Popular Destinational Places</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Paris Getaway Card */}
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={m3}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Temple</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Bali Beach Retreat Card */}
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={m2}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Temple</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Tokyo Adventure Card */}
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={k4}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Temple</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={k2}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Temple</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={k4}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Temple</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Hot Deals</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {/* Paris Getaway Card */}
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Paris Getaway"
                  className="aspect-video object-cover rounded-t-lg"
                  src={Hotel1}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Paris Getaway</h3>
                  <div className="flex items-center mt-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>5 days</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>$999</span>
                  </div>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Bali Beach Retreat Card */}
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Bali Beach Retreat"
                  className="aspect-video object-cover rounded-t-lg"
                  src={Hotel2}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Bali Beach Retreat</h3>
                  <div className="flex items-center mt-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>7 days</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>$1299</span>
                  </div>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Tokyo Adventure Card */}
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Tokyo Adventure"
                  className="aspect-video object-cover rounded-t-lg"
                  src={Hotel3}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Tokyo Adventure</h3>
                  <div className="flex items-center mt-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>6 days</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>$1499</span>
                  </div>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Popular Blogs</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Paris Getaway Card */}
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={k2}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Regional Places</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Bali Beach Retreat Card */}
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={m5}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Destinational Places</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Tokyo Adventure Card */}
              <div className="bg-white rounded-lg shadow-md">
                <Image
                  alt="Temple"
                  className="aspect-video object-cover rounded-t-lg"
                  src={b2}
                  height={200}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">Temple</h3>
                </div>
                <div className="p-4">
                  <Link href="/pages/Hotel">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
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
