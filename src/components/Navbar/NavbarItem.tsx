import Link from 'next/link'
import React, { ReactNode } from 'react'


const NavbarItem = ({ children, href }:{children:ReactNode,href:string}) => {
  return (
    <Link className='hover:bg-secondary transition-all rounded py-[10.5px] px-2 text-[15px] font-poppins font-medium  items-center hidden sm:flex    ' href={href}>
      {children}
    </Link>
  )
}

export default NavbarItem
