import React from 'react'
import Button from '../Components/Button'
import styles from '../styles'
import Input from '../Components/Input'
import TrustPilot from '../assets/img/Trustpilot.png'
import GoogleLogo from '../assets/img/GoogleLogo.png'
import Star from '../assets/icons/Star.svg'

const Question = () => {
  return (
    <div className='bg-dark-900 flex flex-col items-center justify-center py-8 gap-10'>
        <Button name='Ask a question' className='px-4 rounded-[3px]'/>
        <div className='w-[90%] bg-primary-700 rounded flex flex-col items-center justify-center py-5 px-5 text-center text-light-900 gap-3 rounded-xl'>
           <div>
            <h2 className={`${styles.headingText}`}>Got questions?</h2>
            <p className='text-[14px] my-2'>We'll be happy to answer. A solutions specialist will get back to you within 12 hours.</p>
           </div>
            <div className='flex flex-col items-center w-full gap-2'>
                <Input className='w-11/12' placeholder='Your Name'/>
                <Input className='w-11/12' placeholder='Your Email'/>
            </div>
            <textarea className='w-11/12 h-32  text-neutral-default rounded px-2 py-[6px] placeholder-neutral-default focus:placeholder-opacity-50 text-[12px] resize-none' placeholder='How can we help you?' resize name="" id=""></textarea>
            <Button name='Submit' className='px-10 rounded-lg mt-5 text-sm'/>
        </div>
        <div className='w-[calc(100%-2vw)] bg-light-500 py-4 gap-4 flex flex-col items-center'>
            <div className='flex'>
                <img className='w-[105px]' src={TrustPilot} alt="" />
                <div className='flex items-end gap-[2px]'>
                    <div className='flex'>
                        {Array.from({length: 5},(_,index)=>(
                            <img key={index} className='w-[18px]' src={Star} alt="" />
                        ))}
                    </div>
                    <p className='text-[10px]'>
                        <span className='font-semibold'>4.7</span>/5 based on <span className='underline'>363 Reviews</span>
                    </p>
                </div>
            </div>
            <div className='flex'>
                <img className='w-[105px]' src={GoogleLogo} alt="" />
                <div className='flex items-center gap-[2px]'>
                    <div className='flex'>
                        {Array.from({length: 5},(_,index)=>(
                            <img key={index} className='w-[18px]' src={Star} alt="" />
                        ))}
                    </div>
                    <p className='text-[10px]'>
                        <span className='font-semibold'>4.7</span>/5 based on <span className='underline'>363 Reviews</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question