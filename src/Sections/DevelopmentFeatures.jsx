import React from 'react'
import styles from '../styles'
import {DevelopmentCard} from '../Components/DevelopmentCard'
import Feature1 from '../assets/icons/feature1.svg'
import Feature2 from '../assets/icons/feature2.svg'
import Feature3 from '../assets/icons/feature3.svg'
import Feature4 from '../assets/icons/feature4.svg'
import Feature5 from '../assets/icons/feature5.svg'
import Feature6 from '../assets/icons/feature6.svg'

const DevelopmentFeatures = ({pageType=''}) => {

const cardStyles = {
    cardStyling :'text-light-900 bg-dark-900 h-52 md:h-80 lg:h-96 p-8 sm:gap-8 md:gap-4 lg:gap-8 sm:px-[12%] md:px-3 md:flex-col lg:p-12',
    headingStyle :`'${styles.p2Heavy} leading-snug'`,
    descriptionStyle :`${styles.p3} leading-snug`,
    footerStyle :`${styles.p4} underline decoration-dashed underline-offset-4 leading-snug`,

} 

const data = [
    {
        img:Feature1,
        imgStyle:'w-[70px] h-[70px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]',
        heading: pageType.developmentFeature[0].title,
        description: pageType.developmentFeature[0].description,
    },
    {
        img:Feature2,
        imgStyle:'w-[55px] h-[72px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]',
        heading: pageType.developmentFeature[1].title,
        description: pageType.developmentFeature[1].description,
    },
    {
        img:Feature3,
        imgStyle:'w-[65px] h-[66px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]',
        heading: pageType.developmentFeature[2].title,
        description: pageType.developmentFeature[2].description,
    },
    {
        img:Feature4,
        imgStyle:'w-[65px] h-[65px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]',
        heading: pageType.developmentFeature[3].title,
        description: pageType.developmentFeature[3].description,
    },
    {
        img:Feature5,
        imgStyle:'w-[65px] h-[72px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]',
        heading: pageType.developmentFeature[4].title,
        description: pageType.developmentFeature[4].description,
    },
    {
        img:Feature6,
        imgStyle:'w-[76px] h-[70px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]',
        heading: pageType.developmentFeature[5].title,
        description: pageType.developmentFeature[5].description,
    },
]

  return (
    <div className='bg-dark-900 py-16 text-center space-y-8'>
        <h1 className={styles.h1}>{pageType.developmentFeatureHeading}</h1>
        <div 
            className='bg-dark-700 max-w-[1267px] w-[90%] rounded-3xl mx-auto md:place-items-center grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-4 lg:gap-x-12 p-7 sm:px-12 md:px-5 lg:p-12'
        >
            {data.map((item,index)=> (
                <DevelopmentCard key={index} styles={cardStyles} img={item.img} imgStyle={item.imgStyle} heading={item.heading} description={item.description} footerText='Learn more'/>
            ))}
           
        </div>
    </div>
  )
}

export  {DevelopmentFeatures}