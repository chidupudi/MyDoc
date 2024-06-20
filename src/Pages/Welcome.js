// Welcome.js

import React from 'react';
import './Welcome.css';
import onlineConsultationImage from '../Images/online-consultation.jpg';
import symptomAnalysisImage from '../Images/symptomAnalysisImage.jpeg';
import nearbyHospitalsImage from '../Images/nearbyHospitalsImage.png';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Welcome to Health Helper</h1>
        <p>Your health is our priority. We provide tools and services to support your well-being.</p>
      </div>

      <div className="auth-buttons">
        <a href="/getstarted">
          <button className="btn btn-primary">Get Started</button>
        </a>
       
      </div>

      <div className="welcome-sections">
        <div className="welcome-section">
          <a href="/login" className="welcome-link">
            <img src={symptomAnalysisImage} alt="Symptom Analysis" />
            <div className="welcome-text">
              <h2>Symptom Analysis</h2>
              <p>
                Use our symptom analysis tool to understand potential health issues based on reported symptoms. This can help you make informed decisions about seeking medical attention.
              </p>
            </div>
          </a>
        </div>

        <div className="welcome-section">
          <a href="/login" className="welcome-link">
            <img src={nearbyHospitalsImage} alt="Nearby Hospitals and Labs" />
            <div className="welcome-text">
              <h2>Search Nearby Hospitals and Labs</h2>
              <p>
                Find the nearest hospitals and laboratories using our location-based search feature. Access important information such as services offered, contact details, and reviews.
              </p>
            </div>
          </a>
        </div>

        <div className="welcome-section">
          <a href="/login" className="welcome-link">
            <img src={onlineConsultationImage} alt="Online Consultation" />
            <div className="welcome-text">
              <h2>Online Doctor Consultation</h2>
              <p>
                Consult with qualified doctors online from the comfort of your home. Get expert medical advice and prescriptions without visiting a clinic.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;