import React from 'react'
import ClothesItem from './ClothesItem'

const ClothesLine = () => {
  return (
    <div className='flex  m-auto max-w[98%] md:max-w-[95%]  lg:w-[90%] xl:max-w-[95%]'> 
    <ClothesItem src='/clothes.png' title={'Hoodies & Sweetshirt'} subtitle={'Explore Now!'} />
    <ClothesItem src='/clothes1.png' title={'Coats & Parkas'} subtitle={'Explore Now!'}/>
    <ClothesItem src='/clothes2.png' title={'Tees & T-Shirt'} subtitle={'Explore Now!'}/>
    </div>
  )
}

export default ClothesLine