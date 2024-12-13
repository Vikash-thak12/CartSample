import React from 'react'
import { Separator } from './ui/separator';
import Image from 'next/image';
import { itemsRecommend } from '@/constants';

const MightAlsoLike = () => {
  return (
    <main>
      <h1 className='font-bold text-xl text-center'>You might Also Like</h1>
      <Separator className='bg-[#FF08A0] my-5' />

      <div className='grid grid-cols-2 gap-5'>
        {
          itemsRecommend.map((item) => {
            return (
              <div key={item.id} className=''>
                <div className='hidden md:block'>
                  <Image src={item.url} alt={item.name} width={350} height={32} />
                </div>
                <div className='block md:hidden'>
                  <Image src={item.url} alt={item.name} width={150} height={32} />
                </div>
                <div className='flex flex-col mt-2'>
                  <span className='font-bold'>₹{item.price}</span>
                  <span className='capitalize text-[#535766]'>{item.name}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

export default MightAlsoLike
