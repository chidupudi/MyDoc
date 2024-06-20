import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Userlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        window.location.replace('/home'); 
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Failed to login. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>User Login</h2>
      <form onSubmit={handleLogin}>
        <div style={styles.inputContainer}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
        </div>
        <div style={styles.inputContainer}>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
        </div>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>Login</button>
        </div>
      </form>
      <div style={styles.signupLink}>
        <p>Don't have an account?</p>
        <Link to="/signup" style={styles.signupButton}>Sign Up</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '600px',
    height: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    marginBottom: '100px', // This was previously misspelled as marginbottom
    marginTop: '100px', // This was previously misspelled as marginbottom
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  input: {
    width: '80%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  signupLink: {
    textAlign: 'center',
    marginTop: '20px',
  },
  signupButton: {
    padding: '8px 16px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Userlogin;
