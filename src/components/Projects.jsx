import React from 'react';
import './projects.css';
import ProjectCard from './cards/ProjectCard';

function Projects() {
    const projectList = [
        {
            title: "Consolidev",
            description: "A suite of developer tools including JSON validator, timestamp converter, and API builder. Features include user authentication, history tracking, and customizable favorites.",
            github: "https://github.com/Huston-Lillian/consolidev",
            tech: "PHP 7, WAMP, HTML5, CSS3"
        },
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

