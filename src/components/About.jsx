import React from 'react';
import '../App.css'; // Import your CSS file for styles
import { FaHospital, FaFlask, FaMedkit, FaUsers } from 'react-icons/fa'; // Importing icons from react-icons
import automatedImg from '../Images/AboutImages/automatedcheck.jpg';
import efficientImg from '../Images/AboutImages/efficientteam.jpg';
import hospitalImg from '../Images/AboutImages/hospitalfocus.jpg';
import safeImg from '../Images/AboutImages/safeconsume.jpg';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Project</h1>
      <p>
        Our platform ensures hospitals receive high-quality medicines and consumables by automating the testing and
        monitoring process. This project focuses on eliminating human errors, improving efficiency, and ensuring compliance
        with safety regulations.
      </p>
      <div className="features-section">
        {/* Feature Cards */}
        <div className="card-row">
          <div className="flip-card">
            <div className="flip-card-inner">
              {/* Front of the card */}
              <div className="flip-card-front">
                <img src={automatedImg} alt="Automated Testing" className="feature-img" />
                <h3>Automated Testing</h3>
              </div>
              {/* Back of the card */}
              <div className="flip-card-back">
                <FaFlask className="icon" />
                <h3>Automated Testing</h3>
                <p>Automated tests ensure that only the best quality products are approved.</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={hospitalImg} alt="Hospital Focus" className="feature-img" />
                <h3>Hospital Focused</h3>
              </div>
              <div className="flip-card-back">
                <FaHospital className="icon" />
                <h3>Hospital Focused</h3>
                <p>Designed to meet the unique needs of hospitals for quality control in medical supplies.</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={safeImg} alt="Safe Consumables" className="feature-img" />
                <h3>Safe Consumables</h3>
              </div>
              <div className="flip-card-back">
                <FaMedkit className="icon" />
                <h3>Safe Consumables</h3>
                <p>All consumables are thoroughly inspected to meet safety and health standards.</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={efficientImg} alt="Efficient Team" className="feature-img" />
                <h3>Efficient Team</h3>
              </div>
              <div className="flip-card-back">
                <FaUsers className="icon" />
                <h3>Efficient Team</h3>
                <p>A dedicated team monitors the system to ensure seamless operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="closing-statement">
        Our commitment to quality and safety makes us a trusted partner in healthcare. Thank you for being a part of our mission!
      </p>
    </div>
  );
};

export default About;