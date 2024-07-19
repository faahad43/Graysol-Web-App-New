import React from 'react'
import styles from '../styles'

const PromiseCard = ({icon, detail, iconStyling,cardStyling}) => {
  return (
    <div className={`${cardStyling} flex items-center justify-center gap-4 bg-dark-700 rounded-[10px] py-12 px-5 promiseCrad `}>
        <img className={`${iconStyling}`} src={icon} alt="" />
        <p className={styles.descriptionText}>{detail}</p>
    </div>
  )
}

export default PromiseCard