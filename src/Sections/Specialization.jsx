import React from 'react'
import styles from '../styles'
import { IoIosArrowDown } from "react-icons/io";
import Button from '../Components/Button';

const Specialization = () => {

  const technologies = ['WEB', 'Hosting', 'Ruby', 'PHP', 'python', 'Cross-Platform']

  return (
    <div className='bg-dark-900 py-10 space-y-8'>
        <h1 className={`${styles.headingText} text-center`}>We specialize in</h1>
        <div className='bg-dark-700 mx-auto max-w-[1267px] rounded-2xl flex flex-col w-[85%] gap-y-12 md:gap-y-16 lg:gap-y-24 pb-10 md:pt-5 md:pb-20 lg:pt-8'>
            <div className=' grid place-items-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 md:gap-y-10 lg:gap-y-16'>
                {technologies.map((item,index)=>(
                    <div key={index} className='relative flex items-center justify-center py-5 border-b-2 border-primary-default w-44 h-24'>
                        <p className={`${styles.subHeadingText} text-center `}>{item}</p>
                        <div className='absolute bottom-2 right-2'>
                            <IoIosArrowDown size={22} color='#686767' />
                        </div>
                    </div>
                ))}
            </div>
            <Button name='chat with us' className='px-5 self-center'/>
        </div>
        
    </div>
  )
}

export default Specialization