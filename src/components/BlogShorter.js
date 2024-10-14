import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BlogShorter = (props) => {
    return (
        <div>
            <div className='flex p-2 gap-x-3  justify-start items-center'>
                <div>
                    <Image
                        className='w-24 rounded-lg'
                        src={props.img}
                        alt='Popular Monuments Places'
                    />
                </div>
                <div>
                    <div>{props.placeName}</div>
                    <div className='flex gap-x-2'>
                        <span>{props.date}</span>
                        <Link href="/pages/Blog">
                            <span className='font-semibold text-blue-400'>{props.duration}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogShorter
