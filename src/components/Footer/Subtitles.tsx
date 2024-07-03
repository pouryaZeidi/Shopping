import React, { ReactNode } from 'react'

const Subtitles = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <p className='my-6 text-gray-600 font-poppins font-light text-[14px] hover:opacity-75 cursor-pointer'>{children}</p>
    </div>
  )
}

export default Subtitles