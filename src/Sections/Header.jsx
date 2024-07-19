import React from 'react'
import Logo from '../assets/img/Logo.png'
import MobileBanner from '../assets/img/MobileBanner.png'

const Header = () => {
  return (
    <div className='bg-secondary-500 h-16 flex justify-between items-center px-5'>
        <img className='w-[72px] h-[13px]' src={Logo} alt="Graysol Logo" />
        <div className='flex flex-col gap-1'>
          <div className='w-6 h-0.5 bg-light-500'></div>
          <div className='w-6 h-0.5 bg-light-500'></div>
          <div className='w-6 h-0.5 bg-light-500'></div>
        </div>
    </div>
  )
}

export default Header