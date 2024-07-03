import React from 'react'
import Button from '../Button'
import { TfiApple } from "react-icons/tfi";

const DownloadAppStore = () => {
  return (
<Button cls='p-1 mr-1 my-2 '>
      <div className='flex justify-between'>
        <div>
      <TfiApple className='text-5xl' />
        </div>
        <div className='flex flex-col items-start '>
          <p>Download on the</p>
          <h1 className='lg:text-[22px] font-bold'>App Store</h1>
        </div>
      </div>
    </Button>
  )
}

export default DownloadAppStore
