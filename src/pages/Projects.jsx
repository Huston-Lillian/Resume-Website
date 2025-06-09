import React from 'react';
import './projects.css';
import ProjectCard from '../components/cards/ProjectCard';

function Projects() {
    const projectList = [
        {
            title: "Consolidev",
            description: "A suite of developer tools including JSON validator, timestamp converter, and API builder. Features include user authentication, history tracking, and customizable favorites.",
            github: "https://github.com/yourusername/consolidev",
            demo: "https://yourconsolidevsite.com",
            tech: "React, Node.js, Express, MongoDB"
        }
    ];

    return (
        <div className="projects-page">
            <h2 className="projects-title">Projects</h2>
            <div className="cards-container">
                {projectList.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;

