import React from 'react'
import MinorTitle from './MinorTitle'
import MinorCardForAll from './MinorCardForAll'
import demo from "@/public/Img/demo.jpg"

const PopularTour = () => {
  return (
    <div>
      <MinorTitle unboldData="Our Best" boldData="POPULAR TOURS" />
      <div className='w-4/5 my-6 mx-auto flex justify-around items-center py-5 rounded-lg'>
        <div className='flex flex-col gap-y-3 justify-center items-center'>
          <MinorCardForAll img={demo} alt="Dehradun Zoo" title="Dehradun Zoo" amount="1000" />
        </div>
        <div className='flex flex-col gap-y-3 justify-center items-center'>
          <MinorCardForAll img={demo} alt="Dehradun Zoo" title="Dehradun Zoo" amount="1000" />
        </div>
        <div className='flex flex-col gap-y-3 justify-center items-center'>
          <MinorCardForAll img={demo} alt="Dehradun Zoo" title="Dehradun Zoo" amount="1000" />
        </div>
        <div className='flex flex-col gap-y-3 justify-center items-center'>
          <MinorCardForAll img={demo} alt="Dehradun Zoo" title="Dehradun Zoo" amount="1000" />
        </div>
      </div>
    </div>
  )
}

export default PopularTour
