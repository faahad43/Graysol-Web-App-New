import React from 'react'
import styles from '../styles'

const Button = ({name="Button", className=''}) => {
  return (
    <button className={`${styles.descriptionText} ${className} font-light bg-primary-default w-fit py-2 uppercase`}>{name}</button>
  )
}

export  {Button}