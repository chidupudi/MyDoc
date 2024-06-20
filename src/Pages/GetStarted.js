import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import styles from './GetStarted.module.css'; // Import CSS module

const GetStarted = () => {
  return (
    <div className={styles['get-started-container']}>
      <div className={styles['left-container']}>
        <h2>User Login or Signup</h2>
        <p>Welcome to our platform! If you're a user, you can log in or sign up here to access your account.</p>
        <p>Already have an account? Log in to manage your profile, appointments, and more.</p>
        <div className={styles['button-container']}>
          <Link to="/userlogin" className={styles['login-button']}>Login</Link> {/* Use Link for login */}
          <Link to="/usersignup" className={styles['signup-button']}>Signup</Link> {/* Use Link for signup */}
        </div>
      </div>
      <div className={styles['right-container']}>
        <h2>Doctor Login or Signup</h2>
        <p>Are you a doctor? Log in or sign up here to manage your appointments, patients, and practice information.</p>
        <p>New here? Sign up to create your account and start providing medical services online.</p>
        <div className={styles['button-container']}>
          <Link to="/doclogin" className={styles['login-button']}>Login</Link> {/* Use Link for login */}
          <Link to="/docsignup" className={styles['signup-button']}>Signup</Link> {/* Use Link for signup */}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
