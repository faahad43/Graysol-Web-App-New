import React from 'react'
import styles from '../styles.js'

export const BlogPost1 = ({title='',time='',coverPic=''}) => {
  return (
<div className='bg-dark-900 py-12 px-[7%] md:px-[10%] lg:px-[15%] xl:px-[20%] space-y-8'>
      <h1 className={styles.h3}>{title}</h1>
      <p className={styles.p2}>{time} Read</p>
      <img 
        src={coverPic}
        alt="Blog cover photo"
        className={`md:h-[25rem] xl:h-[30rem] object-cover rounded-none`}
       />
      {/* add the dynamic content here */}
       <div className={`${styles.p2} space-y-8`}>

        <p >
          <span className={`${styles.h4Heavy}`}>Cybersecurity</span> is a battlefield where hidden adversaries launch silent attacks, and digital detectives are tasked with uncovering their tracks. Just like a detective in a crime scene, a cybersecurity investigator must approach each alert with a vigilant and methodical mindset. In this blog, we’ll explore the art of thinking like a detective while investigating cybersecurity alerts, focusing on the critical phase of Reconnaissance.
        </p>

        <div className='space-y-2'>
          <p className={`${styles.p1Heavy}`}>Understanding the Investigation Process</p>
          <p>
            In the world of cybersecurity, investigations are akin to solving intricate puzzles. They are necessary when a security alert is triggered, indicating a potential security breach. The primary goal of an investigation is to understand what happened, how it happened, and what can be done to prevent it from happening again.
          </p>
        </div>

       </div>
    </div>
  )
}
