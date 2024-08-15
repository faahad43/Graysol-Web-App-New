import React from 'react'
import styles from '../styles'
import Icon1 from '../assets/icons/wordpressIcon1.svg'
import Icon2 from '../assets/icons/wordpressIcon2.svg'
import Icon3 from '../assets/icons/wordpressIcon3.svg'
import Icon4 from '../assets/icons/wordpressIcon4.svg'

const ServiceFeatures = ({pageType=''}) => {
  
  const data = [Icon1,Icon2,Icon3,Icon4]

  return (
    <div className='w-screen bg-dark-900 pb-12 space-y-8'>
        <h1 className={`${styles.h1} text-center`}>WordPress Services</h1>
        <div 
            className='w-[95%] sm:w-full  mx-auto bg-light-900 grid grid-cols-1 md:grid-cols-2 rounded-2xl sm:rounded-none py-12 sm:py-16 lg:py-[10%] xl:py-[8%] px-[8%] sm:px-[15%] md:px-[5%] lg:px-[10%] xl:px-[15%] md:gap-x-10 xl:gap-x-20 gap-y-10 sm:gap-y-12 lg:gap-y-20 '
        >
                {/* This is card */}
                {data.map((item,index)=>(
                    <div key={index} className='flex items-start gap-x-7 lg:gap-x-9 relative'>
                        <img className='w-[60px] h-[60px] mt-2' src={item} alt="" />
                        <div className='space-y-3 before:absolute before:top-3 before:left-[calc(60px+14px)] before:border-r-2 lg:before:border-r-[3px] before:border-primary-default before:h-[80px] lg:before:h-[95px]'>
                            <h4 className={`${styles.h4HeavyDark} font-medium text-[#000]`} style={{color:'#000'}} >
                                {/* The headings and the description below are taken from the props */}
                                {pageType.serviceFeatures[index].title}
                            </h4>
                            <p className={`${styles.p2Dark} text-justify lg:leading-6 xl:leading-7`}>
                                {pageType.serviceFeatures[index].description}
                            </p>
                        </div>
                    </div>
                ))}
                
                {/* This is card */}
        </div>
    </div>
  )
}

export {ServiceFeatures}