import React from 'react'
import styles from '../styles'

const HelpCard = ({page,title,description,index}) => {

  return (
    <div className={`${page === "Home"? 'h-[12.3rem] lg:h-[14rem] xl:h-[20rem] lg:pt-8' :'h-[10rem] lg:h-[12rem] xl:h-[15rem]'} relative bg-light-900 w-[17rem] lg:w-[22rem] xl:w-[26rem]  rounded-sm text-dark-900 pl-8 xl:pl-10 pr-4 xl:pr-6 pt-5`}>
        <h3 className={`absolute right-[calc(100%-1.5rem)] top-[calc(50%-1.5rem)] bg-primary-default w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center  ${styles.h3Heavy}`}>{index}</h3>
        <h5 className={`${styles.h5HeavyDark} mb-4`}>{title}</h5>
        <p className='text-[13px] lg:text-[16px] xl:text-[20px] font-light lg:font-normal'>{description}</p>
    </div>
  )
}

export {HelpCard}