import React from 'react'
import styles from '../styles.js'
import { NavLink } from 'react-router-dom'

const BlogCard = ({data=''}) => {
  return (
    <div className='space-y-3 h-[26rem] text-light-900 text-center sm:text-start'>
      <div className='space-y-2'>
        <NavLink to={`/blog/path/${data.id}`} ><img className='rounded-xl cursor-pointe object-cover h-56' src={data.image} alt="" /></NavLink>
        <p className={`pl-2 uppercase ${styles.p3Heavy}`}>{data.time}</p>
      </div>
      <div className='pl-2 w-[100%] md:w-[90%] space-y-8'>
        <NavLink to={`/blog/path/${data.id}`} >
          <p className={`${styles.p3Heavy} h-14 capitalize tracking-wider cursor-pointer`}>
          {(data.title).length > 100 ? (data.title).substring(0, 100) + '...' : data.title}
          </p>
        </NavLink>
        <div className={`${styles.p5} flex gap-3 justify-center sm:justify-start tracking-wider`}>
          {data.feature && <p className='bg-primary-default text-center py-2 rounded-md w-20'>Featured</p> }
          {data.press && <p className='bg-primary-default text-center py-2 rounded-md w-20'>Press</p> }
          {data.insight && <p className='bg-primary-default text-center py-2 rounded-md w-20'>Insights</p> }
          {data.graynews && <p className='bg-primary-default text-center py-2 rounded-md w-24'>Gray News</p> }
        </div>
      </div>
    </div>
  )
}

export {BlogCard}