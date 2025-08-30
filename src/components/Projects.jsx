import React from 'react';
import './projects.css';
import ProjectCard from './cards/ProjectCard';

function Projects() {
    const projectList = [
        {
            title: "Consolidev",
            description: ["Collaborated with two other developers to design and implement consoliDev, a web application consolidating essential developer tools into one platform.",
                "Contributed to both front-end and back-end development, ensuring cohesive functionality and user experience.",
                "Implemented key features including user authentication, activity history, and customizable favorites.",
                "Helped build tools such as a JSON Validator, Timestamp Converter, and API Request Builder to streamline developer workflows."
            ],
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

