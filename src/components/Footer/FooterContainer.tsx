import React from 'react'
import MediaIcones from './MediaIcones'
import Subtitles from './Subtitles'

const FooterContainer = () => {
  return (
    <div className='bg-black h-[480px] lg:h-[350px]  flex items-center flex-col lg:flex-row lg:justify-between lg:items-start p-2 sm:p-12  lg:p-16'>
        <div className=' lg:w-[20%]'>
        <h3 className='text-white font-poppins font-black text-[21px] sm:text-[26px] md:text-[30px] lg:text-[38px]'>FASHION</h3>    
        <Subtitles>Complete your style with awesome clothes from us.</Subtitles>
        <MediaIcones />
        </div>
        <div className='my-8  w-[100%] lg:my-0 lg:w-[52%] flex justify-between '>
            <div>
                <p className='text-white text-[19px] font-poppins font-light'>Company</p>
                <Subtitles>About</Subtitles>
                <Subtitles>Contact us</Subtitles>
                <Subtitles>Support</Subtitles>
                <Subtitles>Careers</Subtitles>
            </div>
            <div>
            <p className='text-white text-[19px] font-poppins font-light'>Quick Link</p>
                <Subtitles>Share Location</Subtitles>
                <Subtitles>Orders Tracking</Subtitles>
                <Subtitles>Size Guide</Subtitles>
                <Subtitles>FAQs</Subtitles>
            </div>
            <div>
            <p className='text-white text-[19px] font-poppins font-light'>Legal</p>
                <Subtitles>Terms & conditions</Subtitles>
                <Subtitles>Privacy Policy</Subtitles>
               
            </div>
        </div>
    </div>
  )
}

export default FooterContainer