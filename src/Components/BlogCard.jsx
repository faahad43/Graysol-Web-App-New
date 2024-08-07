import React from 'react'
import BlogCardImage from '../assets/img/BlogCoverPic1.png'

const BlogCard = () => {
  return (
    <div className='space-y-3 text-light-900 text-center sm:text-start'>
      <div className='space-y-2'>
        <img className='rounded-xl' src={BlogCardImage} alt="" />
        <p className='pl-2 uppercase text-[15px] md:text-[18px] '>1 min</p>
      </div>
      <div className='pl-2 w-[100%] md:w-[85%] space-y-8'>
        <p className='text-[14px] font-light capitalize tracking-wider '>
          Walker Mattox, CEO of Gray Solutions, on Building a Dynamic Team of Solutioneers
        </p>
        <div className='flex gap-3 justify-center sm:justify-start text-light text-[12px] tracking-wider'>
          <p className='bg-primary-default text-center py-2 rounded-md w-20'>Featured</p>
          <p className='bg-primary-default text-center py-2 rounded-md w-20'>Press</p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard