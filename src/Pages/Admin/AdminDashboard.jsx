import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for React Quill

import BlogPage from './AdminBlogPage';
import ProjectsPage from './AdminPortfolioPage';
import Editor from './Editor';

import Logo from '../../assets/img/Logo.png'


const AdminDashboard = () => {

const [activeTab, setActiveTab] = useState('blogs');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
        <h1 className="text-2xl font-semibold text-black flex items-center gap-3">
          <img className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] group-hover:cursor-pointer' src={Logo} alt="Graysol Logo" />Admin Dashboard 
        </h1>
        <div className="flex space-x-4">
          <button
            className={`hover:underline ${activeTab === 'blogs' ? 'underline text-purple-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('blogs')}
          >
            Blogs
          </button>
          <button
            className={`hover:underline ${activeTab === 'projects' ? 'underline text-purple-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`hover:underline ${activeTab === 'create' ? 'underline text-purple-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('create')}
          >
            Create New
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded">Sign Out</button>
        </div>
      </nav>

      <main className="p-6 pt-12 xl:w-[80%] mx-auto">
        {activeTab === 'blogs' && <BlogPage />}
        {activeTab === 'projects' && <ProjectsPage />}
        {activeTab === 'create' && <Editor/>}
      </main>
    </div>
  );
};



export default AdminDashboard;
