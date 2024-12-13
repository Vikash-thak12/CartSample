import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    return (
        <div className='flex items-center justify-between px-5 py-4'>
            <FaArrowLeft className='size-6' />
            <h1 className='text-[#FF08A0] text-3xl'>That Girl</h1>
            <div className='flex items-center gap-4'>
                <IoSearch className='size-6' />
                <FaShoppingCart className='size-6' />
            </div>
        </div>
    )
}

export default Header
