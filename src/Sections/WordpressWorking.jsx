import React from 'react'
import styles from '../styles'
import Button from '../Components/Button'
import Triangle from "../assets/icons/triangle.svg"
import { steps } from 'framer-motion'

const WordpressWorking = () => {

  const steps = ['Discovery','Iron out the kinks','Feasibility analysis','Develop the system','Deployment','Ongoing support'];

  return (
    <div className='bg-dark-900 py-8'>
        <div className='w-[85%] flex flex-col items-center mx-auto bg-dark-700 rounded-2xl text-center py-8 gap-8'>
            <h1 className={`${styles.headingText}`}>How it works</h1>
            <p className={`${styles.descriptionText} w-[80%]`}>
                From concept and design to coding and long-term-support, we work with you closely to make your project a success.
            </p>
            <div className='relative text-light-900 mt-6 mb-5 w-4/5'>
                <div className='absolute bg-primary-default w-1 h-full left-[calc(50%-2px)]'></div>
                {steps.map((step,index)=>(
                    <div 
                        className=
                        {
                            `relative flex items-start justify-end gap-2 py-2 w-1/2  
                            ${index===5 ?'h-8':'h-24'} ${(index+1)%2 === 0 ? 'left-0': 'left-1/2 flex-row-reverse'}`
                        }
                    >
                        <p className='text-[14px] md:text-[16px] lg:text-[18px]'>
                            Step {index+1} -<br/> {step} 
                        </p>
                        <img 
                            className=
                            {`w-[27px] ${(index+1)%2 === 0 ? 'rotate-90': '-rotate-90'}`}
                            src={Triangle} alt="" 
                        />
                    </div>
                ))}
                
            </div>
            <p className='text-light-900 text-[12px] md:text-[14px] lg:text-[16px] font-light lg:font-normal w-[80%]'>
                Not sure how we can help you? 
                <span className='text-secondary-600'>
                    &nbsp;Click here to talk to our expert.
                </span>
            </p>
            <Button name='GET A QUOTE FOR YOUR PROJECT' className={`px-3 text-[]`}/>
        </div>
    </div>
  )
}

export default WordpressWorking