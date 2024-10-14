import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import fb from "@/public/Img/fb.png"
import insta from "@/public/Img/insta.png"


const Footer = () => {
  return (
    <div>
      <div className='bg-blue-800 px-20 pt-32 pb-10 flex justify-evenly text-white'>
        <div>Need any help</div>
        <div>
          <div>Call 24/7 for any help</div>
          <div className='text-blue-400'>+00 123 456 789</div>
        </div>
        <div>
          <div>Mail to our support team</div>
          <div className='text-blue-400'>dehraduntourism@gmail.com</div>
        </div>
        <div>
          <div>Follow us on</div>
          <div className='flex gap-x-1'>
            <div>
              <Link href="">
              <Image 
              className='w-6'
              src={fb}
              alt='Facebook Img'/>
              </Link>
            </div>
            <div>
              <Link href="">
              <Image 
              className='w-6'
              src={insta}
              alt='Instagram Img'/>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
