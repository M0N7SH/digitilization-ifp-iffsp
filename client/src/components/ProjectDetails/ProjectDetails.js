import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

function ProjectDetails() {
  const { projectName } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  // Find the project with the matching project name
  const project = projects.find(project => project.project_name === projectName);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className='container'>
      <div className='project-title'>
        <h2>{project.project_name}</h2>
      </div>
      <div className='project-details'>
        <p><strong>Amount:</strong>  &#8377;{project.amount}</p>
        <p><strong>Academic Year:</strong> {project.Start_date.substring(0, 4)}</p>
      </div>
      <div className='students-guides'>
        <div className='section'>
          <h3>Students</h3>
          <ul className="students">
            {project.Students.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
        <div className='section'>
          <h3>Guides</h3>
          <ul className="guides">
            {project.guides.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
