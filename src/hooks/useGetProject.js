import { useState,useEffect } from "react";

const useGetProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/Project/getProjects',{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                });
                const data = await response.json();
                setProjects(data.Projects);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProjects();
       
    }, []);

    return { projects,loading };
}

export default useGetProjects;