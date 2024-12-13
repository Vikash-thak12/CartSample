import React from 'react'
import ReviewCard from './ReviewCard'
import { Separator } from './ui/separator'

const CustomerReview = () => {
    return (
        <main className='my-5'>
            <h1 className='font-bold text-2xl'>Customer Reviews(800)</h1>
            {/* title, description, name */}
            <ReviewCard
                title="Highly Recommended"
                desc="Ut aliquet venenatis elit, at condimentum mi bibendum non. Sed vitae dui quis neque fermentum tincidunt. Quisque id aliquam magna. Proin sit amet sagittis sem... See more"
                name="Sofia"
            />
            <Separator className='mt-5' />
            <ReviewCard
                title="Nice Buy"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  tempor incididun... See more"
                name="Esther Howard"
            />
            <Separator className='mt-5' />
            <ReviewCard
                title="Splendid Purchase"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  tempor incididun... See more"
                name="Mary Magdalen,"
            />
        </main>
    )
}

export default CustomerReview
