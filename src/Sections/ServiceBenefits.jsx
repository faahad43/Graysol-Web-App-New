import React from 'react';
import styles from '../styles';
import Atom from  '../assets/icons/feature1.svg';
import Sheild from '../assets/icons/feature2.svg';
import Clock from '../assets/icons/whiteClock.svg';
import Warning from '../assets/icons/warning.svg';
import Arrow from '../assets/icons/doubleArrow.svg';
import Settings from '../assets/icons/settings.svg';
import SheildIcon from '../assets/icons/shield.svg';
import Like from '../assets/icons/like.svg';
import Notebook from '../assets/icons/notebook.svg';
import {DevelopmentCard} from '../Components/DevelopmentCard';

function ServiceBenefits({pageType=''}) {
  

  const cardStyles = {
    cardStyling :'cardShadow text-dark-900 bg-light-900 h-68 px-4 pt-3 sm:py-8 lg:py-6 xl:py-8 sm:px-[8%] lg:px-4 xl:px-6  sm:gap-8 lg:gap-4 lg:flex-col lg:flex-1 ',
    headingStyle :`${styles.p1HeavyDark} leading-snug`,
    descriptionStyle :`${styles.p4Dark} leading-snug`,
   
} 

const data = [
    {
        img:Like,
        imgStyle:'w-[50px] h-[49px]',
        heading: pageType.serviceBenefitCards[0].title,
        description: pageType.serviceBenefitCards[0].description,
    },
    {
        img:Notebook,
        imgStyle:'w-[40px] h-[55px]',
        heading: pageType.serviceBenefitCards[1].title,
        description: pageType.serviceBenefitCards[1].description,
    },
    {
        img:SheildIcon,
        imgStyle:'w-[40px] h-[50px]',
        heading:pageType.serviceBenefitCards[2].title,
        description: pageType.serviceBenefitCards[2].description,
    },
  ]
  
  return (
    <div className='bg-dark-900 text-center py-12 space-y-16'>
          <h1 className={`${styles.h1} w-4/5 lg:w-3/4 2xl:w-3/5 mx-auto`}>
              Benefits of Software Development Outsourcing
          </h1>
          <div className='flex'>
            <div className='w-[80%] xl:w-[75%]  mx-auto text-light-900 grid grid-cols-6 md:grid-cols-12 border-primary-default'>
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default col-span-1 md:hidden'></div>
                  <div className='relative col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-x-0 border-b-2 border-primary-default flex flex-col items-center gap-3 lg:gap-5 pt-10 pb-5 xl:pb-8 px-4 lg:px-6 after:hidden lg:after:block after:absolute after:w-screen after:border-t-2 after:border-primary-default after:-bottom-[2px] after:-left-[40%] xl:after:-left-[50%] '>
                    {/* The absolute in the above div is for the line that shows on larger screen extending the borders */}
                    <img className='w-[40px] md:w-[55px] ' src={Settings} alt="" />
                    <p className={`${styles.p1}`}>
                      {pageType.serviceBenefitGrids[0].title}
                    </p>
                    <p className={`${styles.p4}`}>
                      {pageType.serviceBenefitGrids[0].description}
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div> 
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-r-0  border-b-2 border-primary-default flex flex-col items-center gap-3 lg:gap-5 pt-10 pb-5 xl:pb-8 px-4 lg:px-6'>
                    <img className='w-[30px] md:w-[35px]' src={Arrow} alt="" />
                    <p className={`${styles.p1}`}>
                    {pageType.serviceBenefitGrids[1].title}
                    </p>
                    <p className={`${styles.p4}`}>
                    {pageType.serviceBenefitGrids[1].description}
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div> 
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-x-0 lg:border-l-2 border-b-2 border-primary-default flex flex-col items-center gap-3 lg:gap-5 pt-10 pb-5 xl:pb-8 px-4 lg:px-6'>
                    <img className='w-[40px] md:w-[45px]' src={Warning} alt="" />
                    <p className={`${styles.p1}`}>
                    {pageType.serviceBenefitGrids[2].title}
                    </p>
                    <p className={`${styles.p4}`}>
                    {pageType.serviceBenefitGrids[2].description}
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div>  
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-r-0 lg:border-l-0 border-b-2  lg:border-b-0 border-primary-default flex flex-col items-center gap-3 lg:gap-5 pt-10 pb-5 xl:pb-8 px-4 lg:px-6'>
                    <img className='w-[40px] md:w-[45px]' src={Clock} alt="" />
                    <p className={`${styles.p1}`}>
                    {pageType.serviceBenefitGrids[3].title}
                    </p>
                    <p className={`${styles.p4}`}>
                    {pageType.serviceBenefitGrids[3].description}
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div>  
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-x-0 lg:border-l-2 border-b-2 md:border-b-0 border-primary-default flex flex-col items-center gap-3 lg:gap-5 pt-10 pb-5 xl:pb-8 px-4 lg:px-6'>
                    <img className='w-[40px] md:w-[45px]' src={Sheild} alt="" />
                    <p className={`${styles.p1}`}>
                    {pageType.serviceBenefitGrids[4].title}
                    </p>
                    <p className={`${styles.p4}`}>
                    {pageType.serviceBenefitGrids[4].description}
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div>  
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-r-0 border-primary-default flex flex-col items-center gap-3 lg:gap-5 pt-10 pb-5 xl:pb-8 px-4 lg:px-6'>
                    <img className='w-[40px] md:w-[50px]' src={Atom} alt="" />
                    <p className={`${styles.p1}`}>
                    {pageType.serviceBenefitGrids[5].title}
                    </p>
                    <p className={`${styles.p4}`}>
                    {pageType.serviceBenefitGrids[5].description}
                    </p>
                  </div>
                  <div className='md:hidden'></div>
              </div> 
            </div>
            
          </div>

          <div className='w-[90%] max-w-[1150px] mx-auto rounded-2xl bg-dark-700 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-4 xl:gap-8 2xl:gap-16 p-8 sm:px-[5%] lg:px-6 xl:px-10 2xl:px-16 sm:py-12 xl:py-20'>
            {data.map((item,index) => (
                <DevelopmentCard key={index} heading={item.heading} description={item.description} img={item.img} imgStyle={item.imgStyle} styles={cardStyles}/>
            ))}
          </div>
          
    </div>
  );
}

export { ServiceBenefits};
