import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import original from "@/public/Img/original.jpg"
import Zeeshan from "@/public/Img/Zeeshan.jpg"
import Arun from "@/public/Img/Arun.jpg"

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Devbhumi Yatra</h1>
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
              { name: "Mohammad Ubaid Ansari", role: "Founder & CEO", image: original},
              { name: "Arun Kumar", role: "Head of Operations", image: Arun},
              { name: "Zishan Malik", role: "Chief Experience Officer", image: Zeeshan},
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
