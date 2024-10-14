import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"


const page = () => {
  return (
    <div>
      <div className='AboutImg mb-20 relative h-[644px bg-center bg-no-repeat bg-[length:max(1200px,100vw)]'>
        <div className='flex justify-center items-center flex-col h-[60vh] gap-y-1'>
          <div className='text-5xl text-blue-600 font-semibold'>About Us</div>
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className='text-base text-white' href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white" />
                <BreadcrumbItem>
                  <BreadcrumbPage className='text-white text-base'>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Wanderlust Adventures</h1>
          <p className="text-xl text-muted-foreground">
            Discover the world with us - your gateway to unforgettable journeys and cultural experiences.
          </p>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At Wanderlust Adventures, we're passionate about creating transformative travel experiences that broaden
                horizons, foster cultural understanding, and create lasting memories. Our mission is to connect travelers
                with authentic local experiences while promoting sustainable and responsible tourism practices.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Jane Doe", role: "Founder & CEO", image: "/placeholder.svg?height=100&width=100" },
              { name: "John Smith", role: "Head of Operations", image: "/placeholder.svg?height=100&width=100" },
              { name: "Emily Brown", role: "Chief Experience Officer", image: "/placeholder.svg?height=100&width=100" },
            ].map((member) => (
              <Card key={member.name}>
                <CardHeader>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Expert Local Guides", icon: MapPin, description: "Our guides know the hidden gems of every destination." },
              { title: "Small Group Sizes", icon: Users, description: "Enjoy a more personalized experience with like-minded travelers." },
              { title: "20+ Years of Experience", icon: Calendar, description: "Two decades of crafting unforgettable journeys." },
            ].map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Adventure?</h2>
          <p className="mb-6">
            Join us on a journey of discovery and create memories that will last a lifetime.
          </p>
          <Button>
            Explore Our Tours <ArrowRight className="ml-2" />
          </Button>
        </section>
      </div>
    </div>
  )
}

export default page
