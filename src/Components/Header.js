// Header.js
import React from 'react';
import './Header.css'; // Create a corresponding CSS file for styling
// import logo from '/Users/hemanth/Desktop/Health___Helper/health/src/Images/logodo.jpg';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import the Link component

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Check if the current path is /welcome, /login, or /signup
  const isHeaderVisible = !['/', '/login', '/signup'].includes(pathname);

  if (!isHeaderVisible) {
    // If on /welcome, /login, or /signup, do not render the header
    return null;
  }

  return (
    <header className="header">
      <a href='/'>
        <div className="logo">
          {/* <img src={logo} alt=" " /> */}
        </div>
      </a>
      <nav className="navigation">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="user-buttons">
        <button onClick={() => navigate('/')}>Logout</button>
      </div>
    </header>
  );
}

export default Header;
