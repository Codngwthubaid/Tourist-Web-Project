"use client"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, MapPin, Compass } from "lucide-react"
import Link from "next/link"

// Note: Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key
const map_key =  process.env.GOOGLE_MAPS_API_KEY

export default function MapPage() {
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [map, setMap] = useState(null)
  const [marker, setMarker] = useState(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${map_key}`
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
        zoom: 2,
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
            map.setZoom(15)
            if (marker) {
              marker.setMap(null)
            }
            const newMarker = new window.google.maps.Marker({
              position: { lat: latitude, lng: longitude },
              map: map,
              title: 'Your Location',
            })
            setMarker(newMarker)
          }
          setLoading(false)
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

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Compass className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Wanderlust Explorer</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Map
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Find Your Location
            </h1>
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Current Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button onClick={getCurrentLocation} disabled={loading} className="w-full mb-4">
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Getting Location...
                      </>
                    ) : (
                      <>
                        <MapPin className="mr-2 h-4 w-4" />
                        Find My Location
                      </>
                    )}
                  </Button>
                  {location && (
                    <p className="text-sm text-gray-500">
                      Latitude: {location.lat.toFixed(6)}, Longitude: {location.lng.toFixed(6)}
                    </p>
                  )}
                </CardContent>
              </Card>
              <div className="w-full h-[500px] rounded-lg shadow-md overflow-hidden">
                <div id="map" className="w-full h-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Wanderlust Explorer. All rights reserved.</p>
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