import React from 'react'
import styles from '../styles'
import Icon1 from '../assets/icons/wordpressIcon1.svg'
import Icon2 from '../assets/icons/wordpressIcon2.svg'
import Icon3 from '../assets/icons/wordpressIcon3.svg'
import Icon4 from '../assets/icons/wordpressIcon4.svg'

const ServiceFeatures = () => {
  
  const data = [
    {
        img:Icon1,
        headingText:'Custom WordPress Theme Development',
        description:'We realize that having the right theme can be all the difference for your brand and we’re here to help you develop the right theme for you. We’ll work on it now just from a presentation standpoint but also a cross-platform, fully responsive standpoint, too.'
    },
    {
        img:Icon2,
        headingText:'Custom WordPress Theme Development',
        description:'We realize that having the right theme can be all the difference for your brand and we’re here to help you develop the right theme for you. We’ll work on it now just from a presentation standpoint but also a cross-platform, fully responsive standpoint, too.'
    },
    {
        img:Icon3,
        headingText:'WooCommerce Store Integration',
        description:'We know that WooCommerce is the pick for most commerce WordPress installations. We’re here to help you build it out, link your current ERPs, current systems or migrate away from your old storefronts.'
    },
    {
        img:Icon4,
        headingText:'WordPress Security',
        description:'We realize that having the right theme can be all the difference for your brand and we’re here to help you develop the right theme for you. We’ll work on it now just from a presentation standpoint but also a cross-platform, fully responsive standpoint, too.'
    },
  ]

  return (
    <div className='w-screen bg-dark-900 pb-12 space-y-8'>
        <h1 className={`${styles.h1} text-center`}>WordPress Services</h1>
        <div 
            className='w-[95%] sm:w-full  mx-auto bg-light-900 grid grid-cols-1 md:grid-cols-2 rounded-2xl sm:rounded-none py-12 sm:py-16 lg:py-[10%] xl:py-[8%] px-[8%] sm:px-[15%] md:px-[5%] lg:px-[10%] xl:px-[15%] md:gap-x-10 xl:gap-x-20 gap-y-10 sm:gap-y-12 lg:gap-y-20 '
        >
                {/* This is card */}
                {data.map((item,index)=>(
                    <div key={index} className='flex items-start gap-x-6 relative'>
                        <img className='w-[60px] h-[60px] mt-2' src={item.img} alt="" />
                        <div className='space-y-3 before:absolute before:top-3 before:left-[calc(60px+14px)] before:border-r-2 lg:before:border-r-[3px] before:border-primary-default before:h-[80px] lg:before:h-[95px]'>
                            <h4 className={`${styles.h4HeavyDark} font-medium text-[#000]`} style={{color:'#000'}} >
                                {item.headingText}
                            </h4>
                            <p className={`${styles.p2Dark} text-justify lg:leading-6 xl:leading-7`}>
                                {item.description}
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