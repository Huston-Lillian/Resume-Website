import React from 'react';
import './experienceCard.css';

function ExperienceCard({ company, role, period, description }) {
    return (
        <div className="experience-card">
            <h3>{company}</h3>
            <p className="role">{role}</p>
            <p className="period">{period}</p>
            <ul className="description">
                {description.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceCard;
