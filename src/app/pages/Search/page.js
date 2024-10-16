'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

// Mock data for search results
const mockData = [
  { id: 1, title: "React Hooks", content: "Learn about React Hooks and how they work." },
  { id: 2, title: "Next.js", content: "Explore the features of Next.js framework." },
  { id: 3, title: "TypeScript", content: "Understand the benefits of using TypeScript in your projects." },
  { id: 4, title: "CSS-in-JS", content: "Discover the advantages of CSS-in-JS solutions." },
  { id: 5, title: "GraphQL", content: "Learn how to use GraphQL for efficient data fetching." },
]

export default function SearchFunctionality() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(mockData)

  useEffect(() => {
    const results = mockData.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  const handleSearch = (e) => {
    e.preventDefault()
    // In a real application, you might want to trigger an API call here
    console.log('Search submitted:', searchTerm)
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <Input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </form>

      <div className="space-y-4">
        {searchResults.length === 0 ? (
          <p className="text-center text-muted-foreground">No results found</p>
        ) : (
          searchResults.map((result) => (
            <Card key={result.id}>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-2">{result.title}</h2>
                <p className="text-muted-foreground">{result.content}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}