import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../Sections/blogdata.js';

export const BlogPost = () => {

  const { id } = useParams(); // Get the blog ID from the URL
  const blog = data.find((post) => post.id === parseInt(id)); //get the blog from the data in the blogdata.js file

//   in case of no blog found return error page
  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.time}</p>
      <div>{blog.content}</div>
    </div>
  )
}
