
import { FaSpinner } from 'react-icons/fa';  
import 'react-quill/dist/quill.snow.css'; 
import { PortfolioSection } from "../../Sections";
import useGetProjects from "../../hooks/useGetProject";


const PortfolioPage = () => {
  const { projects, loading } = useGetProjects();
 

  return (
      <div>
          {loading ? (
              <div className="loading">
                  <FaSpinner className="spinner" />  {/* Loading spinner icon */}
                  Loading...
              </div>
          ) : (
                <PortfolioSection data={projects} />
          )}
      </div>
  );
}

export default PortfolioPage;
