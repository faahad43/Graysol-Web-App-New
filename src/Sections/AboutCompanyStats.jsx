import React from 'react'
import styles from '../styles'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutCompanyStats = () => {

 const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Adjust this value to trigger when 50% of the element is in view
    });

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
        <div
         ref={ref} // reference to the element that we want to observe
         className='relative grid mt-4 grid-cols-2 place-items-center gap-12 sm:gap-5 md:gap-8 lg:gap-x-32 lg:gap-y-5'>
            <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 px-[5%] rounded-full bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-2 md:justify-self-end'>
                <h1 className={`${styles.h1Dark}`}>
                {inView && (
                    <CountUp
                    start={0}
                    end={78000}
                    duration={3}
                    separator=","
                    >   
                    </CountUp>
                )}
                </h1>
                <p className={` ${styles.p3Dark} capitalize tracking-wide`}>
                    Hours Dedicated to Safety each year
                </p>
            </div>
            <div className='absolute h-32 md:h-40 lg:h-48 w-[3px] top-4 bg-primary-default'></div>
            <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 px-[5%]  rounded-full bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-2 md:justify-self-start'>
                <h1 className={`${styles.h1Dark}`}>
                {inView && (
                    <CountUp
                    start={0}
                    end={100000}
                    duration={3}
                    separator=","
                    >   
                    </CountUp>
                )}
                </h1>
                <p className={` ${styles.p3Dark} capitalize tracking-wide`}>
                    Tons Of Products Supported By Solutioneers
                </p>
            </div>
            <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 px-[5%] rounded-full  bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-2 md:justify-self-end'>
                <h1 className={`${styles.h1Dark}`}>
                {inView && (
                    <CountUp
                    start={0}
                    end={250}
                    duration={3}
                    separator=","
                    >   
                    </CountUp>
                )}
                </h1>
                <p className={` ${styles.p3Dark} capitalize tracking-wide`}>
                    Petabytes Of Data Aanalyzed
                </p>
            </div>
            <div className='absolute h-32 md:h-40 lg:h-48 w-[3px] bottom-4 bg-primary-default'></div>
            <div className='w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 px-[5%] rounded-full bg-primary-default bg-opacity-35 flex flex-col items-center justify-center gap-2 md:justify-self-start'>
                <h1 className={`${styles.h1Dark}`}>
                {inView && (
                    <CountUp
                    start={0}
                    end={15000}
                    duration={3}
                    separator=","
                    >   
                    </CountUp>
                )}
                </h1>
                <p className={` ${styles.p3Dark} capitalize tracking-wide`}>
                    Commissioning Issues Resolved Annually
                </p>
            </div>
        </div>
    </div>
  )
}

export  {AboutCompanyStats}