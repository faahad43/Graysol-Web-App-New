import React from 'react'
import Button from '../Components/Button'
import styles from '../styles'
import Input from '../Components/Input'
import TrustPilot from '../assets/img/Trustpilot.png'
import GoogleLogo from '../assets/img/GoogleLogo.png'
import Star from '../assets/icons/Star.svg'

const Question = () => {
  return (
    <div className='bg-dark-900 w-screen flex flex-col items-center justify-center py-8 lg:py-20 gap-10 lg:gap-20'>
        <form className='w-[90%] sm:w-[80%] max-w-[1138px] bg-primary-700 rounded flex flex-col items-center justify-center py-5 lg:py-8 px-5 text-center text-light-900 gap-3 rounded-xl'>
           <div>
                <h2 className={`${styles.headingText}`}>Got questions?</h2>
                <p className='w-11/12 mx-auto text-center font-light lg:font-normal text-[14px] md:text-[17px] lg:text-[21px] xl:text-[25px] my-2'>We'll be happy to answer. A solutions specialist will get back to you within 12 hours.</p>
           </div>
            <div className='flex flex-col md:flex-row md:justify-around items-center w-full gap-2 md:gap-0 '>
                <Input className='w-11/12 md:w-5/12 ' placeholder='Your Name' section='question'/>
                <Input className='w-11/12 md:w-5/12' placeholder='Your Email' section='question'/>
            </div>
            <textarea className='w-11/12 h-32  text-neutral-default rounded px-2 py-[6px] placeholder-neutral-default placeholder:opacity-80 focus:placeholder-opacity-50 text-[12px] resize-none font-light md:font-normal lg:font-medium tracking-wide' placeholder='How can we help you?' resize name="" id=""></textarea>
            <Button name='Submit' className='px-10 rounded-lg mt-5 text-sm'/>
        </form>
        <div className='w-[calc(100%-3vw)] bg-light-500 py-4 lg:py-6 xl:py-9 gap-4 md:gap-12 lg:gap-20 flex flex-col md:flex-row md:justify-center  items-center'>
            <div className='flex'>
                <img className='w-[105px] lg:w-[140px] xl:w-[195px]' src={TrustPilot} alt="" />
                <div className='flex items-end gap-[2px]'>
                    <div className='flex'>
                        {Array.from({length: 5},(_,index)=>(
                            <img key={index} className='w-[18px] lg:w-[25px] xl:w-[33px]' src={Star} alt="" />
                        ))}
                    </div>
                    <p className='text-[10px] lg:text-[13px] xl:text-[16px]'>
                        <span className='font-semibold'>4.7</span>/5 based on <span className='underline'>363 Reviews</span>
                    </p>
                </div>
            </div>
            <div className='flex'>
                <img className='w-[105px] lg:w-[140px] xl:w-[136px]' src={GoogleLogo} alt="" />
                <div className='flex items-center gap-[2px]'>
                    <div className='flex'>
                        {Array.from({length: 5},(_,index)=>(
                            <img key={index} className='w-[18px] lg:w-[25px] xl:w-[33px]' src={Star} alt="" />
                        ))}
                    </div>
                    <p className='text-[10px] lg:text-[13px] xl:text-[16px] md:pt-[5px] xl:pt-[10px]'>
                        <span className='font-semibold'>4.7</span>/5 based on <span className='underline'>363 Reviews</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question