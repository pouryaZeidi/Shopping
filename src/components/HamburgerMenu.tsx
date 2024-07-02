import React, { useState } from 'react';
import { SlMenu } from "react-icons/sl";

const HamburgerMenu: React.FC = () => {
  const [showMenu, setShowmenu] = useState(false);

  const showMenuhandler = () => {
    setShowmenu(prevState => !prevState);
  };

  const hideMenu = () => {
    setShowmenu(false);
  };

  return (
    <div className='relative sm:hidden'>
      <div className='flex text-4xl ml-4 cursor-pointer' onClick={showMenuhandler}>
        <SlMenu />
      </div>
      {showMenu && (
        <div className='absolute top-14 right-0 w-48 h-[159px] z-20 bg-Primary rounded-3xl 'onMouseLeave={hideMenu}>
       
          <div className=' hover:bg-Primary transition-opacity  duration-300 ease-in-out rounded-3xl  '  >
            <p className='p-2 cursor-pointer hover:bg-secondary rounded-s-3xl '>CATALOGUE</p>
            <p className='p-2 cursor-pointer hover:bg-secondary rounded-s-3xl '>FASHION</p>
            <p className='p-2 cursor-pointer hover:bg-secondary rounded-s-3xl '>FAVORITE</p>
            <p className='p-2 cursor-pointer hover:bg-secondary rounded-s-3xl '>LIFESTYLE</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu;
