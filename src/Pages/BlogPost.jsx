import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NotFound } from './NotFound.jsx';
import styles from '../styles.js';
import useGetBlogs from '../hooks/useGetBlogs.js';
import { IoArrowBackCircleOutline } from "react-icons/io5";

export const BlogPost = () => {
  const [loading, setLoading] = useState(true); // Set loading to true by default
  const [blog, setBlog] = useState(null); // Store the blog data
  const { title } = useParams(); // Get the blog title from the URL
  const formattedTitle = title.replace(/-/g, ' ').toLowerCase();
  
  const { blogs } = useGetBlogs(); // Fetch all blogs from your custom hook
  console.log("blogs",blogs)

  // Fetch the blog when the component mounts
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0);

    // Fetch blog logic
    const fetchBlog = async () => {
     
        setLoading(true); // Start loading
        //here we are finding the blog with the title that matches the title in the url and we replace the '-' with ' ' and make it lowercase because we are matching with title in the url by replacing hyphen '-' with space ' ' and making it lowercase
        const foundBlog =await blogs.find((item) =>item.title.toLowerCase().replace(/-/g,' ') === formattedTitle);
        console.log("foundBlog",foundBlog)
        setBlog(foundBlog);
        setLoading(false); // Stop loading

      
    };

    fetchBlog();
  }, [blogs, formattedTitle]);

  if (loading) {
    // While loading, show a loading message or spinner
    return <div>Loading...</div>;
  }

  return (
    <div>
      {
        blog ? (
          // Display the blog content if found
          <div key={blog._id} className="blogPost bg-light-900 py-12 px-[7%] md:px-[10%] lg:px-[12%] xl:px-[15%] space-y-5 lg:space-y-8">
            <Link to='/admin-dashboard'>
              <IoArrowBackCircleOutline size={35} color='#000' />
            </Link>
            <h1 className={styles.h3Dark}>{blog.title}</h1>
            <p className={`${styles.p2HeavyDark} text-[#807c7c]`}>{blog.timeToRead}min Read</p>
            {
              // Display the image if it exists
              blog.image && (
                <img 
                  src={blog.image} 
                  alt="Blog cover photo" 
                  className="md:h-[25rem] xl:h-[30rem] object-cover" 
                />
              )
            }
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        ) : (
          // Show the NotFound page if no blog is found
          <NotFound />
        )
      }
    </div>
  );
};
