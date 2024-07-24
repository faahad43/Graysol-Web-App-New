import React, { useState } from 'react'
import styles from '../styles'
import Button from '../Components/Button'

const Faq = () => {
  const [toggleIcon, setToggleIcon] = useState(true);

  const faqs = [
    {
        question : 'What is software development outsourcing?',
        answer :'We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.'
    },
    {
        question : 'Why do businesses prefer software development outsourcing?',
        answer :'We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.'
    },
    {
        question : 'What are the perks of choosing Graysol for software development outsourcing?',
        answer :'We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.'
    },
    {
        question : 'What are the software development & support services offered by Graysol?',
        answer :'We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.'
    },
    {
        question : 'What are the different approaches for software development?',
        answer :'We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.'
    },
    {
        question : 'What are the steps in the software development process?',
        answer :'We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.'
    },
    {
        question : 'What types of cross-platform development services does Graysol offer?',
        answer :'We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.'
    },{
        question : 'What is cross-platform development?',
        answer :''
    },
    {
        question : 'What measures are taken to guarantee product quality?',
        answer :''
    },
    {
        question : 'What industries does Graysol work with?',
        answer :''
    },
  ]

  function toggleFAQ(event) {
    setToggleIcon(!toggleIcon);
    const button = event.currentTarget;
    const content = button.nextElementSibling;
    button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "false" ? "true" : "false");
    content.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? content.scrollHeight + "px" : "0";
  }

  return (
    <div className={`${styles.descriptionText} bg-dark-900 py-3 flex flex-col items-center gap-8 w-screen`}>
        <h4 className={`${styles.subHeadingText}  text-secondary-default`}>F.A.Q</h4>
        <h2 className={`${styles.headingText} text-center leading-snug lg:leading-tight`}>Frequently asked <br />questions</h2>
        <div className="w-[90%] sm:w-[80%] px-4 sm:px-8 pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-10 lg:mt-5 max-w-[1138px] border-2 border-primary-default rounded-lg bg-light-900 text-dark-900">
        
        <ul className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-6 lg:gap-x-12 lg:py-8 md:px-4 lg:px-16">
            {faqs.map((faq,index)=>(
                    <li key={index} className='border-b-[1px] mb-4 lg:mb-6 border-primary-default'>
                    <button className="relative flex gap-2 items-end w-full pb-3 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded={false} onClick={toggleFAQ}>
                        <span className="flex-1 text-base-content font-normal text-[14px] lg:text-[17px] xl:text-[20px] leading-sung">{faq.question}</span>
                        <svg className=" flex-shrink-0 w-[18px] h-[18px] ml-auto fill-current bg-primary-default p-[3px] rounded-full" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <rect y="6" width="15" height="3" rx="1" 
                            className="transform origin-center transition duration-200 ease-out false text-light-900 rounded-full"></rect>
                            <rect y="6.5" width="15" height="3" rx="1" className={`${toggleIcon?'visible':'hidden'} transform origin-center rotate-90 transition duration-200 ease-out false text-light-900 rounded-full`}></rect>
                        </svg>
                    </button>
                    <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s;' }}>
                        <div className="pb-3 leading-relaxed">
                            <div className="space-y-2 leading-relaxed text-[14px] lg:text-[17px] xl:text-[18px] font-light leading-sung">{faq.answer}</div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    <Button name='Ask a question' className='px-4 lg:mt-10 rounded-[3px]'/>
    </div>
  )
}

export default Faq
