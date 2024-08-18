import React, { useState } from 'react'
import Logo from '../assets/img/Logo.png'
import BigLogo from '../assets/img/BigLogo.png'
import cross from "../assets/icons/cross.svg"
import MobileBanner from '../assets/img/MobileBanner.png'
import styles from '../styles'
import { NavLink,Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import useWindowSize from '../hooks/windowSize'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropDown, setMobileDropDown] = useState(false);
  const windowSize = useWindowSize();
  return (
    <div className={`w-screen relative bg-secondary-500 md:bg-dark-900 h-16 sm:h-20 lg:h-28 flex justify-between items-center px-3 sm:px-5 md:px-[10vw]`}>
        <div className='sm:flex-1 xl:flex-[3_3_0%]'>
        <Link to=''>
        <div className='flex gap-2 items-center group hover:cursor-pointer'>
          <img id='logo' className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] group-hover:cursor-pointer' src={Logo} alt="Graysol Logo" />
          <label htmlFor="logo" className={`${styles.h4Heavy} group-hover:cursor-pointer`}>Graysol</label>
        </div>
        </Link>
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
                  <Link to='' onClick={()=>setIsOpen(!isOpen)}>
                  <div className='flex gap-2 items-center group '>
                    <img id='logo1' className='w-[45px] h-[45px] group-hover:cursor-pointer' src={Logo} alt="Graysol Logo"  />
                    <h1 htmlFor='logo1' className={`${styles.h1} group-hover:pointer`}>Graysol</h1>
                  </div>
                  </Link>
                  <img className='w-[34px] h-[34px] cursor-pointer' src={cross} alt="cross icon" onClick={()=>setIsOpen(!isOpen)} />
                </div>
                <div className=' pt-6'>
                  <div className=' flex flex-col gap-y-4 font-medium text-[35px] tracking-wide'>
                    <NavLink 
                      to='' 
                      onClick={()=>{
                        setIsOpen(!isOpen);
                      }
                      }
                    >
                      Home
                    </NavLink>

                      
                      <div className='flex items-end gap-1'>
                      <NavLink 
                      to='/services' 
                      onClick={()=>{
                        setIsOpen(!isOpen);
                        }
                        }
                      >
                        Services 
                      </NavLink>
                        <IoMdArrowDropdown className='cursor-pointer' onClick={()=>setMobileDropDown(!mobileDropDown)} size={35} />
                        
                      </div>
                      <ul className={`${styles.h5Heavy} ${mobileDropDown?'h-fit block':'h-0 hidden '} transition-all duration-1000 pl-3 flex flex-col gap-2 mt-1 mb-2`}>
                        <NavLink to='services/wordpress' onClick={()=>{setIsOpen(!isOpen)}}><li>Wordpress</li></NavLink>
                        <NavLink to='services/whmcs' onClick={()=>{setIsOpen(!isOpen)}}><li>WHMCS</li></NavLink>
                        <NavLink to='services/magneto' onClick={()=>{setIsOpen(!isOpen)}}><li>Magneto</li></NavLink>
                        <NavLink to='services/drupal' onClick={()=>{setIsOpen(!isOpen)}}><li>Drupal</li></NavLink>
                        <NavLink to='services/mobile-app' onClick={()=>{setIsOpen(!isOpen)}}><li>Mobile Apps</li></NavLink>
                        <NavLink to='services/wordpress' onClick={()=>{setIsOpen(!isOpen)}}><li>Application</li></NavLink>
                      </ul>
                    

                    <NavLink 
                      to='/about' 
                      onClick={()=>{
                        setIsOpen(!isOpen);
                       
                      }
                      }
                    >
                      About us
                    </NavLink>

                    <NavLink 
                      to='/blog' 
                      onClick={()=>{
                        setIsOpen(!isOpen);
                        
                      }
                      }
                    >
                      Blog
                    </NavLink>

                    <NavLink 
                      to='/contact' 
                      onClick={()=>{
                        setIsOpen(!isOpen);
                      
                      }
                      }
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
                  <span className='flex gap-1 items-center w-[115%] lg:w-[120%]'>Services<IoIosArrowDown /></span>
                  <ul className={`hidden group-hover:block text-light-900 absolute w-[115%] lg:w-[120%] top-[calc(100%+0.2rem)] z-50 bg-primary-default text-[12px] lg:text-[14px] pb-2 pl-1.5 space-y-0  font-light tracking-wider rounded-b  before:absolute before:w-full before:h-1 before:bg-primary-default before:-top-[0.3rem] before:left-0 before:rounded-full`}>
                    <li
                     className='relative  after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-20 after:-bottom-[1px] after:left-0 ' 
                     >
                      <NavLink to='services/wordpress'>
                        <span className='inline-block flex items-end w-full h-5 lg:h-7 transition-transform duration-300 hover:scale-110 hover:pl-1'>
                          Wordpress
                        </span>
                      </NavLink>
                    </li>

                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-20 after:-bottom-[1px] after:left-0'
                    >
                      <NavLink to='services/whmcs'>
                        <span className='inline-block flex items-end w-full h-6 lg:h-7  transition-transform duration-300 hover:scale-110 hover:pl-1'>
                          WHMCS
                        </span>
                      </NavLink>
                    </li>

                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-20 after:-bottom-[1px] after:left-0'
                    >
                      <NavLink to='services/magneto'>
                        <span className='inline-block flex items-end w-full h-6 lg:h-7 transition-transform duration-300 hover:pl-1 hover:scale-110'>
                          Magento
                        </span>
                      </NavLink>
                    </li>

                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-20 after:-bottom-[1px] after:left-0'
                    >
                      <NavLink to='services/drupal'>
                        <span className='inline-block flex items-end w-full h-6 lg:h-7 transition-transform duration-300 hover:pl-1 hover:scale-110'>
                          Drupal
                        </span>
                      </NavLink>
                    </li>

                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-20 after:-bottom-[1px] after:left-0'
                    >
                      <NavLink to='services/mobile-app'>
                        <span className='inline-block flex items-end w-full h-6 lg:h-7 transition-transform duration-300 hover:scale-110 hover:pl-1'>
                          Mobile Apps
                        </span>
                      </NavLink>
                    </li>

                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-20 after:-bottom-[1px] after:left-0'>
                      <NavLink to='services/wordpress'>
                        <span
                        className='inline-block flex items-end w-full h-6 lg:h-7 transition-transform duration-300 hover:pl-1 hover:scale-110'>
                          Application
                        </span>
                      </NavLink>
                    </li>

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
                Contact us
              </NavLink>
        </nav>
        
    </div>
  )
}

export {Header}