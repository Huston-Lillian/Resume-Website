import React, { useState } from 'react';
import './navbar.css';
import defaultLogo from '../assets/logo.png';
import hoverLogo from '../assets/logo-hover.png';

function Navbar(){
    const [src, setSrc] = useState(defaultLogo);

    return(
        <nav className="navbar">
            <div className="logo">
                <a href={"#hero"}>
                    <img src={src} alt="Logo" className="logo-img" onMouseEnter={() => setSrc(hoverLogo)} onMouseLeave={() => setSrc(defaultLogo)}/>
                </a>
            </div>


            <ul className="nav-links">

                <li><a href={"#about-me"}>About</a></li>
                <li><a href={"#experience"}>Experience</a></li>
                <li><a href={"#education"}>Education</a></li>
                <li><a href={"#projects"}>Projects</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;