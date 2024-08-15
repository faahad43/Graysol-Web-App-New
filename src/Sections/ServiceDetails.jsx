import React from 'react'
import styles from '../styles'

const ServiceDetails = ({pageType=''}) => {
  return (
    <div className='w-screen bg-light-900 max-w-[1042px] mx-auto text-center py-12 lg:py-20  px-[10%] lg:px-0  space-y-5 sm:space-y-7 xl:space-y-9'>
        <h4 className={`${styles.h4HeavyDark} font-medium mb-7`} >
           {pageType.serviceDetailsTitle}
        </h4>
        <p className={`${styles.p2Dark} xl:leading-7`}>
            {pageType.serviceDetailsDescriptionPara1}
        </p>
        <p className={`${styles.p2Dark} xl:leading-7`}>
          {pageType.serviceDetailsDescriptionPara2}
        </p>
    </div>
  )
}

export {ServiceDetails}