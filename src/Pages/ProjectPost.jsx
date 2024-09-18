import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NotFound } from './NotFound.jsx';
import styles from '../styles.js';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import useGetProjects from '../hooks/useGetProject.js';

export const ProjectPost = () => {
  const [loading, setLoading] = useState(true); // Set loading to true by default
  const [project, setProject] = useState(null); // Store the project data
  const { title } = useParams(); // Get the Project title from the URL
  const formattedTitle = title.replace(/-/g, ' ').toLowerCase();
  
  const {projects}=useGetProjects(); // Fetch all Projects from your custom hook
  // Fetch the Project when the component mounts
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0);

    // Fetch Project logic
    const fetchProject = async () => {
     
        setLoading(true); // Start loading
        //here we are finding the Project with the title that matches the title in the url and we replace the '-' with ' ' and make it lowercase because we are matching with title in the url by replacing hyphen '-' with space ' ' and making it lowercase
        const foundProject =await projects.find((item) =>item.title.toLowerCase().replace(/-/g,' ') === formattedTitle);
        setProject(foundProject);
        setLoading(false); // Stop loading

      
    };

    fetchProject();
  }, [projects, formattedTitle]);

  if (loading) {
    // While loading, show a loading message or spinner
    return <div>Loading...</div>;
  }

  return (
    <div>
      {
        project ? (
          // Display the Project content if found
          <div key={project._id} className="projectPost bg-light-900 py-12 px-[7%] md:px-[10%] lg:px-[12%] xl:px-[15%] space-y-5 lg:space-y-8">
            <Link to='/admin-dashboard'>
              <IoArrowBackCircleOutline size={35} color='#000' />
            </Link>
            <h1 className={styles.h3Dark}>{project.title}</h1>
            <p className={`${styles.p2HeavyDark} text-[#807c7c]`}>{project.timeToRead}min Read</p>
            {
              // Display the image if it exists
              project.image && (
                <img 
                  src={project.image} 
                  alt="Project cover photo" 
                  className="md:h-[25rem] xl:h-[30rem] object-cover" 
                />
              )
            }
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        ) : (
          // Show the NotFound page if no Project is found
          <NotFound />
        )
      }
    </div>
  );
};
