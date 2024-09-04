import toast from 'react-hot-toast';


const useBlog = () => {
    const blog = async ({title, time, content, category}) => {
        
        const success = handleInput (title,content,category);
        if (!success) return;

        const data = {
            title: title,
            timeToRead: time, // Match the backend field
            content,
            // Dynamically set the categories
            feature: category === 'feature',
            press: category === 'press',
            insight: category === 'insight',
            graynews: category === 'graynews',
        };

        

        try {
            console.log(data,"before send");
            const response = await fetch('/api/Blog/createBlog', {  // Use relative path
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
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