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
                <BlogSection data={blogs}  />
          )}
      </div>
  );
};
export default BlogPage;
