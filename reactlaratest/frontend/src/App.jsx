import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // Add other form fields as necessary
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value, // Update form data with the new input
            

        });
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8000/api/form-submit', formData);
        alert('Form submitted successfully');
    } catch (error) {
        if (error.response && error.response.data) {
            // Handle validation errors here
            console.error(error.response.data.errors);
        } else {
            console.error('There was an error submitting the form!', error);
        }
    }
};

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            {/* Add other form fields here */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
