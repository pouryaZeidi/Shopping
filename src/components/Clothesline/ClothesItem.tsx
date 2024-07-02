import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const ClothesItem = ({src,title,subtitle}:{src:string,title:string,subtitle:string}) => {
  return (
    <div className='flex py-3 justify-between'>
    <div className='w-[100%] p-3  hover:text-Primary transition-all ease-in'><img src={src} alt="clothes" className=' rounded-2xl cursor-pointer hover:brightness-50 transition duration-300 '/>
        <div className='flex items-center justify-between cursor-pointer '>
        <div>
            <h2 className=' hidden sm:block font-poppins font-medium text-2xl mt-2'>{title}</h2> 
            <p className='text-textshadow font-poppins font-light mt-1'>{subtitle}</p>
        </div>
            <FaArrowRightLong className='hidden sm:flex text-3xl' />
        </div> 
    </div>
    </div>
  )
}

export default ClothesItem