import React from 'react'
import Button from '../Button'
import { IoLogoGooglePlaystore } from "react-icons/io5";

const DownloadGooglePlay = () => {
  return (
    <Button>
      <div className='flex justify-between'>
        <div>
      <IoLogoGooglePlaystore className='text-5xl' />
        </div>
        <div className='flex flex-col items-start'>
          <p>GET IT ON</p>
          <h1 className='font-bold'>Google Play</h1>
        </div>
      </div>
    </Button>
  )
}

export default DownloadGooglePlay