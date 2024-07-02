import React from 'react'
import NavbarItems from './NavbarItems'
import Button from '../Button'
import Logo from '../Logo'
import HamburgerMenu from '../HamburgerMenu'


const Navbar = () => {
  
  return (
    <div className='flex justify-between items-center py-5 mx-6 sm:mx-2 md:mx-12  lg:mx-16 2xl:mx-18 '>
        <Logo/>
        <NavbarItems/>
        <HamburgerMenu/>
    </div>
  )
}

export default Navbar