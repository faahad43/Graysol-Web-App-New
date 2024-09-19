import { TypeH1 } from 'react-bootstrap-icons';
import toast from 'react-hot-toast';


const useBlog = () => {
    const blog = async ({title, time, content, category,image}) => {

        
        const success = handleInput (title,content,category);
        if (!success) return;

        const formData = new FormData();
        formData.append('title', title.trim().replace(/\s+/g, ' '));
        formData.append('timeToRead', time);
        formData.append('content', content);
        formData.append('feature', category.includes('feature'));
        formData.append('news', category.includes('news'));
        formData.append('insight', category.includes('insight'));
        formData.append('help', category.includes('help'));

        // Append the image file if present
        if (image) {
            formData.append('image', image); // Append the image file to FormData
        }

      

        let result;

         await toast.promise(
            new Promise(async (resolve, reject) => {
                const response = await fetch(`${process.env.VITE_BACKEND_BASE_URL}/api/Blog/createBlog'`, {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    resolve(); // Resolve the promise if the request is successful
                    result = true;
                } else {
                    const errorData = await response.json();
                    reject(new Error(errorData.message || 'Error creating blog')); // Reject the promise if there's an error
                    result = false
                }
            }),
            {
                loading: 'Uploading blog...',
                success: 'Blog created successfully!',
                error: (err) => `Error: ${err.message}`, // Handle the error message properly
            }
        );
        return result;
    };
    
    return { blog };
}

export default useBlog;

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