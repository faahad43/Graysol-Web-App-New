import React from 'react'
import styles from '../styles'

const Button = ({name="Button",type='',vlaue='' ,className='', onClick=''}) => {
  return (
    <button
     className={`${styles.p2} ${className} font-light bg-primary-default w-fit py-2 uppercase`}
     onClick={onClick}
     type={type}
     value={vlaue}
    >
      {name}
    </button>
  )
}

export  {Button}