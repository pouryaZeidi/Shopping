import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const MediaIcones = () => {
  return (
    <div className='w-[180px] flex justify-between '>
<FaFacebookF className='text-[36px] p-2 bg-yellow-200 rounded-lg hover:opacity-50 cursor-pointer' />
<FaInstagram className='text-[36px] p-2 bg-yellow-200 rounded-lg hover:opacity-50 cursor-pointer' />
<TiSocialTwitter className='text-[36px] p-2 bg-yellow-200 rounded-lg hover:opacity-50 cursor-pointer' />
<FaLinkedinIn className='text-[36px] p-2 bg-yellow-200 rounded-lg hover:opacity-50 cursor-pointer' />

    </div>
  )
}

export default MediaIcones