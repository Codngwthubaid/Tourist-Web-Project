import React from 'react'
import DehradunZoo from "@/public/Img/DehradunZoo.jpg"
import Link from 'next/link'
import Chooser from './Chooser'
import MinorCardOfDestination from './MinorCardOfDestination'
import MinorTitle from './MinorTitle'

const Destination = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <div>
               <MinorTitle unboldData="Destination" boldData="FOR YOU"/>
            </div>
            <div className='w-11/12 sm:w-3/4 mx-auto flex justify-around items-center p-4 rounded-lg bg-slate-200'>
                <Chooser Name="Rivers" />
                <Chooser Name="Temples" />
                <Chooser Name="Monuments" />
                <Chooser Name="Mosque" />
            </div>
            <div className='w-full flex flex-col gap-5 justify-center items-center py-5 rounded-lg'>
                <div className='flex flex-col lg:flex-row gap-3 justify-center items-center'>
                    <MinorCardOfDestination img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" />
                    <MinorCardOfDestination img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" />
                    <MinorCardOfDestination img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" />
                </div>
                <div className='flex flex-col lg:flex-row gap-3 justify-center items-center'>
                    <MinorCardOfDestination img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" />
                    <MinorCardOfDestination img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" />
                    <MinorCardOfDestination img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" />
                </div>
            </div>
            <div className='flex justify-center items-center mb-20'>
                <Link href="/pages/Destination">
                    <button type="button" className='text-white bg-blue-600 hover:bg-blue-800 hover:text-white font-semibold p-3 rounded-lg text-lg'>Explore More</button>
                </Link>
            </div>
        </div>
    )
}

export default Destination
