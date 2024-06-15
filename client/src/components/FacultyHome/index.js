import React from 'react';
import './index.css';
import wantImage from './new.jpg';
import { useNavigate } from "react-router-dom";
 
const FacultyHome = () => {

    const navigate = useNavigate();

    return (
        <div className='home'>
            <nav className='nav-bar'>
                <h1 onClick={()=>navigate('/facultyDetails')}>IFFP Projects</h1>
                <h1 onClick={()=>navigate('/faculty')}>Analytics</h1>
                <h1 onClick={()=>navigate('/insert_faculty')}>Add IFFP</h1>
                <h1 onClick={()=>navigate('/')}>Log Out</h1>
                <img className='nav-img' src={wantImage} alt="noimage"/>
            </nav>
        </div>
    )
}

export default FacultyHome;

