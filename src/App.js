import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Usersignup from './User/Usersignup';
import Userlogin from './User/Userlogin';
import Docsignup from './Doctor/Docsignup';
import Doclogin from './Doctor/Doclogin';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Symptom from './Pages/Symptom';
import Welcome from './Pages/Welcome';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import GetStarted from './Pages/GetStarted';

import NearbyHospitals from './Components/NearbyHospitals'
import Pharmacy from './Components/Pharmacy'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Medication from './Components/Medication';
import AnotherPage from './Components/AnotherPage';




function App() {
  return (
    <Router>      <Header />

      <Routes>
        <Route path="/usersignup" element={<Usersignup />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/docsignup" element={<Docsignup />} />
        <Route path="/doclogin" element={<Doclogin />} />
        <Route path="/doclogin" element={<Doclogin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/symptom" element={<Symptom />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/vcall" element={<AnotherPage />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/services" element={<Services />} />
        <Route path="/nearbyhospitals" element={< NearbyHospitals/>} />
        <Route path="/pharmacy" element={< Pharmacy/>} />




        </Routes>
        <Footer />

    </Router>
  );
}

export default App;
