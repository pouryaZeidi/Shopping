import React, { Children, ReactNode } from 'react';

const TitlePages = ({children}:{children:ReactNode}) => {
  return (
    <div className='relative w-48 h-16  sm:w-80 sm:h-28 '>
      <p className='text-2xl font-poppins font-black sm:text-4xl my-5 mx-4 z-10 absolute top-4 left-6 text-nowrap'>{children}</p>
      <img src="/Vector 8.png" alt="yellow line" className=' hidden w-[200px]  absolute sm:block sm:right-[-30px] sm:bottom-7 z-0'  />
    </div>
  );
};

export default TitlePages;
