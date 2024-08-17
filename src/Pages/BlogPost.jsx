import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../Sections/blogdata.js';
import { BlogPost1, BlogPost2,BlogPost3 } from '../Blogs/index.js';
import { NotFound } from './NotFound.jsx';

export const BlogPost = () => {

  const { id } = useParams(); // Get the blog ID from the URL
  const blog = data.find((post) => post.id === parseInt(id)); //get the blog from the data in the blogdata.js file

  // Map the id to the corresponding blog post component
  const components = {
    1: BlogPost1,
    2: BlogPost2,
    3: BlogPost3,
    // Add more mappings as needed
  }

  const SelectedComponent = components[id];

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      {SelectedComponent ? <SelectedComponent title={blog.title} time={blog.time} coverPic={blog.image} /> : <NotFound/>}
    </div>
  )
}
