import Image from 'next/image'
import React from 'react'
const imageItems = [
    {
        id: 1, 
        alt: "Logo", 
        url: "/assets/girl1.png"
    },
    {
        id: 2, 
        alt: "Logo", 
        url: "/assets/girl2.png"
    },
    {
        id: 3, 
        alt: "Logo", 
        url: "/assets/girl3.png"
    },
    {
        id: 4, 
        alt: "Logo", 
        url: "/assets/girl4.png"
    },
]

const Review = () => {
  return (
    <main className='py-4'>
      <h1>Review Photos (150)</h1>
      <div className='flex items-center gap-2 overflow-x-auto py-2'>
      {imageItems.map((item) => (
          <div
            key={item.id}
            className="relative h-32 w-32 flex-shrink-0 bg-gray-200 rounded-md overflow-hidden"
          >
            <Image
              src={item.url}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Review
