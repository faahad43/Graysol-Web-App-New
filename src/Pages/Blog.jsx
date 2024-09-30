import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { BlogBanner, BlogSection, ContactForm2 } from '../Sections'
import useGetBlogs from '../hooks/useGetBlogs';


const Blog = () => {
  // const {blogs} = useGetBlogs();
  const location = useLocation(); // Get the current location

  // Determine if the current location is a nested route
  const isNestedRoute = location.pathname.includes('blog/path') && location.pathname !== '/blog';

  return (
    <div>
      {!isNestedRoute && (
        <>
            <BlogBanner/>
            <BlogSection data={blogs}/>
            <ContactForm2/>
        </>
        )}
        <Outlet /> {/* Renders nested routes content */}
    </div>
  )
}

export {Blog}