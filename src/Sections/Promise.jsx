import React from 'react'
import styles from '../styles'
import PromiseCard from '../Components/PromiseCard'
import Like from "../assets/icons/like.svg";
import Shield from "../assets/icons/shield.svg"; 
import Heart from "../assets/icons/heart.svg";
import Button from '../Components/Button';

const Promise = () => {

  const promiseCard1 ="To provide professional and caring outsourced support and server management services.";
  const promiseCard2 ="To provide 24/7/365 certified server administrators working to an industry-leading SLA for you and your customers.";
  const promiseCard3 ="Provide high-quality outsourced support services with flexible billing options to match your company’s needs.";


  return (
    <div className='bg-dark-900 flex flex-col items-center justify-center gap-12 py-10'>
        <h2 className={styles.headingText}>Our Promise</h2>
        <div className='w-[80%] py-8 px-6 bg-light-900 rounded-2xl flex flex-col items-center justify-evenly gap-5'>
            <PromiseCard icon={Like} detail={promiseCard1} iconStyling='w-[45px] h-[43px]' cardStyling='h-[13rem]'/>
            <PromiseCard icon={Heart} detail={promiseCard2} iconStyling='w-[45px] h-[42px]' cardStyling='h-[13rem]'/>
            <PromiseCard icon={Shield} detail={promiseCard3} iconStyling='w-[35px] h-[47px]' cardStyling='h-[13rem]'/>
        </div>
        <div className='flex w-[80%]'>
            {/* image here that will be hidden on small screen */}
            <div className='flex flex-col gap-8'>
                <h2 className={`${styles.headingText} `}>Ensuring 100% Satisfaction</h2>
                <div>
                    <p className={`${styles.descriptionText} mb-4`}>Our team of software development & support engineers ensure uninterrupted service.</p>
                    <ul className={`${styles.descriptionText} list-disc list-outside space-y-2 ml-4`}>
                        <li >Experienced team of developers and support engineers</li>
                        <li>Proven track record of delivering successful software solutions</li>
                        <li>Utilization of the latest technologies and best practices</li>
                        <li>Agile development process for timely delivery and regular updates</li>
                        <li>24/7 availability and support</li>
                        <li>Competitive pricing and flexible engagement models</li>
                        <li>Commitment to client satisfaction</li>
                    </ul>
                </div>
                <Button name='Talk To us' className='px-4 rounded-[3px]'/>
            </div>
        </div>
    </div>
  )
}

export default Promise