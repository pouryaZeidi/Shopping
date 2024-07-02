import React from 'react';

export const BrandItem = () => {
  return (
    <div className='flex justify-around p-3  '>
      <div className=' w-[120px] h-[55px] flex items-center justify-center '>
        <img src="/HM.png" alt="H&M" className='object-contain w-full h-full '/>
      </div>
      <div className=' w-[120px] h-[55px] flex items-center justify-center'>
        <img src="/Obey.png" alt="Obey" className='object-contain w-full h-full'/>
      </div>
      <div className=' w-[120px] h-[55px] flex items-center justify-center'>
        <img src="/Shopify.png" alt="Shopify" className='object-contain w-full h-full'/>
      </div>
      <div className=' w-[120px] h-[55px] flex items-center justify-center'>
        <img src="/Lacoste.png" alt="Lacoste" className='object-contain w-full h-full'/>
      </div>
      <div className='w-[120px] h-[55px] flex items-center justify-center'>
        <img src="/Levis.png" alt="Levis" className='object-contain w-full h-full'/>
      </div>
      <div className=' w-[120px] h-[55px] flex items-center justify-center'>
        <img src="/Amazon.png" alt="Amazon" className='object-contain w-full h-full'/>
      </div>
    </div>
  );
};
