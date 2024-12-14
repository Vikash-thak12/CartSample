import React from 'react'

interface Props {
    name: string, 
    desc: string,
    rate?: string,
    icon?: React.ReactElement
}

const CircleRating = ({ name, desc, rate, icon}: Props) => {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute inset-0 rounded-full border-2" />

                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-gray-200"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                    />
                    <circle
                        className="text-[#FF08A0] progress-ring"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeDasharray="283"
                        strokeDashoffset="85"
                        strokeLinecap="round"
                    />
                </svg>

                <span className="absolute text-[#FF08A0] font-bold text-base">{icon || rate}</span>
            </div>
            <h1 className='font-bold'>{name}</h1>
            <p className='line-clamp-1 text-sm'>{desc}</p>
        </div>
    )
}

export default CircleRating
