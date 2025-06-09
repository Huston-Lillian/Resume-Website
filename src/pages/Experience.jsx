import React from 'react';
import './experience.css';
import ExperienceCard from '../components/cards/ExperienceCard';

function Experience() {
    const experienceList = [
        {
            company: "Trideum Corporation",
            role: "Software Engineer Intern",
            period: "May 2023 – Present",
            description: [
                "Developed internal tools using React, JavaScript, and Python.",
                "Collaborated with engineers to maintain and document codebases.",
                "Improved testing workflows and frontend performance."
            ]
        },
        {
            company: "UFitWorkouts",
            role: "Lead Web Developer",
            period: "January 2022 – April 2023",
            description: [
                "Built and maintained the company’s website with WordPress and custom code.",
                "Managed SEO, analytics, and integrated e-commerce features.",
                "Improved UX by refining mobile layout and booking flow."
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

