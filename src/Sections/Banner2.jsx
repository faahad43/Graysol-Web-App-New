import React from 'react'
import Button from '../Components/Button'
import styles from '../styles'
import { Paragraph } from 'react-bootstrap-icons';

const Banner2 = ({page="service"}) => {
  const serviceData = {
    heading:'Custom Wordpress Development Services',
    paragraph:"Every business is different. We provide 100% white label WordPress development to extend your website’s functionality to meet your specific requirements.",
    paragraph2:'',
    button:'see portfolio',
    sectionStyling:'pt-10 pb-12',
    headingStyling:'mb-7',
    paragraphStyling:'mb-10'
  };

  const contactData = {
    heading:'Contact us',
    paragraph:"Graysol specialists are available to chat 24/7",
    paragraph2:'We\'re ready to tackle whatever you need to move your business forward.',
    button: 'call me ',
    sectionStyling:'pt-8 pb-16',
    headingStyling:'mb-3',
    paragraphStyling:'mb-8'
  }

  const data = page === 'service' ? serviceData : contactData;

  return (
    <section className={`${data.sectionStyling} w-screen bg-primary-600 flex flex-col items-center text-center px-[10%]`}>
            <div className={`${styles.headingText} ${data.headingStyling}`}>{data.heading}</div>
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

export default Banner2