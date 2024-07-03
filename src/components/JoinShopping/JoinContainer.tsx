import React from 'react'
import Titles from './Titles'
import EmailInput from './EmailInput'

const JoinContainer = () => {
  return (
    <div className='h-[400px] bg-Primary flex flex-col justify-center items-center '>
        <Titles/>
        <EmailInput/>
    </div>
  )
}

export default JoinContainer