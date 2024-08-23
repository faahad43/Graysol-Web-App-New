import React, { useEffect, useState } from 'react'
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

  useEffect(()=>{
    if(!isOpen){
      setMobileDropDown(false);
    }
  },[isOpen])

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
              <div className='fixed  px-4 inset-0 bg-secondary-500 text-light-900 z-50'>
                <div className='flex  py-5 justify-between'>
                  <Link to='' onClick={()=>setIsOpen(!isOpen)}>
                  <div className='flex gap-2 items-center group '>
                    <img id='logo1' className='w-[45px] h-[45px] group-hover:cursor-pointer' src={Logo} alt="Graysol Logo"  />
                    <h1 htmlFor='logo1' className={`${styles.h1} group-hover:pointer`}>Graysol</h1>
                  </div>
                  </Link>
                  <img className='w-[34px] h-[34px] cursor-pointer' src={cross} alt="cross icon" onClick={()=>setIsOpen(!isOpen)} />
                </div>
                <div className=' pt-4'>
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
                        <NavLink to='services/mobile-app' onClick={()=>{setIsOpen(!isOpen)}}><li>Mobile Applications</li></NavLink>
                        <NavLink to='services/web-app' onClick={()=>{setIsOpen(!isOpen)}}><li>Web Applications</li></NavLink>
                        <NavLink to='services/software-development' onClick={()=>{setIsOpen(!isOpen)}}><li>Software Development</li></NavLink>
                        <NavLink to='services/data-science' onClick={()=>{setIsOpen(!isOpen)}}><li>Data Science</li></NavLink>
                        <NavLink to='services/cloud-solution' onClick={()=>{setIsOpen(!isOpen)}}><li>Cloud Solutions</li></NavLink>
                        <NavLink to='services/personal-branding' onClick={()=>{setIsOpen(!isOpen)}}><li>Personal Branding</li></NavLink>
                        <NavLink to='services/web&app-design' onClick={()=>{setIsOpen(!isOpen)}}><li>Web & App Designing</li></NavLink>
                        <NavLink to='services/graphic-design' onClick={()=>{setIsOpen(!isOpen)}}><li>Graphic Design</li></NavLink>
                      </ul>
                    

                    <NavLink 
                      to='/about' 
                      onClick={()=>{
                        setIsOpen(!isOpen);
                       
                      }
                      }
                    >
                      About
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
                      Contact
                    </NavLink>
                  </div>
                </div>
                <div className={`${styles.h4} pt-6 flex gap-14`}>
                  <p>Careers</p>
                  <p>Linkedin</p>
                </div>
                <p className={`${styles.h4} pt-4`}>Contact</p>
              </div>
          )
            }  
        </div>
        <nav className={`${windowSize>=768 ?'visible':'hidden'} text-light-900  ${styles.p2} h-12  flex flex-[2_2_0%] xl:flex-[3_3_0%] justify-around items-center `}>
              {/*  */}
              <NavLink
                to=''
                className={({isActive})=>` ${isActive ? `text-light-900 ${styles.p2Heavy} after:scale-x-100` : 'text-light-500'} relative after:absolute after:bg-light-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300`}
              >
                Home
              </NavLink>
              <NavLink
                to='/services'
                className={({isActive})=>` ${isActive ? `text-light-900 ${styles.p2Heavy} after:scale-x-100` : 'text-light-500'} relative after:absolute after:bg-light-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left  after:transition-transform after:ease-in-out after:duration-300`}
              > 
                <div className='relative group'>
                  <span className='flex gap-1 items-center w-[115%] lg:w-[120%]'
                      
                  >
                    Services<IoIosArrowDown />
                  </span>
                  <ul className={`hidden group-hover:block text-light-900 absolute w-[135%] lg:w-[155%] top-[calc(100%+0.2rem)] -left-[calc(50%-1.8rem)]  lg:-left-[calc(50%-1.5rem)] space-y-[2px] z-50 bg-dark-200 text-[11px] lg:text-[14px] pb-3 pl-2 lg:pl-3 space-y-0  font-light tracking-wider rounded-b  before:absolute before:w-full before:h-1 before:bg-dark-200 before:-top-[0.3rem] before:left-0 before:rounded-full`}>
                    <li
                     className='relative  after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px] after:w-24 lg:after:w-28 after:-bottom-[1px] after:left-0 ' 
                     >
                      <NavLink to='services/wordpress'>
                        <span className='inline-block flex items-end w-full h-5 lg:h-7 transition-transform duration-300 hover:scale-110 hover:pl-1'>
                          Wordpress
                        </span>
                      </NavLink>
                    </li>

                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-24 lg:after:w-28 after:-bottom-[1px] after:left-0'
                    >
                      <NavLink to='services/mobile-app'>
                        <span className='inline-block flex items-end w-full h-6 lg:h-7 transition-transform duration-300 hover:scale-110 hover:pl-1'>
                          Mobile Apps
                        </span>
                      </NavLink>
                    </li>

                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-24 lg:after:w-28 after:-bottom-[1px] after:left-0'>
                      <NavLink to='services/web-app'>
                        <span
                        className='inline-block flex items-end w-full h-6 lg:h-7 transition-transform duration-300 hover:pl-1 hover:scale-110'>
                          Web Apps
                        </span>
                      </NavLink>
                    </li>

                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-24 lg:after:w-28 after:-bottom-[1px] after:left-0'>
                      <NavLink to='services/software-development'>
                        <span
                        className='inline-block flex items-end w-full h-6 lg:h-7 transition-transform duration-300 hover:pl-1 hover:scale-110'>
                          Software Dev
                        </span>
                      </NavLink>
                    </li>


                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-24 lg:after:w-28 after:-bottom-[1px] after:left-0'>
                      <NavLink to='services/data-science'>
                        <span
                        className='inline-block flex items-end w-full h-6 lg:h-7 transition-transform duration-300 hover:pl-1 hover:scale-110'>
                          Data Science
                        </span>
                      </NavLink>
                    </li>


                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-24 lg:after:w-28 after:-bottom-[1px] after:left-0'>
                      <NavLink to='services/cloud-solution'>
                        <span
                        className='inline-block flex items-end w-full h-6 lg:h-7 transition-transform duration-300 hover:pl-1 hover:scale-110'>
                          Cloud Solutions
                        </span>
                      </NavLink>
                    </li>

                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-24 lg:after:w-28 after:-bottom-[1px] after:left-0'>
                      <NavLink to='services/personal-branding'>
                        <span
                        className='inline-block flex items-end w-full h-6 lg:h-7 transition-transform duration-300 hover:pl-1 hover:scale-110'>
                          Personal Branding
                        </span>
                      </NavLink>
                    </li>

                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-24 lg:after:w-28 after:-bottom-[1px] after:left-0'>
                      <NavLink to='services/web&app-design'>
                        <span
                        className='inline-block flex items-end w-full h-6 lg:h-7 transition-transform duration-300 hover:pl-1 hover:scale-110'>
                          UI Designing
                        </span>
                      </NavLink>
                    </li>

                    <li
                     className='relative after:absolute after:bg-light-400 after:bg-opacity-30 after:h-[1px]  after:w-24 lg:after:w-28 after:-bottom-[1px] after:left-0'>
                      <NavLink to='services/graphic-design'>
                        <span
                        className='inline-block flex items-end w-full h-6 lg:h-7 transition-transform duration-300 hover:pl-1 hover:scale-110'>
                          Graphic Design
                        </span>
                      </NavLink>
                    </li>

                  </ul>
                </div> 
              </NavLink>
              <NavLink
                to='/about'
                className={({isActive})=>` ${isActive ? `text-light-900 ${styles.p2Heavy} after:scale-x-100` : 'text-light-500'} relative after:absolute after:bg-light-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300`}
              >
                About
              </NavLink>
              <NavLink
                to='/blog'
                className={({isActive})=>` ${isActive ? `text-light-900 ${styles.p2Heavy} after:scale-x-100` : 'text-light-500'} relative after:absolute after:bg-light-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300`}
              >
                Blog
              </NavLink>
              <NavLink
                to='/contact'
                className={({isActive})=>` ${isActive ? `text-light-900 ${styles.p2Heavy} after:scale-x-100` : 'text-light-500'} relative after:absolute after:bg-light-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300`}
              >
                Contact
              </NavLink>
        </nav>
        
    </div>
  )
}

export {Header}