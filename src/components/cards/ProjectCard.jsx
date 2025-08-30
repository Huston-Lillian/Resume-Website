import React from 'react';
import './projectCard.css';

function ProjectCard({ title, description, github, demo, tech }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <ul className="description">{description.map((item, i) => (
                <li key={i}>{item}</li>
            ))}</ul>
            {tech && <p className="tech"><strong>Tech:</strong> {tech}</p>}
            <div className="project-links">
                {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            </div>
        </div>
    );
}

export default ProjectCard;
