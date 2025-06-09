import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo.png';

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo-img" />
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;