import React from 'react'
import MinorTitle from './MinorTitle'
import Chooser from './Chooser'
import DehradunZoo from "@/public/Img/DehradunZoo.jpg"
import MinorCardForAll from './MinorCardForAll'
import Link from 'next/link'

const HotDeals = () => {
  return (
    <div className='flex flex-col gap-y-5'>
      <div>
        <MinorTitle unboldData="Explore Our" boldData="HOT DEALS" />
      </div>
      <div className='w-3/4 border-4 mx-auto flex justify-around items-center p-4 rounded-lg bg-slate-200'>
        <Chooser Name="5% Off" />
        <Chooser Name="10% off" />
        <Chooser Name="15% Off" />
        <Chooser Name="20% Off" />
        <Chooser Name="25% Off" />
      </div>
      <div className='w-4/5  mx-auto flex justify-around items-center py-5 rounded-lg'>
        <div className='flex flex-col gap-y-3 justify-center items-center'>
          <MinorCardForAll img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" amount="1000"/>
        </div>
        <div className='flex flex-col gap-y-3 justify-center items-center'>
          <MinorCardForAll img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" amount="1000"/>
        </div>
        <div className='flex flex-col gap-y-3 justify-center items-center'>
          <MinorCardForAll img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" amount="1000"/>
        </div>
        <div className='flex flex-col gap-y-3 justify-center items-center'>
          <MinorCardForAll img={DehradunZoo} alt="Dehradun Zoo" title="Dehradun Zoo" amount="1000"/>
        </div>
      </div>
      <div className='flex justify-center items-center'>
                <Link href="/pages/Destination">
                    <button type="button" className='text-blue-400 hover:bg-blue-400 hover:text-white font-semibold p-3 bg-slate-200 rounded-lg'>Contact Us</button>
                </Link>
            </div>
    </div>
  )
}

export default HotDeals
