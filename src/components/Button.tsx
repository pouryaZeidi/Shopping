import React, { ReactNode } from 'react'

const Button = ({cls,children}:{cls?:string,children:ReactNode}) => {
  return (
    <button className={`flex items-center justify-center border-solid p-2 cursor-pointer text-[18px] box-border rounded-md bg-black text-white font-poppins font-regular hover:bg-Primary hover:text-black transition-all text-nowrap ${cls}`}>{children}</button>
  )
}

export default Button