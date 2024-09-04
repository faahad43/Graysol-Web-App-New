import { useState,useEffect } from "react";

const useGetBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('api/blogs/getBlogs',{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                });
                const data = await response.json();
                console.log(data.Blogs,"hi");
                setBlogs(data.Blogs);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogs();
    }, []);

    return { blogs, loading };
}

export default useGetBlogs;