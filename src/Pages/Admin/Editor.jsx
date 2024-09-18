import React, { useState } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'; // Import the styles for React Quill
import  useBlog  from '../../hooks/useBlog.js'
import useProject from '../../hooks/useProject.js';



const Editor = () => {
  const [type, setType] = useState('blog');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const {blog} = useBlog();
  const {project} = useProject();

  // option for quill editor
  const modules = {
    toolbar:[
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      ['link','image', 'formula'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'] 
    ]

  }

  // Handle checkbox changes
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((cat) => cat !== value)); // Remove the category if already checked
    } else {
      setCategory([...category, value]); // Add the category if not already checked
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      time: e.target.time.value,
      category: category,
      content: content, // Rich text content
      image: e.target.image.files[0]
    };

    let success = false;
    
    if(type=== 'project'){
      console.log(formData,"project");
       success = await project(formData);
    }
    else{
      console.log(formData,"blog");
       success = await blog(formData);
    
    }    
    if(success){
      e.target.reset();
      setContent('');
      setType('blog');
      setCategory('');
    }
  
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-gray-200 text-[17px]">
      <div className="grid grid-cols-2 gap-10">
      <div>
        <label className="block font-medium">Type</label>
        <select
          className="block w-full mt-1 h-10 px-4 border-gray-300 rounded-md"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="blog">Blog</option>
          <option value="project">Project</option>
        </select>
      </div>
      <div>
          <label className="block font-medium">Time to Read (minutes)</label>
          <input
            min = "1"
            type="number"
            name="time"
            className="block w-full mt-1 h-10 px-4 border-gray-300 rounded-md"
            
          />
        </div>
      </div>
      

      <div>
        <label className="block font-medium">Title</label>
        <input
          type="text"
          name="title"
          className="block w-full mt-1 h-10 px-4 border-gray-300 rounded-md"
         
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <label className="block font-medium">Category</label>
          <div className="grid grid-cols-2 gap-2"> {/* Two rows of checkboxes */}
            {type === 'blog' && (
              <>
                <div>
                  <label className='cursor-pointer'>
                    <input
                      type="checkbox"
                      value="news"
                      className='mr-1.5 cursor-pointer'
                      checked={category.includes('news')}
                      onChange={handleCategoryChange}
                    />
                    News
                  </label>
                </div>
                <div>
                  <label className='cursor-pointer'>
                    <input
                      type="checkbox"
                      value="feature"
                      className='mr-1.5 cursor-pointer'
                      checked={category.includes('feature')}
                      onChange={handleCategoryChange}
                    />
                    Feature
                  </label>
                </div>
                <div>
                  <label className='cursor-pointer'>
                    <input
                      type="checkbox"
                      value="help"
                      className='mr-1.5 cursor-pointer'
                      checked={category.includes('help')}
                      onChange={handleCategoryChange}
                    />
                    Help
                  </label>
                </div>
                <div>
                  <label className='cursor-pointer'>
                    <input
                      type="checkbox"
                      value="insight"
                      className='mr-1.5 cursor-pointer'
                      checked={category.includes('insight')}
                      onChange={handleCategoryChange}
                    />
                    Insights
                  </label>
                </div>
              </>
            )}
            {type === 'project' && (
              <>
                <div>
                  <label className='cursor-pointer'>
                    <input
                      type="checkbox"
                      value="websites"
                      className='mr-1.5 cursor-pointer'
                      checked={category.includes('websites')}
                      onChange={handleCategoryChange}
                    />
                    Websites
                  </label>
                </div>
                <div>
                  <label className='cursor-pointer'>
                    <input
                      type="checkbox"
                      value="webApps"
                      className='mr-1.5 cursor-pointer'
                      checked={category.includes('webApps')}
                      onChange={handleCategoryChange}
                    />
                    Web Apps
                  </label>
                </div>
                <div>
                  <label className='cursor-pointer'>
                    <input
                      type="checkbox"
                      value="mobileApps"
                      className='mr-1.5 cursor-pointer'
                      checked={category.includes('mobileApps')}
                      onChange={handleCategoryChange}
                    />
                    Mobile Apps
                  </label>
                </div>
                <div>
                  <label className='cursor-pointer'>
                    <input
                      type="checkbox"
                      value="dataScienceAndAi"
                      className='mr-1.5 cursor-pointer'
                      checked={category.includes('dataScienceAndAi')}
                      onChange={handleCategoryChange}
                    />
                    Data Science & AI
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
        <div>
          <label className="block font-medium">Cover Image</label>
          <input
            type="file"
            name="image"
            className="block w-full mt-1 h-10 px-2 border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div>
        <label className="block font-medium">Content</label>
        <ReactQuill 
          modules= {modules}
          theme="snow" 
          value={content}
          onChange={setContent} 
          className="block w-full mt-1  border-gray-300 rounded-md custom-quill-editor" // Apply the custom CSS class here
         
        />
      </div>

      <button type="submit" className="bg-secondary-default hover:bg-secondary-700 text-white px-4 py-2 rounded ml-[calc(50%-52px)]">
        Save {type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
    </form>
  );
};
export default Editor;
