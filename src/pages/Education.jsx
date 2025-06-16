import React from 'react';
import './education.css';
import EducationCard from '../components/cards/EducationCard';

function Education() {
    const educationList = [
        {
            school: "Texas A&M University – Central Texas",
            degree: "B.S. in Computer Science",
            period: "June 2023 – May 2025",
            description: "Focused on software development, algorithms, and databases. Earned a Micro-Credential in Business Analytics and Intelligence. Graduated Summa Cum Laude.",
        },
        {
            school: "Central Texas College",
            degree: "A.S. in Computer Science",
            period: "August 2020 – May 2023",
            description: "Foundations in programming, logic, and data structures.",
        },
    ];

    return (
        <div className="education-page">
            <h2 className="education-title">Education</h2>
            <div className="cards-container">
                {educationList.map((edu, index) => (
                    <EducationCard key={index} {...edu} />
                ))}
            </div>
        </div>
    );
}

export default Education;
