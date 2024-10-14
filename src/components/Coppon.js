import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CopponImg from "@/public/Img/CopponImg.jpg"
const Coppon = () => {
    return (
        <div>
            <div className='bg-slate-800 h-[70vh] flex justify-center items-center mb-20'>
                <div className="CopponImg rounded-xl relative h-[644px bg-center bg-no-repeat bg-[length:max(1200px,100vw)] ">
                    <div className='flex text-white gap-y-3 flex-col justify-center items-center h-full'>
                        <div className=' text-4xl font-semibold'>Ready To Enjoy Your Holidays With Us</div>
                        <div className='flex gap-x-3 justify-center items-center'>
                            <div className='text-lg '>Up To</div>
                            <div className='text-5xl  font-bold'>50%</div>
                            <div className='text-lg '>Off</div>
                        </div>
                        <div className='text-2xl'>On Holidays Packages</div>
                        <div><button className='font-semibold text-lg py-2 px-3 border-2 border-blue-500 rounded-xl bg-blue-500 hover:bg-blue-800'>Contact  Us Now</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coppon
