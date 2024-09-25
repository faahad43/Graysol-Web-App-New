import React from 'react'
import styles from '../styles'

const PromiseCard = ({icon, detail, iconStyling,cardStyling}) => {
  return (
    <div className={`${cardStyling} flex flex-1 items-center justify-center gap-4 sm:gap-7 lg:gap-3 xl:gap-7  bg-dark-700 rounded-[10px] py-12 px-5 sm:px-8 lg:px-4 xl:px-6 cardShadow `}>
        <img className={`${iconStyling}`} src={icon} alt="" />
        <p className={`${styles.p2}`}>{detail}</p>
    </div>
  )
}

export {PromiseCard}