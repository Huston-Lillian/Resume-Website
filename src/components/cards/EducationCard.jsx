import React from 'react';
import './educationCard.css';

function EducationCard({ school, degree, microcredential, gpa, period, description }) {
    return (
        <div className="education-card">
            <h3>{school}</h3>
            <p className="degree">{degree}</p>
            <p className="microcredential">{microcredential}</p>
            <p className="gpa">{gpa}</p>
            <p className="period">{period}</p>
            <ul className="description">{description.map((item, i) => (
                <li key={i}>{item}</li>
            ))}</ul>
        </div>
    );
}

export default EducationCard;
