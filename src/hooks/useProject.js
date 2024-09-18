
import toast from 'react-hot-toast';


const useProject = () => {
    const project = async ({title, time, content, category,image}) => {
        
        const success = handleInput (title,content,category);
        if (!success) return;

        const formData = new FormData();
        formData.append('title', title.trim().replace(/\s+/g, ' '));
        formData.append('timeToRead', time);
        formData.append('content', content);
        formData.append('websites', category.includes('websites'));
        formData.append('webApps', category.includes('webApps'));
        formData.append('mobileApps', category.includes('mobileApps'));
        formData.append('dataScienceAndAi', category.includes('dataScienceAndAi'));


        // Append the image file if present
        if (image) {
            formData.append('image', image); // Append the image file to FormData
        }


        let result;
       // Using toast.promise with manual error checking
        await toast.promise(
        new Promise(async (resolve, reject) => {
            const response = await fetch('/api/Project/createProject', {
                method: 'POST',
                body: formData,
            });
            
            if (response.ok) {
                resolve(); // Resolve the promise if the request is successful
                result = true;
            } else {
                const errorData = await response.json();
                reject(new Error(errorData.message || 'Error creating project')); // Reject the promise if there's an error
                result = false;
            }
        }),
        {
            loading: 'Uploading project...',
            success: 'Project created successfully!',
            error: (err) => `Error: ${err.message}`, // Handle the error message properly
        }
    );
        return result;
    };
    
    return { project };
}

export default useProject;

function handleInput(title,content,category){
    if (!title ) {
        toast.error('Please fill the title field');
        return false;
    }
    else if (!category ) {
        toast.error('Please fill the category field');
        return false;
    }
    else if (!content ) {
        toast.error('Please add the content');
        return false;
    }
    return true
}