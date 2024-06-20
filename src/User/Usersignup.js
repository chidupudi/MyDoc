import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';

const Usersignup = () => {
    const navigate = useNavigate();

    // State to manage form data
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        reEnterPassword: '',
        phoneNumber: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/user', formData);

            if (response.status === 201) {
                console.log('Signup successful:', response.data);
                message.success('Signup successful!');
                // Redirect to login page after successful signup
                navigate('/login');
            } else {
                console.error('Signup failed:', response.data);
                message.error('Signup failed');
            }
        } catch (error) {
            console.error('Error signing up:', error.message);
            message.error('Error signing up');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.inputContainer}>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={formData.firstname}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputContainer}>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={formData.lastname}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputContainer}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputContainer}>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputContainer}>
                    <input
                        type="password"
                        name="reEnterPassword"
                        placeholder="Re-enter Password"
                        value={formData.reEnterPassword}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputContainer}>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.buttonContainer}>
                    <button type="submit" style={styles.button}>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

const styles = {
    container: {
        width: '600px',
marginBottom: '200px',        
marginTop: '100px',
marginLeft: '400px',

        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    inputContainer: {
        marginBottom: '15px',
    },
    input: {
        width: '80%', // You can adjust the width here, for example, '200px'
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
};

export default Usersignup;
