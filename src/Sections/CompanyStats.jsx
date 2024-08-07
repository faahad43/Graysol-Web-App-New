import React from 'react'
import styles from '../styles'

const CompanyStats = () => {
  return (
    <div className='bg-light-900 text-center py-10 md:py-16 px-[7%] md:px-[15%] flex flex-col gap-3'>
        <h2 className={`${styles.aboutUsHeadingDark}`}>
            Who We Are
        </h2>
        <h5 className='text-primary-default font-medium text-[20px] xl:text-[40px]'>
            Big Impact(small egos.)
        </h5>
        <p>
            We wouldn’t be here without our customers. Every game-changing solution comes from the trust we build by asking thoughtful questions and listening carefully to the answers. We’re not here to brag—we're here to throw away tired copy/paste solutions and blaze a new path, for our customers' businesses and our own.
        </p>
        <div className='relative grid mt-8 grid-cols-2 place-items-center gap-12 sm:gap-5 md:gap-8 lg:gap-x-32 lg:gap-y-5'>
            <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56 px-[10%] rounded-full bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-5 md:justify-self-end'>
                <h3 className={`${styles.headingTextDark}`}>78,000</h3>
                <p className={` text-[12px] font-normal capitalize tracking-wide`}>
                    Hours Dedicated to Safety each year
                </p>
            </div>
            <div className='absolute h-32 md:h-40 lg:h-48 w-[3px] top-4 bg-primary-default'></div>
            <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56 px-[10%] rounded-full bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-5 md:justify-self-start'>
                <h3 className={`${styles.headingTextDark}`}>100MM</h3>
                <p className={` text-[12px] font-normal capitalize tracking-wide`}>
                    Tons Of Products Supported By Solutioneers
                </p>
            </div>
            <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56 px-[10%] rounded-full  bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-5 md:justify-self-end'>
                <h3 className={`${styles.headingTextDark}`}>250</h3>
                <p className={` text-[12px] font-normal capitalize tracking-wide`}>
                    Petabytes Of Data Aanalyzed
                </p>
            </div>
            <div className='absolute h-32 md:h-40 lg:h-48 w-[3px] bottom-4 bg-primary-default'></div>
            <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56 px-[10%] rounded-full bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-5 md:justify-self-start'>
                <h3 className={`${styles.headingTextDark}`}>15,000</h3>
                <p className={` text-[12px] font-normal capitalize tracking-wide`}>
                    Commissioning Issues Resolved Annually
                </p>
            </div>
        </div>
    </div>
  )
}

export default CompanyStats