import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProjectDetails.css";
import { API_URL } from "../../config";
function ProjectDetails(props) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/projects`);
        const response2 = await axios.get(`${API_URL}/api/faculty`);
        console.log(response2.data);
        setProjects([...response.data, ...response2.data]);
      } catch (error) {
          console.error("Error fetching projects:", error);
      } finally {
          setIsLoading(false);
      }
      };
      fetchProjects();
      
  }, []);

  // Find the project with the matching project name
  const project = props.project;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="container">
      <div className="project-title">
        <h2>{project.project_name}</h2>
      </div>
      <div className="project-details">
        <p>
          <strong>Amount:</strong> &#8377;{project.amount}
        </p>
        <p>
          <strong>Academic Year:</strong> {project.Start_date.substring(0, 4)}
        </p>
      </div>
      <div className="students-guides">
        {project.Students && (
          <div className="section">
            <h3>Students</h3>
            <ul className="students">
              {project.Students.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        )}
        {project.guides && (
          <div className="section">
            <h3>Guides</h3>
            <ul className="guides">
              {project.guides.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>

  );
}

export default ProjectDetails;
