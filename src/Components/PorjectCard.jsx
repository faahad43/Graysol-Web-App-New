import React from 'react'
import styles from '../styles.js'
import { NavLink, useLocation } from 'react-router-dom'
import { useAuthContext } from '../Context/authContext.jsx'
import useDeleteProject from '../hooks/useDeleteProject.js'
import { ImBin } from "react-icons/im";

const ProjectCard = ({data=''}) => {
  
  const {authUser} = useAuthContext();
  const location = useLocation();
  const isAdmin = location.pathname === '/admin-dashboard';
  const {deleteProject} = useDeleteProject();

  const formatTitleForUrl = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-'); // Converts spaces to hyphens and makes the title lowercase
  };

  const handleClick = () => {
    
    const confirmed = window.confirm("Are you sure you want to delete this Project?");
    
    if (confirmed) {
      // If the user clicks "OK", delete the Project
      deleteProject(data._id);
    }
  }

  return (
    <div className='space-y-3 h-[26rem] text-light-900 text-center sm:text-start'>
      <div className=' space-y-2'>
       
        <NavLink to={`/portfolio/path/${formatTitleForUrl(data.title)}`} ><img className='rounded-xl cursor-pointe object-cover h-56' src={data.image} alt="" /></NavLink>
        <div className='flex items-center justify-between pr-4'>
          <p className={`pl-2 uppercase text-white ${styles.p3Heavy}`}>{data.timeToRead} min</p>
          {authUser && isAdmin ? <button className=' bg-red-500 p-1 rounded' onClick={handleClick}><ImBin size={22} /></button> : ''}
        </div>
        
      </div>
      <div className='pl-2 w-[100%] md:w-[90%] space-y-8'>
        <NavLink to={`/portfolio/path/${formatTitleForUrl(data.title)}`} >
          <p className={`${styles.p3Heavy} h-14 capitalize tracking-wider cursor-pointer`}>
          {(data.title).length > 100 ? (data.title).substring(0, 100) + '...' : data.title}
          </p>
        </NavLink>
        <div className={`${styles.p5} flex gap-3 justify-center sm:justify-start tracking-wider `}>
          {data.websites && <p className='bg-primary-default text-center py-2 rounded-md w-20'>Website</p> }
          {data.webApps && <p className='bg-primary-default text-center py-2 rounded-md w-20'>Web App</p> }
          {data.mobileApps && <p className='bg-primary-default text-center py-2 rounded-md w-20'>Mobile App</p> }
          {data.dataScienceAndAi && <p className='bg-primary-default text-center py-2 rounded-md w-24'>Data & Ai</p> }
        </div> 
      </div>
    </div>
    
  )
}

export {ProjectCard}