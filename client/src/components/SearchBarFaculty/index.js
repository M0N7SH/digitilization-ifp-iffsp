import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import { API_URL } from '../../config';
import ProjectDetails from './ProjectDetails';

const SearchBox = ({ handleSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [projectNames, setProjectNames] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/faculty`);
                setProjectNames(response.data.map(project => ({
                    id: project._id,
                    name: project.project_name,
                    guides: project.guides,
                    amount: project.amount,
                    Start_date: project.Start_date,
                    Students: project.Students
                })));
                console.log("Hello")
                console.log(projectNames);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };
        fetchProjects();
    }, []);

    const handleSearchInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchQuery(inputValue);
        const filteredSuggestions = projectNames.filter(project =>
            project.name.toLowerCase().startsWith(inputValue.toLowerCase())
        );
        setSuggestions(filteredSuggestions.slice(0, 5));
    };

    const handleSuggestionClick = (project) => {
        setSearchQuery(project.name);
        setSuggestions([]);
        handleSearch(project);
    };

    return (
        <div className='search-box'>
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchInputChange}
            />
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((project, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(project)}>
                            {project.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const SearchBoxFaculty = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [directionMarks, setDirectionMarks] = useState(0);
    const [resourceMarks, setResourceMarks] = useState(0);
    const [satisfactionMarks, setSatisfactionMarks] = useState(0);
    const [comments, setComments] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleSearch = (project) => {
        setSelectedProject(project);
        setSearchResult(null);
    };

    const handleInsertProgress = async () => {
        if (!selectedProject) return;

        const progressData = {
            projectId: selectedProject.id,
            direction: directionMarks,
            resource_utilization: resourceMarks,
            satisfaction: satisfactionMarks,
            comments: comments
        };

        try {
            const response = await axios.post(`${API_URL}/api/progress-faculty`, progressData);
            setSearchResult(response.data);
            setSelectedProject(null);
            setDirectionMarks(0);
            setResourceMarks(0);
            setSatisfactionMarks(0);
            setComments('');
        } catch (error) {
            console.error("Error inserting progress:", error);
        }
    };

    return (
        <div className='progresspage'>
            <div className='secondbar'>
                <SearchBox handleSearch={handleSearch} />
                <ProjectDetails project={selectedProject} />
            </div>
            {selectedProject && (
                <div className='table'>
                    <div className='slider-group'>
                        <div className='slider-column'>
                            <label>Direction:</label>
                            <input
                                type="range"
                                value={directionMarks}
                                min="0"
                                max="10"
                                onChange={(e) => setDirectionMarks(parseInt(e.target.value))}
                            />
                            <span>{directionMarks}</span>
                        </div>
                        <div className='slider-column'>
                            <label>Resource Utilization:</label>
                            <input
                                type="range"
                                value={resourceMarks}
                                min="0"
                                max="10"
                                onChange={(e) => setResourceMarks(parseInt(e.target.value))}
                            />
                            <span>{resourceMarks}</span>
                        </div>
                        <div className='slider-column'>
                            <label>Satisfaction:</label>
                            <input
                                type="range"
                                value={satisfactionMarks}
                                min="0"
                                max="10"
                                onChange={(e) => setSatisfactionMarks(parseInt(e.target.value))}
                            />
                            <span>{satisfactionMarks}</span>
                        </div>
                    </div>
                    <div className='comment'>
                        <label>Comments:</label>
                        <input
                            type="text"
                            placeholder='Enter your comments'
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                        />
                    </div>
                    <button onClick={handleInsertProgress} className='submit-btn'>Insert</button>
                </div>
            )}
            {searchResult && (
                <div className='result'>
                    <h3>Progress inserted successfully for project: {searchResult.project_name}</h3>
                </div>
            )}
        </div>
    );
};

export default SearchBoxFaculty;
