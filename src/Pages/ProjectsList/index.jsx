import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const API_URL = "http://localhost:5005";

import AddProject from "../AddProject"; 

import projectsService from "../../Services/projects.service";
 
 
function ProjectListPage() {
  const [projects, setProjects] = useState([]);
 
  const getAllProjects = () => {
    projectsService.getAllProjects()
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };
 
  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, [] );
 
  
  return (
    <div className="project-list-page">
        <AddProject refreshProjects={getAllProjects} />
        {projects.map((project) => {
          return (
            <div className="project-card card" key={project._id} >
              <Link to={`/projects/${project._id}`}>
                <h3>{project.title}</h3>
              </Link>
            </div>
          );
        })}     
       
    </div>
  );
}
 
export default ProjectListPage;