import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from 'lucide-react'

const page = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Hidden Gems in Southeast Asia",
      excerpt: "Discover lesser-known destinations that will take your breath away...",
      date: "2023-05-15",
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "Destinations"
    },
    {
      id: 2,
      title: "Sustainable Travel: How to Minimize Your Carbon Footprint",
      excerpt: "Learn eco-friendly travel tips that help preserve the places we love...",
      date: "2023-06-02",
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "Travel Tips"
    },
    {
      id: 3,
      title: "The Art of Packing Light: A Minimalist's Guide",
      excerpt: "Master the skill of efficient packing for your next adventure...",
      date: "2023-06-20",
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "Travel Tips"
    },
    {
      id: 4,
      title: "Culinary Journey: Street Food Delights Around the World",
      excerpt: "Embark on a gastronomic adventure through the world's best street food scenes...",
      date: "2023-07-08",
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "Food & Culture"
    },
  ]


  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Wanderlust Adventures Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <Badge className="mb-2">{post.category}</Badge>
                <CardTitle className="text-xl mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-4">Stay updated with our latest travel tips, destination guides, and exclusive offers!</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-md px-4 py-2 w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page
