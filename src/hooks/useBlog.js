import toast from 'react-hot-toast';


const useBlog = () => {
    const blog = async ({title, time, content, category,image}) => {
        
        const success = handleInput (title,content,category);
        if (!success) return;

        const formData = new FormData();
        formData.append('title', title.trim().replace(/\s+/g, ' '));
        formData.append('timeToRead', time);
        formData.append('content', content);
        formData.append('feature', category === 'feature');
        formData.append('press', category === 'press');
        formData.append('insight', category === 'insight');
        formData.append('graynews', category === 'graynews');

        // Append the image file if present
        if (image) {
            formData.append('image', image); // Append the image file to FormData
        }

        console.log("imag here",image)

        try {
            
            const response = await fetch('/api/Blog/createBlog', {  // Use relative path
                method: 'POST',
                body: formData,
            });
    
        if (response.ok) {
            return true;
        }
        } catch (error) {
        toast.error('Error saving blog');
        }
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