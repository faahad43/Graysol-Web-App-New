import { useState } from "react";
import toast from "react-hot-toast";

const useDeleteProject = () => {

    const [deleted,setDeleted] = useState(false);

    const deleteProject = async(id)=>{
        try{
            // Use toast.promise to show a loading toast while the deletion is in progress
            await toast.promise(
                fetch(`${process.env.VITE_BACKEND_BASE_URL}/api/Project/delete`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id })
                }),
                {
                    loading: 'Deleting project...',
                    success: 'Project Deleted Successfully!',
                    error: 'Error deleting project, please try again.',
                }
            );
    
        }catch(error){
            console.log(error);
        }

    }

    return {deleteProject}

}
export default useDeleteProject;