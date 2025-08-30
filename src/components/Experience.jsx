import React from 'react';
import './experience.css';
import ExperienceCard from './cards/ExperienceCard';

function Experience() {
    const experienceList = [
        {
            company: "Trideum Corporation",
            role: "Software Engineer Intern",
            period: "March 2024 – May 2025",
            description: [
                "Wrote and maintained unit, integration, and system tests to validate features and ensure application reliability.",
                "Contributed to full-stack development tasks, including front-end interface improvements and back-end logic\n" +
                "integration.",
                "Collaborated with engineers to maintain and document codebases."
            ]
        },
        {
            company: "UFitWorkouts",
            role: "Lead Web Developer",
            period: "November 2021 – November 2022",
            description: [
                "Built and maintained the company’s website with REACT.",
                "Managed SEO, analytics, and integrated e-commerce features.",
                "Improved UX by refining mobile layout."
            ]
        }
    ];

    return (
        <div className="experience-page">
            <h2 className="experience-title">Experience</h2>
            <div className="cards-container">
                {experienceList.map((job, index) => (
                    <ExperienceCard key={index} {...job} />
                ))}
            </div>
        </div>
    );
}

export default Experience;

