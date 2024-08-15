import React from 'react'
import {Button} from '../Components/Button'
import styles from '../styles'
import { Paragraph } from 'react-bootstrap-icons';
import { wordpressPage } from './servicesData';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';


const Banner = ({page="service",pageType=""}) => {
  const serviceData = {
    heading: pageType.bannerTitle,
    paragraph: pageType.bannerDescription,
    paragraph2:'',
    button:'see portfolio',
    sectionStyling:'pt-10 pb-12 sm:px-[15%] 2xl:px-[18%] sm:py-12 lg:py-16 xl:py-28',
    headingStyling:`${styles.h2} mb-6 mb-9`,
    paragraphStyling:'mb-10 md:mb-20'
  };

  const contactData = {
    heading:'Contact Us',
    paragraph:"Graysol specialists are available to chat 24/7",
    paragraph2:'We\'re ready to tackle whatever you need to move your business forward.',
    button: 'call me ',
    sectionStyling:'pt-8 pb-16 md:pt-10 md:pb-20 xl:pb-28',
    headingStyling:`${styles.h3} mb-3 lg:mb-5`,
    paragraphStyling:'mb-8 lg:mb-12 xl:mb-20'
  }

  const data = page === 'service' ? serviceData : contactData;

  /**
   * Scrolls immediately to a section identified by its ID on the page.
   *
   * @param {string} sectionId - The ID of the section to scroll to.
   */

  const scrollToSection = (sectionName) => {
    setTimeout(() => {
        scroller.scrollTo(sectionName, {
          duration: 100,
          smooth: 'easeInOutQuart',
          offset:-50
        });
      }, 100);
  }

  return (
    <section className={`${data.sectionStyling} w-screen bg-primary-600 flex flex-col items-center text-center px-[10%]`}>
            <h2 className={` ${data.headingStyling}`}>{data.heading}</h2>
            <div className={data.paragraphStyling}>
              <p className={styles.p2}>{data.paragraph}</p>
              <p className={styles.p2}>{data.paragraph2}</p>
            </div>
            <div className='space-x-6'>
            <Link 
              to='/contact'
              onClick={() => scrollToSection('contact-form')}
            >
              <button 
                className={`px-4 text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] bg-light-900 text-primary-default font-normal w-fit py-3 uppercase rounded-sm`}>CHAT WITH US</button>
            </Link>
            {page === 'service' ?
              <Link 
              to='/portfolio'
              onClick={() => scrollToSection('contact-form')}
            >
              <button  className={`px-4 text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] bg-light-900 text-primary-default font-normal w-fit min-w-[8rem] py-3 uppercase rounded-sm `}>{data.button}</button>
              </Link> 
              : //else condition if the page is contact
              <Link 
              to='/contact'
              onClick={() => scrollToSection('phone-no')}
            >
              <button  className={`px-4 text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] bg-light-900 text-primary-default font-normal w-fit min-w-[8rem] py-3 uppercase rounded-sm `}>{data.button}</button>
              </Link>
            }
            
            </div>
    </section>
  )
}

export  {Banner}