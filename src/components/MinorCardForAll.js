import React from 'react'
import Image from 'next/image'

const MinorCardForAll = (props) => {
    return (
        <div>
            <div className='w-9/12 mx-auto lg:w-[18vw] border-2 flex flex-col justify-start items-start gap-x-3 rounded-lg'>
                <div>
                    <Image
                        className='rounded-tl-lg rounded-tr-lg'
                        src={props.img}
                        alt={props.alt} />
                </div>
                <div>
                    <div className='flex justify-evenly items-center w-[18vw]'>
                        <div>{props.title}</div>
                        <div>{props.amount}/night</div>
                    </div>
                    <div className='px-4 text-sm text-blue-400 hover:cursor-pointer'>Read more</div>
                </div>
            </div>
        </div>
    )
}

export default MinorCardForAll
