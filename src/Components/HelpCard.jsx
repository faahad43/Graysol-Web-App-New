import React from 'react'
import styles from '../styles'

const HelpCard = ({page,title,description,index}) => {

  return (
    <div className={`${page === "Home"? 'h-[12.3rem] lg:h-[14rem] xl:h-[20rem] lg:pt-8' :'h-[10rem] lg:h-[12rem] xl:h-[15rem]'} relative bg-light-900 w-[17rem] lg:w-[22rem] xl:w-[26rem]  rounded-sm text-dark-900 pl-8 xl:pl-10 pr-4 xl:pr-6 pt-5`}>
        <div className='absolute right-[calc(100%-1.5rem)] top-[calc(50%-1.5rem)] bg-primary-default w-12 h-12 rounded-full flex items-center justify-center text-light-900 text-2xl'>{index}</div>
        <h3 className={`font-normal text-[16px] md:text[20px] lg:text-[25px] xl:text-[30px] mb-4`}>{title}</h3>
        <p className='text-[13px] lg:text-[16px] xl:text-[20px] font-light lg:font-normal'>{description}</p>
    </div>
  )
}

export default HelpCard