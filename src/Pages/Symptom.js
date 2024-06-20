import React, { useState } from 'react';
import './Symptom.css';
import axios from 'axios';

const Symptom = () => {
  const [formData, setFormData] = useState({
    gender: '', // Changed to single value (String) instead of array
    age: '',
    symptoms: [], // Array of selected symptoms
    painPercentage: '', // String representation of pain intensity
    duration: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, gender: value });
  };

  const handleSymptomsChange = (e) => {
    const { name, checked } = e.target;
    const updatedSymptoms = checked
      ? [...formData.symptoms, name]
      : formData.symptoms.filter((symptom) => symptom !== name);
    setFormData({ ...formData, symptoms: updatedSymptoms });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/symptom', formData);

      if (response.status === 201) {
        console.log('Form submitted:', response.data);
        // Reset form data after successful submission
        setFormData({
          gender: '',
          age: '',
          symptoms: [],
          painPercentage: '',
          duration: '',
        });
      } else {
        console.error('Form submission failed:', response.data);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div className="symptom-form">
      <form onSubmit={handleSubmit}>
        <h3 className="genderhead">Gender</h3>
        <div className="gender-icons">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div>

        <div className="ageIN">
          <label>
            <h3>Age:</h3>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              min="18"
              max="100"
            />
          </label>
        </div>

        <label>
          <h3>Symptoms:</h3>
          <div className="symptoms">
            <label>
              <input
                type="checkbox"
                name="cold"
                checked={formData.symptoms.includes('cold')}
                onChange={handleSymptomsChange}
              />
              Cold
            </label>
            <label>
              <input
                type="checkbox"
                name="fever"
                checked={formData.symptoms.includes('fever')}
                onChange={handleSymptomsChange}
              />
              Fever
            </label>
            <label>
              <input
                type="checkbox"
                name="headache"
                checked={formData.symptoms.includes('headache')}
                onChange={handleSymptomsChange}
              />
              Headache
            </label>
            <label>
              <input
                type="checkbox"
                name="cough"
                checked={formData.symptoms.includes('cough')}
                onChange={handleSymptomsChange}
              />
              Cough
            </label>
            <label>
              <input
                type="checkbox"
                name="fatigue"
                checked={formData.symptoms.includes('fatigue')}
                onChange={handleSymptomsChange}
              />
              Fatigue
            </label>
            <label>
              <input
                type="checkbox"
                name="nausea"
                checked={formData.symptoms.includes('nausea')}
                onChange={handleSymptomsChange}
              />
              Nausea
            </label>
          </div>
        </label>

        <div className="pain-intensity">
          <label>
            <h3>Pain Intensity:</h3>
            <select
              name="painPercentage"
              value={formData.painPercentage}
              onChange={handleInputChange}
            >
              <option value="">Select Intensity</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
        </div>

        <div className="duration">
          <label>
            <h3>Duration:</h3>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            >
              <option value="">Select Duration</option>
              <option value="day">From a day</option>
              <option value="week">From a week</option>
              <option value="month">From a month</option>
            </select>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Symptom;
