import React from 'react'

const DevelopmentCard = ({styles='',img,imgStyle,heading,description,footerText=''}) => {
  return (
    <div className={`${styles.cardStyling} rounded-3xl flex items-center justify-center gap-4`}>
        <img className={`${imgStyle}`} src={img} alt="" />
        <div className='flex flex-col gap-4'>
            <p className={`${styles.headingStyle}`}>
                {heading}
            </p>
            <p className={`${styles.descriptionStyle}`}>
                {description}
            </p>
            <p className={`${styles.footerStyle} `}>
                {footerText}
            </p>
        </div>

    </div>
  )
}

export  {DevelopmentCard}