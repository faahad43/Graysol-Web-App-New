import { useState } from "react";
import toast from "react-hot-toast";

const useDeleteBlog = () => {

    const [deleted,setDeleted] = useState(false);
    

    const deleteBlog = async(id)=>{
        try{
            // Use toast.promise to show a loading toast while the deletion is in progress
            await toast.promise(
                fetch('/api/Blog/delete', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id })
                }),
                {
                    loading: 'Deleting blog...',
                    success: 'Blog Deleted Successfully!',
                    error: 'Error deleting blog, please try again.',
                }
            );
        }catch(error){
            console.log(error);
        }

    }

    return {deleteBlog}

}
export default useDeleteBlog;