import React from 'react';
import './hero.css';
import profilePic from '../assets/lillian-profile.jpg'; // Replace with your actual image path

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <img src={profilePic} alt="Lillian smiling" className="hero-image" />

                <div className="hero-highlight">✨</div>

                <h1 className="hero-title">
                    <span className="highlight">Software Engineer</span> <br/> Plan. Develop. Impact.
                </h1>

                <p className="hero-description">
                    I’m a fast learning software engineer who builds purposeful solutions and continually refines my craft. This portfolio showcases my journey, what I’ve built, and where I’m headed.
                </p>
            </div>
        </section>
    );
}

export default Hero;
