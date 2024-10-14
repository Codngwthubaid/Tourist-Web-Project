"use client"
import Link from 'next/link'
import React, { useState } from "react"
import search from "@/public/Img/search.png"
import Image from "next/image"

const Navbar = () => {
  const [isClick, setIsClick] = useState(false)

  const toggleNavbar = () => {
    setIsClick(!isClick)
  }

  return (
    <>
      <nav className="relative z-10 flex items-center justify-evenly h-[100px] mx-auto">
        <div className='text-white text-3xl font-semibold hover:cursor-pointer text-center'>Dehradun<div className='text-blue-800'>Tourism</div></div>
        <div>
          <ul className='hidden xl:flex justify-between items-center gap-x-3'>
            <Link href="/"><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Home</li></Link>
            <Link href="/pages/About"><li className='hover:text-white hover:decoration-blue-600 hover:underline'>About</li></Link>
            <Link href="/pages/Blog"><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Blog</li></Link>
            <Link href="/pages/Contact"><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Contact</li></Link>
            <Link href="/pages/Destination"><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Destination</li></Link>
            <Link href="/pages/Hospital"><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Hospitals</li></Link>
            <Link href="/pages/Hotel"><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Hotels</li></Link>
            <Link href="/pages/Resturants"><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Resturants</li></Link>
            <Link href="/pages/Maps"><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Maps</li></Link>
            <Link href="/pages/AiBot"><li className='hover:text-white hover:decoration-blue-600 hover:underline'>AI-Bot</li></Link>
          </ul>
        </div>
        <div>
          <button className="hidden xl:flex justify-center items-center gap-x-1 px-4 py-2 ml-2 text-white bg-blue-400 hover:bg-blue-600 rounded">
            <div>Book Now</div>
            <div>
              <Image
                src={search}
                width={30}
                alt="Search Img"
              />
            </div>
          </button>
        </div>
        <div className='xl:hidden'>
          <button type="submit" onClick={() => toggleNavbar()}>
            {isClick ? (
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                <g fill="#FFFFFF" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"></path></g></g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                <g fill="#FFFFFF" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(10.66667,10.66667)"><path d="M2,5v2h20v-2zM2,11v2h20v-2zM2,17v2h20v-2z"></path></g></g>
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isClick && (
        <div className='xl:hidden'>
          <ul className='flex justify-between flex-col w-full mainImg text-white text-xl object-fill h-[85vh] items-center gap-x-3'>
            <Link href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Home</li></Link>
            <Link href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>About</li></Link>
            <Link href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Blog</li></Link>
            <Link href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Contact</li></Link>
            <Link href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Destination</li></Link>
            <Link href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Hospitals</li></Link>
            <Link href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Hotels</li></Link>
            <Link href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Resturants</li></Link>
            <Link href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Maps</li></Link>
            <Link href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>AI-Bot</li></Link>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
