import React from 'react'
import styles from '../styles'

const CompanyStats = () => {
  return (
    <div className='bg-light-900 py-10 text-center px-[7%] flex flex-col gap-3'>
        <h2 className={`${styles.aboutUsHeadingDark}`}>
            Who We Are
        </h2>
        <h5 className='text-primary-default font-medium text-[20px] xl:text-[40px]'>
            Big Impact(small egos.)
        </h5>
        <p>
            We wouldn’t be here without our customers. Every game-changing solution comes from the trust we build by asking thoughtful questions and listening carefully to the answers. We’re not here to brag—we're here to throw away tired copy/paste solutions and blaze a new path, for our customers' businesses and our own.
        </p>
        <div className='relative grid mt-8 grid-cols-2 place-items-center gap-12'>
            <div className='w-40 h-40 px-[10%] rounded-full bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-5'>
                <h3 className={`${styles.headingTextDark}`}>78,000</h3>
                <p className={` text-[12px] font-normal capitalize tracking-wide`}>
                    Hours Dedicated to Safety each year
                </p>
            </div>
            <div className='absolute h-32 w-[3px] top-4 bg-primary-default'></div>
            <div className='w-40 h-40 px-[10%] rounded-full bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-5'>
                <h3 className={`${styles.headingTextDark}`}>100MM</h3>
                <p className={` text-[12px] font-normal capitalize tracking-wide`}>
                    Tons Of Products Supported By Solutioneers
                </p>
            </div>
            <div className='w-40 h-40 px-[10%] rounded-full  bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-5'>
                <h3 className={`${styles.headingTextDark}`}>250</h3>
                <p className={` text-[12px] font-normal capitalize tracking-wide`}>
                    Petabytes Of Data Aanalyzed
                </p>
            </div>
            <div className='absolute h-32 w-[3px] bottom-4 bg-primary-default'></div>
            <div className='w-40 h-40 px-[10%] rounded-full bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-5'>
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