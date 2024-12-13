/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Question from './Question'
import { size } from '@/constants'

const DetailedCard = () => {
    const [code, setCode] = useState(530061)
    return (
        <main className='py-5'>
            <div>
                <h1 className='font-bold text-2xl'>Printed Slip Dress</h1>
                <div className='flex items-center gap-3 py-2'>
                    <span className='font-bold'>$1435</span>
                    <span className='text-gray-500'>$2300 </span>
                    <span className='bg-pink-500 px-2 py-1 text-white'>-40%</span>
                </div>
                <p className='text-[#9C9C9C] py-2'>Inclusive of all taxes</p>
                <p className='text-[#535766] text-lg'>Short slip dress made of satin, featuring a flared A-line silhouette with a printed design detail. Sleeveless with spaghetti straps for a feminine look.</p>
            </div>

            <div className='mt-5'>
                <div className='my-5'>
                    <h1>Color: <span>Persian Rose</span></h1>
                    <div className='flex gap-5 items-center mt-4'>
                        <div className='bg-[#FF08A0] h-12 w-12 rounded-full flex items-center justify-center'>
                            <Image src={"/assets/tick.png"} alt='Main Image' height={16} width={16} className='size-5' />
                        </div>
                        <div className='bg-black h-12 w-12 rounded-full'>

                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex items-center justify-between'>
                        <h1>Size: <span>Medium</span></h1>
                        <Link href={"google.com"}>
                            Size Guide
                        </Link>
                    </div>
                    <div className='my-5 flex items-center gap-3'>
                        {size.map((item) => {
                            return (
                                <span key={item.id} className='bg-gray-00 px-5 py-3 bg-gray-300'>
                                    {item.name}
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div>
                <h1 className='capitalize'>Deliver to: <span>Mumbai</span></h1>
                <div className='flex py-2'>
                    <input value={code} type="number" className='w-full flex-1 outline-none px-2 border border-gray-400' />
                    <button className='p-3 bg-black text-white'>Check</button>
                </div>

                <div>
                    <div className='flex items-center gap-2 py-3'>
                        <Image src={"/assets/cash.png"} alt='Main Image' height={16} width={20} />
                        <p className='text-[#535766]'>Cash on Delivery</p>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src={"/assets/vehicle.png"} alt='Main Image' height={16} width={20} className='py-1' />
                        <div className='flex flex-col'>
                            <p className='font-bold'>Standard Delivery:</p>
                            <p className='text-[#535766]'>Free Shipping on this product. Save ₹99</p>
                            <p>Estimated Delivery by <span className='font-bold'>Tue, 26 Mar - Thu 28 Mar</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Question />
            </div>
        </main>
    )
}

export default DetailedCard
