import useGetBlogs from "../../hooks/useGetBlogs";

const BlogPage = () => {

  const {blogs} = useGetBlogs();
  

  return (
  <div>
    {/* Blog Cards */}
    <p>No Blogs yet. Create new to get started.</p>
  </div>
)
}

export default BlogPage;
