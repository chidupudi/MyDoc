// About.js
import React from 'react';
import './About.css';

function About() {
   return (
      <div className="about-page">
         <div className="about-page-content">
            <h1>About Us</h1>
            <p>
               Our web-powered symptom checker and doctor recommendation system helps you navigate the complexities of your health by providing personalized doctor recommendations, easy-to-use navigation, and detailed information about doctors and hospitals. Our system utilizes advanced algorithms to identify potential diseases based on your symptoms, and we collaborate with hospitals to ensure the accuracy of our data. We also offer features like emergency service details, appointment booking, and real-time ward availability data.
            </p>

            <h2>What We Do</h2>
            <ul>
               <li>
                  <i className="fas fa-check-circle"></i> If you enter the symptom on our website then our system gives some pre-caution and suggests a doctor near you with real-time data of doctors available and bed waiting list.
               </li>
               <li>
                  <i className="fas fa-check-circle"></i> In an emergency situation. It shows the nearest hospital with an emergency alert button which sends an ambulance automatically to the spot.
               </li>
            </ul>
            <h2>Why Choose Us</h2>
        <ul>
          <li>
            <i className="fas fa-check-circle"></i>
                  Empower your health journey with our comprehensive symptom analysis and doctor recommendation system.
          </li>
          <li>
            <i className="fas fa-check-circle"></i> Our advanced algorithm provides accurate symptom analysis, tailored doctor recommendations, and user-friendly navigation. Access detailed doctor and hospital information, real-time ward availability data, and emergency service details
          </li>
        </ul>

            <h2>Contact Us</h2>
            <p>
               Have questions, need assistance, or ready to get assessed. We’re just a click or call away.
            </p>
            <p>
               <i className="fas fa-envelope"></i> Email: healthhelper@gmail.com
            </p>
         </div>
      </div>
   );
}

export default About;
