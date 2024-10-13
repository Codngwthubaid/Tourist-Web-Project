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
            <div className='w-3/4 border-4 mx-auto flex justify-around items-center p-4 rounded-lg bg-slate-200'>
                <Chooser Name="Famous Places" />
                <Chooser Name="Rivers" />
                <Chooser Name="Temples" />
                <Chooser Name="Monuments" />
                <Chooser Name="Mosque" />
            </div>
            <div className='w-4/5 mx-auto flex justify-around items-center py-5 rounded-lg'>
                <div className='flex flex-col gap-y-3 justify-center items-center'>
                    <MinorCardOfDestination img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" />
                    <MinorCardOfDestination img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" />
                </div>
                <div className='flex flex-col gap-y-3 justify-center items-center'>
                    <MinorCardOfDestination img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" />
                    <MinorCardOfDestination img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" />
                </div>
                <div className='flex flex-col gap-y-3 justify-center items-center'>
                    <MinorCardOfDestination img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" />
                    <MinorCardOfDestination img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" />
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link href="/pages/Destination">
                    <button type="button" className='text-blue-400 hover:bg-blue-400 hover:text-white font-semibold p-3 bg-slate-200 rounded-lg'>Explore More</button>
                </Link>
            </div>
        </div>
    )
}

export default Destination
