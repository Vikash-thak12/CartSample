import React from 'react'
import { Separator } from './ui/separator';
import Image from 'next/image';

export const itemsRecommend = [
    {
      id: 1,
      url: "/assets/rect1.png",
      name: "rose Corset",
      price: 1190,
    },
    {
      id: 2,
      url: "/assets/rect2.png",
      name: "rose Corset",
      price: 1190,
    },
    {
      id: 3,
      url: "/assets/rect3.png",
      name: "rose Corset",
      price: 1190,
    },
    {
      id: 4,
      url: "/assets/rect.png",
      name: "rose Corset",
      price: 1190,
    },
    {
      id: 5,
      url: "/assets/rect1.png",
      name: "rose Corset",
      price: 1190,
    },
    {
      id: 6,
      url: "/assets/rect3.png",
      name: "rose Corset",
      price: 1190,
    },
    {
      id: 7,
      url: "/assets/rect2.png",
      name: "rose Corset",
      price: 1190,
    },
    {
      id: 8,
      url: "/assets/rect.png",
      name: "rose Corset",
      price: 1190,
    },
    {
      id: 9,
      url: "/assets/rect1.png",
      name: "rose Corset",
      price: 1190,
    },
    {
      id: 10,
      url: "/assets/rect2.png",
      name: "rose Corset",
      price: 1190,
    },
  ];
  

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
                        <Image src={item.url} alt={item.name} width={150} height={32} />
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
