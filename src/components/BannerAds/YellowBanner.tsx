import React from 'react';
import Button from '../Button';

const YellowBanner = () => {
  return (
    <div className='flex flex-col items-center justify-center  sm:items-end sm:justify-center  bg-cover bg-[20%] sm:bg-[30%] bg-banner-image mb-24 min-h-[750px]'>
      <div className=' max-w-[50%] sm:flex sm:flex-col  sm:items-start '>
      <div className="relative ">
        <span className=" text-4xl sm:text-3xl  md:text-[75px]  font-poppins font-black relative z-10 my-1">PAYDAY</span>
        <span className="bg-white absolute top-0 left-0 w-36 sm:w-44 md:w-[370px] h-full my-1 transform -rotate-3 z-0"></span>
      </div>
      <div className=" text-2xl sm:text-[44px] md:text-[70px] md:text-nowrap font-poppins font-black my-4">
        <span className="relative z-10">SALE  NOW</span>
      </div> 
      <div className=" my-5 w-[85%]">
        <span className=" hidden md:block text-1xl sm:text-2xl ld:text-8xl md:text-3xl font-poppins font-light relative z-10 my-1">Spend minimal $100 get 30% off
        voucher code for your next purchase</span>
      </div>
      <div className=" hidden sm:block font-poppins font-black my-1 ">
        <span className=" lg:text-4xl">1 June - 10 June 2021</span>
      </div>
      <div >
        <span className=" hidden md:block font-poppins font-light text-2xl md:text-4xl ">*Terms & Conditions apply</span>
      </div>
        <div className='flex flex-col  sm:items-start '>
        <Button cls='my-5 text-[16px] md:text-[40px] border-2 border-black hover:border-black'>SHOP NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default YellowBanner;



    // <div className='max-w[100%] min-w-[100%]:  relative'>
    //   <img src='/Banner1.png' alt='Banner' className='w-[100%] h-[90%] ' />
    //   <div className=' absolute h-[20%] w-[18.5%] bottom-0  '>
    //     <Button cls='text-[10px] md:text-5xl border border-solid border-black'> SHOP NOW </Button>
    //   </div>
    // </div>