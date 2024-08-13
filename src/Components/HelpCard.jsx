import React from 'react'
import styles from '../styles'

const HelpCard = ({page,title,description,index}) => {

  return (
    <div className={`${page === "Home"? 'h-[15rem] md:h-[16rem] lg:h-[18rem] xl:h-[20rem] lg:pt-8' :'h-[10rem] md:h-[13rem] lg:h-[15rem] xl:h-[16rem]'} relative bg-light-900 w-[17rem] lg:w-[22rem] xl:w-[26rem]  rounded-sm text-dark-900 pl-8 xl:pl-10 pr-4 xl:pr-6 pt-5`}>
        <h3 className={`absolute right-[calc(100%-1.5rem)] top-[calc(50%-1.5rem)] lg:top-[calc(50%-2rem)] bg-primary-default w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center  ${styles.h3Heavy}`}>{index}</h3>
        <h5 className={`${styles.h5HeavyDark} mb-4`}>{title}</h5>
        <p className={`${styles.p2Dark}`}>{description}</p>
    </div>
  )
}

export {HelpCard}