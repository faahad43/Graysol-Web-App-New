import React, { useState } from 'react'
import Logo from '../assets/img/Logo.png'
import BigLogo from '../assets/img/BigLogo.png'
import cross from "../assets/icons/cross.svg"
import MobileBanner from '../assets/img/MobileBanner.png'
import styles from '../styles'
import { NavLink,Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import useWindowSize from '../hooks/windowSize'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useWindowSize();
  return (
    <div className={`w-screen relative bg-secondary-500 md:bg-dark-900 h-16 sm:h-20 lg:h-28 flex justify-between items-center px-3 sm:px-5 md:px-[10vw]`}>
        <div className='sm:flex-1 xl:flex-[3_3_0%]'>
          <img className='w-[72px] h-[13px] sm:w-[88px] sm:h-[16px] md:w-[120px] md:h-[22px] lg:w-[157px] lg:h-[28px] xl:w-[197px] xl:h-[35px]' src={windowSize <768 ? Logo : BigLogo} alt="Graysol Logo" />
        </div>
        <div className='md:hidden'>
          {!isOpen ? (
              <div className='flex flex-col gap-[5px] cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
                <div className='w-6 h-0.5 bg-light-500'></div>
                <div className='w-6 h-0.5 bg-light-500'></div>
                <div className='w-6 h-0.5 bg-light-500'></div>
              </div>
          ) : (
              <div className='fixed px-4 inset-0 bg-secondary-500 text-light-900 z-50'>
                <div className='flex  py-5 justify-between'>
                  <Link to=''><img className='w-[171px] h-[31px]' src={BigLogo} alt="Graysol Logo" onClick={()=>setIsOpen(!isOpen)} /></Link>
                  <img className='w-[34px] h-[34px] cursor-pointer' src={cross} alt="cross icon" onClick={()=>setIsOpen(!isOpen)} />
                </div>
                <div className=' pt-6'>
                  <div className=' flex flex-col space-y-3 font-medium text-[42px] tracking-wide'>
                    <NavLink 
                      to='' 
                      onClick={()=>setIsOpen(!isOpen)}
                    >
                      Home
                    </NavLink>

                    <NavLink 
                      to='/services' 
                      onClick={()=>setIsOpen(!isOpen)}
                    >
                      Services
                    </NavLink>

                    <NavLink 
                      to='/about' 
                      onClick={()=>setIsOpen(!isOpen)}
                    >
                      About us
                    </NavLink>

                    <NavLink 
                      to='/blog' 
                      onClick={()=>setIsOpen(!isOpen)}
                    >
                      Blog
                    </NavLink>

                    <NavLink 
                      to='/contact' 
                      onClick={()=>setIsOpen(!isOpen)}
                    >
                      Contact Us
                    </NavLink>
                  </div>
                </div>
                <div className={`${styles.h4} pt-10 flex gap-14`}>
                  <p>Careers</p>
                  <p>Linkedin</p>
                </div>
                <p className={`${styles.h4} pt-4`}>Contact</p>
              </div>
          )
            }  
        </div>
        <nav className={`${windowSize>=768 ?'visible':'hidden'} text-light-900  ${styles.p2}  flex flex-[2_2_0%] xl:flex-[3_3_0%] justify-around `}>
              <NavLink
                to=''
                className={({isActive})=>` ${isActive ? 'text-primary-default' : 'text-light-500'}`}
              >
                Home
              </NavLink>
              <NavLink
                to='/services'
                className={({isActive})=>` ${isActive ? 'text-primary-default' : 'text-light-500'}`}
              > 
                <div className='relative group'>
                  <span className='flex gap-1 items-center'>Services<IoIosArrowDown /></span>
                  <ul className={`hidden group-hover:block text-light-900 absolute w-[115%] top-[calc(100%+0.1rem)] z-50 bg-primary-default text-[10px] py-2 pl-1.5 space-y-2 lg:space-y-4 font-light tracking-wider rounded-b  before:absolute before:w-full before:h-1 before:bg-primary-default before:-top-[0.3rem] before:left-0 before:rounded-full`}>
                    <li className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-14 after:-bottom-[1px] after:left-0' >Wordpress</li>
                    <li className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-14 after:-bottom-[1px] after:left-0'>WHMCS</li>
                    <li className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-14 after:-bottom-[1px] after:left-0'>Magento</li>
                    <li className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-14 after:-bottom-[1px] after:left-0'>Drupal</li>
                    <li className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-14 after:-bottom-[1px] after:left-0'>Mobile Apps</li>
                    <li className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-14 after:-bottom-[1px] after:left-0'>Application</li>
                  </ul>
                </div> 
              </NavLink>
              <NavLink
                to='/about'
                className={({isActive})=>` ${isActive ? 'text-primary-default' : 'text-light-500'}`}
              >
                About us
              </NavLink>
              <NavLink
                to='/blog'
                className={({isActive})=>` ${isActive ? 'text-primary-default' : 'text-light-500'}`}
              >
                Blog
              </NavLink>
              <NavLink
                to='/contact'
                className={({isActive})=>` ${isActive ? 'text-primary-default' : 'text-light-500'}`}
              >
                Contact Us
              </NavLink>
        </nav>
        
    </div>
  )
}

export {Header}