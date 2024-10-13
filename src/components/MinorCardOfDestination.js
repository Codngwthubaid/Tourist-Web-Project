import React from 'react'
import Image from 'next/image'

const MinorCardOfDestination = (props) => {
    return (
        <div className='w-[22vw] border-2 flex justify-start items-center gap-x-3 rounded-lg'>
            <div>
                <Image
                    className='w-24 rounded-tl-lg rounded-bl-lg'
                    src={props.img}
                    alt={props.alt} />
            </div>
            <div>
                <div>{props.title}</div>
                <div className='text-sm text-blue-400 hover:cursor-pointer'>Read more</div>
            </div>
        </div>
    )
}

export default MinorCardOfDestination
