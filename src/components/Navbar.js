"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import MainLogo from "@/public/Img/MainLogo.png"
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pages/Destination", label: "Destinations" },
    { href: "/pages/Hospital", label: "Hospitals" },
    { href: "/pages/Resturants", label: "Resturants" },
    { href: "/pages/Hotel", label: "Hotels" },
    { href: "/pages/Maps", label: "Maps" },
    { href: "/pages/AiBot", label: "Ai-Bot" },
  ]

  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Image 
          className='w-16'
          src={MainLogo}
          alt="MainLogo"
          />
          <span className="ml-2 text-2xl font-bold">Devbhumi Yatra</span>
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
    </>
  )
}

