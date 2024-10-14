// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       Im hotels
//     </div>
//   )
// }

// export default page

'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, MapPin, Star, Wifi, Coffee, Parking } from "lucide-react"
import Link from "next/link"

// Note: Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = "AIzaSyAJaP5CGp_Igz2l_c8j6L2I8p0JKaTJmrQ"

export default function NearbyHotelsPage() {
  const [location, setLocation] = useState(null)
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(false)
  const [map, setMap] = useState(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`
    script.async = true
    script.onload = initMap
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const initMap = () => {
    const mapElement = document.getElementById('map')
    if (mapElement) {
      const initialMap = new window.google.maps.Map(mapElement, {
        center: { lat: 0, lng: 0 },
        zoom: 13,
      })
      setMap(initialMap)
    }
  }

  const getCurrentLocation = () => {
    setLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocation({ lat: latitude, lng: longitude })
          if (map) {
            map.setCenter({ lat: latitude, lng: longitude })
          }
          searchNearbyHotels({ lat: latitude, lng: longitude })
        },
        (error) => {
          console.error('Error getting location:', error)
          setLoading(false)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
      setLoading(false)
    }
  }

  const searchNearbyHotels = (location) => {
    if (window.google && map) {
      const service = new window.google.maps.places.PlacesService(map)
      const request = {
        location: location,
        radius: 5000,
        type: 'lodging'
      }

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setHotels(results)
          results.forEach((place) => {
            new window.google.maps.Marker({
              position: place.geometry.location,
              map: map,
              title: place.name,
            })
          })
        }
        setLoading(false)
      })
    }
  }

  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      )
    }
    return stars
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <MapPin className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Wanderlust Travel</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Nearby Hotels
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Find Nearby Hotels
            </h1>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3 space-y-4">
                <Button onClick={getCurrentLocation} disabled={loading} className="w-full">
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Finding Hotels...
                    </>
                  ) : (
                    'Find Hotels Near Me'
                  )}
                </Button>
                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {hotels.map((hotel, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          {hotel.name}
                          <div className="flex">{renderStars(hotel.rating)}</div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500 flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {hotel.vicinity}
                        </p>
                        {hotel.rating && (
                          <p className="text-sm text-gray-500 mt-2">Rating: {hotel.rating} / 5</p>
                        )}
                        <div className="flex mt-2 space-x-2">
                          {hotel.types.includes('lodging') && <Wifi className="h-4 w-4 text-blue-500" />}
                          {hotel.types.includes('restaurant') && <Coffee className="h-4 w-4 text-green-500" />}
                          {hotel.types.includes('parking') && <Parking className="h-4 w-4 text-red-500" />}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="lg:w-2/3">
                <div id="map" className="w-full h-[600px] rounded-lg shadow-md"></div>
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