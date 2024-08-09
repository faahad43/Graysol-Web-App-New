import React from 'react'
import BlogCardImage from '../assets/img/BlogCoverPic1.png'
import styles from '../styles.js'

const BlogCard = () => {
  return (
    <div className='space-y-3 text-light-900 text-center sm:text-start'>
      <div className='space-y-2'>
        <img className='rounded-xl' src={BlogCardImage} alt="" />
        <p className={`pl-2 uppercase ${styles.p3Heavy}`}>1 min</p>
      </div>
      <div className='pl-2 w-[100%] md:w-[85%] space-y-8'>
        <p className={`${styles.p3Heavy} capitalize tracking-wider`}>
          Walker Mattox, CEO of Gray Solutions, on Building a Dynamic Team of Solutioneers
        </p>
        <div className={`${styles.p5} flex gap-3 justify-center sm:justify-start tracking-wider`}>
          <p className='bg-primary-default text-center py-2 rounded-md w-20'>Featured</p>
          <p className='bg-primary-default text-center py-2 rounded-md w-20'>Press</p>
        </div>
      </div>
    </div>
  )
}

export {BlogCard}