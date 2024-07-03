import React from 'react'
import DownloadAppStore from './DownloadAppStore'
import DownloadGooglePlay from './DownloadGooglePlay'

const DownloadApp = () => {
  return (

    <div className='w-[100%] p-7 m-auto flex flex-col sm:flex-row justify-between items-center'>
       <div className='w-[50%]'>
        <h3 className='w-[60%] text-3xl  md:text-4xl font-poppins font-black'>DOWNLOAD APP &
        GET THE VOUCHER!</h3>
        <p className=' text-1xl md:text-3xl my-10 text-gray-600'>Get 30% off for first transaction using
        Rondovision mobile app for now.</p>
        <div className=' flex flex-col my-6 sm:flex-row sm:my-1 justify-around items-center'>
            <DownloadAppStore/>
            <DownloadGooglePlay/>

        </div>
       </div>
       <div className='w-[80%] sm:w-[35%] mb-24 '>
        <img src="/vouchers.png" alt="" />
       </div>
    </div>
  )
}

export default DownloadApp