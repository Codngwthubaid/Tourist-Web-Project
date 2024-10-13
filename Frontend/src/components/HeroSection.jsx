import React from 'react'
import search from "../Img/search.png"
import '../App.css'

const HeroSection = () => {
    return (
        <div className='mainImg'>
            <div className="mainImg relative h-[644px bg-center bg-no-repeat bg-[length:max(1200px,100vw)]">
                <div className="absolute inset-0 opacity-69"></div>
                <nav className="relative z-10 flex items-center justify-evenly h-[100px] mx-auto">
                    <div className='text-white text-3xl font-semibold hover:cursor-pointer'>Dehradun<span className='text-blue-800'>Tour</span>ism</div>
                    <div>
                        <ul className='flex justify-between items-center gap-x-5 '>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Home</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>About</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Blog</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Contact</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Destination</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Hospitals</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Hotels</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Resturants</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Maps</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>AI-Bot</li></a>
                        </ul>
                    </div>
                    <div>
                        <button className="flex justify-center items-center gap-x-1 px-4 py-2 ml-2 text-white bg-blue-400 hover:bg-blue-600 rounded">
                            <div>Book Now</div>
                            <div>
                                <img src={search} width={30} alt="Search Img" />
                            </div>
                        </button>
                    </div>
                </nav>
                <div className='flex flex-col justify-center items-center text-white h-96 gap-y-3 font-medium'>
                    <div className='text-6xl'>
                        Adventure awaits, Let's make
                    </div>
                    <div className='text-5xl'>
                        memories together
                    </div>
                    <div>
                        <a href="pages/Destination" className="mt-1 hover:cursor-pointer bg-blue-400 p-1 rounded-xl">Find awesome places to visit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
