import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { NotFound } from './NotFound.jsx';
import styles from '../styles.js';

import useGetBlogs from '../hooks/useGetBlogs.js';

export const BlogPost = () => {

  const { title } = useParams(); // Get the blog ID from the URL
  const formatedTitle = title.replace(/-/g,' ');

  const {blogs} = useGetBlogs();
  
  const blog = blogs.find((item) => item.title.toLowerCase() === formatedTitle) //get the blog from the data in of blogs in backend
  console.log(blog,'heheh');


  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      {
        !blog ? <NotFound/>:
     
      <div key={blog._id} className="blogPost bg-light-900 py-12 px-[7%] md:px-[10%] lg:px-[12%] xl:px-[15%] space-y-5 lg:space-y-8">
          <h1 className={styles.h3Dark}>{blog.title}</h1>
          <p className={`${styles.p2HeavyDark} text-[#807c7c]`}>{blog.timeToRead}min Read</p>
          <img 
          src={blog.image}
          alt="Blog cover photo"
          className={`md:h-[25rem] xl:h-[30rem] object-cover`}
        />
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />    
      </div>
     
    
     }
    </div>
  )
}
