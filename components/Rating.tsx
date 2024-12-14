import Image from 'next/image'
import React from 'react'
import CircleRating from './CircleRating'
import { Separator } from './ui/separator'
import { RiExpandHorizontalSLine } from 'react-icons/ri'
import Star from './Star'

const Rating = () => {
    return (
        <main className='py-4'>
            <div className='flex items-center justify-between'>
                <h1>Rating & Reviews</h1>
                <h1 className='text-[#FF08A0] underline'>Write Review</h1>
            </div>

            <div className='flex flex-col items-center py-5 gap-4'>
                <h1 className='font-bold text-2xl'>4.0/5</h1>
                <Star />
                <p className='text-[#535766]'>Based on 237 Star Ratings</p>
            </div>

            <Separator className='bg-gray-300 my-5' />

            <div className='grid grid-cols-2 gap-5'>
                <CircleRating name='Sizing' desc="True to size" icon={<RiExpandHorizontalSLine className='size-8' />} />
                <CircleRating name='Quality' desc="Out of 5" rate="4.5" />
                <CircleRating name='Fit' desc="Out of 5" rate="4.1" />
                <CircleRating name='Would Recommend' desc="Total 160 Recommendations" rate="87%" />
            </div>
            <Separator className='bg-gray-400 my-5' />
        </main>
    )
}

export default Rating
