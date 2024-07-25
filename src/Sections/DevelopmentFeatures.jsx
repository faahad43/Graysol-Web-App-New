import React from 'react'
import styles from '../styles'
import DevelopmentCard from '../Components/DevelopmentCard'
import Feature1 from '../assets/icons/feature1.svg'
import Feature2 from '../assets/icons/feature2.svg'
import Feature3 from '../assets/icons/feature3.svg'
import Feature4 from '../assets/icons/feature4.svg'
import Feature5 from '../assets/icons/feature5.svg'
import Feature6 from '../assets/icons/feature6.svg'

const DevelopmentFeatures = () => {

const cardStyles = {
    cardStyling :'text-light-900 bg-dark-900 h-52 p-8',
    headingStyle :'text-[18px] lg:text-[19px] xl:text-[20px] font-normal lg:font-medium leading-snug',
    descriptionStyle :'text-[16px] lg:text-[17px] xl:text-[18px] font-light lg:font-normal leading-snug',
    footerStyle :'text-[14px] xl:text-[17px] font-light lg:font-normal underline decoration-dashed underline-offset-4 leading-snug',

} 

const data = [
    {
        img:Feature1,
        imgStyle:'w-[70px] h-[70px]',
        heading:'All Development Models',
        description:'We enable you to get things done – fast',
    },
    {
        img:Feature2,
        imgStyle:'w-[55px] h-[72px]',
        heading:'Boost Product Security',
        description:'A history of making secure applications',
    },
    {
        img:Feature3,
        imgStyle:'w-[65px] h-[66px]',
        heading:'Quick Start',
        description:'No wait period. Start your project right now!',
    },
    {
        img:Feature4,
        imgStyle:'w-[65px] h-[65px]',
        heading:'Cost Optimization',
        description:'20 years of enabling affordable dev solutions',
    },
    {
        img:Feature5,
        imgStyle:'w-[65px] h-[72px]',
        heading:'Project Tracking',
        description:'We realize a great partner gives great updates',
    },
    {
        img:Feature6,
        imgStyle:'w-[76px] h-[70px]',
        heading:'Trustworthy Record',
        description:'We’re reviewed publicly and have been around a long time',
    },
]

  return (
    <div className='bg-dark-900 py-16 text-center space-y-8'>
        <h1 className={styles.headingText}>Software Development Features</h1>
        <div className='bg-dark-700 grid grid-cols-1 space-y-5 max-w-[1267px] w-[90%] p-7 mx-auto rounded-3xl'>
            {data.map((item,index)=> (
                <DevelopmentCard key={index} styles={cardStyles} img={item.img} imgStyle={item.imgStyle} heading={item.heading} description={item.description} footerText='Learn more'/>
            ))}
           
        </div>
    </div>
  )
}

export default DevelopmentFeatures