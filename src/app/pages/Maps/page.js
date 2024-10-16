// "use client"
// import { useState, useEffect } from 'react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Loader2, MapPin, Compass } from "lucide-react"
// import Link from "next/link"

// // Note: Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key
// const map_key =  process.env.GOOGLE_MAPS_API_KEY

// export default function MapPage() {
//   const [location, setLocation] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [map, setMap] = useState(null)
//   const [marker, setMarker] = useState(null)

//   useEffect(() => {
//     const script = document.createElement('script')
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${map_key}`
//     script.async = true
//     script.onload = initMap
//     document.body.appendChild(script)

//     return () => {
//       document.body.removeChild(script)
//     }
//   }, [])

//   const initMap = () => {
//     const mapElement = document.getElementById('map')
//     if (mapElement) {
//       const initialMap = new window.google.maps.Map(mapElement, {
//         center: { lat: 0, lng: 0 },
//         zoom: 2,
//       })
//       setMap(initialMap)
//     }
//   }

//   const getCurrentLocation = () => {
//     setLoading(true)
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords
//           setLocation({ lat: latitude, lng: longitude })
//           if (map) {
//             map.setCenter({ lat: latitude, lng: longitude })
//             map.setZoom(15)
//             if (marker) {
//               marker.setMap(null)
//             }
//             const newMarker = new window.google.maps.Marker({
//               position: { lat: latitude, lng: longitude },
//               map: map,
//               title: 'Your Location',
//             })
//             setMarker(newMarker)
//           }
//           setLoading(false)
//         },
//         (error) => {
//           console.error('Error getting location:', error)
//           setLoading(false)
//         }
//       )
//     } else {
//       console.error('Geolocation is not supported by this browser.')
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
//               Find Your Location
//             </h1>
//             <div className="flex flex-col gap-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Your Current Location</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <Button onClick={getCurrentLocation} disabled={loading} className="w-full mb-4">
//                     {loading ? (
//                       <>
//                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                         Getting Location...
//                       </>
//                     ) : (
//                       <>
//                         <MapPin className="mr-2 h-4 w-4" />
//                         Find My Location
//                       </>
//                     )}
//                   </Button>
//                   {location && (
//                     <p className="text-sm text-gray-500">
//                       Latitude: {location.lat.toFixed(6)}, Longitude: {location.lng.toFixed(6)}
//                     </p>
//                   )}
//                 </CardContent>
//               </Card>
//               <div className="w-full h-[500px] rounded-lg shadow-md overflow-hidden">
//                 <div id="map" className="w-full h-full"></div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Wanderlust Explorer. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }
// pages/index.js
// import Head from 'next/head';
// import useGoogleMap from "@/components/useGoogleMap";

// function Home() {
//   const { mapContainer } = useGoogleMap();

//   return (
//     <div>
//       <Head>
//         <title>Google Maps Integration By Vaibhav</title>
//         <link rel="stylesheet" href="styles.css" />
//       </Head>
//       <div id="map" ref={mapContainer}></div>
//     </div>
//   );
// }

// export default Home;


// 'use client'
// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const centre = {
//   lat: 37.437041393899676,
//   lng: -4.191635586788259
// };

// const locations = [
//   { lat: 37.437041393899676, lng: -4.191635586788259 },
//   { lat: 37.440575591901045, lng: -4.231433159434073 },
//   // Add more locations here
// ];

// const MultipleMarkersMap = () => {
//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         centre={centre}
//         zoom={10}
//       >
//         {locations.map((location, index) => (
//           <Marker key={index} position={location} />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MultipleMarkersMap;


"use client";
import {
  //CircleF,
  GoogleMap,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { useMemo, useState } from "react";
import PlacesAutocomplete from "@/components/PlacesAutocomplete";
import { getGeocode, getLatLng } from "use-places-autocomplete";

const DEFAULT_LOCATION = { lat: 37.98, lng: 23.72 };

export default function Home() {
  const [lat, setLat] = useState(DEFAULT_LOCATION.lat);
  const [lng, setLng] = useState(DEFAULT_LOCATION.lng);

  const libraries = useMemo(() => ["places"], []);
  // This gives coordinates for the center of the map
  const mapCenter = useMemo(() => ({ lat, lng }), [lat, lng]);

  let mapOptions;
  if (!mapOptions) {
    mapOptions = {
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    };
  }
  // This loads the google maps script into our application
  const { isLoaded } = useLoadScript({
    // your API key will be publicly exposed, so be sure to apply HTTP restrictions on the Google Cloud console
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    // This specifies the google maps libraries that we want to load (e.g. we could add drawing, geometry, places etc)
    libraries: libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex justify-center align-center">
      <div className="border border-r-gray-400 w-1/4 h-screen bg-gray-200">
        <PlacesAutocomplete
          onAddressSelect={(address) => {
            getGeocode({ address }).then((results) => {
              const { lat, lng } = getLatLng(results[0]);

              setLat(lat);
              setLng(lng);
            });
          }}
        />
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerClassName="w-3/4"
        mapContainerStyle={{ width: "800px", height: "800px" }}
        onLoad={() => console.log("Map component loaded")}
      >
        {/* This draws a marker over the map
          position prop specifies the lat + long of where to place ther marker
        */}
        <MarkerF
          position={mapCenter}
          onLoad={() => console.log("Marker loaded")}
          />
        {/* you can also change the icon of the marker 
        icon="https://picsum.photos/64" */}
        {/* we can also draw circles around the map */}
        {/* {[1000, 2500].map((radius, idx) => {
          return (
            <CircleF
              key={idx}
              center={mapCenter}
              radius={radius}
              onLoad={() => console.log("Circle Load...")}
              options={{
                fillColor: radius > 1000 ? "red" : "green",
                strokeColor: radius > 1000 ? "red" : "green",
                strokeOpacity: 0.8,
              }}
            />
          );
        })} */}
      </GoogleMap>
    </main>
  );
}