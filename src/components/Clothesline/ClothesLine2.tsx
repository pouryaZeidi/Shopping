import React from 'react'
import ClothesItem from './ClothesItem'

const ClothesLine2 = () => {
  return (
    <div className='flex  m-auto max-w[98%] md:max-w-[95%]  lg:w-[90%] xl:max-w-[95%]'>
        <ClothesItem src={'/Happy1.png'} title={'Trending on instagram'} subtitle={'Explore Now!'} />
        <ClothesItem src={'/Happy2.png'} title={'All Under $40'} subtitle={'Explore Now!'} />
    </div>
  )
}

export default ClothesLine2