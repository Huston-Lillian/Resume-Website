import React, { useState } from 'react';
import './navbar.css';
import defaultLogo from '../assets/logo.png';
import hoverLogo from '../assets/logo-hover.png';

function Navbar(){
    const [src, setSrc] = useState(defaultLogo);

    return(
        <nav className="navbar">
            <div className="logo">
                    <img src={src} alt="Logo" className="logo-img" onMouseEnter={() => setSrc(hoverLogo)} onMouseLeave={() => setSrc(defaultLogo)}/>
            </div>
            <ul className="nav-links">
                <li>Education</li>
                <li>Experience</li>
                <li>Projects</li>
            </ul>
        </nav>
    );
}

export default Navbar;