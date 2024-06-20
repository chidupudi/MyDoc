// Medication.js
import React, { useState } from 'react';
import './Medication.css';

const symptomData = [
  { symptom: 'Headache', medication: ['Acetaminophen', 'Ibuprofen'] },
  { symptom: 'Fever', medication: ['Acetaminophen', 'Ibuprofen'] },
  { symptom: 'Cough', medication: ['Cough syrups', 'Expectorants'] },
  { symptom: 'Sore Throat', medication: ['Throat lozenges', 'Analgesic sprays'] },
  { symptom: 'Nausea', medication: ['Antiemetics'] },
  { symptom: 'Vomiting', medication: ['Antiemetics'] },
  { symptom: 'Diarrhea', medication: ['Antidiarrheals'] },
  { symptom: 'Constipation', medication: ['Laxatives'] },
  { symptom: 'Fatigue', medication: ['Rest', 'Proper nutrition'] },
  { symptom: 'Muscle Aches', medication: ['NSAIDs (Nonsteroidal anti-inflammatory drugs)'] },
  { symptom: 'Joint Pain', medication: ['NSAIDs'] },
  { symptom: 'Back Pain', medication: ['NSAIDs', 'Muscle relaxants'] },
  { symptom: 'Shortness of Breath', medication: ['Bronchodilators', 'Inhaled corticosteroids'] },
  { symptom: 'Chest Pain', medication: ['Nitroglycerin (for angina)', 'Aspirin'] },
  { symptom: 'Dizziness', medication: ['Antihistamines', 'Antiemetics'] },
  { symptom: 'Insomnia', medication: ['Sleep aids', 'Sedatives'] },
  { symptom: 'Anxiety', medication: ['Antidepressants', 'Benzodiazepines'] },
  { symptom: 'Depression', medication: ['Antidepressants'] },
  { symptom: 'Stomach Pain', medication: ['Antacids', 'Acid reducers'] },
  { symptom: 'Heartburn', medication: ['Antacids', 'Acid reducers'] },
  { symptom: 'Rash', medication: ['Antihistamines', 'Topical corticosteroids'] },
  { symptom: 'Itching', medication: ['Antihistamines', 'Topical corticosteroids'] },
  { symptom: 'Allergies', medication: ['Antihistamines'] },
  { symptom: 'Runny Nose', medication: ['Antihistamines', 'Decongestants'] },
  { symptom: 'Sinus Pain', medication: ['Decongestants', 'Nasal corticosteroids'] },
  { symptom: 'Frequent Urination', medication: ['Anticholinergics'] },
  { symptom: 'Urinary Urgency', medication: ['Anticholinergics'] },
  { symptom: 'Thirst', medication: ['Increased fluid intake'] },
  { symptom: 'Weight Loss', medication: ['Addressing underlying causes', 'Nutritional support'] },
  { symptom: 'Weight Gain', medication: ['Addressing underlying causes', 'Dietary changes'] },
];

const Medication = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSymptoms = symptomData.filter((symptom) =>
    symptom.symptom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="medication-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a symptom..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="medication-list">
        {filteredSymptoms.map((symptom) => (
          <div className="medication-card" key={symptom.symptom}>
            <h2>{symptom.symptom}</h2>
            <p>
              <strong>Medication:</strong> {symptom.medication.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medication;
