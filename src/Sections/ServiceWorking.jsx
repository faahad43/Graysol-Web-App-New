import React from 'react'
import styles from '../styles'
import {Button} from '../Components/Button'
import Triangle from "../assets/icons/triangle.svg"
import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll'


const ServiceWorking = ({pageType=''}) => {

 const scrollToSection = (sectionName) => {
    setTimeout(() => {
        scroller.scrollTo(sectionName, {
            duration: 100,
            smooth: 'easeInOutQuart',
            offset:-300
        });
        }, 100);
    }

  return (
    <div className='bg-dark-900 py-8'>
        <div className='w-[85%] max-w-[1134px] flex flex-col items-center mx-auto bg-dark-700 rounded-2xl text-center py-8 lg:py-14 gap-8'>
            <h1 className={`${styles.h1}`}>How it works</h1>
            <h6 className={`${styles.h6} w-[80%]`}>
                From concept and design to coding and long-term-support, we work with you closely to make your project a success.
            </h6>
            <div className='relative text-light-900 flex flex-col md:flex-row mt-6 md:mt-24 mb-5 md:mb-16 w-[80%]  '>
                <div className='absolute bg-primary-default w-1 h-full md:w-full md:h-1 left-[calc(50%-2px)] md:left-0 md:top-[calc(50%-2px)] '></div>
                {/* The logic below is used to print the 6 steps and the conditonal rendering on basis of index is used to print them on left and right side of screen. On larger screen the line is inverted by chaning its width into height and vice and versa */}
                {pageType.developmentLifeCycle.map((step,index)=>(
                    <div 
                        className=
                        {
                            `relative flex md:flex-col items-start justify-end  gap-2  py-2 w-1/2 
                            ${index===5 ?'h-8 md:h-24 md:w-8':'h-24 '} ${(index+1)%2 !== 0 ? 'left-0 md:flex-col-reverse md:top-11': 'left-1/2 md:left-0 md:-top-11 flex-row-reverse'}`
                        }
                        
                    >
                        {/* specifies the width for the last heading otherwise it wasn't disrupted because its parent width is relatively less than other */}
                        <p 
                            className=
                            {
                                `${styles.p3} md:transform md:-translate-x-1/2 ${index===5 ? 'md:w-36':''}`
                            }
                        >
                            Step {index+1} -<br className='md:hidden'/> {step} 
                        </p>
                        <img 
                            className=
                            {`w-[27px]  ${(index+1)%2 !== 0 ? 'rotate-90 md:rotate-0': '-rotate-90 md:rotate-180'}`}
                            src={Triangle} alt="" 
                        />
                    </div>
                ))}
                
            </div>
            <p className={`${styles.p4} w-[80%]`}>
                Not sure how we can help you? 
                <Link
                    to='/about'
                    onClick={()=> scrollToSection('contact-form2')}
                >
                    <span className='text-secondary-600'>
                        &nbsp;Click here to talk to our expert.
                    </span>
                </Link>
            </p>
            <Button name='GET A QUOTE FOR YOUR PROJECT' className={` px-3 md:px-5 rounded-lg`}/>
        </div>
    </div>
  )
}

export {ServiceWorking}