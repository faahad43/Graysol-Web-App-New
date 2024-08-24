import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles'

export const ServiceCard = ({data={}}) => {
  return (
    <div className={`bg-light-900 rounded-3xl h-64 md:h-72 lg:h-80 flex items-center gap-4 py-4 px-3 sm:px-8 md:py-12 ${data.className}`}>
        <div className=' flex-[3_3_0] flex flex-col gap-8 items-center'>
          <div className='flex flex-col gap-2'>
              <p className={`${styles.h4HeavyDark}`}>{data.title}</p>
              <p className={`${styles.p2Dark}`}>{data.description} </p>
          </div>
          <Link to={data.link}>
          <button className={`${styles.p2} bg-dark-200 rounded-lg px-3 py-2 w-fit`}>Learn more</button>
          </Link>
        </div>
        <div className='flex-[2_2_0]'>
            <img className='' src={data.image} alt="" />
        </div>
    </div>
  )
}
