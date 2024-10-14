import React from 'react'
import MinorTitle from './MinorTitle'
import BlogShorter from './BlogShorter'
import demo from"@/public/Img/demo.jpg"
import Image from 'next/image'

const BlogPost = () => {
    return (
        <div>
            <div><MinorTitle unboldData="Latest" boldData="BLOG POST" /></div>
            <div className='w-11/12 mx-auto my-10 flex'>
                <div className='flex flex-col w-1/2'>
                    <div><BlogShorter img={demo} placeName="place Name" date="14 Oct 2024" duration="5min read" /></div>
                    <div><BlogShorter img={demo} placeName="place Name" date="14 Oct 2024" duration="5min read" /></div>
                    <div><BlogShorter img={demo} placeName="place Name" date="14 Oct 2024" duration="5min read" /></div>
                    <div><BlogShorter img={demo} placeName="place Name" date="14 Oct 2024" duration="5min read" /></div>
                    <div><BlogShorter img={demo} placeName="place Name" date="14 Oct 2024" duration="5min read" /></div>
                    <div><BlogShorter img={demo} placeName="place Name" date="14 Oct 2024" duration="5min read" /></div>
                    <div className='text-blue-400 hover:cursor-pointer p-2'>Explore All Blogs</div>
                </div>
                <div className='w-1/2 p-2'>
                    <div>
                        <Image 
                        src={demo}
                        alt=""
                        className='w-3/4 rounded-xl'
                        />
                    </div>
                    <div>
                        <div className='font-semibold'>Best Place in Dehradun, Dehradun Zoo</div>
                        <div>Graciously sprawling over 25 hectares of land, the Dehradun Zoo has come up as a favourite picnic spot and weekend destination for the tourists. Nestled in the foothills of the Shivaliks, the Dehradun Zoo is a home to varied animal species such as two horned Deers, Leopards, Neelgai, Emu, Ostrich,Turkey, Crocodiles and Turtle. The aviary in Dehradun Zoo hosts several species of birds including Parrot, Peacock, Owl, Parakeet and Macaw to name a few.The park also features a play area for kids, trails, benches, canteen, parking space and restrooms.
                        </div>
                        <div></div>
                    </div>
                    <div className='text-blue-400 hover:cursor-pointer'>Read Full Article</div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost
