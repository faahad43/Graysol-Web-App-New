import React from 'react'
import styles from '../styles'

const Button = ({name="Button", className=''}) => {
  return (
    <button className={`${styles.p2} ${className} font-light bg-primary-default w-fit py-2 uppercase`}>{name}</button>
  )
}

export  {Button}