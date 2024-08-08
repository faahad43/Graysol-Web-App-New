import React from 'react'
import {Button} from '../Components/Button'
import styles from '../styles'
import { Paragraph } from 'react-bootstrap-icons';

const Banner = ({page="service"}) => {
  const serviceData = {
    heading:'Custom Wordpress Development Services',
    paragraph:"Every business is different. We provide 100% white label WordPress development to extend your website’s functionality to meet your specific requirements.",
    paragraph2:'',
    button:'see portfolio',
    sectionStyling:'pt-10 pb-12 sm:px-[15%] 2xl:px-[18%] sm:py-12 lg:py-16 xl:py-28',
    headingStyling:'mb-7 mb-9',
    paragraphStyling:'mb-10 mb-20'
  };

  const contactData = {
    heading:'Contact us',
    paragraph:"Graysol specialists are available to chat 24/7",
    paragraph2:'We\'re ready to tackle whatever you need to move your business forward.',
    button: 'call me ',
    sectionStyling:'pt-8 pb-16 md:pt-10 md:pb-20 xl:pb-28',
    headingStyling:'mb-3 lg:mb-5',
    paragraphStyling:'mb-8 lg:mb-12 xl:mb-20'
  }

  const data = page === 'service' ? serviceData : contactData;

  return (
    <section className={`${data.sectionStyling} w-screen bg-primary-600 flex flex-col items-center text-center px-[10%]`}>
            <h2 className={`${styles.headingText} ${data.headingStyling}`}>{data.heading}</h2>
            <div className={data.paragraphStyling}>
              <p className={styles.descriptionText}>{data.paragraph}</p>
              <p className={styles.descriptionText}>{data.paragraph2}</p>
            </div>
            <div className='space-x-6'>
              <button  className={`px-4 text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] bg-light-900 text-primary-default font-normal w-fit py-2 uppercase rounded-sm`}>CHAT WITH US</button>
              <button  className={`px-4 text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] bg-light-900 text-primary-default font-normal w-fit min-w-[8rem] py-2 uppercase rounded-sm `}>{data.button}</button>
            </div>
    </section>
  )
}

export  {Banner}