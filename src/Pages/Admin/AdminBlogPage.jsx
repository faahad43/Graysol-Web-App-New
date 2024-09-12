import useGetBlogs from "../../hooks/useGetBlogs";
import { FaSpinner } from 'react-icons/fa';  
import { BlogSection } from "../../Sections/BlogSection";
import 'react-quill/dist/quill.snow.css'; 


const BlogPage = () => {

  const { blogs, loading } = useGetBlogs();

  return (
      <div>
          {loading ? (
              <div className="loading">
                  <FaSpinner className="spinner" />  {/* Loading spinner icon */}
                  Loading...
              </div>
          ) : (
            
              <div className="blogPost">
                {blogs.map((blog) => (
                  <div key={blog._id}>
                    <h2>{blog.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                  </div>
                ))}
                {console.log(blogs)}
                <BlogSection data={blogs} />
              </div>
          )}
      </div>
  );
};
export default BlogPage;
