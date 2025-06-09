import React from 'react';
import './educationCard.css';

function EducationCard({ school, degree, period, description }) {
    return (
        <div className="education-card">
            <h3>{school}</h3>
            <p className="degree">{degree}</p>
            <p className="period">{period}</p>
            <p className="description">{description}</p>
        </div>
    );
}

export default EducationCard;
