import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for React Quill
import  useBlog  from '../../hooks/useBlog.js'


const Editor = () => {
  const [type, setType] = useState('blog');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const {blog} = useBlog();

  // option for quill editor
  const modules = {
    toolbar:[
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      ['link','formula'],

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      time: e.target.time.value,
      category: category,
      content: content, // Rich text content
    };
    
    const success = await blog(formData);
    
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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

      <div className="grid grid-cols-2 gap-10">
        
        <div>
          <label className="block font-medium">Category</label>
          <select
            className="block w-full mt-1 h-10 px-4 border-gray-300 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            
          >
            <option value="">Select a category</option>
            {type === 'blog' && (
              <>
                <option value="press">Press</option>
                <option value="feature">Feature</option>
                <option value="graynews">Graysol News</option>
                <option value="insight">Insights</option>
              </>
            )}
            {type === 'project' && (
              <>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
                <option value="type4">Type 4</option>
              </>
            )}
          </select>
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

      <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded">
        Save {type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
    </form>
  );
};
export default Editor;
