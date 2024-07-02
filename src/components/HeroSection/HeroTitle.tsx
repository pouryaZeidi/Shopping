import React from 'react';
import Button from '../Button';

const HeroTitle = () => {
  return (
    <div className="flex flex-col  h-[100%] my-3">
      <div className="relative">
        <span className=" text-4xl sm:text-5xl md:text-6xl font-poppins font-black relative z-10 my-1">LET’S</span>
        <span className="bg-white absolute top-0 left-0 w-36 sm:w-44 md:w-56 h-full my-1 transform -rotate-3 z-0"></span>
      </div>
      <div className=" text-4xl sm:text-5xl md:text-6xl font-poppins font-black my-1">
        <span className="relative z-10">EXPLORE</span>
      </div>
      <div className="relative">
        <span className=" text-4xl sm:text-5xl md:text-6xl font-poppins font-black relative z-10 my-1">UNIQUE</span>
        <span className="bg-yellow-300 absolute top-0 left-0 w-36 sm:w-48 md:w-64 h-full transform -rotate-3 z-0 my-1"></span>
      </div>
      <div className=" text-4xl sm:text-5xl md:text-6xl font-poppins font-black my-1">
        <span className=" z-10">CLOTHES.</span>
      </div>
      </div>
  );
}

export default HeroTitle;
