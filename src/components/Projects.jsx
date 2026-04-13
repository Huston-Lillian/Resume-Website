import React from 'react';
import './projects.css';
import ProjectCard from './cards/ProjectCard';

function Projects() {
    const projectList = [
        {
            title: "PostSecret Searchable Archive",
            description: ["Contributed as a QA Analyst to the development of the PostSecret Searchable Archive, a WordPress-based platform designed to transform a large collection of digitized postcards into a searchable experience.",
                "Performed comprehensive testing across search, filtering, and single-postcard views to ensure accurate functionality and a seamless user experience.",
                "Identified and documented critical issues such as duplicate results, inconsistent search behavior, and content retrieval errors using structured Kanban-style reporting.",
                "Validated data quality by uncovering OCR inaccuracies, tagging inconsistencies, and duplicate media, helping improve overall search relevance and reliability.",
                "Collaborated with cross-functional team members to refine search behavior, taxonomy structures, and usability decisions, contributing to a more intuitive and meaningful discovery experience."
            ],

            tech: "Wordpress, MySQL, PHP, OCR"
        },
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
        <div id="projects" className="projects-page">
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

