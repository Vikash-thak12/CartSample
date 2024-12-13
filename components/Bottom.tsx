import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Bottom = () => {
  return (
    <main className='flex items-center justify-center mt-5 gap-5'>
      <Image src={"/assets/Wishlist.png"} alt='Wishlist' height={40} width={40} />
      <Button>Add to Bag</Button>
      <Button className='bg-white text-black border border-black'>Buy Now</Button>
    </main>
  )
}

export default Bottom
