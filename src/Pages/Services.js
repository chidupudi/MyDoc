// Services.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import { Carousel } from 'antd';

// Import your images
// import imga1 from "/Users/hemanth/Desktop/Health___Helper/health/src/Images/services symp.avif";
// import imga2 from "/Users/hemanth/Desktop/Health___Helper/health/src/Images/service near hosp.webp";
// import imga3 from "/Users/hemanth/Desktop/Health___Helper/health/src/Images/service vid img.jpeg";

const servicesData = [
  {
    id: 1,
    title: 'Symptom analyzer: ',
    description: 'A symptom analyzer is an online tool that assists in identifying potential causes of your symptoms. It presents a list of possible conditions based on a series of questions about your symptoms. Symptom analyzers can help you understand your symptoms, prepare for a doctors appointment, and make informed healthcare decisions. However, they are not a substitute for professional medical advice. If you have concerns about your symptoms, consult a doctor for a diagnosis and treatment plan.',
    // imageUrl: imga1, // Replace with your imported image
  },
  {
    id: 2,
    title: 'Find a doctor near you',
    description: ' feature is a useful tool for users to search and get suggestions for healthcare providers in their area based on their specific needs. Users can filter the search results by specialty, location, insurance, and other criteria. Users can then view more information about each doctor, such as their education, experience, and patient reviews. This feature can help users find new doctors or get in touch with existing ones.',
    // imageUrl: imga2, // Replace with your imported image
  },
  {
    id: 3,
    title: 'Instant video consultation',
    description: 'Instant video consultation, also known as telemedicine, allows patients to connect with doctors via video call for medical advice from the comfort of their own home. This eliminates the need for in-person consultations and is particularly beneficial for non-emergency situations such as follow-up appointments, managing chronic conditions, addressing minor illnesses, and seeking mental health support.',
    // imageUrl: imga3, // Replace with your imported image
  },
  // Add more services as needed
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    // Define the paths you want to redirect to
    const paths = {
      1: '/symptom',
      2: '/nearbyhospitals',
      3: '/symptom', // Adjust this path as needed
    };

    // Get the path based on the serviceId
    const path = paths[serviceId];

    // Navigate to the specified path
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="services-container">
      <div className="services-list">
        {servicesData.map(service => (
          <div
            className="service-card"
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
          >
            <div className="service-description">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div className="service-image">
              <img src={service.imageUrl} alt={`Service ${service.id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
