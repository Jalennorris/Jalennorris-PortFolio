import React from 'react';
import { Link } from 'react-router-dom';
import './resume.css';
import ResumePDF from '../../assets/images/JalenResume.pdf' // Updated to .pdf for better compatibility

const Resume = () => {
    return (
        <div className="resume-container">
            <h1>My Resume</h1>

            {/* Embed the PDF version of the resume */}
            <div className="resume-preview">
                <embed src={ResumePDF} type="application/pdf" width="100%" height="600px" />
            </div>

            {/* Provide the correct download link */}
            <div className="download-container">
                <a href={ResumePDF} download="Jalen_Norris_Resume.pdf">
                    <button className="download-button">Download Resume</button>
                </a>
            </div>

            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
};

export default Resume;

