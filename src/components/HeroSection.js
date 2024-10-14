import React from "react"
import Navbar from "./Navbar"

const HeroSection = () => {

    return (
        <div>
            <div className="mainImg relative h-[644px bg-center bg-no-repeat bg-[length:max(1200px,100vw)]">
                <Navbar />
                <div className='flex flex-col text-center justify-center items-center text-white h-[80vh]  sm:my-16 xl:my-32 gap-y-3 font-medium'>
                    <div className='text-2xl sm:text-4xl xl:text-6xl'>
                        Adventure awaits, Let's make
                    </div>
                    <div className='text-2xl sm:text-4xl xl:text-5xl'>
                        memories together
                    </div>
                    <div>Find awesome places to visit</div>
                </div>
            </div>

            <div className='w-2/3 bg-blue-400 mx-auto py-8 px-6 my-10 rounded-xl'>
                <div className='bg-white rounded-lg py-4'>
                    <div className='flex justify-around items-center flex-col lg:flex-row gap-y-5 '>
                        <div className='flex items-start gap-x-2 flex-col justify-start w-4/5 lg:flex-row lg:items-center'>
                            <div className='text-blue-800'>Destination : </div>
                            <select name="" id="" className='p-2 w-full lg:w-[300px] border rounded-lg hover:border-blue-400 border-blue-800 text-blue-800'>
                                <option value="Destination">Select Destination</option>
                                <option value="Destination">Select Destination</option>
                                <option value="Destination">Select Destination</option>
                                <option value="Destination">Select Destination</option>
                                <option value="Destination">Select Destination</option>
                                <option value="Destination">Select Destination</option>
                            </select>
                        </div>
                        <div className='w-4/5 lg:w-fit border hover:bg-blue-400 hover:text-white hover:border-blue-400 border-blue-800 text-blue-800 p-2 rounded-xl'>
                            <button type="button">Search Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
