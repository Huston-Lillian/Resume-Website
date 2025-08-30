import React from 'react';
import './education.css';
import EducationCard from './cards/EducationCard';

function Education() {
    const educationList = [
        {
            school: "Texas A&M University – Central Texas",
            degree: "B.S. in Computer Science",
            microcredential: "Business Analytics & Intelligence",
            gpa: "Summa Cum Laude",
            period: "June 2023 – May 2025",
            description: [
                "Earned a Micro-Credential in Business Analytics & Intelligence, focusing on data-driven decision making and strategic insights.",
                "Studied advanced concepts in programming, algorithms, databases, and computer architecture.",
                "Gained experience in software engineering, system analysis, and secure computing practices.",
                "Applied data analytics, visualization, and web development skills across academic and technical projects."
            ]
        },
        {
            school: "Central Texas College",
            degree: "A.S. in Computer Science",
            period: "August 2020 – May 2023",
            description: ["Built strong foundations in programming, logic reasoning, mathematics, and software design.",
                            "Completed progressive coursework in programming fundamentals (I, II, & III).",
                "Gained experience in computer organization, business applications, and professional communication."
            ]
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
