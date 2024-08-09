import React from 'react'
import styles from '../styles'

const AboutCompanyStats = () => {
  return (
    <div className='bg-light-900 text-center py-10 md:py-16 px-[7%] md:px-[15%] flex flex-col gap-3'>
        <h2 className={`${styles.h2Dark}`}>
            Who We Are
        </h2>
        <h3 className={`text-primary-default ${styles.h3}`}>
            Big Impact(small egos.)
        </h3>
        <p className={`${styles.p2Dark}`}>
            We wouldn’t be here without our customers. Every game-changing solution comes from the trust we build by asking thoughtful questions and listening carefully to the answers. We’re not here to brag—we're here to throw away tired copy/paste solutions and blaze a new path, for our customers' businesses and our own.
        </p>
        <div className='relative grid mt-4 grid-cols-2 place-items-center gap-12 sm:gap-5 md:gap-8 lg:gap-x-32 lg:gap-y-5'>
            <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 px-[5%] rounded-full bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-2 md:justify-self-end'>
                <h1 className={`${styles.h1Dark}`}>78,000</h1>
                <p className={` ${styles.p3Dark} capitalize tracking-wide`}>
                    Hours Dedicated to Safety each year
                </p>
            </div>
            <div className='absolute h-32 md:h-40 lg:h-48 w-[3px] top-4 bg-primary-default'></div>
            <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 px-[5%]  rounded-full bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-2 md:justify-self-start'>
                <h1 className={`${styles.h1Dark}`}>100MM</h1>
                <p className={` ${styles.p3Dark} capitalize tracking-wide`}>
                    Tons Of Products Supported By Solutioneers
                </p>
            </div>
            <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 px-[5%] rounded-full  bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-2 md:justify-self-end'>
                <h1 className={`${styles.h1Dark}`}>250</h1>
                <p className={` ${styles.p3Dark} capitalize tracking-wide`}>
                    Petabytes Of Data Aanalyzed
                </p>
            </div>
            <div className='absolute h-32 md:h-40 lg:h-48 w-[3px] bottom-4 bg-primary-default'></div>
            <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 px-[5%] rounded-full bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-2 md:justify-self-start'>
                <h1 className={`${styles.h1Dark}`}>15,000</h1>
                <p className={` ${styles.p3Dark} capitalize tracking-wide`}>
                    Commissioning Issues Resolved Annually
                </p>
            </div>
        </div>
    </div>
  )
}

export  {AboutCompanyStats}