import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Doclogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here (e.g., validate email and password)
    // For simplicity, let's just redirect to DocSignup.js for new users
    if (email && password) {
      navigate('/signup'); // Redirect to signup page
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <br />
      <button onClick={handleLogin} style={styles.button}>Login</button>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '200px',
    marginTop: '100px',
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '80%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Doclogin;
