import React from 'react';
import './hero.css';
import profilePic from '../assets/lillian-profile.jpg'; // Replace with your actual image path

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <img src={profilePic} alt="Lillian smiling" className="hero-image" />

                <div className="hero-highlight">✨</div>

                <h1 className="hero-title">
                    <span className="highlight">QA Analyst | Data Analyst </span> <br/> Quality. Insight. Impact.
                </h1>

                <p className="hero-description">
                    I’m a detail-oriented analyst and QA professional with a strong technical foundation, focused on improving systems, uncovering insights, and ensuring high-quality user experiences. This portfolio showcases my work, skills, and continuous growth in building and evaluating impactful solutions.
                </p>
            </div>
        </section>
    );
}

export default Hero;
