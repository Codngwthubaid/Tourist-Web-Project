import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CopponImg from "@/public/Img/CopponImg.jpg"
const Coppon = () => {
    return (
        <div>
            <div className='bg-slate-200 h-[60vh]'>
                <div className="mainImg relative h-[644px bg-center bg-no-repeat bg-[length:max(1200px,100vw)]">
                    {/* <Image
                        className='w-4/5 h-[50vh] object-cover'
                        src={CopponImg}
                        alt='' /> */}
                </div>
            </div>
        </div>
    )
}

export default Coppon
