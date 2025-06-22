import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="#hero">
                    <img src={logo} alt="Logo" className="logo-img" />
                </a>
            </div>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    );
}

export default Navbar;
