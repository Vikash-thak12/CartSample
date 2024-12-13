import Image from 'next/image'
import { AiOutlineMore } from "react-icons/ai";
import Star from './Star';
import { itemsRecommend } from '@/constants';

interface CardPros {
    title: string, 
    desc: string, 
    name: string
}

const ReviewCard = ({ title, desc, name}: CardPros) => {
  return (
    <div className='mt-5'>
    {/* this one is for upper part */}
    <div>
        <Star />
        <h1 className='font-bold py-5'>{title}</h1>
        <p className='line-clamp-4 text-[#535766] text-sm'>{desc}</p>

        <div className='flex overflow-x-auto'>
            {
                itemsRecommend.slice(0, 3).map((item) => {
                    return (
                        <>
                            <div key={item.id} className='h-40 w-40 relative'>
                                <Image src={item.url} alt={item.name} layout='fill' objectFit='contain' />
                            </div>
                        </>
                    )
                })
            }
        </div>
    </div>
    {/* this one is for lower part */}
    <div className='mt-5'>
        <div>
            <span>{name}</span>
            <div className='flex items-center justify-between'>
                <div className='flex gap-1 items-center'>
                    <div className='flex gap-1 h-4 w-4 relative'>
                        <Image src={"/assets/icon.png"} alt='Icon' layout='fill' objectFit='contain' />
                    </div>
                    <span className='max-sm:text-sm'>Verified Buyer, 20th July, 2024</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <p className='max-sm:text-sm'>Helpful?</p>
                    <div className='flex gap-1 items-center'>
                        <div className='flex gap-1 h-4 w-4 relative'>
                            <Image src={"/assets/thumb.png"} alt='Icon' layout='fill' objectFit='contain' />
                        </div>
                        <p>4</p>
                    </div>
                    <button>
                        <AiOutlineMore className='md:text-2xl' />
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ReviewCard
