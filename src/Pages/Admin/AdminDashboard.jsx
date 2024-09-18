import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for React Quill
import { MdLogout } from "react-icons/md";
import BlogPage from './AdminBlogPage';
import ProjectsPage from './AdminPortfolioPage';
import Editor from './Editor';

import Logo from '../../assets/img/Logo.png'

import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/authContext';
import useWindowSize from '../../hooks/windowSize';

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import toast from 'react-hot-toast';



const AdminDashboard = () => {
const navigate = useNavigate();
const [activeTab, setActiveTab] = useState('blogs');
const [background,setBackground] = useState('bg-dark-900');
const [dropdown, setDropdown] = useState(false);
const windowSize = useWindowSize();

const {authUser} = useAuthContext();

const handleLogout = () =>{
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   // Show the toast success message
   toast.success("Logged out successfully!");

   // Redirect to the home page after 1 second
   setTimeout(() => {
     navigate('/');
   }, 1000);
};



useEffect(() => {
  if (!authUser ) {
    navigate('/admin'); // Navigate to the login page if user is not authenticated
  }
}, [authUser, navigate]);

{!authUser  ? navigate('/admin') : null}
  return (
    <div className={` min-h-screen ${background} bg-dark-900`}>
      <nav className="relative flex items-center justify-between bg-white px-6 py-4 shadow-md lg:px-16 xl:px-24">
        <h1 className="text-2xl font-semibold text-black flex items-center gap-3">
          <img className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] group-hover:cursor-pointer' src={Logo} alt="Graysol Logo" />Admin Dashboard 
        </h1>
        
        {/* Only show in screen size less than sm and change the icons for opening and closing of menu */}
        {!dropdown ? 
        <RxHamburgerMenu size={35} className='sm:hidden hover:cursor-pointer' onClick={()=>setDropdown(true)} />
        :
        <IoMdClose size={35} className='sm:hidden hover:cursor-pointer' onClick={()=>setDropdown(false)}/>
        }

          {/* The mobile navigation menu */}
        <div className={`${dropdown ? 'visible' : 'hidden'} absolute flex flex-col text-[17px] py-3.5 px-2 gap-[1px] items-start bg-[#f5f5f5] top-14 right-2 h-36 w-36 z-[100]`}>
            <div className={`${activeTab === 'blogs' ? 'text-white bg-gray-400': ''} hover:cursor-pointer hover:bg-[#beb8b8] flex items-end pl-1 tracking-wide border-b-2  border-gray-300 leading-none w-full pb-[2px] flex-1 `} onClick={() => {setActiveTab('blogs');setBackground('bg-dark-900');setDropdown(false)}}>
              Blogs
            </div>

            <div className={`${activeTab === 'projects' ? 'text-white bg-gray-400': ''} hover:cursor-pointer hover:bg-[#beb8b8] flex items-end pl-1 tracking-wide border-b-2  border-gray-300 leading-none w-full pb-[2px] flex-1 `} onClick={() => {setActiveTab('projects');setBackground('bg-dark-900');setDropdown(false)}}>
              Project
            </div>

            <div className={`${activeTab === 'create' ? 'text-white bg-gray-400': ''} hover:cursor-pointer hover:bg-[#beb8b8] flex items-end pl-1 tracking-wide border-b-2  border-gray-300 leading-none w-full pb-[2px] flex-1 `}  onClick={() => {setActiveTab('create');setBackground('bg-gray-200');setDropdown(false)}}>
              Create new
            </div>
            <div className=' hover:cursor-pointer hover:bg-[#beb8b8] flex items-end pl-1 tracking-wide border-b-2 border-gray-300 leading-none w-full pb-[2px] flex-1' onClick={()=>{setDropdown(false); handleLogout();}}>Log out</div>
        </div>

        {/* Only show in screen size greater than sm = 640px */}
        <div className={`${windowSize >= 640 ? 'visible' : 'hidden' } flex space-x-4 text-[17px] items-center`}>
          <button
            className={`hover:underline tracking-wide underline-offset-4 decoration-2 ${activeTab === 'blogs' ? 'underline text-purple-700' : 'text-gray-600'}`}
            onClick={() => {setActiveTab('blogs');setBackground('bg-dark-900')}}
          >
            Blogs
          </button>
          <button
            className={`hover:underline tracking-wide underline-offset-4 decoration-2 ${activeTab === 'projects' ? 'underline text-purple-700' : 'text-gray-600'}`}
            onClick={() => {setActiveTab('projects');setBackground('bg-dark-900')}}
          >
            Projects
          </button>
          <button
            className={`hover:bg-[#7a39d5] ${activeTab === 'create' ? ' bg-[#7832daf2] shadow shadow-[0px_0px_10px_rgba(0,0,0,.5)]' : 'bg-[#7a39d5] '}  hover:bg-[#9143ff text-white px-2 py-2 rounded text-[15px]`}
            onClick={() => {setActiveTab('create');setBackground('bg-gray-200')}}
          >
            Create New
          </button>
          {/* <button className="bg-[#7a39d5] hover:bg-[#9143ff] text-white px-4 py-2 rounded flex items-center justify-center gap-1 text-[15px]">Logout</button> */}
          <div className="relative group">
            <MdLogout size={25} className="mb-[5px] text-red-600 hover:text-red-500 hover:cursor-pointer" onClick={handleLogout} />

            {/* Tooltip */}
            <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-[13px] tracking-wide rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Logout
            </span>
          </div>
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
