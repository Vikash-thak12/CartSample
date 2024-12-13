import { imagesItem } from '@/constants'
import Image from 'next/image'
import React from 'react'


const Star = () => {
  return (
    <div className='flex items-center gap-2'>
        {
            imagesItem.map((item) => (
                <Image key={item.id} src={item.url} alt={"logo"} width={20} height={20} />
            ))
        }
    </div>
  )
}

export default Star
