import React from 'react';
import './about.css';

function About() {
    return (
        <section id="about-me" className="about">
            <h1 className="about-heading">About me</h1>

            <div className="about-content">
                <p></p>
                <p> &emsp; &emsp; My journey into tech started with a simple realization: the right logic can turn messy data into meaningful insight.
                    Since then, I’ve been driven by a curiosity for how systems work, how data tells a story, and how small issues can impact the bigger picture.
                    </p>
                <p> &emsp; &emsp; I’ve applied that mindset as a software tester intern at Trideum Corporation and as a co-developer of Consolidev, contributing to both system functionality and quality.
                    I’ve also worked as a QA contributor on the PostSecret Searchable Archive, where I identified bugs, analyzed search behavior, and helped improve the accuracy and usability of a large-scale, content-driven platform.
                    </p>
                <p> &emsp; &emsp; I enjoy identifying patterns, uncovering insights, and digging into problems to understand their root cause.
                    I graduated Summa Cum Laude with a B.S. in Computer Science from Texas A&M–Central Texas and earned a microcredential in Business Analytics & Intelligence.
                    Outside of tech, I enjoy solving puzzles, reading non-fiction, and spending time outdoors.
                    </p>
                <p> &emsp; &emsp; I’m excited to continue growing in roles where I can combine analysis, quality, and technical skills to make systems more reliable and impactful.</p>
            </div>
        </section>
    );
}

export default About;