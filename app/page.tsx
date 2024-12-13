import Bottom from '@/components/Bottom'
import CustomerReview from '@/components/CustomerReview'
import DetailedCard from '@/components/DetailedCard'
import MightAlsoLike from '@/components/MightAlsoLike'
import Rating from '@/components/Rating'
import Review from '@/components/Review'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <div className='flex items-center justify-center md:py-10 md:px-5 relative'>
          <div className='md:hidden'>
            <Image src={"/assets/main.png"} alt='Main Image' height={300} width={400} />
          </div>

          <div className='hidden md:block'>
            <Image src={"/assets/main.png"} alt='Main Image' height={300} width={500} />
          </div>

          <div className='flex absolute bg-white px-4 py-2 rounded-full items-center gap-5 bottom-8 left-[1rem] md:bottom-16 md:left-[10rem]'>
            <div className='flex gap-1'>
              <p>3.9</p>
              <Image src={"/assets/star1.png"} alt='Main Image' height={16} width={16} className='size-5' />
            </div>
            <p>237 Reviews</p>
          </div>
        </div>
      </div>

      <div className='p-4'>
        <Separator className='bg-gray-400 mt-10 mx-auto block md:hidden' />
        <div className='mt-5'>
          <DetailedCard />
        </div>

        <Rating />
        <Review />
        <Separator className='bg-gray-400  my-5' />
        <CustomerReview />
        <MightAlsoLike />
        <Separator className='bg-gray-400  my-5' />
        <Bottom />
      </div>
    </div>
  )
}

export default Homepage
