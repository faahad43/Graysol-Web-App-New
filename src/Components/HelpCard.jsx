import React from 'react'
import styles from '../styles'

const HelpCard = ({page,title,description,index}) => {

  return (
    <div className={`${page === "Home"? 'h-[12.3rem]' :''} relative bg-light-900 w-[17rem]  rounded-sm text-dark-900 pl-8 pr-4 pt-5`}>
        <div className='absolute right-[calc(100%-1.5rem)] top-[calc(50%-1.5rem)] bg-primary-default w-12 h-12 rounded-full flex items-center justify-center text-light-900 text-2xl'>{index}</div>
        <h3 className={`font-medium text-[16px] mb-4`}>{title}</h3>
        <p className='text-[13px] font-light'>{description}</p>
    </div>
  )
}

export default HelpCard