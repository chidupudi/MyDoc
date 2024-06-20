// Contact.js

import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    try {
      // Send contact data to the backend
      const response = await axios.post('http://localhost:4000/api/contact', {
        fullName,
        email,
        message,
      });

      if (response.status === 201) {
        console.log('Your responce submitted successfully:', response.data);
        // Add new contact to the list
        setContacts([...contacts, response.data]);
        // Clear form fields
        setFullName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error submitting responce:', error.message);
      alert('Error submitting responce');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {contacts.length > 0 && (
        <div className="contact-list">
          {/* <h2>Contact List</h2> */}
          {/* <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.fullName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      )}
    </div>
  );
};

export default Contact;
