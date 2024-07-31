import React from 'react'
import styles from '../styles'

const CompanyVision = () => {
  return (
    <div className='bg-dark-900 pt-12 pb-8 text-light-900'>

      <div className='space-y-3'>
        <h2 className={`${styles.aboutUsHeading} capitalize text-center`}>
            what we believe in
        </h2>
        <h5 className={`font-medium text-[20px] xl:text-[40px] text-center capitalize tracking-wide`}>
          Trust, safety, and 
          <span className='text-primary-default'>
            &nbsp;people-first&nbsp;
          </span> 
          collaboration always.
        </h5>
      </div>

      <div>
        vision
      </div>

    </div>
  )
}

export default CompanyVision