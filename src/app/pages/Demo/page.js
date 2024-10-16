'use client'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from 'react'
import { wrap } from "popmotion"

const images = [
  "https://picsum.photos/id/1018/1920/1080",
  "https://picsum.photos/id/1015/1920/1080",
  "https://picsum.photos/id/1019/1920/1080",
]

export default function FullHeightInfiniteCycleCarousel() {
  const [[page, direction], setPage] = useState([0, 0])
  const [api, setApi] = useState()

  const imageIndex = wrap(0, images.length, page)

  const paginate = useCallback((newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection])
  }, [])

  useEffect(() => {
    if (!api) return
    api.scrollTo(imageIndex)
  }, [api, imageIndex])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((src, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <Card className="w-full h-full border-0">
                <CardContent className="p-0 w-full h-full relative">
                  <Image
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                    sizes="100vw"
                    // style={{
                    //   width: '100%',
                    //   height: '100vh',
                    // }}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="absolute inset-x-0 bottom-4 flex justify-center z-10">
        <div className="flex items-center space-x-2 bg-white bg-opacity-50 rounded-full p-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 transition-all duration-300 ease-in-out ${
                index === imageIndex ? 'bg-primary w-8' : 'bg-muted w-4'
              }`}
            />
          ))}
        </div>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 text-primary hover:bg-white hover:bg-opacity-75 z-10"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 text-primary hover:bg-white hover:bg-opacity-75 z-10"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}