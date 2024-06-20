import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './HomePage.css';

// import img1 from "doc/src/Images/medical-checkups.jpg";
// import img2 from "doc/src/Images/Online-pharmacies-Feature-1024x768.png";
// import img3 from "doc/src/Images/CRP.jpg";
// import img4 from "doc/src/Images/SpecializedCareImage.jpeg";
// import img5 from "doc/src/Images/MentalHealthSupportImage.jpeg";
// import img6 from "doc/src/Images/cardiologist.jpeg";
// import img7 from "doc/src/Images/dentist.jpeg";
// import img8 from "doc/src/Images/physical.webp";
// import img9 from "doc/src/Images/nutrition.jpeg";

const LocationTracker = ({ userId }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            await axios.post('http://localhost:3000/', {
              userId,
              latitude,
              longitude,
            });

            console.log('Location updated successfully');
          } catch (error) {
            console.error('Error updating location:', error);
          }
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
    }
  }, [userId]);

  return null;
};

const HomePage = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId('uniqueUserId'); // Placeholder for user ID, replace it with your logic
  }, []);

  return (
    <div className="homepage">
      <LocationTracker userId={userId} />

      <Carousel autoplay>
        <div className="c-text">
          <div className="cr1">
            <div className="img-text-container">
              {/* <img src={img6} className="crimg6" alt="carousel-img" /> */}
              <div className="text">
                <h3>Cardiologist</h3>
                <p>
                  A cardiologist is a physician who specializes in the study or treatment of heart diseases and heart abnormalities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="c-text">
          <div className="cr2">
            <div className="img-text-container">
              {/* <img src={img7} className="crimg7" alt="carousel-img" /> */}
              <div className="text">
                <h3>Dentist</h3>
                <p>
                  A dentist is a licensed healthcare professional who specializes in the diagnosis, treatment, and prevention of oral issues.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="c-text">
          <div className="cr3">
            <div className="img-text-container">
              {/* <img src={img8} className="crimg8" alt="carousel-img" /> */}
              <div className="text">
                <h3>Physiotherapist</h3>
                <p>
                  A physiotherapist is a healthcare professional who specializes in treating injuries and conditions that impact movement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="c-text">
          <div className="cr4">
            <div className="img-text-container">
              {/* <img src={img9} className="crimg9" alt="carousel-img" /> */}
              <div className="text">
                <h3>Nutritionist</h3>
                <p>
                  A nutritionist is a licensed healthcare professional who assesses clients' dietary needs and food habits to provide comprehensive advice on nutrition.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Add more carousel items as needed */}
      </Carousel>

      <section className="services">
        <div className="Header2">
          <h2>Our Services</h2>
        </div>

        <div className="services-container">
          <Link to="/vcall" className="service-card1">
            <section className="img1">
              {/* <img src={img1} alt="service-img" /> */}
            </section>
            <h3>Instant Video Consultation</h3>
            <p>Book Now.</p>
          </Link>
          <Link to="/medication" className="service-card2">
            <section className="img2">
              {/* <img src={img2} alt="service-img" /> */}
            </section>
            <h3>Basic Medical Advice</h3>
            <p>Know More</p>
          </Link>
          <Link to="/pharmacy" className="service-card3">
          
            <section className="img3">
              {/* <img src={img3} alt="service-img" /> */}
            </section>
            <h3>Pharmacy near you</h3>
            <p>Book A Test Now.</p>
          
          </Link>
          <Link to="/nearbyhospitals" className="service-card4">
            <section className="img4">
              {/* <img src={img4} alt="service-img" /> */}
            </section>
            <h3>Find Doctors Near You</h3>
            <p>Find A Doctor Now.</p>
          </Link>
          <Link to="/symptom" className="service-card5">
            <section className="img5">
              {/* <img src={img5} alt="service-img" /> */}
            </section>
            <h3>Symptoms Analyzer</h3>
            <p>Analyze Now.</p>
          </Link>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;
