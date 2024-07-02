import Link from 'next/link'
import React from 'react'
import Button from '../Button'
import NavbarItem from './NavbarItem'

const NavbarItems = () => {
  return (
    <div className='flex w-[60%]  justify-end items-center'>
        <NavbarItem href="/">CATALOGUE</NavbarItem>
        <NavbarItem href="/">FASHION</NavbarItem>
        <NavbarItem href="/">FAVOURITE</NavbarItem>
        <NavbarItem href="/">LIFESTYLE</NavbarItem>
        <Button cls='ml-1'>SIGN UP</Button>
    </div>
  )
}

export default NavbarItems