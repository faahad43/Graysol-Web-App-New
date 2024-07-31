import React from 'react'
import AboutUsBanner from '../assets/img/aboutUsBanner.png'
import styles from '../styles'

const AboutBanner = () => {
  return (
    <div className={`bg-dark-900 text-light-900 py-8 space-y-8 text-center`}>
        <div className='w-[90%] h-64 mx-auto relative flex flex-col items-center justify-center gap-5 px-[4%] after:absolute after:bg-primary-700 after:inset-0  after:opacity-80 after:z-20'>
            <img
            className='absolute inset-0 h-full w-full object-cover object-center z-10' 
            src={AboutUsBanner}
            alt="Banner Image of  About Page" 
            />
            <h1 className={`${styles.headingText} relative z-30`}>
                REBELS WITH A CAUSE
            </h1>
            <p className={`${styles.descriptionText} relative z-30`}>
                Gray Solutions is a collective of unconventional thinkers who thrive on pushing boundaries and embracing challenges that others run from. From assembling a team of audacious Solutioneers to handpicking partners with cutting-edge tech, we take pride in the company we keep and the work we do.
            </p>
        </div>
        <p className='text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px]'>
            We’re Here To 
            <span className='text-primary-default'>
               &nbsp; Revolutionize Our Industry.
            </span>
        </p>
    </div>
  )
}

export default AboutBanner