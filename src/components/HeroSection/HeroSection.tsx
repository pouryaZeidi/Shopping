import React from 'react'
import HeroTitle from './HeroTitle'
import Button from '../Button'
import { MdOutlineStarBorder } from "react-icons/md";
import Navbar from '../Navbar/Navbar';


const HeroSection = () => {
  return (
    <div className='w-full px-3 sm:px-24'>
      <div className='w-full flex justify-center sm:justify-between items-center my-4 rounded-[80px] px-10 relative bg-background'>
        <div className='w-full lg:w-[50%] flex flex-col items-center lg:items-start mb-5 ml-8 '>
          <HeroTitle />
          <h2 className=' sm:flex font-poppins font-light text-[15px] md:text-[24px] my-1  '>
            Live for Influential and Innovative fashion!
          </h2>
          <Button cls=''>Shop Now</Button>
        </div>
        <div className=' hidden sm:block w-[50%] absolute bottom-0 right-0 max-h-96 min-h-80 '>
           <MdOutlineStarBorder className=' hidden lg:flex text-4xl text-neutral-700 absolute bottom-24 right-8 ' />
           <MdOutlineStarBorder className=' hidden lg:flex text-4xl text-neutral-700 absolute bottom-[300px] right-36 ' />
           <MdOutlineStarBorder className=' hidden lg:flex text-4xl text-neutral-700 absolute bottom-[250px] left-0 ' />
           <div className=' hidden lg:flex absolute  lg:max-w-[77%] min-w-[75%]  bottom-0 right-20 max-h-[380px] min-h-[380px]'>
            <img src="/photoMode.png" alt="model" />
           </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection









