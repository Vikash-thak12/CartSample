import Image from 'next/image'
import React from 'react'

const Rating = () => {
    return (
        <main className='py-4'>
            <div className='flex items-center justify-between'>
                <h1>Rating & Reviews</h1>
                <h1>Write Review</h1>
            </div>

            <div>
                <Image src={"/assets/star5.png"} alt='Star' width={32} height={32} className='fill-pink-800' />
            </div>
        </main>
    )
}

export default Rating
