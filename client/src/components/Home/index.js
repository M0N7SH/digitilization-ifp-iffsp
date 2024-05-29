import React from 'react';
import './index.css';
import wantImage from './new.jpg';
import { useNavigate } from "react-router-dom";
 
const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='home'>
            <nav className='nav-bar'>
                <h1 onClick={()=>navigate('/home')}>Students</h1>
                <h1 onClick={()=>navigate('/analytics')}>IFP</h1>
                <h1 onClick={()=>navigate('/faculty')}>IFFP</h1>
                <h1 onClick={()=>navigate('/facultyDetails')}>Faculty</h1>
                <img className='nav-img' src={wantImage} alt="noimage"/>
            </nav>
        </div>
    )

}




export default Home;

