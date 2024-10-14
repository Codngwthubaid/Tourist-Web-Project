import React from 'react'

const SubMail = () => {
    return (
        <div>
            <div className='w-4/5 bg-slate-200 text-blue-800 flex sm:flex-row flex-col justify-between lg:justify-evenly lg:items-center mx-auto py-14 px-8 rounded-lg relative top-20'>
                <div className=' text-2xl font-semibold'>Get the latest news and offers</div>
                <div className='flex lg:flex-row flex-col gap-3'>
                <div><input className='p-2' type="text" placeholder='Enter Email' /></div>
                <div><button type="button" className='py-2 px-4 bg-blue-500 rounded-lg text-white'>Contact Us Now</button></div>
                </div>
            </div>
        </div>
    )
}

export default SubMail
