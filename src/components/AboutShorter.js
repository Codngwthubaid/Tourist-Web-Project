import React from 'react'
import Image from 'next/image'
import DehradunSpecialFirst from "@/public/Img/DehradunSpecialFirst.avif"
import DehradunSpecialSecond from "@/public/Img/DehradunSpecialSecond.avif"
import DehradunSpecialThird from "@/public/Img/DehradunSpecialThird.avif"

const AboutShorter = () => {
    return (
        <div>
            <div className="flex justify-evenly items-center mb-20 lg:flex-row flex-col gap-y-5">
                <div className="flex flex-col items-center lg:items-start justify-center">
                    <div className="text-4xl">We are Professinal</div>
                    <div className="text-2xl font-bold text-blue-800">Planners For You</div>                
                    <div>Discover your ideals experience with us</div>
                    <div className="text-blue-800 hover:underline hover:cursor-pointer">View More</div>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 items-center justify-center gap-x-5">
                    <div>
                        <Image
                            className="w-full sm:w-[250px] rounded-xl"
                            src={DehradunSpecialFirst}
                            alt="DehradunSpecialFirstImg" />
                    </div>
                    <div>
                        <Image
                            className="w-full sm:w-[250px]  rounded-xl"
                            src={DehradunSpecialSecond}
                            alt="DehradunSpecialSecondImg" />
                    </div>
                    <div className='hidden sm:block'>
                        <Image
                            className="w-7/12 sm:w-[250px]  rounded-xl"
                            src={DehradunSpecialThird}
                            alt="DehradunSpecialThirdImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutShorter
