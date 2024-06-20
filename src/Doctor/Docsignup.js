import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

const Docsignup = () => {
    const onFinish = async (values) => {
        try {
            const response = await axios.post('http://localhost:4000/api/doctors', values);

            if (response.status === 201) {
                console.log('Signup successful:', response.data);
                message.success('Signup successful!');
            } else {
                console.error('Signup failed:', response.data);
                message.error('Signup failed');
            }
        } catch (error) {
            console.error('Error signing up:', error.message);
            message.error('Error signing up');
        }
    };

    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Doctor Signup</h2>
            <Form
                name="doctor_signup"
                onFinish={onFinish}
                layout="vertical"
                initialValues={{
                    experience: '',
                }}
            >
                <Form.Item
                    name="firstname"
                    label="First Name"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                    style={styles.formItem}
                >
                    <Input style={styles.input} />
                </Form.Item>
                <Form.Item
                    name="lastname"
                    label="Last Name"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                    style={styles.formItem}
                >
                    <Input style={styles.input} />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, type: 'email', message: 'Please input a valid email address!' },
                    ]}
                    style={styles.formItem}
                >
                    <Input style={styles.input} />
                </Form.Item>
                <Form.Item
                    name="phonenumber"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                    style={styles.formItem}
                >
                    <Input style={styles.input} />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    style={styles.formItem}
                >
                    <Input.Password style={styles.input} />
                </Form.Item>
                <Form.Item
                    name="reEnterPassword"
                    label="Re-enter Password"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please re-enter your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords do not match!');
                            },
                        }),
                    ]}
                    style={styles.formItem}
                >
                    <Input.Password style={styles.input} />
                </Form.Item>
                <Form.Item
                    name="experience"
                    label="Experience"
                    rules={[{ required: true, message: 'Please select your experience!' }]}
                    style={styles.formItem}
                >
                    <Select onChange={handleChange} style={styles.input}>
                        <Option value="2">2 years</Option>
                        <Option value="3">3 years</Option>
                        <Option value="5">5 years</Option>
                        <Option value="5">more than 5 years</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="specialization"
                    label="Specialization"
                    rules={[{ required: true, message: 'Please input your specialization!' }]}
                    style={styles.formItem}
                >
                    <Input style={styles.input} />
                </Form.Item>
                <Form.Item style={styles.formItem}>
                    <Button type="primary" htmlType="submit" style={styles.button}>
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

const styles = {
    container: {
        marginBottom: '80px',        
marginTop: '100px',
        width: '600px',
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
    formItem: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
    button: {
        width: '50%',
        height: '50%',
       marginLeft: '40px',
        padding: '10px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default Docsignup;
